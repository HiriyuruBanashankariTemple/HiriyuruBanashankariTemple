const crypto = require("crypto");
const PDFDocument = require("pdfkit");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

module.exports.config = { api: { bodyParser: false } };

async function readRaw(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

function makeReceipt(donation, paymentId, receiptNo) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 54 });
    const chunks = [];
    doc.on("data", c => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.fillColor("#792b20").fontSize(19).text("HIRIYURU SHRI BANASHANKARI TEMPLE TRUST (REGD.)", { align: "center" });
    doc.moveDown(.4).fillColor("#9a6a22").fontSize(12).text("DONATION RECEIPT", { align: "center", characterSpacing: 1.5 });
    doc.moveDown(1).strokeColor("#d6a544").lineWidth(1).moveTo(54, doc.y).lineTo(541, doc.y).stroke();
    doc.moveDown(1);
    const rows = [
      ["Receipt No.", receiptNo],
      ["Receipt Date", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
      ["Donor Name", donation.donor_name],
      ["Mobile Number", donation.donor_phone],
      ["Donation Amount", `INR ${(donation.amount_paise / 100).toFixed(2)}`],
      ["Payment ID", paymentId],
      ["Payment Mode", "UPI / Online"],
      ["Beneficiary", "Hiriyuru Shri Banashankari Temple Trust (Regd.)"]
    ];
    rows.forEach(([label, value]) => {
      const y = doc.y;
      doc.fillColor("#6d6258").fontSize(10).text(label, 64, y, { width: 145 });
      doc.fillColor("#2f2925").fontSize(11).text(String(value), 220, y, { width: 310 });
      doc.moveDown(.8);
    });
    doc.moveDown(1).fillColor("#792b20").fontSize(11).text("Thank you for your generous contribution.", { align: "center" });
    doc.moveDown(.4).fillColor("#6d6258").fontSize(9).text("This is a computer-generated receipt issued against a payment confirmed by the payment gateway.", { align: "center" });
    doc.end();
  });
}

async function sendWhatsAppDocument(to, mediaId, filename, caption) {
  if (!to) return;
  const url = `https://graph.facebook.com/${process.env.WHATSAPP_API_VERSION || "v23.0"}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "template",
      template: {
        name: process.env.WHATSAPP_RECEIPT_TEMPLATE,
        language: { code: process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en" },
        components: [
          { type: "header", parameters: [{ type: "document", document: { id: mediaId, filename } }] },
          { type: "body", parameters: [
            { type: "text", text: caption },
            { type: "text", text: filename }
          ] }
        ]
      }
    })
  });
  if (!response.ok) throw new Error(`WhatsApp send failed: ${await response.text()}`);
}

async function uploadWhatsAppMedia(pdf, filename) {
  const form = new FormData();
  form.append("messaging_product", "whatsapp");
  form.append("file", new Blob([pdf], { type: "application/pdf" }), filename);
  const url = `https://graph.facebook.com/${process.env.WHATSAPP_API_VERSION || "v23.0"}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/media`;
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}` },
    body: form
  });
  const data = await response.json();
  if (!response.ok) throw new Error(`WhatsApp media upload failed: ${JSON.stringify(data)}`);
  return data.id;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const raw = await readRaw(req);
  const signature = req.headers["x-razorpay-signature"];
  const expected = crypto.createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET).update(raw).digest("hex");
  if (!signature || signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return res.status(400).send("Invalid webhook signature");
  }

  try {
    const event = JSON.parse(raw.toString("utf8"));
    if (event.event !== "payment.captured") return res.status(200).json({ received: true, ignored: event.event });

    const payment = event.payload?.payment?.entity;
    if (!payment || payment.status !== "captured" || payment.currency !== "INR") return res.status(400).send("Payment not captured");
    const orderId = payment.order_id;
    if (!orderId) return res.status(400).send("Missing order reference");

    const { data: donation, error } = await supabase.from("donations").select("*").eq("razorpay_order_id", orderId).single();
    if (error || !donation) throw new Error("Donation record not found");
    if (Number(payment.amount) !== Number(donation.amount_paise) || payment.currency !== donation.currency) {
      return res.status(400).send("Payment amount/currency does not match donation record");
    }

    let receiptNo = donation.receipt_no;
    let pdf;
    let filename;
    if (donation.status === "receipted" && receiptNo) {
      filename = `${receiptNo}.pdf`;
      const { data: savedPdf, error: downloadError } = await supabase.storage.from("donation-receipts").download(filename);
      if (downloadError) throw downloadError;
      pdf = Buffer.from(await savedPdf.arrayBuffer());
    } else {
      receiptNo = `BS-${new Date().getFullYear()}-${String(Date.now()).slice(-8)}`;
      filename = `${receiptNo}.pdf`;
      pdf = await makeReceipt(donation, payment.id, receiptNo);
      const { error: uploadError } = await supabase.storage.from("donation-receipts").upload(filename, pdf, {
        contentType: "application/pdf", upsert: true
      });
      if (uploadError) throw uploadError;

      const { error: updateError } = await supabase.from("donations").update({
        status: "receipted", razorpay_payment_id: payment.id, receipt_no: receiptNo,
        paid_at: new Date().toISOString()
      }).eq("id", donationId);
      if (updateError) throw updateError;
    }

    // Send PDF to the donor (with consent) and to each configured Karyakarta individually.
    // Add country code without '+' in the env list, e.g. 919876543210, comma-separated.
    if (process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
      const mediaId = await uploadWhatsAppMedia(pdf, filename);
      const caption = `Donation receipt ${receiptNo} | INR ${(donation.amount_paise / 100).toFixed(2)} | Thank you.`;
      if (donation.whatsapp_consent) {
        await sendWhatsAppDocument(`91${donation.donor_phone}`, mediaId, filename, caption);
      }
      const admins = (process.env.KARYAKARTA_WHATSAPP_NUMBERS || "").split(",").map(x => x.trim()).filter(Boolean);
      for (const admin of admins) await sendWhatsAppDocument(admin, mediaId, filename, caption);
      await supabase.from("donations").update({ whatsapp_sent_at: new Date().toISOString(), whatsapp_error: null }).eq("id", donationId);
    }

    return res.status(200).json({ received: true, receiptNo });
  } catch (e) {
    console.error("webhook processing failed", e);
    return res.status(500).send("Webhook processing failed");
  }
};
