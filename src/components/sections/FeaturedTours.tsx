"use client";

import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourImageCarousel } from "@/components/ui/TourImageCarousel";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPrice } from "@/lib/utils";
import { SectionTravelDecor } from "@/components/ui/HomeTravelDecor";
import { localizeHref } from "@/i18n/paths";

export function FeaturedTours() {
  const { siteConfig, ui, locale } = useI18n();

  const featured = siteConfig.excursions.filter((t) =>
    siteConfig.featuredTourSlugs.includes(t.slug)
  );

  return (
    <section id="featured" className="section-py relative overflow-hidden bg-white">
      <SectionTravelDecor variant="right" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.featured.eyebrow}
          title={ui.sections.featured.title}
          description={ui.sections.featured.description}
        />

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2">
          {featured.map((tour) => {
            const bookLink = tour.hasDetailPage
              ? localizeHref(`/tours/${tour.slug}#book`, locale)
              : localizeHref(`/book/${tour.slug}`, locale);

            return (
              <article
                key={tour.slug}
                className="group overflow-hidden rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <TourImageCarousel
                    images={tour.images ?? [tour.image]}
                    alt={tour.name}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={tour.slug === "clear-kayak-photoshoot"}
                  />
                  <span className="absolute left-4 top-4 z-20 rounded-full bg-rasta-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {ui.common.featuredExperience}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                    {tour.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-jamaica-black-soft/80">
                    <MapPin className="h-4 w-4 shrink-0 text-jamaica-green" />
                    {tour.location}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-jamaica-black-soft/80">
                      <Clock className="h-4 w-4 text-jamaica-green" />
                      {tour.duration}
                    </span>
                    <span className="font-bold text-jamaica-green">
                      {tour.priceType === "quote"
                        ? ui.common.getQuote
                        : formatUi(ui.common.fromPriceUsd, {
                            price: formatPrice(tour.priceFrom),
                          })}
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tour.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-jamaica-black"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href={bookLink} variant="primary" fullWidthMobile>
                      {ui.common.bookThisTour}
                    </Button>
                    {tour.hasDetailPage && (
                      <Button
                        href={localizeHref(`/tours/${tour.slug}`, locale)}
                        variant="secondary"
                        fullWidthMobile
                      >
                        {ui.common.viewDetails}
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href={localizeHref("/tours", locale)} variant="secondary">
            {ui.common.allTours}
          </Button>
        </div>
      </div>
    </section>
  );
}
