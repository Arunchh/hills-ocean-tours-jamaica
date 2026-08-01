export type CityTour = {
  name: string;
  type: "transfer" | "excursion" | "activity" | "combo";
  duration: string;
  priceFrom: number;
  description: string;
  excursionSlug?: string;
};

export type CityTourGuide = {
  city: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  mapEmbedUrl?: string;
  popularResorts: string[];
  highlights: string[];
  tours: CityTour[];
};

export const cityTourGuides: CityTourGuide[] = [
  {
    city: "Montego Bay",
    slug: "montego-bay",
    tagline: "Your home base for north coast adventures",
    description:
      "Montego Bay is where we pick up most guests — from Hip Strip hotels and Sangster Airport (MBJ) to out-of-area resorts. Water sports at One Man Beach and Pier One, plus departures for Ocho Rios day trips and Falmouth cruise connections.",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-77.98%2C18.42%2C-77.85%2C18.52&layer=mapnik&marker=18.4712%2C-77.9188",
    popularResorts: [
      "Secrets St. James",
      "Holiday Inn Resort",
      "Royalton Blue Waters",
      "Grand Palladium Jamaica",
      "Excellence Oyster Bay",
      "Princess Grand Jamaica",
    ],
    highlights: [
      "Sangster Airport (MBJ) transfers",
      "Clear kayak drone photoshoots at One Man Beach",
      "Jet car rentals at Pier One",
      "Private yacht charters from MoBay harbour",
    ],
    tours: [
      {
        name: "Clear Kayak Photoshoot",
        type: "activity",
        duration: "2–3 hours",
        priceFrom: 140,
        description: "Drone photoshoot at One Man Beach with hotel pickup in Montego Bay.",
        excursionSlug: "clear-kayak-photoshoot",
      },
      {
        name: "Jet Car Rental",
        type: "activity",
        duration: "30 minutes",
        priceFrom: 350,
        description: "2-seat or 4-seat jet car at Pier One with edited drone video same day.",
        excursionSlug: "jet-car-rental",
      },
      {
        name: "Private Yacht Charter",
        type: "excursion",
        duration: "Half or full day",
        priceFrom: 0,
        description: "Custom routes for couples, families, and groups.",
        excursionSlug: "private-yacht-charter",
      },
      {
        name: "Airport Transfer (MBJ)",
        type: "transfer",
        duration: "30–60 min",
        priceFrom: 0,
        description: "Hotel ↔ Sangster Airport pickup and drop-off.",
      },
    ],
  },
  {
    city: "Falmouth Cruise Port",
    slug: "falmouth",
    tagline: "Cruise ship excursions & port transfers",
    description:
      "Falmouth is the main cruise port for western Jamaica. We meet passengers at the terminal for timed excursions and round-trip transfers — with return planned before your ship's all-aboard.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-77.68%2C18.48%2C-77.62%2C18.52&layer=mapnik&marker=18.5036%2C-77.6434",
    popularResorts: ["Falmouth Cruise Port terminal"],
    highlights: [
      "Meet-and-greet at cruise terminal",
      "Timed return before all-aboard",
      "Day trips toward Montego Bay and Ocho Rios",
      "Luminous Lagoon night tours nearby",
    ],
    tours: [
      {
        name: "Cruise Port Transfer",
        type: "transfer",
        duration: "Varies",
        priceFrom: 0,
        description: "Terminal pickup and drop-off timed to your ship schedule.",
      },
      {
        name: "Luminous Lagoon",
        type: "excursion",
        duration: "3 hours",
        priceFrom: 0,
        description: "Evening bioluminescent lagoon boat tour near Falmouth.",
        excursionSlug: "luminous-lagoon",
      },
      {
        name: "Montego Bay Day Trip",
        type: "excursion",
        duration: "Full day",
        priceFrom: 0,
        description: "Beach, Hip Strip, or water sports from your cruise day in port.",
      },
    ],
  },
  {
    city: "Ocho Rios",
    slug: "ocho-rios",
    tagline: "Waterfalls, Blue Hole & combo day trips",
    description:
      "Ocho Rios is the north coast adventure hub — Dunn's River Falls, Blue Hole, and multi-activity combo packages. We transport guests from Montego Bay resorts for full-day trips with one driver and one quote.",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfcb0?auto=format&fit=crop&w=1200&q=80",
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-77.12%2C18.38%2C-77.02%2C18.44&layer=mapnik&marker=18.4074%2C-77.1031",
    popularResorts: ["Sandals Ochi", "Moon Palace Jamaica", "Couples Tower Isle"],
    highlights: [
      "Dunn's River Falls guided climbs",
      "Blue Hole swimming and cliff jumping",
      "ATV + zipline + waterfall combo packages",
      "Transport from Montego Bay resorts included on day trips",
    ],
    tours: [
      {
        name: "Dunn's River Falls",
        type: "excursion",
        duration: "Full day",
        priceFrom: 0,
        description: "Iconic waterfall climb with transport from MoBay.",
        excursionSlug: "dunns-river-falls",
      },
      {
        name: "Blue Hole",
        type: "excursion",
        duration: "Full day",
        priceFrom: 0,
        description: "Hidden waterfalls and swimming holes in the hills.",
        excursionSlug: "blue-hole",
      },
      {
        name: "ATV, Zipline & Dunn's River Combo",
        type: "combo",
        duration: "Full day",
        priceFrom: 0,
        description: "Three activities, one package price.",
        excursionSlug: "atv-zipline-dunns-river-combo",
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  sections: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "clear-kayak-photoshoot-guide",
    title: "Clear Kayak Photoshoot in Montego Bay — What to Expect",
    excerpt:
      "Everything you need to know about the clear kayak drone photoshoot at One Man Beach — pricing, timing, and what you'll receive.",
    date: "2026-01-15",
    readTime: "5 min read",
    category: "Water Sports",
    keywords: ["clear kayak Montego Bay", "drone photoshoot Jamaica"],
    sections: [
      {
        heading: "Best Time for Your Shoot",
        paragraphs: [
          "The recommended window is 10:00 AM to 12:00 PM when the water is calmest and lighting is ideal for drone photography.",
        ],
      },
      {
        heading: "What You'll Receive",
        paragraphs: [
          "Every package includes 5 edited photos, 1 edited 4K video, and 30–50+ unedited pictures delivered the same day. Screenshot your favorites and send via WhatsApp for editing.",
        ],
      },
    ],
  },
  {
    slug: "montego-bay-airport-transfer-guide",
    title: "Montego Bay Airport Transfer Guide (MBJ) — What to Book Before You Land",
    excerpt:
      "How to pre-book your Sangster Airport pickup, what to expect at MBJ, and why WhatsApp confirmation beats hailing a taxi on arrival.",
    date: "2026-02-01",
    readTime: "6 min read",
    category: "Transfers",
    keywords: [
      "Montego Bay airport transfer",
      "MBJ taxi",
      "Sangster Airport pickup",
      "Montego Bay transportation",
    ],
    sections: [
      {
        heading: "Why Pre-Book Your MBJ Transfer",
        paragraphs: [
          "Sangster International Airport (MBJ) is busy year-round. Pre-booking means your driver knows your flight time, hotel, and group size before you land — no haggling at the curb after a long flight.",
          "Message us on WhatsApp with your airline, arrival time, hotel name, and passenger count. We confirm pricing upfront — one brand, one fleet, no surprise upsells at the airport.",
        ],
      },
      {
        heading: "Pickup Process at MBJ",
        paragraphs: [
          "After you collect luggage, your driver meets you in the approved pickup area. Share your live location on WhatsApp if you're delayed — we adjust when possible.",
          "Round-trip bookings are available. A 50% deposit secures your date; cancel up to 7 days before for a full deposit refund.",
        ],
      },
      {
        heading: "Resorts We Serve from MBJ",
        paragraphs: [
          "We cover Hip Strip hotels, Montego Bay Airbnbs, and out-of-area properties like Royalton Blue Waters, Grand Palladium, and Excellence Oyster Bay — transport fees quoted before you book.",
        ],
      },
    ],
  },
  {
    slug: "falmouth-cruise-port-excursions",
    title: "Falmouth Cruise Port Excursions — How to Plan Your Day in Port",
    excerpt:
      "Cruise passengers: how to time your Falmouth excursion, what tours fit a port day, and how we get you back before all-aboard.",
    date: "2026-02-10",
    readTime: "7 min read",
    category: "Cruise",
    keywords: [
      "Falmouth cruise port excursions",
      "Jamaica cruise shore excursions",
      "Falmouth Jamaica tours",
    ],
    sections: [
      {
        heading: "How Much Time Do You Have?",
        paragraphs: [
          "Most Falmouth port calls allow 6–8 hours ashore. Share your ship name, docking time, and all-aboard deadline on WhatsApp — we build an itinerary that fits with buffer time for traffic.",
        ],
      },
      {
        heading: "Popular Excursions from Falmouth",
        paragraphs: [
          "Luminous Lagoon evening tours, Montego Bay beach and water sports, and Ocho Rios day trips (Dunn's River, Blue Hole) are all possible depending on your port hours. Combo packages stack multiple activities when timing allows.",
        ],
      },
      {
        heading: "Meet-and-Greet at the Terminal",
        paragraphs: [
          "We meet you at the cruise terminal — no searching for a driver in the parking lot. Your guide tracks the schedule and plans return so you're back at the ship on time.",
        ],
      },
    ],
  },
  {
    slug: "best-combo-tours-montego-bay",
    title: "Best Combo Tours from Montego Bay — One Price, Multiple Activities",
    excerpt:
      "Stack ATV, waterfalls, zipline, and more into a single day. How combo packages work and which ones fit your group.",
    date: "2026-02-20",
    readTime: "6 min read",
    category: "Tours",
    keywords: [
      "Montego Bay combo tours",
      "Jamaica combo packages",
      "Dunn's River combo tour",
      "ATV and bamboo rafting Montego Bay",
    ],
    sections: [
      {
        heading: "Why Book a Combo Instead of Separate Tours",
        paragraphs: [
          "One driver, one quote, one pickup time. Combo packages like ATV plus bamboo rafting or Dunn's River plus zipline save you from coordinating multiple operators and paying separate transport fees.",
        ],
      },
      {
        heading: "Popular Combos We Offer",
        paragraphs: [
          "ATV & Bamboo Rafting (Montego Bay), ATV + Zipline + Dunn's River Falls (Ocho Rios), and Dolphin Encounter + Dunn's River for families. Message us on WhatsApp with your group size and hotel — we confirm total price before you pay your 50% deposit.",
        ],
      },
      {
        heading: "Custom Combos",
        paragraphs: [
          "Don't see your ideal stack? Ask us to build a custom day — private yacht mornings plus afternoon waterfall trips, or cruise port combos timed to your ship.",
        ],
      },
    ],
  },
];

export function getCityGuide(slug: string): CityTourGuide | undefined {
  return cityTourGuides.find((g) => g.slug === slug);
}
