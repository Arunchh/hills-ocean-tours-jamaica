import { SiteChrome } from "@/components/layout/SiteChrome";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { DroneShowcase } from "@/components/sections/DroneShowcase";
import { TourCatalog } from "@/components/sections/TourCatalog";
import { getUi } from "@/i18n/index";
import { localizeHref } from "@/i18n/paths";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  return {
    title: ui.pages.tours.title,
    description: ui.pages.tours.description,
  };
}

export default async function ToursPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const ui = getUi(locale);

  return (
    <SiteChrome>
      <main>
        <SubpageHero
          title={ui.pages.tours.title}
          description={ui.pages.tours.description}
          eyebrow={ui.pages.tours.eyebrow}
          backHref={localizeHref("/", locale)}
          backLabel={ui.common.backToHome}
        />
        <FeaturedTours />
        <DroneShowcase />
        <TourCatalog />
      </main>
    </SiteChrome>
  );
}
