import type { ResortGuide } from "@/i18n/types";

export const resortGuides: ResortGuide[] = [
  {
    zone: "Rose Hall Corridor",
    slug: "rose-hall-corridor",
    tagline: "Luxury resorts, historic tours & Ocho Rios day trips",
    description:
      "The Rose Hall corridor stretches from Ironshore to beyond Falmouth — home to Hyatt Zilara, Hyatt Ziva, Hilton Rose Hall, Iberostar Grand, Secrets, and Jewel Grande. We're here daily for clear kayak shoots at One Man Beach, Rose Hall Great House tours, and full-day Ocho Rios waterfall trips. Transport fees apply for this zone and are always quoted before you book.",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    pickupPolicy:
      "Roundtrip pickup from Rose Hall corridor resorts is available on all tours. A transportation fee applies based on your property — we confirm the exact amount on WhatsApp before you pay your 50% deposit.",
    transportNote:
      "Typical drive times: 15–25 minutes to One Man Beach (clear kayak), 20–30 minutes to Sangster Airport, 60–75 minutes to Dunn's River Falls in Ocho Rios.",
    resorts: [
      { name: "Hyatt Zilara Rose Hall", area: "Rose Hall", notes: "Adults-only all-inclusive — popular for couples" },
      { name: "Hyatt Ziva Rose Hall", area: "Rose Hall", notes: "Family-friendly sister property next to Zilara" },
      { name: "Hilton Rose Hall Resort & Spa", area: "Rose Hall", notes: "Large beachfront property — frequent pickup point" },
      { name: "Iberostar Grand Rose Hall", area: "Rose Hall", notes: "Luxury all-inclusive on the corridor" },
      { name: "Secrets St. James", area: "Montego Bay", notes: "Adults-only — close to Rose Hall attractions" },
      { name: "Secrets Wild Orchid", area: "Montego Bay", notes: "Sister property to Secrets St. James" },
      { name: "Jewel Grande Montego Bay", area: "Rose Hall", notes: "Spa and beachfront suites" },
      { name: "Half Moon", area: "Rose Hall", notes: "Premium estate resort — custom pickup arranged" },
      { name: "Round Hill Hotel & Villas", area: "Montego Bay", notes: "Luxury villas — private transport quoted" },
      { name: "Riu Palace Jamaica", area: "Rose Hall", notes: "All-inclusive on the corridor" },
      { name: "Riu Reggae", area: "Rose Hall", notes: "Adults-only RIU property" },
      { name: "Zoetry Montego Bay", area: "Rose Hall", notes: "Boutique wellness-focused resort" },
    ],
    recommendedTours: [
      {
        name: "Clear Kayak Photoshoot",
        duration: "2–3 hours",
        description: "Drone photoshoot at One Man Beach — our signature experience for Rose Hall guests.",
        excursionSlug: "clear-kayak-photoshoot",
      },
      {
        name: "Rose Hall Great House",
        duration: "3–4 hours",
        description: "Historic plantation tour right in your neighborhood — morning or evening options.",
        excursionSlug: "rose-hall-great-house",
      },
      {
        name: "Dunn's River Falls",
        duration: "Full day",
        description: "Iconic waterfall climb with transport from your Rose Hall resort.",
        excursionSlug: "dunns-river-falls",
      },
      {
        name: "9 Mile Bob Marley Tour",
        duration: "Half day",
        description: "Visit Bob Marley's birthplace and mausoleum in the hills of St. Ann.",
        excursionSlug: "nine-mile-bob-marley",
      },
    ],
    highlights: [
      "Closest zone to Rose Hall Great House",
      "Daily pickups for clear kayak drone shoots",
      "Full-day Ocho Rios waterfall trips",
      "Airport MBJ transfers for Rose Hall arrivals",
    ],
    faqs: [
      {
        question: "Is pickup free from Hyatt Zilara or Hilton Rose Hall?",
        answer:
          "Clear kayak photoshoot includes MoBay-area pickup; Rose Hall corridor resorts incur a transport fee quoted upfront. Other tours (Dunn's River, Blue Hole) include pickup with a zone fee added to your total.",
      },
      {
        question: "How early should I book from Rose Hall?",
        answer:
          "We recommend booking 3–7 days ahead for waterfall day trips and 1–3 days for clear kayak shoots. Message us on WhatsApp with your resort name and dates.",
      },
    ],
  },
  {
    zone: "MoBay Central & Hip Strip",
    slug: "montego-bay-central",
    tagline: "Free pickup on select tours — closest to the action",
    description:
      "Central Montego Bay and the Hip Strip put you minutes from One Man Beach, Pier One jet cars, Margaritaville, and Sangster Airport. If you're at RIU Montego Bay, Sandals MoBay, Holiday Inn, or Breathless — many of our tours include free roundtrip transportation.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    pickupPolicy:
      "Select tours — especially Clear Kayak Photoshoot — include free roundtrip pickup when your hotel is in Montego Bay city limits. We'll confirm eligibility when you message us on WhatsApp.",
    transportNote:
      "Typical drive times: 5–15 minutes to One Man Beach, 10–20 minutes to Pier One, 15–25 minutes to Sangster Airport (MBJ).",
    resorts: [
      { name: "RIU Montego Bay", area: "Mahoe Bay", notes: "Lively all-inclusive — great nightlife base" },
      { name: "Sandals Montego Bay", area: "Freeport", notes: "Couples-only — close to airport" },
      { name: "Sandals Royal Caribbean", area: "Freeport", notes: "Private island access — MoBay pickup" },
      { name: "Holiday Inn Resort Montego Bay", area: "Rose Hall", notes: "Central location for tours" },
      { name: "Breathless Montego Bay", area: "Freeport", notes: "Adults-only party resort" },
      { name: "Deja Resort", area: "Hip Strip", notes: "Walkable to Margaritaville" },
      { name: "S Hotel Montego Bay", area: "Hip Strip", notes: "Boutique Hip Strip property" },
      { name: "Courtyard by Marriott", area: "City centre", notes: "Business and leisure travelers" },
      { name: "Doctors Cave Beach Hotel", area: "Hip Strip", notes: "Historic beach hotel on the strip" },
      { name: "Royal Decameron Montego Beach", area: "Hip Strip", notes: "Beachfront all-inclusive" },
    ],
    recommendedTours: [
      {
        name: "Clear Kayak Photoshoot",
        duration: "2–3 hours",
        description: "Free MoBay pickup — drone photos and 4K video at One Man Beach.",
        excursionSlug: "clear-kayak-photoshoot",
      },
      {
        name: "Jet Car Rental",
        duration: "30 minutes",
        description: "Drive a jet car at Pier One — edited drone video included.",
        excursionSlug: "jet-car-rental",
      },
      {
        name: "Party Catamaran Cruise",
        duration: "3–4 hours",
        description: "Open bar, snorkeling, and dancing on the Caribbean.",
        excursionSlug: "party-catamaran",
      },
      {
        name: "MoBay Nightlife Package",
        duration: "Evening",
        description: "Round-trip transport to Margaritaville, Pier One, or Lounge 2727.",
      },
    ],
    highlights: [
      "Free pickup on select tours within MoBay",
      "Walking distance to Hip Strip nightlife",
      "Fastest access to clear kayak & jet car",
      "MBJ airport transfers in 15–25 minutes",
    ],
    faqs: [
      {
        question: "Can I walk to Margaritaville from my hotel?",
        answer:
          "Some Hip Strip hotels are walkable, but we still recommend booking return transport for late nights — or message us for a one-way pickup quote.",
      },
      {
        question: "Does Sandals Montego Bay get free tour pickup?",
        answer:
          "Sandals MoBay is within our Montego Bay service area. Free pickup applies on select tours like clear kayak — we'll confirm when you book on WhatsApp.",
      },
    ],
  },
  {
    zone: "Runaway Bay & Out-of-Area",
    slug: "runaway-bay-out-of-area",
    tagline: "Grand Palladium, Royalton, Excellence & beyond",
    description:
      "Resorts east of central MoBay — Grand Palladium Lady Hamilton, Royalton Blue Waters, Excellence Oyster Bay, Ocean Eden Bay, and Princess properties — are outside the free pickup zone. We serve these guests daily with upfront transport fees and reliable timing for Ocho Rios day trips and MoBay water sports.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    pickupPolicy:
      "Out-of-area resorts always incur a transportation fee. We quote the exact amount on WhatsApp before you pay your deposit — no surprises on pickup day.",
    transportNote:
      "Typical drive times: 30–45 minutes to central MoBay, 45–60 minutes to Ocho Rios, 20–35 minutes to Sangster Airport depending on property.",
    resorts: [
      { name: "Grand Palladium Jamaica", area: "Lucea", notes: "Large family resort — party atmosphere" },
      { name: "Grand Palladium Lady Hamilton", area: "Lucea", notes: "Adults-only wing of Grand Palladium" },
      { name: "Royalton Blue Waters", area: "Trelawny", notes: "Popular with US and Canadian groups" },
      { name: "Royalton White Sands", area: "Trelawny", notes: "Sister property to Blue Waters" },
      { name: "Excellence Oyster Bay", area: "Falmouth area", notes: "Adults-only luxury all-inclusive" },
      { name: "Ocean Eden Bay", area: "Falmouth", notes: "Adults-only beachfront" },
      { name: "Ocean Coral Spring", area: "Falmouth", notes: "Family-friendly sister to Ocean Eden" },
      { name: "Princess Grand Jamaica", area: "Runaway Bay", notes: "Large all-inclusive east of MoBay" },
      { name: "Princess Senses the Mangrove", area: "Runaway Bay", notes: "Boutique adults-focused property" },
      { name: "Royal Decameron Cornwall Beach", area: "Runaway Bay", notes: "Beachfront value all-inclusive" },
      { name: "Riu Aquarelle", area: "Falmouth", notes: "Adults-only RIU on the north coast" },
      { name: "Hedonism II", area: "Negril (via MoBay)", notes: "Day trips and transfers available — ask for quote" },
      { name: "Moon Palace Jamaica", area: "Ocho Rios", notes: "Ochi-side pickup for local waterfall tours" },
      { name: "Seagarden Beach Resort", area: "Montego Bay", notes: "Budget-friendly — transport fee may apply" },
    ],
    recommendedTours: [
      {
        name: "Blue Hole",
        duration: "Full day",
        description: "Hidden waterfalls and swimming holes — full day from your resort.",
        excursionSlug: "blue-hole",
      },
      {
        name: "Dunn's River Falls",
        duration: "Full day",
        description: "The must-do Ocho Rios experience — we handle timing and transport.",
        excursionSlug: "dunns-river-falls",
      },
      {
        name: "ATV & Bamboo Rafting Combo",
        duration: "Full day",
        description: "Stack two adventures into one MoBay day trip.",
        excursionSlug: "atv-bamboo-rafting-combo",
      },
      {
        name: "Rick's Café Sunset",
        duration: "Full day",
        description: "Negril cliff diving and legendary sunset — full day from out-of-area resorts.",
        excursionSlug: "ricks-cafe",
      },
    ],
    highlights: [
      "Daily service to Grand Palladium & Royalton guests",
      "Transport fee always quoted upfront",
      "Popular for Ocho Rios combo day trips",
      "Falmouth cruise port connections nearby",
    ],
    faqs: [
      {
        question: "Why is there a transport fee from Grand Palladium?",
        answer:
          "Grand Palladium and similar properties are 30–45 minutes from central MoBay tour starting points. The fee covers fuel and driver time — we include it in your total quote before booking.",
      },
      {
        question: "Can I do a Falmouth cruise excursion from Royalton Blue Waters?",
        answer:
          "Yes. Message us with your ship schedule — we coordinate cruise port pickups and can combine with a Luminous Lagoon evening tour when timing allows.",
      },
    ],
  },
  {
    zone: "Ocho Rios Resorts",
    slug: "ocho-rios-resorts",
    tagline: "Waterfalls, Blue Hole & adventure at your doorstep",
    description:
      "Staying in Ocho Rios puts you closest to Dunn's River Falls, Blue Hole, Konoko Falls, and dolphin encounters. We pick up locally for waterfall tours and connect Montego Bay guests for north coast combo packages — one driver, one quote, no switching operators.",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=1200&q=80",
    pickupPolicy:
      "Local Ocho Rios pickup for waterfall and adventure tours. Montego Bay guests traveling to Ochi for day trips include transport in the package quote.",
    transportNote:
      "From Ochi resorts: 10–20 minutes to Dunn's River, 20–30 minutes to Blue Hole. From MoBay resorts: 60–90 minutes to Ochi attractions.",
    resorts: [
      { name: "Sandals Ochi Beach Resort", area: "Ocho Rios", notes: "Couples-only — waterfall tours nearby" },
      { name: "Moon Palace Jamaica", area: "Ocho Rios", notes: "Large family resort — local pickup" },
      { name: "Couples Tower Isle", area: "Ocho Rios", notes: "Private island couples resort" },
      { name: "RIU Ocho Rios", area: "Ocho Rios", notes: "All-inclusive on the north coast" },
      { name: "Jewel Dunn's River Beach Resort", area: "Ocho Rios", notes: "Steps from the falls" },
      { name: "Sunset at the Palms", area: "Negril / Ochi", notes: "Boutique property — ask for pickup quote" },
      { name: "Rooms on the Beach Ocho Rios", area: "Ocho Rios", notes: "Central Ochi location" },
      { name: "Pier 1 Resort", area: "Ocho Rios", notes: "Waterfront Ochi property" },
    ],
    recommendedTours: [
      {
        name: "Dunn's River Falls",
        duration: "Half day",
        description: "Guided climb of Jamaica's most famous waterfall — local Ochi pickup.",
        excursionSlug: "dunns-river-falls",
      },
      {
        name: "Blue Hole",
        duration: "Half day",
        description: "Hidden jungle waterfalls and cliff jumping in the Ochi hills.",
        excursionSlug: "blue-hole",
      },
      {
        name: "Konoko Falls",
        duration: "Half day",
        description: "Botanical gardens and quieter waterfall pools — less crowded alternative.",
        excursionSlug: "konoko-falls",
      },
      {
        name: "ATV, Zipline & Dunn's River Combo",
        duration: "Full day",
        description: "Three activities, one package — the ultimate Ochi adventure day.",
        excursionSlug: "atv-zipline-dunns-river-combo",
      },
    ],
    highlights: [
      "Shortest drive to Dunn's River & Blue Hole",
      "Combo packages stack multiple Ochi activities",
      "MoBay day-trip transport available",
      "Dolphin encounter tours from Ochi",
    ],
    faqs: [
      {
        question: "I'm at Moon Palace — can you pick up for Blue Hole only?",
        answer:
          "Yes. Message us with your date and group size — we quote local Ochi pickup separately from MoBay day-trip pricing.",
      },
      {
        question: "Can MoBay guests do an Ochi combo in one day?",
        answer:
          "Absolutely. ATV + Zipline + Dunn's River is our most popular full-day package from MoBay resorts — transport included in the quote.",
      },
    ],
  },
];

export function getResortGuide(slug: string): ResortGuide | undefined {
  return resortGuides.find((g) => g.slug === slug);
}
