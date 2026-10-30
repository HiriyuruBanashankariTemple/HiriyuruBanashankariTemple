# Hiriyuru Shri Banashankari Temple — Donation integration

## What is included
- Donation section in Kannada and English (Kannada default).
- Cropped bank QR poster supplied by the Trust.
- UPI intent link to `hiriyurtempl@indianbk` with donor-entered amount.
- Optional Razorpay Checkout backend starter.
- Payment-captured webhook that creates a PDF receipt, stores it in Supabase Storage, and can send it to the donor and configured Karyakarta numbers individually.

## Important current limitation
The QR/UPI intent link is a direct bank payment. A static UPI QR or `upi://` link does **not** notify this website that money arrived. Therefore, direct UPI payments cannot trigger an automatic verified receipt by themselves. Automatic receipts require an approved merchant payment gateway and webhook. The Razorpay backend is a starter and is NOT live until credentials and hosting are configured.

## Deploying the website and backend
1. Create/obtain a Razorpay merchant account for the Temple Trust and complete its bank/KYC verification. Confirm the settlement bank account is the Trust's Indian Bank account.
2. Create a Supabase project. Run `supabase-schema.sql` in its SQL editor.
3. Create a Vercel project from this repository. Add the environment variables in `.env.example` in Vercel Project Settings > Environment Variables. Never put secret keys in HTML/JS or GitHub.
4. Deploy the Vercel project. Set `ALLOWED_ORIGIN` to the deployed website URL. Copy `donation-config.example.js` to `donation-config.js`, replace the placeholder with your Vercel deployment origin, and commit that non-secret config file. Keep the site front end on GitHub Pages if preferred; the donation API runs on Vercel.
5. In Razorpay Dashboard, configure a webhook URL: `https://YOUR_VERCEL_DOMAIN/api/webhook`, with event `payment.captured`, and the same webhook secret in Vercel.
6. Test in Razorpay Test Mode before enabling Live Mode. Make a small real donation only after test verification.

## WhatsApp receipt delivery
- Set up Meta WhatsApp Cloud API and an approved WhatsApp message template named in `WHATSAPP_RECEIPT_TEMPLATE`. The template must have a DOCUMENT header and two BODY text parameters. Submit it for Meta approval before live use.
- Configure the donor's number and Karyakarta recipients in `KARYAKARTA_WHATSAPP_NUMBERS`. This sends the receipt PDF individually to each number.
- Sending to an existing WhatsApp group is not implemented by this starter. Meta Groups API availability is restricted/eligibility-based and must be confirmed for the Trust's WhatsApp Business account. Until approved group messaging is confirmed, this setup sends the receipt PDF individually to each configured Karyakarta number.
- Obtain donor consent for WhatsApp receipt delivery and store only necessary donor details.

## Before going live
- Verify the Trust's registered name, address, PAN/registration details and receipt wording with the trustees/accountant.
- Confirm whether donations are eligible for any tax deduction. Do not claim 80G/tax exemption unless the Trust has valid approval.
- The included PDF receipt template is a basic English receipt. Add the Trust address, registration number, logo and Kannada font only after the Trust confirms those details. Receipt files are stored in a private Supabase bucket.
- Add idempotency/retry monitoring for production webhook delivery and reconcile gateway payments with bank settlements.
