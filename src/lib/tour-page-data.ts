import { getTourDetail, type TourDetail } from "@/content/tour-details";
import type { SiteConfig } from "@/i18n/types";

export type TourPageData = TourDetail & {
  quoteOnly?: boolean;
  priceFrom?: number;
};

const defaultWhatToBring = [
  "Comfortable clothing",
  "Sunscreen",
  "Sunglasses",
  "Camera or phone",
  "Cash for balance and tips",
];

export function getTourDetailSlugs(siteConfig: Pick<SiteConfig, "excursions">): string[] {
  return siteConfig.excursions.filter((e) => e.hasDetailPage).map((e) => e.slug);
}

export function getTourPageData(
  slug: string,
  siteConfig: Pick<SiteConfig, "excursions">
): TourPageData | undefined {
  const detail = getTourDetail(slug);
  if (detail) return detail;

  const excursion = siteConfig.excursions.find((e) => e.slug === slug);
  if (!excursion?.hasDetailPage) return undefined;

  const quoteOnly = excursion.priceType === "quote" || excursion.priceFrom === 0;

  return {
    slug: excursion.slug,
    name: excursion.name,
    location: excursion.location,
    duration: excursion.duration,
    currency: "USD",
    summary: buildSummary(excursion.name, excursion.highlights, excursion.location),
    pricingTiers: quoteOnly
      ? []
      : [{ name: excursion.name, price: excursion.priceFrom }],
    pricingNote: quoteOnly
      ? "Pricing depends on group size, hotel location, and date. Message us on WhatsApp for a personal quote — no automated checkout."
      : undefined,
    quoteOnly,
    priceFrom: excursion.priceFrom,
    included: [
      ...excursion.highlights,
      "Personal confirmation on WhatsApp before you book",
      quoteOnly ? "Custom quote based on your group and hotel" : "USD pricing confirmed upfront",
    ],
    excluded: [
      "Gratuities",
      "Meals and drinks unless stated",
      "Travel insurance",
    ],
    whatToBring: defaultWhatToBring,
    transport: {
      included:
        "Hotel pickup may be included or quoted separately depending on your resort zone — we confirm on WhatsApp before you pay your deposit.",
      fees: [
        "Out-of-area resorts (Grand Palladium, Royalton, Excellence Oyster Bay, etc.) may incur a transport fee quoted upfront.",
        "Non-participating guests pay the same transport fee as booked clients when sharing a vehicle.",
      ],
      location: excursion.location,
    },
    deposit: {
      amount: 0,
      unit: "per person",
      methods: ["CashApp", "Zelle"],
      nonRefundable: true,
      balanceNote:
        "A 50% deposit via CashApp or Zelle secures your date. Remaining balance due in USD cash on the day of your experience.",
      sitePolicyNote:
        "Cancel up to 7 days before your scheduled date for a full deposit refund unless otherwise noted for this experience.",
    },
    image: excursion.image,
    images: excursion.images,
    similarTourSlugs: findSimilarSlugs(excursion.slug, excursion.category, siteConfig),
  };
}

function buildSummary(name: string, highlights: string[], location: string): string {
  const highlightText = highlights.slice(0, 3).join(", ");
  return `${name} in ${location} — ${highlightText}. Book through Hills Ocean Tours Jamaica with WhatsApp confirmation, hotel pickup options, and a trusted local MoBay operator.`;
}

function findSimilarSlugs(
  slug: string,
  category: string,
  siteConfig: Pick<SiteConfig, "excursions">
): string[] {
  return siteConfig.excursions
    .filter((e) => e.hasDetailPage && e.slug !== slug && e.category === category)
    .slice(0, 3)
    .map((e) => e.slug);
}
