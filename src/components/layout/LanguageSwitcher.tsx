"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeLabels, localeShortLabels, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/paths";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "@/i18n/locale-cookie";
import { useI18n } from "@/i18n/LocaleProvider";

type LanguageSwitcherProps = {
  scrolled?: boolean;
  variant?: "inline" | "select" | "menu";
};

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${LOCALE_COOKIE_MAX_AGE};SameSite=Lax`;
}

export function LanguageSwitcher({
  scrolled = false,
  variant = "inline",
}: LanguageSwitcherProps) {
  const { locale, ui } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const navigate = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    persistLocale(nextLocale);
    router.push(switchLocalePath(pathname, nextLocale));
  };

  if (variant === "select" || variant === "menu") {
    return (
      <div className={variant === "menu" ? "w-full" : "relative min-w-[7.5rem]"}>
        <label
          className={`mb-1.5 block text-xs font-bold uppercase tracking-wide ${
            variant === "menu" ? "text-jamaica-green" : scrolled ? "text-jamaica-black-soft" : "text-white/70"
          }`}
          htmlFor={`lang-select-${variant}`}
        >
          {ui.common.language}
        </label>
        <div className="relative">
          <Globe
            className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
              variant === "menu" ? "text-jamaica-green" : scrolled ? "text-jamaica-green" : "text-white/80"
            }`}
            aria-hidden="true"
          />
          <select
            id={`lang-select-${variant}`}
            value={locale}
            onChange={(e) => navigate(e.target.value as Locale)}
            className={`w-full min-h-12 touch-manipulation appearance-none rounded-xl border-2 py-3 pl-10 pr-10 text-base font-semibold outline-none transition-colors focus:border-jamaica-green focus:ring-2 focus:ring-jamaica-green/20 ${
              variant === "menu"
                ? "border-jamaica-green/15 bg-jamaica-cream text-jamaica-black"
                : scrolled
                  ? "border-jamaica-green/15 bg-white text-jamaica-black"
                  : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
            }`}
            aria-label={ui.common.language}
          >
            {locales.map((code) => (
              <option key={code} value={code}>
                {localeLabels[code]}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
              variant === "menu" ? "text-jamaica-black-soft" : scrolled ? "text-jamaica-black-soft" : "text-white/80"
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 sm:gap-1" role="group" aria-label={ui.common.language}>
      <Globe
        className={`hidden h-4 w-4 lg:block ${scrolled ? "text-jamaica-green" : "text-white/80"}`}
        aria-hidden="true"
      />
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => navigate(code)}
            className={`min-h-10 min-w-10 touch-manipulation rounded-full px-2.5 py-2 text-center text-xs font-bold transition-colors sm:min-h-9 sm:min-w-9 ${
              active
                ? scrolled
                  ? "bg-jamaica-green text-white shadow-sm"
                  : "bg-jamaica-gold text-jamaica-black shadow-sm"
                : scrolled
                  ? "text-jamaica-black-soft hover:bg-jamaica-cream active:bg-jamaica-cream"
                  : "text-white/85 hover:bg-white/10 active:bg-white/15"
            }`}
            aria-current={active ? "true" : undefined}
            aria-label={localeLabels[code]}
          >
            {localeShortLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
