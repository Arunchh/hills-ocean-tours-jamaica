import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { getContent, getUi, formatUi } from "@/i18n/index";
import { localizeHref, localizedPath } from "@/i18n/paths";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { BookingPanel } from "@/components/booking/BookingPanel";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent("en").siteConfig.excursions.map((e) => ({ locale, slug: e.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const { siteConfig } = getContent(localeParam);
  const excursion = siteConfig.excursions.find((e) => e.slug === slug);
  if (!excursion) return {};

  const ui = getUi(localeParam);
  const base = siteConfig.seo.siteUrl;
  const path = localizedPath(`/book/${slug}`, localeParam);

  return {
    title: formatUi(ui.booking.pageTitle, { tour: excursion.name }),
    description: formatUi(ui.booking.pageDescription, { tour: excursion.name }),
    alternates: { canonical: `${base}${path}` },
  };
}

export default async function BookTourPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const { siteConfig } = getContent(locale);
  const excursion = siteConfig.excursions.find((e) => e.slug === slug);
  if (!excursion) notFound();

  const ui = getUi(locale);
  const whatsappMessage = formatUi(ui.contact.whatsappTour, {
    business: siteConfig.business.name,
    tour: excursion.name,
  });

  const detailHref = excursion.hasDetailPage
    ? localizeHref(`/tours/${slug}`, locale)
    : localizeHref("/tours", locale);

  return (
    <>
      <Header />
      <main>
        <div className="safe-top rasta-gradient-bg pb-10 pt-24 sm:pb-12 sm:pt-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link
              href={detailHref}
              className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {excursion.hasDetailPage ? excursion.name : ui.common.allTours}
            </Link>
            <p className="text-xs font-bold uppercase tracking-wider text-jamaica-gold/80">
              {ui.booking.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              {formatUi(ui.booking.pageTitle, { tour: excursion.name })}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-jamaica-gold-light/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {excursion.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {excursion.duration}
              </span>
            </div>
          </div>
          <JamaicaStripe variant="flag" className="mt-10" />
        </div>

        <article className="section-py bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <BookingPanel
              tourSlug={excursion.slug}
              tourName={excursion.name}
              fallbackWhatsAppMessage={whatsappMessage}
            />
          </div>
        </article>
      </main>
      <Footer />
      <MobileCTA />
      <div className="mobile-page-spacer md:hidden" aria-hidden="true" />
    </>
  );
}
