import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n/index";
import { getUi } from "@/i18n/index";

export function JsonLd({ locale }: { locale: Locale }) {
  const { siteConfig } = getContent(locale);
  const ui = getUi(locale);

  const organization: Record<string, unknown> = {
    "@type": "TravelAgency",
    "@id": `${siteConfig.seo.siteUrl}/#organization`,
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montego Bay",
      addressRegion: "St. James",
      addressCountry: "JM",
    },
    areaServed: ["Montego Bay", "Ocho Rios", "Falmouth"].map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "Country",
        name: ui.common.countryName,
      },
    })),
    priceRange: "$$",
  };

  if (siteConfig.business.reviewCount > 0) {
    organization.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: siteConfig.business.googleRating,
      reviewCount: siteConfig.business.reviewCount,
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${siteConfig.seo.siteUrl}/#website`,
        url: siteConfig.seo.siteUrl,
        name: siteConfig.business.name,
        inLanguage: locale,
        publisher: { "@id": `${siteConfig.seo.siteUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        inLanguage: locale,
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
