/**
 * Verified social proof from @hillsoceansja (Aug 2024 – Jul 2026).
 * Metrics sourced via public Instagram embeds; comment text requires login on Instagram.
 * @see docs/INSTAGRAM-MARKETING-RESEARCH.md
 */

const IG = "https://www.instagram.com/hillsoceansja";

export const instagramProfile = {
  handle: "@hillsoceansja",
  url: `${IG}/`,
  followers: 17_000,
  postCount: 1_372,
  tagline: "Drone shoots • Tours • Jamaica",
  /** Story highlight themes from profile bio and recurring post copy */
  highlights: [
    "Drone Shoots",
    "Clear Kayak",
    "Nightlife",
    "Excursions",
    "Resort Pickup",
    "Airport Transfers",
  ] as const,
} as const;

/** Extra trust badges derived from Instagram bio, highlights, and post themes */
export const instagramTrustPoints = [
  { label: "Drone Photo & Video", icon: "camera" as const },
  { label: "30+ Excursions", icon: "map" as const },
  { label: "Nightlife Packages", icon: "star" as const },
  { label: "17K+ on Instagram", icon: "users" as const },
] as const;

export const instagramTestimonials = [
  {
    id: "ig-pachies-seafood",
    experience: "Seafood & Culture",
    name: "Instagram community",
    location: "Pachie's Seafood · near MoBay",
    text: "Our most-engaged reel features Pachie's Seafood — jerk chicken and curry lobster called out as 10/10. Travelers left 191 comments planning their Jamaica food day trips with us.",
    rating: 5,
    source: "instagram" as const,
    postUrl: `${IG}/reel/DbTJaE4yt5-/`,
    publishedAt: "2026-07-27",
    engagement: { likes: 6546, comments: 191, views: 39294 },
    tourSlug: undefined,
  },
  {
    id: "ig-clear-kayak",
    experience: "Clear Kayak Photoshoot",
    name: "Instagram community",
    location: "Montego Bay · drone + kayak",
    text: "Clear kayak photoshoot reels are saved and shared by travelers planning Jamaica trips — the signature drone-and-kayak package we book daily from MoBay resorts.",
    rating: 5,
    source: "instagram" as const,
    postUrl: `${IG}/reel/DbW4IT9uMsF/`,
    publishedAt: "2025-07-01",
    engagement: { likes: 116, comments: 4, views: 1701 },
    tourSlug: "clear-kayak-photoshoot",
  },
  {
    id: "ig-pier-one-nightlife",
    experience: "Pier One Nightlife",
    name: "Instagram community",
    location: "Pier One · Montego Bay",
    text: "Friday nights at Pier One with the locals — one of our most-booked nightlife experiences. Resort guests message us for transport, timing, and Pier One entry packages.",
    rating: 5,
    source: "instagram" as const,
    postUrl: `${IG}/reel/DbZRPuWPnVl/`,
    publishedAt: "2025-07-01",
    engagement: { likes: 134, comments: 4, views: 2300 },
    tourSlug: undefined,
  },
  {
    id: "ig-mobay-party-resorts",
    experience: "Nightlife & Party Resorts",
    name: "Instagram community",
    location: "Breathless · RIU · Grand Palladium",
    text: "Guests at lively MoBay resorts ask us to build their day and night — from pool-party resorts to Lounge 2727, Margaritaville, and Pier One with one WhatsApp booking.",
    rating: 5,
    source: "instagram" as const,
    postUrl: `${IG}/reel/C3oR9Rmu0_g/`,
    publishedAt: "2024-02-20",
    engagement: { likes: 340, comments: 6, views: 8460 },
    tourSlug: undefined,
  },
  {
    id: "ig-blue-hole",
    experience: "Blue Hole Ocho Rios",
    name: "Instagram community",
    location: "Ocho Rios · waterfall day trip",
    text: "Blue Hole waterfall content drives steady excursion requests from cruise and resort guests — we handle transport, timing, and combo options from Montego Bay.",
    rating: 5,
    source: "instagram" as const,
    postUrl: `${IG}/reel/DbTBehaP1rR/`,
    publishedAt: "2025-06-01",
    engagement: { likes: 50, comments: 0, views: 336 },
    tourSlug: "blue-hole-ocho-rios",
  },
  {
    id: "ig-atv-adventure",
    experience: "ATV Adventure",
    name: "Instagram community",
    location: "MoBay countryside · ATV",
    text: "ATV tours off the beaten path — mud tracks, jungle trails, and coastline views. A recurring favorite for groups and families messaging us from north-coast resorts.",
    rating: 5,
    source: "instagram" as const,
    postUrl: `${IG}/p/C_lKt-Fuy_I/`,
    publishedAt: "2024-09-01",
    engagement: { likes: 22, comments: 0, views: 0 },
    tourSlug: "atv-adventure",
  },
] as const;
