export type NavItem = {
  label: string;
  href: string;
};

export type TrustPoint = {
  label: string;
  icon: "shield" | "dollar" | "star" | "clock" | "award" | "camera" | "map" | "users";
};

export type ValueProp = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "plane" | "hotel" | "map" | "users";
  priceFrom: number;
};

export type TourCategory = {
  id: string;
  label: string;
  description: string;
};

export type Excursion = {
  slug: string;
  name: string;
  category: string;
  tourKind: "single" | "combo";
  location: string;
  duration: string;
  priceFrom: number;
  priceType: "from" | "quote";
  highlights: string[];
  image: string;
  images?: string[];
  popular: boolean;
  hasDetailPage: boolean;
};

export type PromoBanner = {
  enabled: boolean;
  message: string;
  ctaText: string;
  ctaHref: string;
  terms?: string;
};

export type Credential = {
  label: string;
  value: string;
};

export type DepositPolicy = {
  depositPercent: number;
  cancellationDays: number;
};

export type ServiceArea = {
  eyebrow: string;
  title: string;
  description: string;
  regions: { name: string; slug: string; description: string }[];
  mapEmbedUrl: string;
  mapTitle: string;
};

export type NightlifeVenue = {
  name: string;
  type: string;
  description: string;
  image: string;
  vibe: string;
  highlight: string;
};

export type NightlifePackage = {
  name: string;
  description: string;
  includes: string[];
  image: string;
  badge: string;
};

export type PartyResort = {
  name: string;
  description: string;
  vibe: string;
};

export type ResortZone = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  pickupNote: string;
  resortCount: number;
  featuredResorts: string[];
  topTours: string[];
};

export type DroneShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  deliverables: { label: string; detail: string }[];
  image: string;
  ctaTourSlug: string;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  experience?: string;
  source?: "instagram";
  postUrl?: string;
  publishedAt?: string;
  engagement?: {
    likes: number;
    comments: number;
    views?: number;
  };
  tourSlug?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FormProvider = "web3forms" | "formspree" | "mailto";

export type SiteConfig = {
  business: {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    email: string;
    cashapp: string;
    zelle: string;
    address: string;
    licenseNumber: string;
    yearsInBusiness: number;
    googleRating: number;
    reviewCount: number;
    logoText: string;
    logoAccent: string;
    businessHours: string;
    responseTime: string;
    credentials: Credential[];
  };
  seo: {
    siteUrl: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    badges: string[];
  };
  trustPoints: TrustPoint[];
  valueProps: ValueProp[];
  transport: {
    eyebrow: string;
    title: string;
    description: string;
    includedNote: string;
    feeNote: string;
    nonParticipantNote: string;
    outOfAreaResorts: string[];
  };
  services: Service[];
  tourCategories: TourCategory[];
  featuredTourSlugs: string[];
  excursions: Excursion[];
  nightlife: {
    eyebrow: string;
    title: string;
    description: string;
    disclaimer: string;
    packages: NightlifePackage[];
    venues: NightlifeVenue[];
    partyResorts: PartyResort[];
    ctaNote: string;
  };
  resortZones: {
    eyebrow: string;
    title: string;
    description: string;
    zones: ResortZone[];
  };
  droneShowcase: DroneShowcase;
  howItWorks: HowItWorksStep[];
  testimonials: Testimonial[];
  faqs: Faq[];
  paymentMethods: string[];
  communications: {
    formProvider: FormProvider;
    web3formsAccessKey: string;
    formspreeFormId: string;
    leadNotificationEmail: string;
    tawkPropertyId: string;
    tawkWidgetId: string;
  };
  social: {
    facebook: string;
    instagram: string;
    instagramHandle?: string;
    instagramFollowers?: number;
    tripadvisor: string;
  };
  nav: NavItem[];
  promoBanner: PromoBanner;
  depositPolicy: DepositPolicy;
  serviceArea: ServiceArea;
};

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

