# Booking Calendar — Google Sheet Setup (Option A)

**Stack:** Google Sheet + Apps Script + Next.js API proxy + WhatsApp confirmation  
**Cost:** Free  
**No Supabase, no Google OAuth on the website, no payment gateway**

> **Launch checklist:** See [CLIENT-SETUP-CHECKLIST.md](./CLIENT-SETUP-CHECKLIST.md) for the full list of Gmail, Tawk.to, Web3Forms, Vercel, and booking tasks.

The operator manages tour slots in a Google Sheet. Guests pick date + time on the website; the booking is saved to the sheet, emailed to Gmail, then WhatsApp opens for deposit confirmation.

---

## 1. Create the Google Sheet

1. Sign in with **hillsoceantoursja@gmail.com** (or the operator Gmail).
2. Create a new spreadsheet named **Hills Ocean Tours — Bookings**.
3. Add three tabs with these exact names:

### Tab: `TourSlots`

| Column | Description |
|--------|-------------|
| `tour_slug` | Must match website slug (e.g. `clear-kayak-photoshoot`) |
| `display_duration` | Shown to guests (e.g. `2–3 hours`) |
| `duration_min` | Minutes blocked on calendar (e.g. `180`) |
| `slot_times` | Comma-separated start times, 24h format (e.g. `08:00,11:00,14:00`) |
| `max_per_slot` | Max bookings at same start time (e.g. `2` for two kayak groups) |
| `buffer_min` | Gap after slot before next booking (e.g. `30`) |
| `enabled` | `true` or `false` |

**Import starter data:** File → Import → Upload `scripts/google-booking/TourSlots-template.csv` into the `TourSlots` tab.

Add a row for every tour you want bookable online. Slugs must match `src/config/site-config.ts` (`excursions[].slug`).

### Tab: `Blackouts`

| date | tour_slug | reason |
|------|-----------|--------|
| 2026-12-25 | * | Christmas — all tours closed |
| 2026-08-20 | jet-car-rental | Pier One maintenance |

- `tour_slug` = `*` blocks **all** tours that day.
- Leave rows empty until you need to block dates.

### Tab: `Bookings`

**Do not edit column order** — the script appends rows automatically.

| id | tour_slug | tour_name | date | start_time | duration_min | buffer_min | guests | name | phone | email | resort | notes | status | created_at |

**Status values:** `pending` → `confirmed` → or `cancelled`

After WhatsApp + deposit, change `pending` to `confirmed` in the sheet.

---

## 2. Install Apps Script

1. In the spreadsheet: **Extensions → Apps Script**
2. Delete any default code and paste the contents of `scripts/google-booking/Code.gs`
3. **Project Settings → Script properties** → Add:

| Property | Value |
|----------|--------|
| `BOOKING_SECRET` | Long random string (e.g. generate at [random.org](https://www.random.org/strings/)) |
| `OPERATOR_EMAIL` | `hillsoceantoursja@gmail.com` |

4. **Save** the project (name it `Booking API`)

---

## 3. Deploy the Web App

1. **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. **Deploy** → copy the **Web app URL** (ends in `/exec`)

First run may ask you to authorize calendar/spreadsheet + Gmail send permissions.

---

## 4. Connect the Website

In your project root, copy `.env.example` to `.env.local`:

```env
BOOKING_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
BOOKING_SCRIPT_SECRET=same-random-string-as-BOOKING_SECRET-in-script
```

Restart the dev server after changing env vars:

```bash
npm run dev
```

On **Vercel** (production): add the same two variables in Project Settings → Environment Variables.

---

## 5. Daily Operator Workflow

1. **New booking** → row appears in `Bookings` with `pending` + Gmail alert
2. **Reply on WhatsApp** → confirm price, pickup, 50% deposit (CashApp/Zelle)
3. **After deposit** → set status to `confirmed` in the sheet
4. **Block a day** → add row to `Blackouts`
5. **Change times** → edit `slot_times` in `TourSlots` (no website redeploy needed)
6. **Seasonal tour** → set `enabled` to `false` to hide online booking

---

## 6. Testing

1. Open a tour page, e.g. `/tours/clear-kayak-photoshoot`
2. Pick a date with open slots → select a time → submit
3. Check `Bookings` tab and Gmail inbox
4. WhatsApp should open with booking details + reference ID

If booking UI shows “Message us on WhatsApp” only, env vars are missing or the tour slug is not in `TourSlots`.

---

## 7. Limits (free tier)

~50 bookings/month is well within Google’s free Apps Script quotas (thousands of requests/day, hundreds of emails/day).

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Unauthorized | `BOOKING_SCRIPT_SECRET` must match Script property `BOOKING_SECRET` |
| Tour not configured | Add row to `TourSlots` with matching `tour_slug` |
| No slots shown | Check `enabled`, `Blackouts`, and existing `Bookings` for that date |
| Email not received | Check spam; verify `OPERATOR_EMAIL` in Script properties |
| CORS errors | API must go through `/api/booking/*` routes, not direct browser → Apps Script |

---

## Files in this repo

| File | Purpose |
|------|---------|
| `scripts/google-booking/Code.gs` | Apps Script backend |
| `scripts/google-booking/TourSlots-template.csv` | Starter tour slot config |
| `src/app/api/booking/*` | Next.js proxy (hides secret) |
| `src/components/booking/BookingPanel.tsx` | Guest booking UI |
