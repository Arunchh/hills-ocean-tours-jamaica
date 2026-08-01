import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locales,
  htmlLang,
  openGraphLocale,
  metadataSuffix,
  type Locale,
  isLocale,
} from "@/i18n/config";
import { getContent, getUi } from "@/i18n/index";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/paths";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const { siteConfig } = getContent(localeParam);
  const suffix = metadataSuffix[localeParam];
  const baseUrl = siteConfig.seo.siteUrl;

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((loc) => [loc, `${baseUrl}${localizedPath("/", loc)}`])
  );
  languages["x-default"] = `${baseUrl}${localizedPath("/", "en")}`;

  const localePath = localizedPath("/", localeParam);

  return {
    title: {
      default: `${siteConfig.business.name} | ${suffix}`,
      template: `%s | ${siteConfig.business.name}`,
    },
    description: siteConfig.business.description,
    keywords: [...siteConfig.seo.keywords],
    authors: [{ name: siteConfig.business.name }],
    openGraph: {
      type: "website",
      locale: openGraphLocale[localeParam],
      url: `${baseUrl}${localePath}`,
      siteName: siteConfig.business.name,
      title: `${siteConfig.business.name} | ${suffix}`,
      description: siteConfig.business.description,
      images: [
        {
          url: siteConfig.hero.image,
          width: 1200,
          height: 630,
          alt: siteConfig.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.business.name} | ${suffix}`,
      description: siteConfig.business.description,
      images: [siteConfig.hero.image],
    },
    alternates: {
      canonical: `${baseUrl}${localePath}`,
      languages,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const content = getContent(locale);
  const ui = getUi(locale);

  return (
    <LocaleProvider locale={locale} ui={ui} content={content}>
      <JsonLd locale={locale} />
      {children}
    </LocaleProvider>
  );
}
