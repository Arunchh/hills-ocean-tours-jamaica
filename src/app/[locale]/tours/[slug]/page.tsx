import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, CheckCircle, XCircle } from "lucide-react";
import { getTourPageData, getTourDetailSlugs } from "@/lib/tour-page-data";
import { getContent, getUi, formatUi } from "@/i18n/index";
import { localizeHref, localizedPath } from "@/i18n/paths";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { Button } from "@/components/ui/Button";
import { TourImageCarousel } from "@/components/ui/TourImageCarousel";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { formatPrice, formatWhatsAppLink } from "@/lib/utils";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getTourDetailSlugs(getContent("en").siteConfig).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const tour = getTourPageData(slug, getContent(localeParam).siteConfig);
  if (!tour) return {};

  const { siteConfig } = getContent(localeParam);
  const base = siteConfig.seo.siteUrl;
  const path = localizedPath(`/tours/${slug}`, localeParam);

  return {
    title: tour.name,
    description: tour.summary,
    alternates: { canonical: `${base}${path}` },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const { siteConfig } = getContent(locale);
  const tour = getTourPageData(slug, siteConfig);
  if (!tour) notFound();

  const ui = getUi(locale);

  const whatsappMessage = formatUi(ui.contact.whatsappTour, {
    business: siteConfig.business.name,
    tour: tour.name,
  });

  return (
    <>
      <Header />
      <main>
        <div className="safe-top rasta-gradient-bg pb-10 pt-24 sm:pb-12 sm:pt-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link
              href={localizeHref("/tours", locale)}
              className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui.common.allTours}
            </Link>
            <span className="rounded-full bg-jamaica-gold/20 px-3 py-1 text-xs font-bold text-jamaica-gold">
              {ui.common.pricesInUsd}
            </span>
            <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {tour.name}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-jamaica-gold-light/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {tour.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {tour.duration}
              </span>
              {tour.recommendedTime && (
                <span className="flex items-center gap-1.5">
                  {ui.common.recommendedTime}: {tour.recommendedTime}
                </span>
              )}
            </div>
          </div>
          <JamaicaStripe variant="flag" className="mt-10" />
        </div>

        <article className="section-py bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="relative mb-10 overflow-hidden rounded-2xl">
              <TourImageCarousel
                images={tour.images ?? [tour.image]}
                alt={tour.name}
                sizes="(max-width: 896px) 100vw, 896px"
                priority
                className="rounded-2xl"
              />
            </div>

            <p className="text-base font-medium leading-relaxed text-jamaica-black-soft sm:text-lg">
              {tour.summary}
            </p>

            {/* Pricing */}
            <section className="mt-10">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                Pricing
              </h2>
              {tour.pricingNote && (
                <p className="mt-2 text-sm text-jamaica-black-soft/80">{tour.pricingNote}</p>
              )}
              {tour.quoteOnly || tour.pricingTiers.length === 0 ? (
                <div className="mt-4 rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream p-6 text-center">
                  <p className="font-display text-lg font-bold text-jamaica-black">
                    {ui.common.getQuote}
                  </p>
                  <p className="mt-2 text-sm text-jamaica-black-soft/80">
                    Message us on WhatsApp with your hotel, date, and group size for a personal quote.
                  </p>
                  <Button
                    href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
                    variant="primary"
                    external
                    className="mt-4"
                  >
                    {ui.common.whatsappUs}
                  </Button>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {tour.pricingTiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="flex flex-col gap-1 rounded-xl border border-jamaica-green/15 bg-jamaica-cream p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-bold text-jamaica-black">{tier.name}</p>
                        {tier.note && (
                          <p className="text-xs text-jamaica-black-soft/70">{tier.note}</p>
                        )}
                      </div>
                      <p className="font-display text-xl font-bold text-jamaica-green">
                        {formatPrice(tier.price)} USD
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Itinerary */}
            {tour.itinerary && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  {ui.common.itinerary}
                </h2>
                <ol className="mt-6 space-y-4">
                  {tour.itinerary.map((step) => (
                    <li
                      key={`${step.time}-${step.title}`}
                      className="relative border-l-2 border-jamaica-green/30 pl-6"
                    >
                      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-jamaica-green" />
                      <p className="text-xs font-bold uppercase tracking-wide text-jamaica-green">
                        {step.time}
                      </p>
                      <p className="font-bold text-jamaica-black">{step.title}</p>
                      <p className="mt-1 text-sm text-jamaica-black-soft/80">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Included */}
            <section className="mt-10">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                {ui.common.whatsIncluded}
              </h2>
              <ul className="mt-4 space-y-2">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-jamaica-black-soft">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-jamaica-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Not included */}
            {tour.excluded && tour.excluded.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  {ui.common.notIncluded}
                </h2>
                <ul className="mt-4 space-y-2">
                  {tour.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-jamaica-black-soft">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rasta-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Deliverables */}
            {tour.deliverables && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  What You Receive
                </h2>
                <div className="mt-4 space-y-3">
                  {tour.deliverables.map((d) => (
                    <div
                      key={d.label}
                      className="rounded-xl border border-jamaica-green/10 bg-white p-4"
                    >
                      <p className="font-bold text-jamaica-black">{d.label}</p>
                      <p className="mt-1 text-sm text-jamaica-black-soft/80">{d.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Editing workflow */}
            {tour.editingWorkflow && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  Photo Editing Process
                </h2>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-jamaica-black-soft">
                  {tour.editingWorkflow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </section>
            )}

            {/* Extras */}
            {tour.extras && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  Extras
                </h2>
                <ul className="mt-4 space-y-2">
                  {tour.extras.map((extra) => (
                    <li
                      key={extra.label}
                      className="flex justify-between gap-4 text-sm text-jamaica-black-soft"
                    >
                      <span>{extra.label}</span>
                      <span className="font-bold text-jamaica-green">{extra.price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* What to bring */}
            <section className="mt-10">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                {ui.common.whatToBring}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tour.whatToBring.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-jamaica-gold-light px-3 py-1 text-sm font-semibold text-jamaica-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Transport */}
            <section className="mt-10 rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream p-6">
              <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                Transportation
              </h2>
              <p className="mt-3 text-sm text-jamaica-black-soft">{tour.transport.included}</p>
              <ul className="mt-3 space-y-2">
                {tour.transport.fees.map((fee) => (
                  <li key={fee} className="text-sm text-jamaica-black-soft/80">
                    • {fee}
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-jamaica-green">
                <MapPin className="h-4 w-4" />
                {tour.transport.location}
              </p>
            </section>

            {/* Deposit */}
            <section className="mt-10 rounded-2xl bg-jamaica-black-soft p-6 text-white sm:p-8">
              <h2 className="font-display text-xl font-bold text-jamaica-gold sm:text-2xl">
                {ui.common.deposit} & Payment
              </h2>
              <p className="mt-4 text-2xl font-bold text-white">
                {tour.deposit.amount > 0 ? (
                  <>
                    {formatPrice(tour.deposit.amount)} {ui.common.perPerson}{" "}
                    <span className="text-sm font-normal text-white/70">
                      ({ui.common.nonRefundable})
                    </span>
                  </>
                ) : (
                  <span className="text-lg">50% deposit via CashApp or Zelle</span>
                )}
              </p>
              <p className="mt-2 text-sm text-white/80">
                Pay via {tour.deposit.methods.join(" or ")} to secure your booking.
              </p>
              <p className="mt-3 text-sm text-white/80">{tour.deposit.balanceNote}</p>
              {tour.deposit.sitePolicyNote && (
                <p className="mt-3 text-sm text-jamaica-gold-light/90">{tour.deposit.sitePolicyNote}</p>
              )}
              {tour.ageRequirement && (
                <p className="mt-3 text-sm font-semibold text-jamaica-gold">
                  {tour.ageRequirement}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold text-jamaica-gold">
                <span>CashApp: {siteConfig.business.cashapp}</span>
                <span>Zelle: {siteConfig.business.zelle}</span>
              </div>
            </section>

            {/* Similar tours */}
            {tour.similarTourSlugs && tour.similarTourSlugs.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  {ui.common.similarTours}
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {tour.similarTourSlugs.map((similarSlug) => {
                    const similar = siteConfig.excursions.find((e) => e.slug === similarSlug);
                    if (!similar) return null;
                    const href = similar.hasDetailPage
                      ? localizeHref(`/tours/${similarSlug}`, locale)
                      : localizeHref("/tours", locale);
                    return (
                      <Link
                        key={similarSlug}
                        href={href}
                        className="rounded-full border-2 border-jamaica-green/20 px-4 py-2 text-sm font-bold text-jamaica-green transition-colors hover:bg-jamaica-green-light"
                      >
                        {similar.name}
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-10 rounded-2xl bg-jamaica-cream p-5 text-center sm:mt-14 sm:p-8">
              <h3 className="font-display text-xl font-bold text-jamaica-black">
                {ui.common.needTransferCtaTitle}
              </h3>
              <p className="mt-2 text-sm text-jamaica-black-soft/80">
                {formatUi(ui.common.needTransferCtaDescription, {
                  business: siteConfig.business.name,
                })}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
                  variant="primary"
                  fullWidthMobile
                >
                  {ui.common.whatsappUs}
                </Button>
                <Button href={localizeHref("/contact", locale)} variant="secondary" fullWidthMobile>
                  {ui.common.getQuote}
                </Button>
              </div>
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
