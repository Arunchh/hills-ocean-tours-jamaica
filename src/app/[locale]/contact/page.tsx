import { SiteChrome } from "@/components/layout/SiteChrome";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
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
    title: ui.pages.contact.title,
    description: ui.pages.contact.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const ui = getUi(locale);

  return (
    <SiteChrome>
      <main>
        <SubpageHero
          title={ui.pages.contact.title}
          description={ui.pages.contact.description}
          eyebrow={ui.pages.contact.eyebrow}
          backHref={localizeHref("/", locale)}
          backLabel={ui.common.backToHome}
        />
        <ContactSection />
        <FAQ />
      </main>
    </SiteChrome>
  );
}
