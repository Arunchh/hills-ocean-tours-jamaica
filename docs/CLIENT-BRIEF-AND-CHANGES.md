# Hills Ocean Tours Jamaica — Client Brief & Implementation Log

**Project:** Mobay Excursions website (package name: `hills-ocean-tours-jamaica`)  
**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4  
**Document date:** August 1–2, 2026  
**Purpose:** Record competitor research, client decisions, and all code changes during the August 2026 planning and content sessions.

---

## Table of Contents

1. [Competitor Analysis — Unique Tours Jamaica](#1-competitor-analysis--unique-tours-jamaica)
2. [Client Questionnaire & Answers](#2-client-questionnaire--answers)
3. [Locked-In Product Spec](#3-locked-in-product-spec)
4. [Strategic Positioning vs Competitor](#4-strategic-positioning-vs-competitor)
5. [Homepage Architecture (After Changes)](#5-homepage-architecture-after-changes)
6. [Detailed Code Changes](#6-detailed-code-changes)
7. [New Components](#7-new-components)
8. [Modified Components](#8-modified-components)
9. [Configuration & Content Updates](#9-configuration--content-updates)
10. [Booking & Policy Model](#10-booking--policy-model)
11. [Pending Client Deliverables](#11-pending-client-deliverables)
12. [Local Development](#12-local-development)
13. [Future Recommendations](#13-future-recommendations)
14. [Suggestions A–G Implementation (August 2026)](#14-suggestions-ag-implementation-august-2026)
15. [August 2, 2026 — Contact, Instagram & Marketing Expansion](#15-august-2-2026--contact-instagram--marketing-expansion)
16. [August 2, 2026 — Multi-Page SEO Split](#16-august-2-2026--multi-page-seo-split)

---

## 1. Competitor Analysis — Unique Tours Jamaica

**URL reviewed:** [https://uniquetoursjamaica.com/](https://uniquetoursjamaica.com/)

### 1.1 What They Do Well (Inspiration Sources)

| Area | Observation | Takeaway for Our Site |
|------|-------------|----------------------|
| **Catalog breadth** | Single tours, combo tours, yacht charters, airport transfers, gift cards | Offer single + combo + yacht without copying their clutter |
| **Location-based nav** | Montego Bay vs Ocho Rios split | Helps cruise/resort visitors self-select |
| **Combo positioning** | “One Price – Multiple Activities” | Strong value framing — adopted as Combo Tours filter/category |
| **Transfer booking on homepage** | Dedicated airport pickup/drop-off form | High-intent feature — implemented as `#transfers` section |
| **Social proof** | Named reviews with guest names | Keep testimonials section; wait for real client reviews |
| **Multi-channel contact** | Phone, email, live chat, WhatsApp | WhatsApp-first on mobile; phone + contact form retained |
| **Content hub** | Blog, photo gallery, videos | Blog exists for SEO; gallery deferred |
| **Experiential variety** | Nightlife, jet ski, drone photoshoot, catamaran | Nightlife section kept; yacht category added |

### 1.2 Competitor Weaknesses (What We Avoid)

| Issue | Detail | Our Response |
|-------|--------|--------------|
| **Broken trust signals** | Stats counters showed `0` for customers, itineraries, guides | No stat counters; no fake ratings until real data exists |
| **Overused superlatives** | “#1 Choice”, “Best!!!” without proof | Position as “trusted local specialist”, not “biggest” |
| **Copy/grammar issues** | Typos: “love ones”, “availabe”, “Pricess Diana” | Professional copy in config; client review before launch |
| **Cluttered homepage** | Many repeated “View all Tours” CTAs | Single clear CTA hierarchy: Tours → Transfers → WhatsApp |
| **Aggressive promo popup** | “UP TO 50% OFF”, urgency tactics | Subtle dismissible banner only; disabled by default |
| **Technical red flags** | Broken map shortcode `[rvm_map]`, outdated © 2023 footer | OpenStreetMap embed; no plugin shortcodes |
| **Inconsistent business info** | Conflicting hours and phone numbers | Single brand, one contact block in config |
| **Weak tour cards** | No clear price/duration at a glance | Price, duration, location on every card where available |
| **Dated transfer UX** | Dropdown-heavy form, unfocused country selector | Focused MoBay/Ochi/Falmouth transfer form → WhatsApp |
| **WordPress feel** | Plugin-heavy, slower mobile experience | Custom Next.js site, mobile-first sticky WhatsApp bar |

---

## 2. Client Questionnaire & Answers

The following questions were presented after competitor review. Client answers were provided on **August 1, 2026**.

| # | Question | Client Answer |
|---|----------|---------------|
| 1 | Positioning: largest catalog vs local specialist? | **Trusted local Montego Bay specialist** |
| 2 | Homepage priority (ranked)? | **1)** Book a tour → **2)** Airport/cruise quote → **3)** WhatsApp (especially mobile) → **4)** Serve Montego Bay & Ochi area only |
| 3 | Google rating, review count, years in business? | **Add later — no placeholders for now** |
| 4 | Licenses, insurance, partner badges? | **Use relevant accurate placeholders now** (awaiting real details) |
| 5 | Named testimonials with photos? | **Will provide photos soon** |
| 6 | Single tours, combos, or both? | **Both — take inspiration from competitor** |
| 7 | Which locations? | **Montego Bay & Ocho Rios corridor — no Kingston** |
| 8 | Private yacht/catamaran? | **Yes** |
| 9 | Booking model? | **Inquiry → confirm via WhatsApp** (no WhatsApp Business API) |
| 10 | Deposit & cancellation? | **50% deposit; cancel up to 1 week before** (other policies TBD) |
| 11 | Promotions? | **Subtle banner only** (no popups) |
| 12 | Gift cards, newsletter, blog? | **Blog only for SEO** with high-intent copywriting |
| 13 | Dedicated transfer section? | **Yes** |
| 14 | Luxury vs standard fleet branding? | **One brand** |
| 15 | Professional tour photos? | **Will upload soon** (Unsplash placeholders for now) |
| 16 | Map on site? | **Yes — but no Google Maps API** |

---

## 3. Locked-In Product Spec

### Brand & Positioning
- **Identity:** Trusted local Montego Bay tour operator — not an island-wide mega-catalog
- **Service area:** Montego Bay, Falmouth cruise port, Ocho Rios, and surrounding north coast resorts
- **Explicitly excluded:** Kingston and unfocused multi-country transfer markets (e.g. Turks & Caicos, Bahamas)

### User Journey Priority
1. Browse and book a tour (`/#tours`, `/#catalog`, `/#featured`)
2. Request airport or cruise port transfer quote (`/#transfers`)
3. Contact via WhatsApp — especially from mobile sticky bar
4. Understand service area coverage (`/#service-area`)

### Booking Flow
- No instant checkout or payment gateway
- No WhatsApp Business API integration
- User submits inquiry via WhatsApp deep link (`wa.me`) or contact form
- Operator confirms availability, pricing, and pickup manually

### Financial Policy
- **Deposit:** 50% via CashApp or Zelle
- **Balance:** Due on day of tour/transfer (USD cash, per existing config)
- **Cancellation:** Full deposit refund if cancelled **7+ days** before scheduled date
- Additional per-tour policies to be added later

### Trust & Content Rules
- **No fake stats** — hero rating badge hidden while `reviewCount === 0`
- **License placeholder:** `JTB-TO-[TBD]` until client provides real JTB number
- **Promo:** Subtle top banner only; `promoBanner.enabled: false` until client has a real offer
- **Blog:** SEO-focused high-intent guides only (not a general content marketing hub)

### Technical Constraints
- **Map:** OpenStreetMap iframe embed — no Google Maps API key
- **WhatsApp:** Standard `wa.me` links with pre-filled message templates
- **i18n:** English primary; Spanish/Portuguese UI files mirror English for now

---

## 4. Strategic Positioning vs Competitor

```
Unique Tours Jamaica          →    Hills Ocean Tours Jamaica
─────────────────────────────────────────────────────────────
"Largest catalog / #1"        →    "Trusted local MoBay specialist"
Long cluttered homepage       →    Clear section hierarchy
Broken 0-stat counters        →    No stats until real data
Popup discounts               →    Optional subtle banner
WordPress + plugins           →    Next.js custom build
Generic Jamaica copy          →    MoBay/Ochi/Falmouth focused
Dropdown transfer form        →    WhatsApp-handoff transfer form
Luxury / non-luxury tiers     →    One brand, one fleet
```

---

## 5. Homepage Architecture (After Changes)

### Site Architecture (August 2, 2026 — Multi-Page)

The site is **no longer a single scrolling homepage**. It uses a **hub-and-spoke model**:

| URL | Purpose | Priority |
|-----|---------|----------|
| `/[locale]` | Homepage hub — hero, featured tours, explore cards, trust | Conversion entry |
| `/[locale]/tours` | Full catalog + drone showcase | Primary SEO |
| `/[locale]/tours/[slug]` | Individual tour detail (13 tours) | High-intent SEO |
| `/[locale]/transfers` | Airport/cruise transfer form + pickup policy | High-intent SEO |
| `/[locale]/nightlife` | Nightlife packages and venues | Niche SEO |
| `/[locale]/resorts` | Resort zone index | Resort SEO hub |
| `/[locale]/resorts/[slug]` | Zone landing pages (4 zones) | Resort long-tail |
| `/[locale]/locations` | Location guide index | Area SEO hub |
| `/[locale]/locations/[slug]` | MoBay, Falmouth, Ochi guides | Area long-tail |
| `/[locale]/contact` | Contact form + FAQ | Support / conversion |
| `/[locale]/blog` + `/blog/[slug]` | SEO content hub | Content marketing |

**Static pages generated:** 146 (4 locales × routes + dynamic slugs).

### Homepage Sections (Current — Slim Hub)

| Order | Section | Notes |
|-------|---------|-------|
| 1 | Hero | CTAs → `/tours` and `/transfers` |
| 2 | Trust Bar | Policy facts |
| 3 | Featured Tours | 2 priced experiences + link to `/tours` |
| 4 | Home Explore | 6 cards linking to dedicated pages |
| 5 | How It Works | Booking flow |
| 6 | Value Props | Positioning |
| 7 | Services | Category overview |
| 8 | Testimonials | Social proof |

**Moved off homepage** (now dedicated routes): full tour catalog, transfers, nightlife, resorts, contact/FAQ, service area map, drone showcase.

### Navigation (Current)

| Label | Href |
|-------|------|
| Tours | `/tours` |
| Resorts | `/resorts` |
| Transfers | `/transfers` |
| Nightlife | `/nightlife` |
| Locations | `/locations` |
| Contact | `/contact` |

Nav uses **route paths**, not hash anchors (`/#tours` removed).

---

## 6. Detailed Code Changes

### Files Created

| File | Purpose |
|------|---------|
| `src/components/layout/PromoBanner.tsx` | Dismissible subtle promo strip; sessionStorage dismiss; config-gated |
| `src/components/sections/TransferQuote.tsx` | Airport/cruise transfer form → WhatsApp deep link |
| `src/components/sections/ServiceAreaMap.tsx` | Service regions list + OpenStreetMap iframe |
| `docs/CLIENT-BRIEF-AND-CHANGES.md` | This document |

### Files Modified

| File | Summary of Changes |
|------|-------------------|
| `src/config/site-config.ts` | Full repositioning copy, new policies, combo/yacht tours, service area, promo banner, nav, FAQ, how-it-works, SEO keywords |
| `src/i18n/types.ts` | Added `tourKind`, `PromoBanner`, `DepositPolicy`, `ServiceArea` types; new UI message keys |
| `src/i18n/ui/en.ts` | Transfer form strings, tour kind filters, section copy, contact service options, `bookTour` label |
| `src/app/[locale]/page.tsx` | New section order; imports for PromoBanner, TransferQuote, ServiceAreaMap |
| `src/components/sections/Hero.tsx` | Removed trust badge (no placeholder stats); CTAs: `#tours` primary, `#transfers` secondary |
| `src/components/sections/TourCatalog.tsx` | Single/Combo/All filter tabs; category filters hidden for combo view; section id `#catalog` |
| `src/components/layout/MobileCTA.tsx` | Reordered: WhatsApp (largest) → Book Tour → Call |
| `src/components/layout/Header.tsx` | Header CTA changed from “Get a Quote” to “Book Tour” (`/#tours`) |

### Files Unchanged (Relevant)

| File | Notes |
|------|-------|
| `src/components/seo/JsonLd.tsx` | Already conditionally omits `aggregateRating` when `reviewCount === 0` |
| `src/i18n/ui/es.ts`, `src/i18n/ui/pt.ts` | Still mirror English — new strings available via `uiEn` |
| `src/content/tour-details.ts` | Clear Kayak + Jet Car detail pages unchanged |
| `src/components/sections/ContactSection.tsx` | Form unchanged; service options updated in `en.ts` |

---

## 7. New Components

### 7.1 `PromoBanner`

- **Location:** Fixed top of page, above header
- **Behavior:** Renders only when `siteConfig.promoBanner.enabled === true`
- **Dismiss:** Stores `promo-banner-dismissed` in `sessionStorage`
- **Default:** Disabled — ready for client seasonal offers without popup UX

### 7.2 `TransferQuote`

- **Anchor:** `#transfers`
- **Fields:** Trip type, pickup, drop-off, date, time, passengers, luggage, round-trip checkbox
- **Submit action:** Opens WhatsApp with pre-filled multi-line message (no server/API)
- **Trip types:**
  - Airport pickup (MBJ → hotel)
  - Airport drop-off (hotel → MBJ)
  - Falmouth cruise port transfer
  - Hotel/resort transfer
  - Other
- **Side cards:** Sangster Airport (MBJ) and Falmouth Cruise Port info blocks

### 7.3 `ServiceAreaMap`

- **Anchor:** `#service-area`
- **Regions:** Montego Bay, Falmouth Cruise Port, Ocho Rios, Out-of-Area Resorts
- **Map:** OpenStreetMap embed (no API key) centered on Montego Bay
- **Copy:** Explicitly states Kingston is outside service area

---

## 8. Modified Components

### 8.1 Hero

**Before:**
- Trust badge showing years in business or Google rating
- Primary CTA: “Book on WhatsApp” → `#contact`
- Secondary CTA: “Browse Tours” → `#tours`

**After:**
- Trust badge removed entirely (client: no placeholders)
- Primary CTA: “Browse Tours” → `#tours`
- Secondary CTA: “Airport & Cruise Transfer” → `#transfers`
- Headline/subheadline updated for local specialist positioning

### 8.2 TourCatalog

**Before:**
- Category tabs only (Water, Adventure, Day Trips)
- Section id: `#destinations`

**After:**
- Top row: **All Tours | Single Tours | Combo Tours**
- Second row: category tabs (hidden when Combo filter active)
- Filter logic:
  - `combo` → show all combo packages
  - `single` → filter by category + single kind
  - `all` → filter by category only
- Section id: `#catalog`

### 8.3 MobileCTA (Sticky Bottom Bar)

**Before:** Call | WhatsApp | Quote

**After:** WhatsApp (flex 1.35) | Book Tour | Call

WhatsApp is visually dominant for mobile-first contact priority.

### 8.4 Header

**Before:** “Get a Quote” → `#contact`

**After:** “Book Tour” → `#tours`

---

## 9. Configuration & Content Updates

### 9.1 Business Copy (`site-config.ts`)

| Field | New Value (Summary) |
|-------|---------------------|
| `tagline` | “Your Trusted Local Montego Bay Tour Operator” |
| `description` | Local specialist; tours, combos, yachts, transfers; MoBay/Ochi/Falmouth |
| `hero.headline` | “Your Trusted Local Operator for Montego Bay Tours & Transfers” |
| `hero.badges` | Local MoBay Operator, USD Pricing, Hotel Pickup, WhatsApp Booking |

### 9.2 New Config Objects

```typescript
depositPolicy: {
  depositPercent: 50,
  cancellationDays: 7,
}

promoBanner: {
  enabled: false,
  message: "Welcome back to Jamaica — ask about current seasonal offers...",
  ctaText: "Browse Tours",
  ctaHref: "/#tours",
}

serviceArea: {
  regions: [Montego Bay, Falmouth, Ocho Rios, Out-of-Area Resorts],
  mapEmbedUrl: OpenStreetMap embed URL,
}
```

### 9.3 Tour Catalog Additions

Every excursion now has `tourKind: "single" | "combo"`.

**New categories:**
- `combo` — Combo Tours
- `yacht` — Private Yacht

**New excursions added:**

| Slug | Name | Kind |
|------|------|------|
| `atv-bamboo-rafting-combo` | ATV & Bamboo Rafting Combo | combo |
| `atv-zipline-dunns-river-combo` | ATV, Zipline & Dunn's River Falls | combo |
| `atv-horseback-zipline-dunns-combo` | ATV, Horseback, Zipline & Dunn's River | combo |
| `dolphin-dunns-river-combo` | Dolphin Encounter & Dunn's River Falls | combo |
| `private-yacht-charter` | Private Yacht Charter | single (yacht category) |
| `private-catamaran-charter` | Private Catamaran Charter | single (yacht category) |

### 9.4 Services Section (Updated Cards)

1. Water & Beach  
2. Adventure & Land  
3. **Combo Packages** (new)  
4. **Private Yacht Charters** (replaces “Private Transport” card)

### 9.5 How It Works (Updated Steps)

1. Choose Your Tour or Transfer  
2. Confirm on WhatsApp (real person, not automated)  
3. Pay Your 50% Deposit (CashApp/Zelle)  
4. Get Picked Up & Go (cancel free up to 7 days before)

### 9.6 FAQ (New/Updated Questions)

- How do deposits and cancellations work? (50% / 7 days)  
- How do I book? (WhatsApp inquiry)  
- Do you serve Kingston? (No)  
- Do you offer private yacht charters? (Yes)  
- Are combo tours available? (Yes)

### 9.7 SEO Keywords (Updated)

Added: airport transfer, Falmouth cruise port, combo tours, private yacht charter, Ocho Rios day trip, local tour operator.

---

## 10. Booking & Policy Model

### WhatsApp Integration (No API)

All WhatsApp actions use `formatWhatsAppLink()` in `src/lib/utils.ts`:

```
https://wa.me/{phone}?text={encodedMessage}
```

**Used in:**
- Hero WhatsApp link
- Mobile sticky bar
- Transfer quote form submit
- Contact section
- Tour detail pages (existing)

### Transfer WhatsApp Message Template

```
Hi {business}, I'd like a transfer quote.

Type: {tripType}
Pickup: {pickup}
Drop-off: {dropoff}
Date: {date}
Time: {time}
Passengers: {passengers}
Luggage: {luggage}
Round trip: {roundTrip}
```

### Contact Form

- Still uses Web3Forms/Formspree/mailto fallback via `src/lib/submit-form.ts`
- `web3formsAccessKey` empty — form may fall back to mailto until configured
- Transfer form does **not** depend on form API — WhatsApp only

### Payment Methods (Unchanged)

- USD Cash (balance on day)
- CashApp (deposit)
- Zelle (deposit)

---

## 11. Pending Client Deliverables

| Item | Config Location | Status |
|------|-----------------|--------|
| Real phone number | `business.phone`, `phoneDisplay` | **Done** — `+1 (876) 571-2157` |
| Real WhatsApp number | `business.whatsapp` | **Done** — `18765712157` |
| Real email | `business.email`, `zelle`, `leadNotificationEmail` | **Done** — `hillsoceantoursja@gmail.com` |
| JTB license number | `business.licenseNumber` | `JTB-TO-[TBD]` |
| Google rating & review count | `business.googleRating`, `reviewCount` | Hidden until `reviewCount > 0` |
| CashApp / Zelle handles | `business.cashapp`, `zelle` | Placeholder |
| Tour photos | `excursions[].image` | Unsplash placeholders |
| Testimonials | `testimonials[]` | Demo quotes — replace with real |
| Promo banner content | `promoBanner` | Disabled — enable when ready |
| Web3Forms key | `communications.web3formsAccessKey` | Empty |
| Tawk live chat IDs | `communications.tawkPropertyId`, `tawkWidgetId` | Empty |
| Social media URLs | `social.*` | **Instagram done** — [instagram.com/hillsoceansja](https://www.instagram.com/hillsoceansja/); Facebook/TripAdvisor still placeholders |
| Production domain | `seo.siteUrl` | `hillsoceantoursjamaica.com` |
| Combo/yacht pricing | `excursions[].priceFrom` | “Get a Quote” for most |
| Additional cancellation rules | `faqs`, `howItWorks` | Client to update later |

---

## 12. Local Development

```bash
cd "c:\Users\arunc\Desktop\Mobay Excursions website"
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**

**Note (Aug 1, 2026):** If port 3000 hangs, kill the stuck process and restart:

```powershell
# Find and kill process on port 3000
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
  ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

npm run dev
```

Production build verified successfully with `npm run build`.

---

## 13. Future Recommendations

### Content / SEO (When Client Is Ready)
- ~~High-intent blog posts (MBJ transfer, Falmouth cruise, combo tours)~~ — **Done (Aug 1)**
- ~~Resort + nightlife SEO blogs~~ — **Done (Aug 2):** nightlife guide, Rose Hall resorts, Grand Palladium
- Replace Unsplash images with client photography / Instagram reel stills
- Add real Google review snippets to testimonials

### Product (Phase 2 — Not Implemented)
- Gift cards
- Newsletter signup
- Photo/video gallery page
- Additional tour detail pages for combo/yacht offerings
- Per-tour deposit amounts (currently site-wide 50% policy)

### Config Quick Reference

| To enable promo banner | Set `promoBanner.enabled: true` in `site-config.ts` |
| To show Google rating in hero | Set `business.reviewCount` to a positive number |
| To add a new combo tour | Add to `excursions[]` with `tourKind: "combo"`, `category: "combo"` |
| To change deposit policy | Update `depositPolicy`, `howItWorks`, and relevant `faqs` |

---

## 14. Suggestions A–G Implementation (August 2026)

See full mapping in this section for competitor suggestions A through G, redundancy removals, and handover preservation.

### Summary

| Area | Key changes |
|------|-------------|
| **A — Homepage** | Unified `#tours` catalog; How It Works after transfers; trust bar with real policy facts only |
| **B — Trust** | Credentials placeholders; cruise/weather/pickup FAQs; no fake stats |
| **C — SEO** | Location pages (MoBay, Falmouth, Ochi); 3 new blog posts; enhanced tour detail pages |
| **D — Booking** | Business hours + response time in contact/footer; WhatsApp on all tour CTAs |
| **E — Design** | Removed duplicate Excursions section; consistent card layout |
| **F — Promos** | Banner terms field; still no popups |
| **G — Features** | Yacht kept; gift cards/newsletter/gallery skipped per client |

### Redundancy Removed

- **Deleted** `Excursions.tsx` — merged into `TourCatalog` (one browse experience at `#tours`)
- Hero trust badge stays removed (no placeholder ratings)
- Credentials centralized in `business.credentials[]`

### Handover Preserved

All 16 client answers, 50% deposit / 7-day cancel policy, per-tour Clear Kayak & Jet Car pricing, combo/yacht offerings, no Kingston, no Google Maps/WhatsApp API, subtle promo only.

---

## Appendix: Discussion Timeline

| Step | Action |
|------|--------|
| 1 | Reviewed competitor site [uniquetoursjamaica.com](https://uniquetoursjamaica.com/) |
| 2 | Delivered strengths, weaknesses, improvement suggestions, and client questionnaire |
| 3 | Client provided answers to positioning, priorities, policies, and technical constraints |
| 4 | Implemented homepage restructure, new sections, config updates, and mobile CTA changes |
| 5 | Verified production build (`npm run build` — success) |
| 6 | Started local dev server at `http://localhost:3000` |
| 7 | Documented all decisions and changes in this file |
| 8 | Implemented suggestions A–G; removed redundant Excursions; added location pages + SEO blogs |
| 9 | Updated real contact info (phone, WhatsApp, email); wired Instagram URL + JSON-LD `sameAs` |
| 10 | Expanded tour catalog, nightlife, resort zone pages, drone showcase; documented in §15 |

---

## 15. August 2, 2026 — Contact, Instagram & Marketing Expansion

### 15.1 Real Contact Information

Updated in `src/config/site-config.ts` (single source of truth for all site contact):

| Field | Value |
|-------|-------|
| `business.phone` | `+1-876-571-2157` |
| `business.phoneDisplay` | `+1 (876) 571-2157` |
| `business.whatsapp` | `18765712157` (digits for `wa.me` links) |
| `business.email` | `hillsoceantoursja@gmail.com` |
| `business.zelle` | `hillsoceantoursja@gmail.com` |
| `communications.leadNotificationEmail` | `hillsoceantoursja@gmail.com` |

All phone links, WhatsApp deep links, footer, header, contact section, and form notifications use these values.

### 15.2 Instagram Integration

| Change | File |
|--------|------|
| Footer + social link | `siteConfig.social.instagram` → `https://www.instagram.com/hillsoceansja/` |
| Structured data | `src/components/seo/JsonLd.tsx` — `sameAs: [instagram URL]` |
| Marketing research doc | `docs/INSTAGRAM-MARKETING-RESEARCH.md` |

### 15.3 Tour Catalog Expansion (12 New Excursions)

Sourced from [@hillsoceansja](https://www.instagram.com/hillsoceansja/) recurring post copy. All are quote-only unless noted.

| Slug | Name | Category |
|------|------|----------|
| `ricks-cafe` | Rick's Café Sunset | day-trips |
| `konoko-falls` | Konoko Falls | day-trips |
| `ys-falls` | YS Falls | day-trips |
| `seven-mile-beach` | 7 Mile Beach Day Trip | day-trips |
| `nine-mile-bob-marley` | 9 Mile Bob Marley Tour | culture |
| `rose-hall-great-house` | Rose Hall Great House | culture |
| `floyds-pelican-bar` | Floyd's Pelican Bar | water |
| `booby-cay-lobster-lunch` | Booby Cay Private Boat & Lobster Lunch | water |
| `swimming-with-dolphins` | Swimming with Dolphins | water |
| `ziplining` | Ziplining Adventure | adventure |
| `romantic-beach-dinner` | Romantic Beach Dinner | dining |
| `drone-aerial-package` | Drone Photo & Video Package | water |

**New filter categories:** `culture` (Culture & Heritage), `dining` (Romance & Dining).

**Services block:** Expanded from 4 to 5 cards — added Culture & Day Trips, Nightlife & Romance; reordered Private Yacht last.

### 15.4 Nightlife Section Redesign

**File:** `src/components/sections/Nightlife.tsx`

| Feature | Detail |
|---------|--------|
| Layout | Dark (`bg-jamaica-black`) with pattern overlay |
| Packages | 3 cards — Hip Strip Night Out, Lounge 2727 VIP, Resort Party Hop |
| Venues | 4 image cards — Lounge 2727, Margaritaville, Pier One, Taboo |
| Party resorts | Breathless, RIU MoBay, Grand Palladium strip |
| CTAs | WhatsApp on every package + bottom CTA |
| Disclaimer | Adults 18+ for nightclubs; venue details may change |

Config: `siteConfig.nightlife` — `packages[]`, enhanced `venues[]` (image, vibe, highlight), `partyResorts[]`, `ctaNote`.

### 15.5 Drone Showcase Section

**File:** `src/components/sections/DroneShowcase.tsx`  
**Anchor:** `#drone`  
**Config:** `siteConfig.droneShowcase`

Highlights Instagram positioning (“Drone shoots • Tours • Jamaica”): deliverables list (5 edited photos, 4K video, unedited gallery, add-on tours), hero image from clear kayak shoot, CTA to `/tours/clear-kayak-photoshoot`.

### 15.6 Resort Pickup Zones & Landing Pages

**Homepage section:** `src/components/sections/ResortPickup.tsx` — `#resorts`  
**Content:** `src/content/resort-guides.ts`  
**Routes:** `src/app/[locale]/resorts/[slug]/page.tsx`

| Slug | Zone | Key resorts |
|------|------|---------------|
| `rose-hall-corridor` | Rose Hall Corridor | Hyatt Zilara/Ziva, Hilton, Iberostar, Secrets |
| `montego-bay-central` | MoBay Central & Hip Strip | RIU, Sandals, Breathless, Hip Strip |
| `runaway-bay-out-of-area` | Runaway Bay & Out-of-Area | Grand Palladium, Royalton, Excellence |
| `ocho-rios-resorts` | Ocho Rios Resorts | Sandals Ochi, Moon Palace, RIU Ochi |

Each landing page includes: pickup policy, drive times, highlights, recommended tours, full resort list, zone FAQs, WhatsApp CTA, links to other zones.

**Static pages generated:** 4 zones × 4 locales = 16 resort pages (part of 78 total static routes).

### 15.7 SEO Blog Posts Added

| Slug | Title |
|------|-------|
| `montego-bay-nightlife-guide` | Montego Bay Nightlife Guide |
| `tours-from-rose-hall-resorts` | Tours from Rose Hall Resorts |
| `things-to-do-grand-palladium-jamaica` | Things to Do Near Grand Palladium |

Location guides (`tours-and-blog.ts`) updated with additional resorts and tour links for MoBay and Ocho Rios.

### 15.8 Files Created (August 2)

| File | Purpose |
|------|---------|
| `src/components/sections/DroneShowcase.tsx` | Drone/aerial media showcase |
| `src/components/sections/ResortPickup.tsx` | Resort zone cards on homepage |
| `src/content/resort-guides.ts` | Full resort zone content |
| `src/app/[locale]/resorts/[slug]/page.tsx` | Resort landing pages |
| `docs/INSTAGRAM-MARKETING-RESEARCH.md` | Instagram content audit + marketing copy |

### 15.9 Files Modified (August 2)

| File | Summary |
|------|---------|
| `src/config/site-config.ts` | Contact info, 12 tours, nightlife/resort/drone config, nav, FAQs, SEO keywords, out-of-area resorts |
| `src/app/[locale]/page.tsx` | Added DroneShowcase, ResortPickup; reordered sections |
| `src/components/sections/Nightlife.tsx` | Full redesign with packages, images, CTAs |
| `src/components/sections/ServiceAreaMap.tsx` | CTA button → `/#resorts` |
| `src/components/sections/Services.tsx` | Grid supports 5 service cards |
| `src/components/seo/JsonLd.tsx` | `sameAs` Instagram URL |
| `src/content/tours-and-blog.ts` | Expanded location guides + 3 blog posts |
| `src/i18n/types.ts` | ResortGuide, NightlifePackage, DroneShowcase, ResortZone types |
| `src/i18n/index.ts` | Registered `resortGuides`, `getResortGuide()` |
| `src/i18n/ui/en.ts` | Nightlife, resort, drone section strings; expanded contact form options |
| `src/i18n/ui/fr.ts` | French UI strings for new sections |

### 15.10 Build Verification

```bash
npm run build
# ✓ 78 static pages (includes 16 resort pages)
# Routes: /[locale]/resorts/[slug] added
```

---

*This document should be shared with the client before launch to confirm positioning, policies, and remaining content needs.*
