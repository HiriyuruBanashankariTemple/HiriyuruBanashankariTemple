# Hiriyuru Shri Banashankari Temple — Cashfree + WhatsApp PDF receipts

## What this starter does
- Kannada/English donation form with the Trust UPI ID and supplied QR fallback.
- Optional donor-name publication consent and a public donor wall showing only opted-in names and amounts.
- Payment return page with verified receipt number and a short-lived PDF download link.
- Selected blessing: “ಶ್ರೀ ಬನಶಂಕರಿ ಅಮ್ಮನವರ ಕೃಪೆ ಸದಾ ಇರಲಿ.”
- Cashfree hosted checkout for online payments.
- Server-side payment status lookup and signed webhook verification.
- Creates a PDF receipt only after a successful Cashfree payment webhook.
- Stores PDFs in a private Supabase Storage bucket.
- Sends the PDF to the donor (only if WhatsApp consent was given) and to each configured Karyakarta number individually.

## Required accounts and approvals
1. Cashfree merchant account approved for the Temple Trust; use the Trust's legal name, PAN/KYC and Trust bank account for settlement. Confirm current pricing/offer and donation-category eligibility directly with Cashfree.
2. Vercel project for the server-side API. GitHub Pages alone cannot run the secure payment API. The static website may remain on GitHub Pages.
3. Supabase project for the donation records and private receipt storage. Run `supabase-schema.sql` once (including the `public_name_consent` column).
4. Meta WhatsApp Business Platform / Cloud API, a registered sending phone number, access token and an approved template with a DOCUMENT header and two BODY text parameters.

## Setup
1. Deploy this folder to Vercel.
2. In Vercel Project Settings → Environment Variables, set all values from `.env.example`. Start with `CASHFREE_ENV=sandbox`. Never put Cashfree secret or Supabase service-role key in browser code or GitHub.
3. Set `SITE_URL`, `API_BASE_URL` and `ALLOWED_ORIGIN` to the exact deployed origins.
4. Copy `donation-config.example.js` to `donation-config.js`, set the API URL, and publish the static site.
5. The donor wall is populated by `/api/donors`; receipt downloads use `/api/receipt?order_id=...` and are available only after webhook processing.
6. In Cashfree dashboard, configure webhook URL `https://YOUR_VERCEL_API_DOMAIN/api/webhook` and subscribe to payment success events. Use the Cashfree client secret for webhook signature validation as specified by Cashfree.
7. Configure the Meta WhatsApp template named by `WHATSAPP_RECEIPT_TEMPLATE`. Set `KARYAKARTA_WHATSAPP_NUMBERS` as comma-separated full international numbers without `+` (example format `919876543210`).
8. Test end-to-end in Cashfree sandbox, including donor WhatsApp consent and Karyakarta delivery. Only then request/enable production credentials.

## Important
- Direct QR/UPI fallback payments are not automatically verified by this site. They cannot trigger an automatic receipt unless the Trust separately reconciles the bank credit.
- Donor receipt delivery is conditional on consent. Karyakarta delivery is one-to-one to the configured phone numbers, not a WhatsApp group post.
- Group messaging is not included because Meta group messaging access is restricted and account eligibility must be confirmed.
- The included PDF receipt is currently a basic English receipt; the on-page success message is bilingual. Kannada PDF typography requires embedding a suitable Noto Sans Kannada font before production. Verify the Trust's registered legal name, address, receipt numbering, registration/PAN details and wording with trustees/accountant before going live. Do not claim 80G/tax exemption unless the Trust has valid approval.
- WhatsApp template approval and Cashfree merchant onboarding are external steps; this code package is not a live payment system until all credentials, approvals and deployment are complete.
