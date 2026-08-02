# Hills Ocean Tours — Client Setup Checklist

**Purpose:** Everything the client (or developer on their behalf) must configure **outside the website code** before launch.  
**Master account recommended:** `hillsoceantoursja@gmail.com`  
**Last updated:** August 2, 2026

Use this alongside:
- [CLIENT-BRIEF-AND-CHANGES.md](./CLIENT-BRIEF-AND-CHANGES.md) — product decisions and code log
- [BOOKING-SHEET-SETUP.md](./BOOKING-SHEET-SETUP.md) — Google Sheet booking calendar (detailed steps)

---

## Status at a glance

| Area | Service | Status | Blocks launch? |
|------|---------|--------|----------------|
| Phone & WhatsApp | On-device / SIM | **Done** | — |
| Business email (display) | Gmail | **Done** — `hillsoceantoursja@gmail.com` | — |
| **Booking calendar** | Google Sheet + Apps Script | **Not configured** | **Yes** — online date/time booking |
| **Contact form email** | Web3Forms | **Not configured** | Partial — falls back to mailto |
| **Live chat** | Tawk.to | **Not configured** | No — optional |
| Instagram | Meta | **Done** — @hillsoceansja | — |
| Facebook / TripAdvisor | Social URLs | Placeholder links | No |
| JTB license & insurance | Content in `site-config.ts` | Placeholder `[TBD]` | Recommended before launch |
| CashApp / Zelle handles | Content in `site-config.ts` | Placeholder | Recommended before taking deposits |
| Production hosting env vars | Vercel (or host) | **Not configured** | **Yes** — for live booking |
| Custom domain DNS | Registrar → Vercel | Verify when live | **Yes** — for production URL |
| Tour photos | Website assets | Unsplash placeholders | No |
| Testimonials | `site-config.ts` | Demo quotes | No |
| Google reviews in hero | `reviewCount` | Hidden (0) | No — intentional |
| Promo banner | `promoBanner.enabled` | Off | No |

---

## Phase 1 — Integrations (Gmail-linked services)

These use free tiers suitable for ~50 bookings/month. **No payment gateway, no Supabase, no Google OAuth on the website.**

---

### 1. Gmail / Google account (foundation)

**Owner:** Client  
**Account:** `hillsoceantoursja@gmail.com`  
**Cost:** Free

- [ ] Confirm you can sign in to Gmail on desktop and phone
- [ ] Turn on 2-step verification (recommended — protects Sheet + booking script)
- [ ] Add account to phone for WhatsApp Business *optional* (site uses regular WhatsApp deep links, not API)
- [ ] Use this same Gmail for all services below (Sheet, Web3Forms notifications, Tawk.to signup)

**Used for:** Booking alert emails, Web3Forms lead delivery, Google Sheet admin, Tawk.to account email

---

### 2. Booking calendar — Google Sheet + Apps Script

**Owner:** Client (daily admin) + Developer (one-time deploy)  
**Guide:** [BOOKING-SHEET-SETUP.md](./BOOKING-SHEET-SETUP.md)  
**Cost:** Free

#### Client tasks

- [ ] Create spreadsheet **Hills Ocean Tours — Bookings** in Google Drive (signed in as operator Gmail)
- [ ] Add tabs: `TourSlots`, `Blackouts`, `Bookings` (exact names)
- [ ] Import `scripts/google-booking/TourSlots-template.csv` into `TourSlots`
- [ ] Review each tour row — adjust `slot_times`, `duration_min`, `max_per_slot` to match real operations
- [ ] Add rows for any missing tours (slug must match website — see `src/config/site-config.ts` → `excursions[].slug`)
- [ ] Open **Extensions → Apps Script**, paste `scripts/google-booking/Code.gs`
- [ ] Set **Script properties:**
  - [ ] `BOOKING_SECRET` — long random password (save in password manager)
  - [ ] `OPERATOR_EMAIL` — `hillsoceantoursja@gmail.com`
- [ ] **Deploy → Web app** — Execute as: **Me**, Access: **Anyone**
- [ ] Copy deployment URL (ends in `/exec`)
- [ ] Authorize script when prompted (Spreadsheet + Gmail send)
- [ ] Test: submit a booking on `/tours/clear-kayak-photoshoot` → check `Bookings` tab + Gmail inbox

#### Developer tasks

- [ ] Add to `.env.local` (local) and **Vercel → Environment Variables** (production):

```env
BOOKING_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
BOOKING_SCRIPT_SECRET=same-value-as-BOOKING_SECRET-in-script
```

- [ ] Redeploy site after env vars are set
- [ ] Verify `/book/[slug]` and tour detail `#book` sections show calendar (not WhatsApp-only fallback)

