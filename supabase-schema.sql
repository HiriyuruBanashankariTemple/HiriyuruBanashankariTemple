create table if not exists public.donations (
  id uuid primary key,
  donor_name text not null,
  donor_phone text not null,
  amount_paise integer not null check (amount_paise > 0),
  currency text not null default 'INR',
  razorpay_order_id text unique not null,
  razorpay_payment_id text unique,
  status text not null default 'created',
  receipt_no text unique,
  receipt_url text,
  whatsapp_consent boolean not null default false,
  whatsapp_sent_at timestamptz,
  whatsapp_error text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.donations enable row level security;
-- No public policies: only the backend service-role key can access donation records.

insert into storage.buckets (id, name, public)
values ('donation-receipts', 'donation-receipts', false)
on conflict (id) do nothing;
