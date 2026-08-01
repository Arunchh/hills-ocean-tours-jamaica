import { defaultLocale, isLocale, locales, type Locale } from "./config";

export const LOCALE_COOKIE = "preferred-locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Map browser language codes to supported locales */
const LANGUAGE_MAP: Record<string, Locale> = {
  en: "en",
  es: "es",
  pt: "pt",
  fr: "fr",
};

export function parseAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const parsed = header
    .split(",")
    .map((part) => {
      const [rawLang, ...params] = part.trim().split(";");
      const lang = rawLang.trim().toLowerCase();
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      const primary = lang.split("-")[0];
      return { primary, q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { primary } of parsed) {
    const mapped = LANGUAGE_MAP[primary];
    if (mapped) return mapped;
  }

  return null;
}

export function resolveLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null
): Locale {
  if (cookieValue && isLocale(cookieValue)) {
    return cookieValue;
  }

  const detected = parseAcceptLanguage(acceptLanguage);
  if (detected) return detected;

  return defaultLocale;
}

export function localeCookieOptions(locale: Locale) {
  return {
    name: LOCALE_COOKIE,
    value: locale,
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: "lax" as const,
  };
}

export { locales };
