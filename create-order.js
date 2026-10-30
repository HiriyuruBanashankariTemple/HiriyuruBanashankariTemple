const Razorpay = require("razorpay");
const { createClient } = require("@supabase/supabase-js");
const crypto = require("crypto");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, phone, amount, whatsappConsent } = req.body || {};
    if (!name || !/^[6-9]\d{9}$/.test(String(phone)) || !Number.isFinite(Number(amount)) || Number(amount) < 1 || Number(amount) > 1000000 || whatsappConsent !== true) {
      return res.status(400).json({ error: "Enter a valid name, 10-digit mobile number and donation amount." });
    }
    const donationId = crypto.randomUUID();
    const paise = Math.round(Number(amount) * 100);
    const order = await razorpay.orders.create({
      amount: paise, currency: "INR", receipt: donationId.slice(0, 40),
      notes: { donation_id: donationId, donor_name: String(name).slice(0, 100), donor_phone: String(phone) }
    });
    const { error } = await supabase.from("donations").insert({
      id: donationId, donor_name: String(name).slice(0, 100), donor_phone: String(phone),
      amount_paise: paise, currency: "INR", razorpay_order_id: order.id, status: "created",
      whatsapp_consent: true
    });
    if (error) throw error;
    return res.status(200).json({ key: process.env.RAZORPAY_KEY_ID, orderId: order.id, amount: order.amount, donationId });
  } catch (e) {
    console.error("create-order failed", e);
    return res.status(500).json({ error: "Unable to create donation payment. Please try again." });
  }
};
