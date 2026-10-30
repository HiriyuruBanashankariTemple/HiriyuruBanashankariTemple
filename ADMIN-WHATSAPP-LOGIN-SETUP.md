# Three Karyakarta accounts — WhatsApp secure-link design

## Confirmed access plan
- 3 individual WhatsApp numbers.
- Vinay is the initial Super Admin; Bhaskar and Sundar Kumar are Admins. This role assignment follows the order supplied by the Trust and can be changed by the Trust before deployment.
- Login is via an individual, short-lived, single-use link delivered to the registered WhatsApp number.
- Donation approval remains inside the authenticated website dashboard, never by replying to a WhatsApp message.

## Security requirements for implementation
1. The Trust supplies and confirms all five phone numbers and the five names. Store numbers in E.164 format (for India, `91` followed by the 10-digit mobile number; no `+` in Meta API recipient fields).
2. A server-only endpoint creates a cryptographically random token with at least 256 bits of entropy. Store only its SHA-256 hash in `admin_login_tokens`.
3. Link expiry should be 10 minutes; token must be single-use and consumed atomically on successful exchange.
4. Send the link only to the matching registered number using an approved Meta WhatsApp Business template. Template type/content and URL-button approval must be confirmed in the Trust's Meta Business account before activation.
5. Exchange the token server-side for a secure session cookie (`HttpOnly`, `Secure`, `SameSite=Lax`) with short session lifetime and rotation. Never put long-lived credentials in localStorage.
6. Rate-limit link creation and token attempts; invalidate outstanding links when an admin is disabled or their number changes.
7. Enforce role checks on every server endpoint. Only Super Admin can invite, disable or change admin roles. All approvals/rejections must write to `donation_review_audit`.
8. A donation receipt is generated only after the UTR/payment has been reconciled against the Trust's bank records and an admin approves it. Reject duplicate UTRs and require a second review for corrections/reversals if desired.

## Database setup
Run `admin-auth-schema.sql` in the Supabase SQL editor after `supabase-schema.sql`.

## Required setup before login links can be sent
- Supabase project and server-only service-role key configured in Vercel.
- Meta WhatsApp Business Platform configured, sender phone number registered, access token stored server-side, and an approved template suitable for sending a secure login link.
- The three Karyakarta names and WhatsApp numbers confirmed by the Trust.
- Public site and API domains configured, HTTPS enabled, and admin endpoints deployed and security-tested.

## Important status
This file and SQL are the administrator-access design/schema scaffold. It does not create active accounts or send login links by itself. Do not publish an admin login page or accept UTR approvals until the server-side token/session endpoints, role enforcement, audit logging and WhatsApp template have been implemented and tested.

## Initial administrator roster (not activated)

| Name | WhatsApp number (international format) | Role |
|---|---|---|
| Vinay | 919206882639 | Super Admin |
| Bhaskar | 919113994100 | Admin |
| Sundar Kumar | 919844765434 | Admin |

These are proposed seed records only. They become usable only after the Trust deploys and tests the server-side login-link flow and confirms that each number belongs to the named Karyakarta. No WhatsApp message or login link has been sent.
