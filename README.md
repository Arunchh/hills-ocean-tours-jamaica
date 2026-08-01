# Hills Ocean Tours Jamaica — Montego Bay Tour Operator Website

A premium, SEO-optimized website for a Montego Bay excursion driver/operator — water sports, adventure tours, day trips, and nightlife recommendations.

Built from the Jamaica tour operator template. Config-driven, mobile-first, WhatsApp-led booking.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

**Client brief & change log:** See [`docs/CLIENT-BRIEF-AND-CHANGES.md`](docs/CLIENT-BRIEF-AND-CHANGES.md) for competitor analysis, client decisions, and full implementation details.

## What's Included

- **15 tours** across water, adventure, and day-trip categories
- **2 full detail pages** — Clear Kayak Photoshoot & Jet Car Rental (pricing, deposits, deliverables)
- **Nightlife section** — Lounge 2727, Margaritaville, Taboo, Pier One
- **Transportation policy** — Montego Bay pickup + out-of-area resort list
- **Booking flow** — 4-step how-it-works, CashApp/Zelle deposits, USD cash balance

## Customize for the Client

**Primary config:** `src/config/site-config.ts`

| Section | What to change |
|---------|----------------|
| `business` | Name, phone, WhatsApp, email, CashApp, Zelle |
| `hero` | Headline, background image |
| `excursions` | Full tour catalog with pricing |
| `featuredTourSlugs` | Which tours get featured cards |
| `transport` | Pickup policy, out-of-area resorts |
| `nightlife` | Venue recommendations |
| `testimonials` | Real guest reviews |
| `faqs` | Common booking questions |

**Tour detail pages:** `src/content/tour-details.ts`

Add or edit full pricing, deliverables, and deposit info for experiences with detail pages.

## Tour Detail Pages

- `/tours/clear-kayak-photoshoot`
- `/tours/jet-car-rental`

## Before Going Live

1. Replace placeholder phone, WhatsApp, email, CashApp, Zelle
2. Add real photos (One Man Beach, Pier One, jet car, clear kayak)
3. Confirm out-of-area transport fees with client
4. Add pricing for "Get a Quote" tours
5. Update `seo.siteUrl` to real domain
6. Replace demo testimonials with real reviews

## Deploy

```bash
npm run build
npm start
```

Recommended: [Vercel](https://vercel.com) with custom domain.

## Project Structure

```
src/
  config/
    site-config.ts       ← Business info, tours, nightlife, FAQs
  content/
    tour-details.ts      ← Full detail pages (Clear Kayak, Jet Car)
  components/
    sections/
      FeaturedTours.tsx
      TourCatalog.tsx
      TransportPolicy.tsx
      Nightlife.tsx
  app/
    [locale]/
      page.tsx           ← Homepage
      tours/[slug]/      ← Tour detail pages
```
