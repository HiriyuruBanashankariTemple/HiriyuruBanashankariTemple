-- Multi-Karyakarta administrator access scaffold.
-- Run after supabase-schema.sql. Backend service-role only; never expose service-role key in browser.
create table if not exists public.temple_admins (
  id uuid primary key default gen_random_uuid(),
  display_name text not null,
  whatsapp_number text not null unique,
  role text not null check (role in ('super_admin','admin')),
  is_active boolean not null default true,
  invited_at timestamptz,
  last_login_at timestamptz,
  created_at timestamptz not null default now()
);

-- Store only SHA-256 hashes of random, single-use login tokens. Raw tokens are sent once via WhatsApp.
create table if not exists public.admin_login_tokens (
  id uuid primary key default gen_random_uuid(),
  admin_id uuid not null references public.temple_admins(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  consumed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.donation_review_audit (
  id uuid primary key default gen_random_uuid(),
  donation_id uuid not null references public.donations(id) on delete restrict,
  admin_id uuid not null references public.temple_admins(id) on delete restrict,
  action text not null check (action in ('approved','rejected','flagged')),
  note text,
  created_at timestamptz not null default now()
);

create index if not exists admin_login_tokens_expiry_idx on public.admin_login_tokens(expires_at);
create index if not exists donation_review_audit_donation_idx on public.donation_review_audit(donation_id, created_at desc);

alter table public.temple_admins enable row level security;
alter table public.admin_login_tokens enable row level security;
alter table public.donation_review_audit enable row level security;
-- Intentionally no anon/authenticated policies. Access must go through authenticated server endpoints.


-- Initial three Karyakarta roster, based on the details supplied by the Trust.
-- Review the Super Admin assignment and confirm ownership of each number before running.
-- This inserts records only; it does NOT activate WhatsApp login or send messages.
insert into public.temple_admins (display_name, whatsapp_number, role, is_active)
values
  ('Vinay', '919206882639', 'super_admin', true),
  ('Bhaskar', '919113994100', 'admin', true),
  ('Sundar Kumar', '919844765434', 'admin', true)
on conflict (whatsapp_number) do update set
  display_name = excluded.display_name,
  role = excluded.role;