export type UiMessages = {
  common: {
    getQuote: string;
    call: string;
    whatsapp: string;
    quote: string;
    fromPriceUsd: string;
    fromPriceUsdPerPerson: string;
    readMore: string;
    backToHome: string;
    allGuides: string;
    allTours: string;
    openMenu: string;
    closeMenu: string;
    usTravelers: string;
    whatsappUs: string;
    bookTour: string;
    language: string;
    jtbLicense: string;
    allRightsReserved: string;
    followUs: string;
    quickLinks: string;
    contact: string;
    facebook: string;
    instagram: string;
    fanFavorite: string;
    featuredExperience: string;
    popular: string;
    viewDetails: string;
    bookThisTour: string;
    bookCityTour: string;
    popularResorts: string;
    cityToursImageAlt: string;
    needTransferCtaTitle: string;
    needTransferCtaDescription: string;
    needTransferCtaButton: string;
    countryName: string;
    pricesInUsd: string;
    deposit: string;
    perPerson: string;
    nonRefundable: string;
    whatToBring: string;
    whatsIncluded: string;
    recommendedTime: string;
    businessHours: string;
    responseTime: string;
    similarTours: string;
    itinerary: string;
    notIncluded: string;
    credentials: string;
    viewLocationGuide: string;
    allLocations: string;
    viewResortGuide: string;
    allResortZones: string;
    bookNightlifePackage: string;
    exploreDronePackage: string;
    adultsOnly: string;
    includes: string;
    fromYourResort: string;
  };
  sections: {
    services: { eyebrow: string; title: string; description: string };
    featured: { eyebrow: string; title: string; description: string };
    tourCatalog: { eyebrow: string; title: string; description: string };
    excursions: { eyebrow: string; title: string; description: string };
    howItWorks: { eyebrow: string; title: string; description: string };
    testimonials: {
      eyebrow: string;
      title: string;
      description: string;
      instagramSource: string;
      viewOnInstagram: string;
    };
    faq: { eyebrow: string; title: string; description: string };
    contact: { eyebrow: string; title: string; description: string };
    transportCta: { title: string; description: string; button: string };
    transferQuote: {
      eyebrow: string;
      title: string;
      description: string;
      submit: string;
      whatsappNote: string;
    };
    serviceArea: { eyebrow: string; title: string; description: string };
    promoBanner: { dismiss: string };
    locations: { eyebrow: string; title: string; description: string };
    nightlife: { eyebrow: string; title: string; description: string; packagesTitle: string; venuesTitle: string; partyResortsTitle: string };
    resortPickup: { eyebrow: string; title: string; description: string };
    droneShowcase: { eyebrow: string; title: string; description: string; deliverablesTitle: string };
  };
  locations: {
    popularTours: string;
    exploreGuide: string;
    backToLocations: string;
  };
  resorts: {
    popularTours: string;
    resortsWeServe: string;
    pickupPolicy: string;
    transportNote: string;
    exploreZones: string;
    backToResorts: string;
    faqTitle: string;
  };
  transferForm: {
    tripType: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    passengers: string;
    luggage: string;
    roundTrip: string;
    tripTypes: { value: string; label: string }[];
    placeholders: {
      pickup: string;
      dropoff: string;
      time: string;
      passengers: string;
      luggage: string;
    };
    whatsappTemplate: string;
  };
  tourKind: {
    all: string;
    single: string;
    combo: string;
  };
  tourTypes: Record<CityTour["type"], string>;
  contact: {
    whatsappQuote: string;
    whatsappResort: string;
    whatsappTour: string;
    callDirect: string;
    whatsappFastest: string;
    messageUsNow: string;
    emailLabel: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      resort: string;
      service: string;
      travelDate: string;
      guests: string;
      details: string;
      submit: string;
      submitting: string;
      disclaimer: string;
      placeholders: {
        name: string;
        email: string;
        phone: string;
        guests: string;
        details: string;
        selectResort: string;
        selectService: string;
      };
      resortOptions: string[];
      serviceOptions: { value: string; label: string }[];
    };
  };
  blog: {
    indexTitle: string;
    indexDescription: string;
    indexSubtitle: string;
    metadataTitle: string;
    metadataDescription: string;
  };
  form: {
    success: string;
    error: string;
    mailtoSuccess: string;
  };
  pages: {
    tours: { title: string; description: string; eyebrow: string };
    transfers: { title: string; description: string; eyebrow: string };
    nightlife: { title: string; description: string; eyebrow: string };
    resorts: { title: string; description: string; eyebrow: string };
    contact: { title: string; description: string; eyebrow: string };
    locations: { title: string; description: string; eyebrow: string };
  };
  homeExplore: {
    eyebrow: string;
    title: string;
    description: string;
    links: { href: string; title: string; description: string; cta: string }[];
  };
};

export type ResortGuide = {
  zone: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  pickupPolicy: string;
  transportNote: string;
  resorts: { name: string; area: string; notes: string }[];
  recommendedTours: {
    name: string;
    duration: string;
    description: string;
    excursionSlug?: string;
  }[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
};

export type LocaleContent = {
  siteConfig: SiteConfig;
  cityTourGuides: CityTourGuide[];
  resortGuides: ResortGuide[];
  blogPosts: BlogPost[];
};
