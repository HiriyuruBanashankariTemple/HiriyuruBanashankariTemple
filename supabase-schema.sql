create table if not exists public.donations (
  id uuid primary key,
  donor_name text not null,
  donor_phone text not null,
  amount_paise integer not null check (amount_paise > 0),
  currency text not null default 'INR',
  cashfree_order_id text unique,
  cashfree_payment_id text unique,
  status text not null default 'created',
  receipt_no text unique,
  receipt_url text,
  whatsapp_consent boolean not null default false,
  public_name_consent boolean not null default false,
  whatsapp_sent_at timestamptz,
  whatsapp_error text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

-- Safe additions for an existing donations table from the earlier Razorpay starter.
alter table public.donations add column if not exists cashfree_order_id text;
alter table public.donations add column if not exists cashfree_payment_id text;
alter table public.donations add column if not exists whatsapp_consent boolean not null default false;
alter table public.donations add column if not exists public_name_consent boolean not null default false;
alter table public.donations add column if not exists whatsapp_sent_at timestamptz;
alter table public.donations add column if not exists whatsapp_error text;
alter table public.donations add column if not exists receipt_no text;
alter table public.donations add column if not exists receipt_url text;
alter table public.donations add column if not exists paid_at timestamptz;
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'donations' and column_name = 'razorpay_order_id'
  ) then
    alter table public.donations alter column razorpay_order_id drop not null;
  end if;
end $$;
create unique index if not exists donations_cashfree_order_id_key on public.donations(cashfree_order_id) where cashfree_order_id is not null;
create unique index if not exists donations_cashfree_payment_id_key on public.donations(cashfree_payment_id) where cashfree_payment_id is not null;

alter table public.donations enable row level security;
-- No public policies: only backend service-role key can access donation records.
insert into storage.buckets (id, name, public)
values ('donation-receipts', 'donation-receipts', false)
on conflict (id) do nothing;
