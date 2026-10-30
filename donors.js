const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { data, error } = await supabase.from('donations').select('donor_name,amount_paise,paid_at').eq('status','receipted').eq('public_name_consent',true).order('paid_at',{ascending:false}).limit(50);
    if (error) throw error;
    return res.status(200).json({ donors: (data || []).map(d => ({ name: d.donor_name, amount: Number(d.amount_paise)/100, date: d.paid_at })) });
  } catch (e) { console.error('donor list failed',e); return res.status(500).json({ error: 'Unable to load donor list' }); }
};
