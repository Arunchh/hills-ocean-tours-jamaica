export const siteConfig = {
  business: {
    name: "Hills Ocean Tours Jamaica",
    tagline: "Your Trusted Local Montego Bay Tour Operator",
    description:
      "Local Montego Bay specialist for tours, combo packages, private yacht charters, and airport or cruise port transfers. Montego Bay, Ocho Rios & Falmouth — book via WhatsApp.",
    phone: "+1-876-571-2157",
    phoneDisplay: "+1 (876) 571-2157",
    whatsapp: "18765712157",
    email: "hillsoceantoursja@gmail.com",
    cashapp: "$HillsOceanTours",
    zelle: "hillsoceantoursja@gmail.com",
    address: "Montego Bay, St. James, Jamaica",
    licenseNumber: "JTB-TO-[TBD]",
    yearsInBusiness: 8,
    googleRating: 4.9,
    reviewCount: 0,
    logoText: "Hills Ocean",
    logoAccent: "Tours Jamaica",
    businessHours: "Monday – Sunday, 9:00 AM – 6:30 PM (Jamaica time)",
    responseTime: "We typically reply on WhatsApp within 2 hours during business hours.",
    credentials: [
      { label: "JTB Tour Operator License", value: "JTB-TO-[TBD]" },
      { label: "Tour Operator Insurance", value: "Policy #[TBD]" },
    ],
  },

  seo: {
    siteUrl: "https://www.hillsoceantoursjamaica.com",
    keywords: [
      "Montego Bay tours",
      "Montego Bay airport transfer",
      "Falmouth cruise port transfer",
      "combo tours Jamaica",
      "private yacht charter Montego Bay",
      "clear kayak photoshoot Jamaica",
      "Dunn's River Falls tour from Montego Bay",
      "Montego Bay excursion driver",
      "Ocho Rios day trip from Montego Bay",
      "Montego Bay nightlife packages",
      "tours from Hyatt Zilara Rose Hall",
      "Rose Hall excursions pickup",
      "9 Mile Bob Marley tour Montego Bay",
      "Rick's Cafe sunset tour Jamaica",
    ],
  },

  hero: {
    headline: "Your Trusted Local Operator for Montego Bay Tours & Transfers",
    subheadline:
      "Single tours, combo packages, drone photoshoots, nightlife packages, and private yacht charters across Montego Bay and Ocho Rios. Airport and cruise port transfers available. Message us on WhatsApp to check availability.",
    primaryCta: "Browse Tours",
    secondaryCta: "Airport & Cruise Transfer",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Turquoise Caribbean water in Montego Bay, Jamaica",
    badges: ["Local MoBay Operator", "Drone Photo & Video", "Hotel Pickup", "WhatsApp Booking"],
  },

  trustPoints: [
    { label: "JTB Licensed Operator", icon: "shield" as const },
    { label: "50% Deposit to Book", icon: "dollar" as const },
    { label: "Cancel 7 Days Before", icon: "clock" as const },
    { label: "WhatsApp Confirmation", icon: "star" as const },
  ],

  valueProps: [
    {
      title: "One Local Operator You Can Trust",
      description:
        "Not a faceless booking platform — a Montego Bay-based team that knows the resorts, roads, and best times for every experience.",
    },
    {
      title: "Single Tours & Combo Packages",
      description:
        "Book one activity or stack your day — ATV plus bamboo rafting, Dunn's River combos, and more with one driver and one quote.",
    },
    {
      title: "Montego Bay, Ocho Rios & Falmouth",
      description:
        "We serve the north coast corridor your vacation actually covers — from Hip Strip hotels to Falmouth cruise port and Ocho Rios day trips.",
    },
  ],

  depositPolicy: {
    depositPercent: 50,
    cancellationDays: 7,
  },

  promoBanner: {
    enabled: false,
    message: "Welcome back to Jamaica — ask about current seasonal offers when you message us.",
    ctaText: "Browse Tours",
    ctaHref: "/#tours",
    terms: "Ask on WhatsApp for valid dates and eligible tours. Cannot be combined with other offers unless stated.",
  },

  serviceArea: {
    eyebrow: "Where We Operate",
    title: "Montego Bay, Ocho Rios & North Coast",
    description:
      "We focus on the areas most visitors actually stay and sail into — not island-wide. Kingston is outside our service area.",
    regions: [
      {
        name: "Montego Bay",
        slug: "montego-bay",
        description: "Hotels, Airbnbs, Hip Strip, Sangster Airport (MBJ), and Pier One waterfront.",
      },
      {
        name: "Falmouth Cruise Port",
        slug: "falmouth",
        description: "Round-trip excursions and transfers for cruise ship passengers.",
      },
      {
        name: "Ocho Rios",
        slug: "ocho-rios",
        description: "Blue Hole, Dunn's River Falls, and north coast combo day trips from MoBay resorts.",
      },
      {
        name: "Out-of-Area Resorts",
        slug: "montego-bay",
        description: "Royalton, Grand Palladium, Excellence Oyster Bay, and nearby properties — transport fee quoted upfront.",
      },
    ],
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-77.98%2C18.35%2C-77.05%2C18.55&layer=mapnik&marker=18.4712%2C-77.9188",
    mapTitle: "Montego Bay service area map",
  },

  transport: {
    eyebrow: "Pickup & Transportation",
    title: "Montego Bay Pickup Included on Select Tours",
    description:
      "Roundtrip transportation is included when your hotel or Airbnb is in Montego Bay. A transportation fee applies for out-of-area resorts and non-participating guests.",
    includedNote: "Roundtrip transportation included for Montego Bay hotels & Airbnbs",
    feeNote: "Transportation fee applies for resorts outside Montego Bay",
    nonParticipantNote:
      "Only clients booked for the experience are picked up free. Non-participants pay the same transportation fee.",
    outOfAreaResorts: [
      "Ocean Eden Bay",
      "Ocean Coral Spring",
      "Royalton Blue Waters",
      "Royalton White Sands",
      "Royalton Hideaway",
      "Riu Aquarelle",
      "Riu Palace Jamaica",
      "Grand Palladium Lady Hamilton",
      "Grand Palladium Jamaica",
      "Excellence Oyster Bay",
      "Princess Grand Jamaica",
      "Princess Senses the Mangrove",
      "Hyatt Zilara Rose Hall",
      "Hilton Rose Hall",
      "Moon Palace Jamaica",
    ],
  },

  services: [
    {
      title: "Water & Beach",
      description:
        "Clear kayak drone photoshoots, jet skis, jet cars, parasailing, catamaran cruises, and bamboo rafting.",
      icon: "map" as const,
      priceFrom: 140,
    },
    {
      title: "Adventure & Land",
      description:
        "ATV trails, ziplining, farm tours, and horseback riding — action-packed experiences around Montego Bay.",
      icon: "users" as const,
      priceFrom: 0,
    },
    {
      title: "Culture & Day Trips",
      description:
        "Dunn's River, Blue Hole, Rose Hall, 9 Mile Bob Marley, Rick's Café, and Negril day trips from MoBay.",
      icon: "plane" as const,
      priceFrom: 0,
    },
    {
      title: "Nightlife & Romance",
      description:
        "MoBay nightlife transport, Lounge 2727, Margaritaville, and candlelight beach dinners — we plan your night.",
      icon: "hotel" as const,
      priceFrom: 0,
    },
    {
      title: "Private Yacht Charters",
      description:
        "Private yacht and catamaran charters for couples, families, and groups — sunset cruises and custom routes.",
      icon: "hotel" as const,
      priceFrom: 0,
    },
  ],

  tourCategories: [
    {
      id: "water",
      label: "Water & Beach",
      description: "Kayak shoots, jet cars, jet skis, and ocean adventures",
    },
    {
      id: "adventure",
      label: "Adventure & Land",
      description: "ATV, farm tours, and horseback riding",
    },
    {
      id: "day-trips",
      label: "Day Trips",
      description: "Ocho Rios waterfalls, Negril sunsets, and north coast highlights",
    },
    {
      id: "culture",
      label: "Culture & Heritage",
      description: "Bob Marley, Rose Hall, and Jamaican history experiences",
    },
    {
      id: "dining",
      label: "Romance & Dining",
      description: "Beach dinners and special-occasion packages",
    },
    {
      id: "combo",
      label: "Combo Tours",
      description: "Multiple activities, one package price",
    },
    {
      id: "yacht",
      label: "Private Yacht",
      description: "Private yacht and catamaran charters",
    },
  ],

  featuredTourSlugs: ["clear-kayak-photoshoot", "jet-car-rental"],

  excursions: [
    {
      slug: "clear-kayak-photoshoot",
      name: "Clear Kayak Photoshoot",
      category: "water",
      tourKind: "single" as const,
      location: "One Man Beach, Montego Bay",
      duration: "2–3 hours",
      priceFrom: 140,
      priceType: "from" as const,
      highlights: ["Drone photoshoot", "5 edited photos + 4K video", "Hotel pickup in MoBay"],
      image: "/images/tours/clear-kayak/01-hero-drone.jpeg",
      images: [
        "/images/tours/clear-kayak/01-hero-drone.jpeg",
        "/images/tours/clear-kayak/02-water-closeup.jpeg",
        "/images/tours/clear-kayak/03-birthday-special.jpeg",
        "/images/tours/clear-kayak/04-sombrero-hat.jpeg",
        "/images/tours/clear-kayak/05-couple-kayak.jpeg",
      ],
      popular: true,
      hasDetailPage: true,
    },
    {
      slug: "jet-car-rental",
      name: "Jet Car Rental",
      category: "water",
      tourKind: "single" as const,
      location: "Pier One, Montego Bay",
      duration: "30 minutes",
      priceFrom: 350,
      priceType: "from" as const,
      highlights: ["2-seat or 4-seat", "Edited drone video", "Per car pricing"],
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: true,
    },
    {
      slug: "atv",
      name: "ATV Adventure",
      category: "adventure",
      tourKind: "single" as const,
      location: "Montego Bay area",
      duration: "3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Off-road trails", "Countryside views", "Hotel pickup"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "weed-farm",
      name: "Weed Farm Tour",
      category: "adventure",
      tourKind: "single" as const,
      location: "Jamaica",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Local farm visit", "Cultural experience", "Guided tour"],
      image:
        "https://images.unsplash.com/photo-1536697246787-1f7ae1d80506?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "jet-ski",
      name: "Jet Ski",
      category: "water",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "30–60 min",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Open water ride", "Beach launch", "Couples welcome"],
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "horseback-beach",
      name: "Horseback Riding on the Beach",
      category: "adventure",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "2–3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Beach ride", "Scenic trails", "All skill levels"],
      image:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5f?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "horseback-riding",
      name: "Horseback Riding",
      category: "adventure",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "2–3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Guided ride", "Countryside & trails", "Photo stops"],
      image:
        "https://images.unsplash.com/photo-1598971639052-f7a192784a88?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "bamboo-rafting",
      name: "Bamboo Rafting",
      category: "water",
      tourKind: "single" as const,
      location: "Jamaica",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["River raft", "Relaxing float", "Nature scenery"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "blue-hole",
      name: "Blue Hole",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Ocho Rios",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Swimming", "Cliff jumping", "Transport from MoBay"],
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "dunns-river-falls",
      name: "Dunn's River Falls",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Ocho Rios",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Guided climb", "Iconic waterfall", "Transport from MoBay"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "luminous-lagoon",
      name: "Luminous Lagoon",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Falmouth area",
      duration: "3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Glowing water", "Night boat ride", "Unique experience"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "party-catamaran",
      name: "Party Catamaran Cruise",
      category: "water",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "3–4 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Open bar", "Snorkeling", "Music & dancing"],
      image:
        "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "parasailing",
      name: "Parasailing",
      category: "water",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "1 hour",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Aerial views", "Beach launch", "Photo-worthy"],
      image:
        "https://images.unsplash.com/photo-1505118389757-91dd49627c00?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "sea-tubing",
      name: "Sea Tubing",
      category: "water",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "1–2 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Speed & splash", "Group fun", "Ocean ride"],
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "rockland-bird-sanctuary",
      name: "Rockland Bird Sanctuary",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Near Montego Bay",
      duration: "2–3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Hand-feed hummingbirds", "Nature walk", "Family friendly"],
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "atv-bamboo-rafting-combo",
      name: "ATV & Bamboo Rafting Combo",
      category: "combo",
      tourKind: "combo" as const,
      location: "Montego Bay",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["ATV trails", "River bamboo raft", "One package price"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "atv-zipline-dunns-river-combo",
      name: "ATV, Zipline & Dunn's River Falls",
      category: "combo",
      tourKind: "combo" as const,
      location: "Ocho Rios",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Three activities", "Transport from MoBay", "Full north coast day"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "atv-horseback-zipline-dunns-combo",
      name: "ATV, Horseback, Zipline & Dunn's River",
      category: "combo",
      tourKind: "combo" as const,
      location: "Ocho Rios",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Four-in-one package", "Guided all day", "Transport included"],
      image:
        "https://images.unsplash.com/photo-1553284965-83fd3e82fa5f?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "dolphin-dunns-river-combo",
      name: "Dolphin Encounter & Dunn's River Falls",
      category: "combo",
      tourKind: "combo" as const,
      location: "Ocho Rios",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Dolphin swim", "Waterfall climb", "Family favorite"],
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "private-yacht-charter",
      name: "Private Yacht Charter",
      category: "yacht",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "Half or full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Private vessel", "Custom route", "Couples & groups"],
      image:
        "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "private-catamaran-charter",
      name: "Private Catamaran Charter",
      category: "yacht",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "3–6 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Snorkeling stops", "Sunset option", "Group celebrations"],
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "swimming-with-dolphins",
      name: "Swimming with Dolphins",
      category: "water",
      tourKind: "single" as const,
      location: "Ocho Rios",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Dolphin encounter", "Family friendly", "Transport from MoBay"],
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "ziplining",
      name: "Ziplining Adventure",
      category: "adventure",
      tourKind: "single" as const,
      location: "Montego Bay / Ocho Rios",
      duration: "2–3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Canopy lines", "Rainforest views", "All skill levels"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "konoko-falls",
      name: "Konoko Falls",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Ocho Rios",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Botanical gardens", "Waterfall pools", "Less crowded than Dunn's River"],
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb6668c21a?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "ys-falls",
      name: "YS Falls",
      category: "day-trips",
      tourKind: "single" as const,
      location: "South coast (from MoBay)",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Seven-tier waterfall", "Natural pools", "Scenic south coast drive"],
      image:
        "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "ricks-cafe",
      name: "Rick's Café Sunset",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Negril",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Cliff diving show", "Legendary sunset", "7 Mile Beach stop"],
      image:
        "https://images.unsplash.com/photo-1505118389757-91dd49627c00?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "seven-mile-beach",
      name: "7 Mile Beach Day Trip",
      category: "day-trips",
      tourKind: "single" as const,
      location: "Negril",
      duration: "Full day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["White sand beach", "Swimming & lunch", "Transport from MoBay"],
      image:
        "https://images.unsplash.com/photo-1519046904212-407b7196a9d8?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "floyds-pelican-bar",
      name: "Floyd's Pelican Bar",
      category: "water",
      tourKind: "single" as const,
      location: "Negril (offshore)",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Boat ride to bar on stilts", "Cold drinks in the sea", "Iconic Jamaica photo op"],
      image:
        "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "booby-cay-lobster-lunch",
      name: "Booby Cay Private Boat & Lobster Lunch",
      category: "water",
      tourKind: "single" as const,
      location: "Negril",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Private boat charter", "Fresh lobster lunch", "Snorkeling stop"],
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      popular: false,
      hasDetailPage: false,
    },
    {
      slug: "nine-mile-bob-marley",
      name: "9 Mile Bob Marley Tour",
      category: "culture",
      tourKind: "single" as const,
      location: "St. Ann (from MoBay)",
      duration: "Half day",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Birthplace & mausoleum", "Reggae history", "Guided cultural tour"],
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "rose-hall-great-house",
      name: "Rose Hall Great House",
      category: "culture",
      tourKind: "single" as const,
      location: "Rose Hall, Montego Bay",
      duration: "3–4 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Historic plantation tour", "Rose Hall corridor pickup", "Evening tour option"],
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "romantic-beach-dinner",
      name: "Romantic Beach Dinner",
      category: "dining",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "3–4 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Private beach setup", "Candlelight dining", "Couples & anniversaries"],
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      popular: true,
      hasDetailPage: false,
    },
    {
      slug: "drone-aerial-package",
      name: "Drone Photo & Video Package",
      category: "water",
      tourKind: "single" as const,
      location: "Montego Bay",
      duration: "2–3 hours",
      priceFrom: 0,
      priceType: "quote" as const,
      highlights: ["Aerial drone coverage", "Edited photos + 4K video", "Add-on to any tour"],
      image: "/images/tours/clear-kayak/01-hero-drone.jpeg",
      popular: true,
      hasDetailPage: false,
    },
  ],

  nightlife: {
    eyebrow: "Nightlife — Montego Bay",
    title: "Your Day Ends — Your Night Begins",
    description:
      "Staying at a lively Montego Bay resort? We arrange nightlife transport and packages so you don't figure out timing or taxis. Message us with your hotel and date — we'll build your night.",
    disclaimer:
      "Venue hours, cover charges, and dress codes change. Adults 18+ for nightclub venues. Nightlife transport is arranged separately — message us for a custom quote.",
    packages: [
      {
        name: "Hip Strip Night Out",
        description:
          "Round-trip transport from your hotel to Margaritaville and Pier One — dinner, drinks, and waterfront vibes on the Hip Strip.",
        includes: ["Hotel pickup & return", "Margaritaville stop", "Pier One waterfront"],
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        badge: "Most Popular",
      },
      {
        name: "Lounge 2727 VIP Evening",
        description:
          "Upscale lounge experience in Montego Bay — we handle transport there and back so you can enjoy the night worry-free.",
        includes: ["Private round-trip transport", "Lounge 2727 drop-off", "Flexible return time"],
        image:
          "https://images.unsplash.com/photo-1566737238500-e93595362873?auto=format&fit=crop&w=800&q=80",
        badge: "Upscale",
      },
      {
        name: "Resort Party Hop",
        description:
          "Visiting Breathless, RIU, or Grand Palladium? We connect your resort's nightlife with off-property venues in one seamless evening.",
        includes: ["Resort pickup", "Multi-venue routing", "Timed return"],
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
        badge: "Resort Guests",
      },
    ],
    venues: [
      {
        name: "Lounge 2727",
        type: "Upscale Lounge",
        description:
          "Montego Bay's go-to for upscale lounge vibes — live DJs, bottle service, and a dressed-up crowd.",
        image:
          "https://images.unsplash.com/photo-1566737238500-e93595362873?auto=format&fit=crop&w=600&q=80",
        vibe: "Upscale · Live DJs",
        highlight: "Best for couples & groups who want a polished night out",
      },
      {
        name: "Margaritaville",
        type: "Beach Bar & Restaurant",
        description:
          "Iconic Hip Strip beach bar — food, frozen drinks, water trampolines, and nightly entertainment steps from the sand.",
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80",
        vibe: "Casual · Beachfront",
        highlight: "Perfect first night in Jamaica — fun without planning",
      },
      {
        name: "Pier One",
        type: "Waterfront Venue",
        description:
          "Waterfront dining and nightlife on the harbour — also home to our jet car experience by day.",
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=80",
        vibe: "Waterfront · Dining + Nightlife",
        highlight: "Combine a jet car session with an evening harbour dinner",
      },
      {
        name: "Taboo",
        type: "Nightclub",
        description:
          "Montego Bay nightclub for late-night dancing — ask your driver for current hours and cover.",
        image:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
        vibe: "Late Night · 18+",
        highlight: "Adults-only — ideal cap to a big night out",
      },
    ],
    partyResorts: [
      {
        name: "Breathless Montego Bay",
        description: "Adults-only resort with pool parties, live DJs, and themed events.",
        vibe: "Adults · High Energy",
      },
      {
        name: "RIU Montego Bay",
        description: "Vibrant all-inclusive with nightly entertainment and themed parties.",
        vibe: "All-Inclusive · Lively",
      },
      {
        name: "Grand Palladium Jamaica",
        description: "Multiple swim-up bars, beach bars, and nightly themed parties.",
        vibe: "Family + Party · Dynamic",
      },
    ],
    ctaNote: "Tell us your hotel, date, and group size — we'll quote nightlife transport and routing on WhatsApp.",
  },

  resortZones: {
    eyebrow: "Hotel Pickup Zones",
    title: "Tours from Your Resort — We Know Every Pickup Point",
    description:
      "Whether you're on the Hip Strip, Rose Hall corridor, or an out-of-area all-inclusive — we quote transport upfront and pick you up on time.",
    zones: [
      {
        slug: "rose-hall-corridor",
        name: "Rose Hall Corridor",
        tagline: "Hyatt, Hilton, Iberostar & Secrets",
        description:
          "The Rose Hall strip is Jamaica's resort densest zone. We pick up daily for clear kayak shoots, Ocho Rios day trips, and Rose Hall Great House tours.",
        image:
          "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
        pickupNote: "Transport fee may apply — quoted before you book",
        resortCount: 12,
        featuredResorts: ["Hyatt Zilara Rose Hall", "Hyatt Ziva Rose Hall", "Hilton Rose Hall", "Secrets St. James"],
        topTours: ["clear-kayak-photoshoot", "rose-hall-great-house", "dunns-river-falls"],
      },
      {
        slug: "montego-bay-central",
        name: "MoBay Central & Hip Strip",
        tagline: "RIU, Sandals, Margaritaville area",
        description:
          "Closest to One Man Beach, Pier One jet cars, and Hip Strip nightlife. Many tours include free roundtrip pickup from central MoBay hotels.",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        pickupNote: "Free pickup on select tours for Hip Strip & central MoBay",
        resortCount: 10,
        featuredResorts: ["RIU Montego Bay", "Sandals Montego Bay", "Holiday Inn Resort", "Breathless Montego Bay"],
        topTours: ["clear-kayak-photoshoot", "jet-car-rental", "party-catamaran"],
      },
      {
        slug: "runaway-bay-out-of-area",
        name: "Runaway Bay & Out-of-Area",
        tagline: "Grand Palladium, Royalton, Excellence",
        description:
          "Properties east and west of central MoBay — Grand Palladium, Royalton Blue Waters, Excellence Oyster Bay, and Ocean Eden Bay. Transport fee always quoted upfront.",
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        pickupNote: "Out-of-area transport fee applies — confirmed on WhatsApp",
        resortCount: 14,
        featuredResorts: ["Grand Palladium Jamaica", "Royalton Blue Waters", "Excellence Oyster Bay", "Ocean Eden Bay"],
        topTours: ["blue-hole", "dunns-river-falls", "atv-bamboo-rafting-combo"],
      },
      {
        slug: "ocho-rios-resorts",
        name: "Ocho Rios Resorts",
        tagline: "RIU Ochi, Sandals Ochi, Moon Palace",
        description:
          "Staying in Ocho Rios? We run waterfall and adventure day trips locally, and connect MoBay guests for north coast combos.",
        image:
          "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=800&q=80",
        pickupNote: "Local Ochi pickup for waterfall tours; MoBay transport for day trips",
        resortCount: 8,
        featuredResorts: ["Sandals Ochi", "Moon Palace Jamaica", "Couples Tower Isle", "RIU Ocho Rios"],
        topTours: ["dunns-river-falls", "blue-hole", "konoko-falls"],
      },
    ],
  },

  droneShowcase: {
    eyebrow: "Drone Shoots • Tours • Jamaica",
    title: "Professional Drone Photo & Video on Your Tour",
    description:
      "Stand out from every other excursion — our clear kayak photoshoot and drone packages deliver edited photos and 4K video the same day. Screenshot your favorites and send via WhatsApp for editing.",
    deliverables: [
      { label: "5 Edited Photos", detail: "Professionally color-graded and delivered same day" },
      { label: "1 Edited 4K Video", detail: "Cinematic aerial and water-level footage" },
      { label: "30–50+ Unedited Shots", detail: "Via WeTransfer or Google Drive — pick your favorites" },
      { label: "Add-On Any Tour", detail: "Drone coverage available on select experiences — ask on WhatsApp" },
    ],
    image: "/images/tours/clear-kayak/01-hero-drone.jpeg",
    ctaTourSlug: "clear-kayak-photoshoot",
  },

  howItWorks: [
    {
      step: 1,
      title: "Choose Your Tour or Transfer",
      description:
        "Browse single tours, combo packages, or request an airport or cruise port transfer quote on WhatsApp.",
    },
    {
      step: 2,
      title: "Confirm on WhatsApp",
      description:
        "We reply with availability, total price, and pickup details. No automated booking — a real person confirms your trip.",
    },
    {
      step: 3,
      title: "Pay Your 50% Deposit",
      description:
        "Secure your date with a 50% deposit via CashApp or Zelle. Balance due on the day of your tour or transfer.",
    },
    {
      step: 4,
      title: "Get Picked Up & Go",
      description:
        "We meet you at your hotel, Airbnb, airport, or cruise port. Cancel free up to 7 days before your date.",
    },
  ],

  testimonials: [
    {
      name: "Sarah M.",
      location: "Miami, FL",
      text: "The clear kayak photoshoot was the highlight of our trip! Drone shots came out incredible and pickup from our MoBay hotel was seamless. Worth every dollar.",
      rating: 5,
    },
    {
      name: "James & Lisa T.",
      location: "Toronto, Canada",
      text: "Jet car at Pier One was a blast — 4 of us fit perfectly and we got an amazing edited video the same day. Easy deposit via Zelle and cash balance on pickup.",
      rating: 5,
    },
    {
      name: "Daniel R.",
      location: "Atlanta, GA",
      text: "Booked Dunn's River and Blue Hole through them from Royalton Blue Waters. Driver was on time, fair transport fee, and great vibes all day.",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are all prices in US dollars?",
      answer:
        "Yes. Every price on this site is quoted in USD. Deposits are paid via CashApp or Zelle; remaining balances are typically paid in cash on pickup.",
    },
    {
      question: "Is hotel pickup included?",
      answer:
        "For select tours like the Clear Kayak Photoshoot, roundtrip transportation is included when your hotel or Airbnb is in Montego Bay. Resorts outside Montego Bay (Royalton Blue Waters, Grand Palladium, Excellence Oyster Bay, etc.) incur a transportation fee. Non-participating guests also pay a transport fee.",
    },
    {
      question: "How do deposits and cancellations work?",
      answer:
        "A 50% deposit via CashApp or Zelle secures your booking. You may cancel up to 7 days before your tour or transfer date for a full refund of your deposit. Additional cancellation terms may apply to specific experiences — we'll confirm when you book.",
    },
    {
      question: "How do I book?",
      answer:
        "Message us on WhatsApp with your hotel, date, group size, and the tour or transfer you want. We confirm availability and pricing personally — no automated checkout.",
    },
    {
      question: "Do you serve Kingston?",
      answer:
        "No. We focus on Montego Bay, Falmouth cruise port, Ocho Rios, and surrounding north coast resorts. Kingston is outside our service area.",
    },
    {
      question: "Do you offer private yacht charters?",
      answer:
        "Yes. We arrange private yacht and catamaran charters for couples, families, and groups. Message us on WhatsApp with your date, group size, and occasion for a custom quote.",
    },
    {
      question: "Are combo tours available?",
      answer:
        "Yes. Combo packages combine multiple activities — like ATV plus bamboo rafting or Dunn's River plus zipline — into one day with a single price. Browse the Combo Tours category or ask us to build a custom combo.",
    },
    {
      question: "I'm arriving on a cruise ship at Falmouth — will you meet us on time?",
      answer:
        "Yes. Share your ship name, docking date, and disembarkation time on WhatsApp. We track cruise schedules and plan pickup so you have enough time for your tour and return before all-aboard.",
    },
    {
      question: "What if my flight is delayed or my ship arrives late?",
      answer:
        "Message us on WhatsApp as soon as you know. We adjust pickup times when possible. For cruise passengers, we prioritize getting you back to the port before departure.",
    },
    {
      question: "What happens if weather cancels my tour?",
      answer:
        "If we cancel due to unsafe weather, you can reschedule at no extra charge or receive a full refund of your deposit. Light rain may not cancel water activities — we'll advise based on conditions.",
    },
    {
      question: "What time will you pick me up?",
      answer:
        "Pickup time is confirmed on WhatsApp after booking — usually 30–90 minutes before your activity start, depending on your hotel location and tour type. Cruise port pickups are timed to your ship schedule.",
    },
    {
      question: "What do I receive from the Clear Kayak Photoshoot?",
      answer:
        "You receive 5 edited pictures, 1 edited 4K video, and 30–50+ unedited pictures the same day via WeTransfer or Google Drive. Screenshot your 5 picks and send via WhatsApp for editing. Extra edited photos are $10 each; rush editing is $100.",
    },
    {
      question: "What age do I need to drive the jet car?",
      answer: "Drivers must be 18 years or older. Jet car pricing is per car, not per person — 2-seat ($350) or 4-seat ($600) for 30 minutes.",
    },
    {
      question: "Can I book tours that don't have listed prices?",
      answer:
        "Yes. ATV, Jet Ski, Blue Hole, Dunn's River, Rick's Café, 9 Mile Bob Marley, Rose Hall, nightlife transport, and other experiences are available — message us on WhatsApp for a custom quote based on your group size and hotel location.",
    },
    {
      question: "Do you arrange Montego Bay nightlife transport?",
      answer:
        "Yes. We arrange round-trip transport to Lounge 2727, Margaritaville, Pier One, and other MoBay venues. Message us with your hotel, date, and group size for a quote — venue cover charges and entry are separate.",
    },
    {
      question: "Do you pick up from Rose Hall and out-of-area resorts?",
      answer:
        "Yes. We serve Hyatt Zilara/Ziva, Hilton Rose Hall, Grand Palladium, Royalton Blue Waters, Excellence Oyster Bay, and many more. Transport fees for out-of-area properties are quoted upfront on WhatsApp before you pay your deposit.",
    },
  ],

  paymentMethods: ["USD Cash", "CashApp", "Zelle"],

  communications: {
    formProvider: "web3forms" as const,
    web3formsAccessKey: "",
    formspreeFormId: "",
    leadNotificationEmail: "hillsoceantoursja@gmail.com",
    tawkPropertyId: "",
    tawkWidgetId: "",
  },

  social: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/hillsoceansja/",
    tripadvisor: "https://tripadvisor.com",
  },

  nav: [
    { label: "Tours", href: "/#tours" },
    { label: "Resorts", href: "/#resorts" },
    { label: "Transfers", href: "/#transfers" },
    { label: "Nightlife", href: "/#nightlife" },
    { label: "Locations", href: "/locations/montego-bay" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
