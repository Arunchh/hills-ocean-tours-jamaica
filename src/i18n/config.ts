export const locales = ["en", "es", "pt", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
  fr: "FR",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt",
  fr: "fr",
};

export const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  fr: "fr_FR",
};

export const dateLocale: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
  pt: "pt-BR",
  fr: "fr-FR",
};

export const metadataSuffix: Record<Locale, string> = {
  en: "Jamaica Resort Transfers & Tours",
  es: "Traslados y Tours a Resorts en Jamaica",
  pt: "Transfers e Passeios para Resorts na Jamaica",
  fr: "Transferts et Excursions à Montego Bay, Jamaïque",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
