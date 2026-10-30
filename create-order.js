const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { name, phone, amount, whatsappConsent, publicName } = req.body || {};
    const value = Number(amount);
    if (!name || !/^[6-9]\d{9}$/.test(String(phone)) || !Number.isFinite(value) || value < 1 || value > 1000000) {
      return res.status(400).json({ error: 'Enter a valid name, 10-digit mobile number and donation amount.' });
    }
    const donationId = crypto.randomUUID();
    const orderId = `bs_${donationId.replace(/-/g, '').slice(0, 24)}`;
    const paise = Math.round(value * 100);
    const base = process.env.CASHFREE_ENV === 'production' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
    const response = await fetch(`${base}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': process.env.CASHFREE_APP_ID,
        'x-client-secret': process.env.CASHFREE_SECRET_KEY,
        'x-api-version': process.env.CASHFREE_API_VERSION || '2023-08-01'
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: paise / 100,
        order_currency: 'INR',
        customer_details: { customer_id: donationId, customer_name: String(name).slice(0, 100), customer_phone: String(phone) },
        order_meta: { return_url: `${process.env.SITE_URL}/?donation_status=return&order_id=${orderId}`, notify_url: `${process.env.API_BASE_URL}/api/webhook` },
        order_note: 'Donation to Hiriyuru Shri Banashankari Temple Trust'
      })
    });
    const order = await response.json();
    if (!response.ok || !order.payment_session_id) throw new Error(`Cashfree order error: ${JSON.stringify(order)}`);
    const { error } = await supabase.from('donations').insert({
      id: donationId, donor_name: String(name).slice(0, 100), donor_phone: String(phone), amount_paise: paise,
      currency: 'INR', cashfree_order_id: orderId, status: 'created', whatsapp_consent: whatsappConsent === true, public_name_consent: publicName === true
    });
    if (error) throw error;
    return res.status(200).json({ paymentSessionId: order.payment_session_id, orderId, donationId, environment: process.env.CASHFREE_ENV === 'production' ? 'production' : 'sandbox' });
  } catch (e) {
    console.error('Cashfree create-order failed', e);
    return res.status(500).json({ error: 'Unable to create donation payment. Please try again.' });
  }
};
