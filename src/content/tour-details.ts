export type PricingTier = {
  name: string;
  price: number;
  note?: string;
};

export type ItineraryStep = {
  time: string;
  title: string;
  description: string;
};

export type TourDetail = {
  slug: string;
  name: string;
  location: string;
  duration: string;
  recommendedTime?: string;
  currency: "USD";
  summary: string;
  pricingTiers: PricingTier[];
  pricingNote?: string;
  included: string[];
  excluded?: string[];
  itinerary?: ItineraryStep[];
  similarTourSlugs?: string[];
  deliverables?: { label: string; detail: string }[];
  editingWorkflow?: string[];
  whatToBring: string[];
  transport: {
    included: string;
    fees: string[];
    location: string;
  };
  deposit: {
    amount: number;
    unit: "per person";
    methods: string[];
    nonRefundable: true;
    balanceNote: string;
    sitePolicyNote?: string;
  };
  extras?: { label: string; price: string }[];
  ageRequirement?: string;
  image: string;
  images?: string[];
};

export const tourDetails: TourDetail[] = [
  {
    slug: "clear-kayak-photoshoot",
    name: "Clear Kayak Photoshoot",
    location: "One Man Beach, Montego Bay",
    duration: "2–3 hours",
    recommendedTime: "10:00 AM – 12:00 PM",
    currency: "USD",
    summary:
      "Glide over crystal-clear water in a transparent kayak while a drone captures stunning photos and 4K video. Packages include kayak rental and a professional drone photoshoot.",
    pricingTiers: [
      { name: "Clear Kayak Drone Photo Shoot", price: 140 },
      { name: "Clear Kayak Drone Photo Shoot with Flowers", price: 230 },
      { name: "1 Couple Photoshoot", price: 250 },
    ],
    pricingNote: "Prices include clear kayak rental and drone photoshoot.",
    included: [
      "Clear kayak rental",
      "Drone photoshoot session",
      "Roundtrip transportation from Montego Bay hotels/Airbnbs",
      "5 edited photos + 1 edited 4K video",
      "30–50+ unedited photos same day",
    ],
    excluded: [
      "Transportation from resorts outside Montego Bay (fee applies)",
      "Extra edited photos beyond the 5 included ($10 each)",
      "Rush editing ($100 fee)",
      "Gratuities",
    ],
    itinerary: [
      {
        time: "Pickup",
        title: "Hotel pickup",
        description: "We collect you from your Montego Bay hotel or Airbnb (included in MoBay).",
      },
      {
        time: "10:00 AM",
        title: "Arrive at One Man Beach",
        description: "Briefing, kayak setup, and safety overview before entering the water.",
      },
      {
        time: "10:30 AM",
        title: "Drone photoshoot session",
        description: "Clear kayak session with aerial drone photography and video capture.",
      },
      {
        time: "12:00 PM",
        title: "Return & same-day delivery",
        description: "Unedited photos via WeTransfer/Google Drive. Send WhatsApp picks for editing.",
      },
    ],
    similarTourSlugs: ["jet-car-rental", "private-yacht-charter"],
    deliverables: [
      { label: "Edited photos", detail: "5 edited pictures" },
      { label: "Edited video", detail: "1 edited video in 4K (ultra HD)" },
      {
        label: "Unedited photos",
        detail: "30–50+ unedited pictures same day via WeTransfer or Google Drive",
      },
      {
        label: "Edited delivery",
        detail: "Edited photos via WeTransfer within 3–5 days after the shoot",
      },
    ],
    editingWorkflow: [
      "Receive 30–50 unedited photos the same day via WeTransfer or Google Drive",
      "Screenshot the 5 photos you want edited",
      "Send your selections via WhatsApp for editing",
      "Receive edited photos via WeTransfer in 3–5 days",
    ],
    whatToBring: ["Sunglasses", "Towel", "Water shoes", "Swimwear"],
    transport: {
      included: "Roundtrip transportation included if your hotel/Airbnb is in Montego Bay.",
      fees: [
        "Transportation fee applies for hotels outside Montego Bay (Ocean Eden Bay, Ocean Coral Spring, Royalton Blue Waters, Royalton Hideaway, Riu Aquarelle, Grand Palladium Lady Hamilton, Grand Palladium Jamaica, Excellence Oyster Bay, Princess Grand Jamaica, Princess Senses the Mangrove).",
        "Non-participating guests pay the same transportation fee — only booked clients get included pickup.",
      ],
      location: "One Man Beach, Montego Bay",
    },
    deposit: {
      amount: 70,
      unit: "per person",
      methods: ["CashApp", "Zelle"],
      nonRefundable: true,
      balanceNote:
        "Balance due in USD cash on arrival at pickup, the day of your scheduled photoshoot.",
      sitePolicyNote:
        "Site-wide policy: 50% deposit secures your date. Cancel up to 7 days before for a full deposit refund unless otherwise noted for this experience.",
    },
    extras: [
      { label: "Additional edited photos (beyond 5)", price: "$10 per picture" },
      { label: "Rush editing (faster than 3–5 days)", price: "$100 rush fee" },
    ],
    image: "/images/tours/clear-kayak/01-hero-drone.jpeg",
    images: [
      "/images/tours/clear-kayak/01-hero-drone.jpeg",
      "/images/tours/clear-kayak/02-water-closeup.jpeg",
      "/images/tours/clear-kayak/03-birthday-special.jpeg",
      "/images/tours/clear-kayak/04-sombrero-hat.jpeg",
      "/images/tours/clear-kayak/05-couple-kayak.jpeg",
    ],
  },
  {
    slug: "jet-car-rental",
    name: "Jet Car Rental",
    location: "Pier One, Montego Bay",
    duration: "30 minutes",
    currency: "USD",
    summary:
      "Drive a jet-powered car on the water at Pier One, Montego Bay. Choose a 2-seat or 4-seat jet car — pricing is per car, not per person. Includes an edited drone video delivered same day.",
    pricingTiers: [
      { name: "2-Seat Jet Car (30 min)", price: 350, note: "1–2 people only" },
      { name: "4-Seat Jet Car (30 min)", price: 600, note: "3–4 people only" },
    ],
    pricingNote: "Prices are per car, not per person.",
    included: [
      "Jet car rental (30 minutes)",
      "1 edited drone video",
      "Pictures and video same day",
      "Roundtrip transportation from Montego Bay hotels/Airbnbs",
    ],
    excluded: ["Gratuities", "Additional ride time beyond 30 minutes", "Non-participants in vehicle"],
    itinerary: [
      {
        time: "Pickup",
        title: "Hotel pickup",
        description: "Transport from your Montego Bay accommodation to Pier One.",
      },
      {
        time: "On arrival",
        title: "Safety briefing",
        description: "Instructions and life vest fitting before launch.",
      },
      {
        time: "30 min",
        title: "Jet car ride",
        description: "Open-water session with drone capture of your ride.",
      },
      {
        time: "Same day",
        title: "Media delivery",
        description: "Edited drone video and photos via AirDrop or WeTransfer.",
      },
    ],
    similarTourSlugs: ["clear-kayak-photoshoot", "private-yacht-charter"],
    deliverables: [
      { label: "Edited video", detail: "1 edited drone video" },
      {
        label: "Delivery",
        detail: "Pictures and video sent via AirDrop or WeTransfer the same day",
      },
    ],
    whatToBring: ["Sunglasses", "Towel", "Water shoes", "Valid ID (driver 18+)"],
    transport: {
      included: "Roundtrip transportation from Montego Bay hotels/Airbnbs.",
      fees: ["$20 per person roundtrip (Montego Bay hotels/Airbnbs)"],
      location: "Pier One, Montego Bay",
    },
    deposit: {
      amount: 50,
      unit: "per person",
      methods: ["CashApp", "Zelle"],
      nonRefundable: true,
      balanceNote: "Balance due on arrival. Deposit secures your booking date.",
      sitePolicyNote:
        "Site-wide policy: 50% deposit secures your date. Cancel up to 7 days before for a full deposit refund.",
    },
    ageRequirement: "Driver must be 18+ years old.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getTourDetail(slug: string): TourDetail | undefined {
  return tourDetails.find((t) => t.slug === slug);
}
