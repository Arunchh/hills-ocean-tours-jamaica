import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Clock, HelpCircle, MapPin } from "lucide-react";
import { getContent, getResortGuide, getUi, formatUi } from "@/i18n/index";
import { localizeHref, localizedPath } from "@/i18n/paths";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { formatWhatsAppLink } from "@/lib/utils";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).resortGuides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const guide = getResortGuide(slug);
  if (!guide) return {};

  const { siteConfig } = getContent(localeParam);
  const base = siteConfig.seo.siteUrl;
  const path = localizedPath(`/resorts/${slug}`, localeParam);

  return {
    title: `Tours from ${guide.zone} Resorts — Hotel Pickup`,
    description: guide.description,
    alternates: { canonical: `${base}${path}` },
  };
}

export default async function ResortPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const guide = getResortGuide(slug);
  if (!guide) notFound();

  const { siteConfig } = getContent(locale);
  const ui = getUi(locale);

  const whatsappMessage = formatUi(
    "Hi {business}, I'm staying in the {zone} area and would like a tour quote. My hotel is [HOTEL]. Date: [DATE]. Group size: [N].",
    { business: siteConfig.business.name, zone: guide.zone }
  );

  const otherGuides = getContent(locale).resortGuides.filter((g) => g.slug !== slug);

  const getExcursion = (excursionSlug: string) =>
    siteConfig.excursions.find((e) => e.slug === excursionSlug);

  return (
    <>
      <Header />
      <main>
        <div className="safe-top rasta-gradient-bg pb-10 pt-24 sm:pb-12 sm:pt-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Link
              href={localizeHref("/resorts", locale)}
              className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui.resorts.backToResorts}
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full bg-jamaica-gold/20 px-3 py-1 text-xs font-bold text-jamaica-gold">
              <Building2 className="h-3.5 w-3.5" />
              {ui.common.fromYourResort}
            </span>
            <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {guide.zone}
            </h1>
            <p className="mt-2 text-lg text-jamaica-gold-light/90">{guide.tagline}</p>
          </div>
          <JamaicaStripe variant="flag" className="mt-10" />
        </div>

        <article className="section-py bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={guide.image}
                alt={guide.zone}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/50 to-transparent" />
            </div>

            <p className="text-base leading-relaxed text-jamaica-black-soft sm:text-lg">
              {guide.description}
            </p>

            {/* Pickup policy cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-green-light p-5">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-jamaica-black">
                  <MapPin className="h-5 w-5 text-jamaica-green" />
                  {ui.resorts.pickupPolicy}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/85">
                  {guide.pickupPolicy}
                </p>
              </div>
              <div className="rounded-2xl border-2 border-jamaica-gold/30 bg-jamaica-gold-light p-5">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-jamaica-black">
                  <Clock className="h-5 w-5 text-jamaica-green" />
                  {ui.resorts.transportNote}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/85">
                  {guide.transportNote}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {guide.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl bg-jamaica-cream px-4 py-3 text-sm font-semibold text-jamaica-black"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rasta-red" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Recommended tours */}
            <section className="mt-12">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                {ui.resorts.popularTours}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {guide.recommendedTours.map((tour) => (
                  <div
                    key={tour.name}
                    className="group rounded-2xl border-2 border-jamaica-green/10 bg-white p-5 shadow-sm transition-all hover:border-jamaica-green/25 hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-bold text-jamaica-black">{tour.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-xs font-bold text-jamaica-green">
                      <Clock className="h-3.5 w-3.5" />
                      {tour.duration}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-jamaica-black-soft/80">
                      {tour.description}
                    </p>
                    <div className="mt-4">
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
                ))}
              </div>
            </section>

            {/* Resorts list */}
            <section className="mt-12">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                {ui.resorts.resortsWeServe}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {guide.resorts.map((resort) => (
                  <div
                    key={resort.name}
                    className="rounded-xl border border-jamaica-green/10 bg-jamaica-cream px-4 py-3"
                  >
                    <p className="font-bold text-jamaica-black">{resort.name}</p>
                    <p className="text-xs font-semibold text-jamaica-green">{resort.area}</p>
                    <p className="mt-1 text-sm text-jamaica-black-soft/75">{resort.notes}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            {guide.faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="flex items-center gap-2 font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  <HelpCircle className="h-6 w-6 text-jamaica-green" />
                  {ui.resorts.faqTitle}
                </h2>
                <div className="mt-6 space-y-4">
                  {guide.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border-2 border-jamaica-green/10 bg-white open:border-jamaica-green/25"
                    >
                      <summary className="cursor-pointer list-none px-5 py-4 font-bold text-jamaica-black marker:content-none [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <span className="float-right text-jamaica-green transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="border-t border-jamaica-green/10 px-5 py-4 text-sm leading-relaxed text-jamaica-black-soft/85">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Other zones */}
            {otherGuides.length > 0 && (
              <section className="mt-12">
                <h2 className="font-display text-xl font-bold text-jamaica-black">
                  {ui.resorts.exploreZones}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {otherGuides.map((g) => (
                    <Link
                      key={g.slug}
                      href={localizeHref(`/resorts/${g.slug}`, locale)}
                      className="rounded-full border-2 border-jamaica-green/20 px-4 py-2 text-sm font-bold text-jamaica-green transition-colors hover:bg-jamaica-green-light"
                    >
                      {g.zone}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 rounded-2xl bg-gradient-to-br from-jamaica-green to-jamaica-green-dark p-8 text-center shadow-xl">
              <p className="font-display text-xl font-bold text-white sm:text-2xl">
                {ui.common.needTransferCtaTitle}
              </p>
              <p className="mt-2 text-sm text-white/85">
                {formatUi(ui.common.needTransferCtaDescription, {
                  business: siteConfig.business.name,
                })}
              </p>
              <Button
                href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
                variant="gold"
                external
                className="mt-6"
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
