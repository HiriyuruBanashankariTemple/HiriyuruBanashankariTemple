(() => {
  const UPI_ID = "hiriyurtempl@indianbk";
  const PAYEE = "HIRIYUR SRI BANASHANKARI TEMPLE TRUST";
  const API_BASE = window.DONATION_API_BASE || ""; // Set to the deployed Vercel API base URL after backend setup.

  const form = document.getElementById("donationForm");
  if (!form) return;
  const amountInput = document.getElementById("donationAmount");
  const status = document.getElementById("donationStatus");
  const payButton = document.getElementById("donationPayBtn");
  const upiLink = document.getElementById("upiPayLink");
  const amountButtons = document.querySelectorAll(".donation-amount");

  function updateUpiLink() {
    const amount = Number(amountInput.value);
    const params = new URLSearchParams({ pa: UPI_ID, pn: PAYEE, cu: "INR" });
    if (Number.isFinite(amount) && amount > 0) params.set("am", amount.toFixed(2));
    params.set("tn", "Temple Donation");
    upiLink.href = "upi://pay?" + params.toString();
  }

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      amountInput.value = button.dataset.amount;
      amountButtons.forEach((b) => b.classList.toggle("is-active", b === button));
      updateUpiLink();
    });
  });
  amountInput.addEventListener("input", () => {
    amountButtons.forEach((b) => b.classList.toggle("is-active", Number(b.dataset.amount) === Number(amountInput.value)));
    updateUpiLink();
  });
  updateUpiLink();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const donor = {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      amount: Math.round(Number(form.elements.amount.value) * 100) / 100,
      whatsappConsent: Boolean(form.elements.whatsappConsent.checked)
    };
    if (!donor.amount || donor.amount <= 0) return;

    if (!API_BASE) {
      updateUpiLink();
      status.textContent = document.documentElement.lang === "en"
        ? "Your UPI app will open. This direct bank QR/UPI payment is not automatically verified by the website yet, so an automatic receipt cannot be issued until the secure payment gateway is configured."
        : "ನಿಮ್ಮ UPI ಆಪ್ ತೆರೆಯುತ್ತದೆ. ಈ ನೇರ ಬ್ಯಾಂಕ್ QR/UPI ಪಾವತಿಯನ್ನು ವೆಬ್‌ಸೈಟ್ ಇನ್ನೂ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ದೃಢೀಕರಿಸುವುದಿಲ್ಲ. ಸುರಕ್ಷಿತ ಪಾವತಿ ಗೇಟ್‌ವೇ ಹೊಂದಿಸಿದ ನಂತರವೇ ಸ್ವಯಂಚಾಲಿತ ರಸೀದಿ ನೀಡಬಹುದು.";
      window.location.href = upiLink.href;
      return;
    }

    payButton.disabled = true;
    status.textContent = document.documentElement.lang === "en" ? "Creating secure payment..." : "ಸುರಕ್ಷಿತ ಪಾವತಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...";
    try {
      const response = await fetch(`${API_BASE.replace(/\/$/, "")}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donor)
      });
      const order = await response.json();
      if (!response.ok) throw new Error(order.error || "Could not create payment order.");

      const checkout = new Razorpay({
        key: order.key,
        amount: order.amount,
        currency: "INR",
        name: PAYEE,
        description: "Temple Donation",
        order_id: order.orderId,
        prefill: { name: donor.name, contact: donor.phone },
        notes: { donationId: order.donationId },
        theme: { color: "#792b20" },
        handler: async (result) => {
          const verified = await fetch(`${API_BASE.replace(/\/$/, "")}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...result, donationId: order.donationId })
          });
          const verification = await verified.json();
          status.textContent = verification.message || (document.documentElement.lang === "en"
            ? "Payment submitted. Your receipt will be sent after confirmation."
            : "ಪಾವತಿ ಸಲ್ಲಿಸಲಾಗಿದೆ. ದೃಢೀಕರಣದ ನಂತರ ರಸೀದಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ.");
        },
        modal: { ondismiss: () => { payButton.disabled = false; } }
      });
      checkout.on("payment.failed", (failure) => {
        status.textContent = failure.error?.description || "Payment failed. Please try again.";
        payButton.disabled = false;
      });
      checkout.open();
    } catch (error) {
      status.textContent = error.message || "Payment could not be started.";
      payButton.disabled = false;
    }
  });
})();
