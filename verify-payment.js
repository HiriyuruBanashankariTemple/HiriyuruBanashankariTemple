const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { orderId } = req.body || {};
    if (!orderId) return res.status(400).json({ error: 'Missing order ID.' });
    const base = process.env.CASHFREE_ENV === 'production' ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
    const response = await fetch(`${base}/orders/${encodeURIComponent(orderId)}/payments`, { headers: {
      'x-client-id': process.env.CASHFREE_APP_ID, 'x-client-secret': process.env.CASHFREE_SECRET_KEY,
      'x-api-version': process.env.CASHFREE_API_VERSION || '2023-08-01'
    }});
    const payments = await response.json();
    if (!response.ok) throw new Error(`Cashfree status error: ${JSON.stringify(payments)}`);
    const paid = Array.isArray(payments) && payments.some(p => p.payment_status === 'SUCCESS');
    return res.status(200).json({ verified: paid, message: paid ? 'Payment confirmed. Your PDF receipt will be sent after the secure webhook is processed.' : 'Payment is not yet confirmed. Please wait a moment before retrying.' });
  } catch (e) {
    console.error('verify-payment failed', e);
    return res.status(500).json({ error: 'Unable to verify payment status right now.' });
  }
};