#### Ongoing client workflow

- [ ] New row in `Bookings` → reply on WhatsApp → collect 50% deposit → set status `confirmed`
- [ ] Block dates in `Blackouts` (use `*` for all tours closed)
- [ ] Seasonally disable tours via `enabled` = `false` in `TourSlots`

**Website routes:** `/tours/[slug]#book`, `/book/[slug]`  
**API (server-only):** `/api/booking/availability`, `/api/booking/submit`

---

### 3. Contact form — Web3Forms

**Owner:** Client sign-up + Developer adds key  
**Site page:** `/contact`  
**Cost:** Free tier (250 submissions/month)

- [ ] Go to [web3forms.com](https://web3forms.com) and sign up with **hillsoceantoursja@gmail.com**
- [ ] Create an access key for the contact form
- [ ] Set notification email to `hillsoceantoursja@gmail.com`
- [ ] Copy access key to developer

**Developer:**

- [ ] Set in Vercel / `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

- [ ] Or set `communications.web3formsAccessKey` in `src/config/site-config.ts` if not using env (prefer env for secrets)

**Verify:**

- [ ] Submit contact form on `/contact` → email arrives in Gmail within minutes
- [ ] If key is empty, form falls back to **mailto:** (opens guest’s email app — weaker UX)

**Note:** Transfer quotes use **WhatsApp only** — Web3Forms is not required for transfers.

---

### 4. Live chat — Tawk.to

**Owner:** Client sign-up + Developer adds widget IDs  
**Cost:** Free

- [ ] Sign up at [tawk.to](https://www.tawk.to) with operator Gmail
- [ ] Create a property for **Hills Ocean Tours Jamaica**
- [ ] **Administration → Channels → Chat Widget** — copy:
  - [ ] Property ID
  - [ ] Widget ID  
  (Direct link format: `https://tawk.to/chat/{PROPERTY_ID}/{WIDGET_ID}`)
- [ ] Set widget to notify **hillsoceantoursja@gmail.com** (or use Tawk mobile app)
- [ ] Customize greeting: e.g. “Questions about tours or transfers? We reply fastest on WhatsApp.”
- [ ] Optional: set business hours in Tawk to match site (`Monday – Sunday, 9:00 AM – 6:30 PM` Jamaica time)

**Developer:**

- [ ] Add to Vercel / `.env.local`:

```env
NEXT_PUBLIC_TAWK_PROPERTY_ID=your-property-id
NEXT_PUBLIC_TAWK_WIDGET_ID=your-widget-id
```

**Verify:**

- [ ] Chat bubble appears bottom-right on desktop
- [ ] On mobile, bubble sits **above** sticky WhatsApp bar (already handled in `TawkWidget.tsx`)
- [ ] Send test message → appears in Tawk dashboard / email

**If IDs are empty:** Widget does not load — site still works via WhatsApp and phone.

---

### 5. WhatsApp (already on site)

**Owner:** Client  
**Status:** Configured in `site-config.ts`

| Field | Value |
|-------|--------|
| WhatsApp number | `18765712157` |
| Display phone | `+1 (876) 571-2157` |

- [ ] Confirm WhatsApp is installed on the phone that receives `18765712157`
- [ ] Test deep link from mobile sticky bar and booking flow
- [ ] Optional: set WhatsApp Business profile photo + description (does not require API)

**No WhatsApp Business API** — all links are standard `wa.me` pre-filled messages.

---

### 6. Production hosting — environment variables

**Owner:** Developer  
**Platform:** Vercel (recommended) or equivalent

Add **all** of these for Production (and Preview if testing bookings on preview URLs):

| Variable | Required for | Source |
|----------|--------------|--------|
| `BOOKING_SCRIPT_URL` | Online booking | Google Apps Script deploy URL |
| `BOOKING_SCRIPT_SECRET` | Online booking | Script property `BOOKING_SECRET` |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact form email | Web3Forms dashboard |
| `NEXT_PUBLIC_TAWK_PROPERTY_ID` | Live chat | Tawk.to |
| `NEXT_PUBLIC_TAWK_WIDGET_ID` | Live chat | Tawk.to |

- [ ] All variables saved in Vercel → Settings → Environment Variables
- [ ] Trigger redeploy after changes
- [ ] Test each integration on **production URL**, not only localhost

Reference: `.env.example` in project root.

---

### 7. Custom domain

**Owner:** Client (domain) + Developer (DNS)

- [ ] Domain registered: `hillsoceantoursjamaica.com` (or confirm actual domain)
- [ ] DNS pointed to Vercel (A/CNAME records per Vercel dashboard)
- [ ] HTTPS certificate active
- [ ] `siteConfig.seo.siteUrl` matches live domain (`src/config/site-config.ts`)
- [ ] Submit sitemap in Google Search Console: `https://www.hillsoceantoursjamaica.com/sitemap.xml`

---

## Phase 2 — Business content (website config)

These are edited in **`src/config/site-config.ts`** (developer or guided client update). No external account unless noted.

---

### 8. JTB license & insurance

- [ ] Obtain real JTB tour operator license number
- [ ] Obtain insurance policy reference (for display only — do not publish full policy doc)
- [ ] Update `business.licenseNumber` and `business.credentials[]`
- [ ] Remove `[TBD]` placeholders before marketing “licensed operator” claims

---

### 9. CashApp & Zelle (deposits)

**Policy:** 50% deposit via CashApp or Zelle; balance USD cash on tour day.

- [ ] Confirm CashApp handle: currently `$HillsOceanTours` — verify or update `business.cashapp`
- [ ] Confirm Zelle uses `hillsoceantoursja@gmail.com` — update `business.zelle` if different
- [ ] Test receiving a small deposit from a friend
- [ ] Ensure deposit instructions on tour pages match real handles

---

### 10. Social media links

| Platform | Status | Action |
|----------|--------|--------|
| Instagram | **Done** — [instagram.com/hillsoceansja](https://www.instagram.com/hillsoceansja/) | Keep active |
| Facebook | Placeholder URL | [ ] Provide real Facebook page URL → `social.facebook` |
| TripAdvisor | Placeholder URL | [ ] Provide listing URL when available → `social.tripadvisor` |

---

### 11. Google reviews & ratings

- [ ] Collect genuine Google reviews (no fake counts on site)
- [ ] When ready, set `business.reviewCount` to real number — hero badge appears automatically
- [ ] Optionally add review snippets to `testimonials[]`

**Until then:** Rating badge stays hidden (`reviewCount === 0`) — by design.

---

### 12. Tour photos & testimonials

- [ ] Replace Unsplash placeholders with client photography / Instagram stills → `excursions[].image`, `images[]`
- [ ] Replace demo testimonials with real guest names, quotes, photos → `testimonials[]`
- [ ] Review combo/yacht pricing — many tours show “Get a Quote” until `priceFrom` updated

---

### 13. Promo banner (optional)

- [ ] When a real offer exists, set `promoBanner.enabled: true` and update message/terms
- [ ] Keep subtle strip only — no popups (per client brief)

---

## Phase 3 — Optional / post-launch

- [ ] Wire booking panel on **Transfers** page (Sheet row `transfers` already in template CSV)
- [ ] Additional tour detail pages for combo/yacht offerings
- [ ] Per-tour deposit amounts (currently site-wide 50% policy)
- [ ] Facebook / Meta pixel (not implemented — only if client requests ads tracking)
- [ ] Google Analytics / Search Console ongoing monitoring

---

## Launch smoke test (run in order)

After Phase 1 integrations:

1. [ ] Homepage loads on production domain
2. [ ] `/tours/clear-kayak-photoshoot` — calendar shows dates; submit test booking
3. [ ] Gmail receives booking notification; Sheet row created
4. [ ] WhatsApp opens with reference ID after booking submit
5. [ ] `/contact` — form email arrives in Gmail (Web3Forms)
6. [ ] Tawk.to chat bubble visible; test message received
7. [ ] `/transfers` — WhatsApp quote opens with form data
8. [ ] Mobile sticky bar — WhatsApp + Call work
9. [ ] Instagram link in footer opens correct profile

---

## Quick reference — who configures what

| Task | Client | Developer |
|------|:------:|:---------:|
| Gmail / Google account security | ✓ | |
| Google Sheet + Apps Script | ✓ | ✓ deploy URL |
| Web3Forms account | ✓ | ✓ env var |
| Tawk.to account | ✓ | ✓ env vars |
| Vercel env vars & deploy | | ✓ |
| Domain DNS | ✓ | ✓ |
| site-config content (license, photos) | ✓ | ✓ |
| CashApp / Zelle verification | ✓ | ✓ update config |

---

## Support docs in repo

| Document | Contents |
|----------|----------|
| [BOOKING-SHEET-SETUP.md](./BOOKING-SHEET-SETUP.md) | Sheet tabs, Apps Script, troubleshooting |
| [CLIENT-BRIEF-AND-CHANGES.md](./CLIENT-BRIEF-AND-CHANGES.md) | Full product spec and code changelog |
| `.env.example` | All environment variable names |
| `scripts/google-booking/` | `Code.gs` + `TourSlots-template.csv` |

---

*Share this checklist with the client before launch. Check off items as completed and note dates in the Status column if tracking in a shared doc.*
