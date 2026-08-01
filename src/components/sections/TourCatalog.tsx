"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourImageCarousel } from "@/components/ui/TourImageCarousel";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPrice, formatWhatsAppLink } from "@/lib/utils";
import { localizeHref } from "@/i18n/paths";

type TourKindFilter = "all" | "single" | "combo";

export function TourCatalog() {
  const { siteConfig, ui, locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState(siteConfig.tourCategories[0].id);
  const [activeKind, setActiveKind] = useState<TourKindFilter>("all");

  const filtered = siteConfig.excursions.filter((t) => {
    if (activeKind === "combo") return t.tourKind === "combo";
    if (activeKind === "single") return t.tourKind === "single" && t.category === activeCategory;
    return t.category === activeCategory;
  });

  const kindFilters: { id: TourKindFilter; label: string }[] = [
    { id: "all", label: ui.tourKind.all },
    { id: "single", label: ui.tourKind.single },
    { id: "combo", label: ui.tourKind.combo },
  ];

  const bookHref = (tour: (typeof siteConfig.excursions)[number]) => {
    if (tour.hasDetailPage) {
      return localizeHref(`/tours/${tour.slug}`, locale);
    }
    const message = formatUi(ui.contact.whatsappTour, {
      business: siteConfig.business.name,
      tour: tour.name,
    });
    return formatWhatsAppLink(siteConfig.business.whatsapp, message);
  };

  return (
    <section id="tours" className="section-py relative bg-jamaica-black">
      <div className="absolute inset-0 pattern-lion opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.tourCatalog.eyebrow}
          title={ui.sections.tourCatalog.title}
          description={ui.sections.tourCatalog.description}
          light
        />

        <div className="scroll-tabs -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {kindFilters.map((kind) => (
            <button
              key={kind.id}
              type="button"
              onClick={() => setActiveKind(kind.id)}
              className={`shrink-0 touch-manipulation rounded-full px-5 py-3 text-sm font-bold transition-all active:scale-[0.98] ${
                activeKind === kind.id
                  ? "bg-rasta-red text-white shadow-md"
                  : "bg-white/10 text-white active:bg-white/20"
              }`}
            >
              {kind.label}
            </button>
          ))}
        </div>

        <div
          className={`scroll-tabs -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 ${
            activeKind === "combo" ? "hidden" : ""
          }`}
        >
          {siteConfig.tourCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                if (activeKind === "combo") setActiveKind("all");
              }}
              className={`shrink-0 touch-manipulation rounded-full px-5 py-3 text-sm font-bold transition-all active:scale-[0.98] ${
                activeCategory === cat.id
                  ? "bg-jamaica-green text-white shadow-md"
                  : "bg-white/10 text-white active:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-white/70">
          {activeKind === "combo"
            ? siteConfig.tourCategories.find((c) => c.id === "combo")?.description
            : siteConfig.tourCategories.find((c) => c.id === activeCategory)?.description}
        </p>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <article
              key={tour.slug}
              className="group overflow-hidden rounded-2xl border-2 border-jamaica-green/20 bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                {tour.images && tour.images.length > 1 ? (
                  <TourImageCarousel
                    images={tour.images}
                    alt={tour.name}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                {tour.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-rasta-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {ui.common.fanFavorite}
                  </span>
                )}
                {tour.tourKind === "combo" && (
                  <span className="absolute right-4 top-4 rounded-full bg-jamaica-gold px-3 py-1 text-xs font-bold uppercase text-jamaica-black">
                    {ui.tourTypes.combo}
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-lg font-bold text-jamaica-black sm:text-xl">
                  {tour.hasDetailPage ? (
                    <Link
                      href={localizeHref(`/tours/${tour.slug}`, locale)}
                      className="hover:text-jamaica-green"
                    >
                      {tour.name}
                    </Link>
                  ) : (
                    tour.name
                  )}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-jamaica-black-soft/70">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-jamaica-green" />
                  {tour.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-jamaica-black-soft/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-jamaica-green" />
                    {tour.duration}
                  </span>
                  <span className="font-bold text-jamaica-green">
                    {tour.priceType === "quote"
                      ? ui.common.getQuote
                      : formatUi(ui.common.fromPriceUsd, { price: formatPrice(tour.priceFrom) })}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tour.highlights.slice(0, 3).map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full bg-jamaica-gold-light px-3 py-1 text-xs font-semibold text-jamaica-black"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    href={bookHref(tour)}
                    variant="secondary"
                    fullWidthMobile
                    external={!tour.hasDetailPage}
                  >
                    {tour.hasDetailPage ? ui.common.viewDetails : ui.common.bookThisTour}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <JamaicaStripe variant="rasta" className="relative mt-0" />
    </section>
  );
}
