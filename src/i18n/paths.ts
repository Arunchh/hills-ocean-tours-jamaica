import type { Locale } from "./config";
import { isLocale } from "./config";

export function localizedPath(path: string, locale: Locale): string {
  if (path.startsWith("http")) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/") return `/${locale}`;

  return `/${locale}${normalized}`;
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`;
  if (href.startsWith("#")) return `/${locale}${href}`;
  if (href.startsWith("/")) return `/${locale}${href}`;

  return `/${locale}/${href}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const maybeLocale = segments[0];
  if (isLocale(maybeLocale)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const stripped = stripLocaleFromPath(pathname);
  return localizedPath(stripped, nextLocale);
}
