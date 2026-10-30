const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
module.exports = async (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  if (req.method !== 'GET') return res.status(405).json({error:'Method not allowed'});
  try {
    const orderId = String(req.query.order_id || '');
    if (!/^bs_[a-f0-9]{24}$/.test(orderId)) return res.status(400).json({error:'Invalid receipt reference'});
    const {data: row,error} = await supabase.from('donations').select('status,receipt_no').eq('cashfree_order_id',orderId).single();
    if(error || !row || row.status !== 'receipted' || !row.receipt_no) return res.status(404).json({error:'Receipt is not ready yet'});
    const {data,error:signError} = await supabase.storage.from('donation-receipts').createSignedUrl(`${row.receipt_no}.pdf`,300);
    if(signError) throw signError;
    return res.status(200).json({receiptNo:row.receipt_no,url:data.signedUrl});
  } catch(e) { console.error('receipt link failed',e); return res.status(500).json({error:'Unable to prepare receipt download'}); }
};
