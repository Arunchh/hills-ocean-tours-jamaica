import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { getCityGuide, getContent, getUi, formatUi } from "@/i18n/index";
import { localizeHref, localizedPath } from "@/i18n/paths";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { formatPrice, formatWhatsAppLink } from "@/lib/utils";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).cityTourGuides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const guide = getCityGuide(slug);
  if (!guide) return {};

  const { siteConfig } = getContent(localeParam);
  const base = siteConfig.seo.siteUrl;
  const path = localizedPath(`/locations/${slug}`, localeParam);

  return {
    title: `${guide.city} Tours & Transfers`,
    description: guide.description,
    alternates: { canonical: `${base}${path}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const guide = getCityGuide(slug);
  if (!guide) notFound();

  const { siteConfig } = getContent(locale);
  const ui = getUi(locale);

  const whatsappMessage = formatUi(ui.contact.whatsappQuote, {
    business: siteConfig.business.name,
  });

  const otherGuides = getContent(locale).cityTourGuides.filter((g) => g.slug !== slug);

  const getExcursion = (excursionSlug: string) =>
    siteConfig.excursions.find((e) => e.slug === excursionSlug);

  return (
    <>
      <Header />
      <main>
        <div className="safe-top rasta-gradient-bg pb-10 pt-24 sm:pb-12 sm:pt-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link
              href={localizeHref("/locations", locale)}
              className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui.common.allLocations}
            </Link>
            <span className="rounded-full bg-jamaica-gold/20 px-3 py-1 text-xs font-bold text-jamaica-gold">
              {ui.sections.locations.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {guide.city}
            </h1>
            <p className="mt-2 text-lg text-jamaica-gold-light/90">{guide.tagline}</p>
          </div>
          <JamaicaStripe variant="flag" className="mt-10" />
        </div>

        <article className="section-py bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={guide.image}
                alt={formatUi(ui.common.cityToursImageAlt, { city: guide.city })}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>

            <p className="text-base leading-relaxed text-jamaica-black-soft sm:text-lg">
              {guide.description}
            </p>

            <section className="mt-10">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                {ui.locations.popularTours}
              </h2>
              <div className="mt-6 space-y-4">
                {guide.tours.map((tour) => (
                  <div
                    key={tour.name}
                    className="rounded-2xl border-2 border-jamaica-green/10 bg-jamaica-cream p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-bold text-jamaica-black">
                            {tour.name}
                          </h3>
                          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-jamaica-green">
                            {ui.tourTypes[tour.type]}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-jamaica-black-soft/80">{tour.description}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-jamaica-green">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {tour.duration}
                          </span>
                          <span>
                            {tour.priceFrom > 0
                              ? formatUi(ui.common.fromPriceUsd, {
                                  price: formatPrice(tour.priceFrom),
                                })
                              : ui.common.getQuote}
                          </span>
                        </div>
                      </div>
                      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                        {tour.excursionSlug ? (
                          (() => {
                            const excursion = getExcursion(tour.excursionSlug!);
                            if (excursion?.hasDetailPage) {
                              return (
                                <Button
                                  href={localizeHref(`/tours/${tour.excursionSlug}`, locale)}
                                  variant="secondary"
                                >
                                  {ui.common.viewDetails}
                                </Button>
                              );
                            }
                            return (
                              <Button
                                href={formatWhatsAppLink(
                                  siteConfig.business.whatsapp,
                                  formatUi(ui.contact.whatsappTour, {
                                    business: siteConfig.business.name,
                                    tour: tour.name,
                                  })
                                )}
                                variant="primary"
                                external
                              >
                                {ui.common.bookThisTour}
                              </Button>
                            );
                          })()
                        ) : (
                          <Button
                            href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
                            variant="primary"
                            external
                          >
                            {ui.common.getQuote}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                {ui.common.popularResorts}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {guide.popularResorts.map((resort) => (
                  <li
                    key={resort}
                    className="rounded-full bg-jamaica-gold-light px-3 py-1 text-sm font-semibold text-jamaica-black"
                  >
                    {resort}
                  </li>
                ))}
              </ul>
            </section>

            {guide.mapEmbedUrl && (
              <section className="mt-10 overflow-hidden rounded-2xl border-2 border-jamaica-green/15">
                <iframe
                  title={`${guide.city} map`}
                  src={guide.mapEmbedUrl}
                  className="h-[280px] w-full sm:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </section>
            )}

            {otherGuides.length > 0 && (
              <section className="mt-12">
                <h2 className="font-display text-xl font-bold text-jamaica-black">
                  {ui.locations.exploreGuide}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {otherGuides.map((g) => (
                    <Link
                      key={g.slug}
                      href={localizeHref(`/locations/${g.slug}`, locale)}
                      className="rounded-full border-2 border-jamaica-green/20 px-4 py-2 text-sm font-bold text-jamaica-green transition-colors hover:bg-jamaica-green-light"
                    >
                      {g.city}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 rounded-2xl bg-jamaica-cream p-6 text-center">
              <Button
                href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
                variant="primary"
                external
              >
                {ui.common.whatsappUs}
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <MobileCTA />
      <div className="mobile-page-spacer md:hidden" aria-hidden="true" />
    </>
  );
}
