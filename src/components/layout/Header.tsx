"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";
import { formatUi } from "@/i18n/index";

export function Header() {
  const { siteConfig, ui, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappMessage = formatUi(ui.contact.whatsappQuote, {
    business: siteConfig.business.name,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerSolid = scrolled || open;

  return (
    <header
      className={`safe-top fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        headerSolid ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {headerSolid && <JamaicaStripe variant="rasta" />}
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link
          href={localizeHref("/", locale)}
          className="group flex min-h-11 min-w-0 flex-1 flex-col justify-center sm:flex-none"
        >
          <span
            className={`truncate font-display text-base font-bold tracking-tight transition-colors sm:text-xl ${
              headerSolid ? "text-jamaica-black" : "text-white"
            }`}
          >
            {siteConfig.business.logoText}
          </span>
          <span
            className={`truncate text-[9px] font-bold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.25em] ${
              headerSolid ? "text-jamaica-green" : "text-jamaica-gold"
            }`}
          >
            {siteConfig.business.logoAccent}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {siteConfig.nav.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={localizeHref(item.href, locale)}
              className={`text-sm font-semibold transition-colors hover:text-rasta-red ${
                scrolled ? "text-jamaica-black-soft" : "text-white/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher scrolled={headerSolid} variant="inline" />
          <a
            href={formatPhoneLink(siteConfig.business.phone)}
            className={`hidden items-center gap-2 text-sm font-bold xl:flex ${
              scrolled ? "text-jamaica-green" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.business.phoneDisplay}
          </a>
          <Button href={localizeHref("/#tours", locale)} variant={scrolled ? "primary" : "gold"}>
            {ui.common.bookTour}
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          <LanguageSwitcher scrolled={headerSolid} variant="select" />
          <button
            type="button"
            className={`flex h-11 w-11 touch-manipulation items-center justify-center rounded-xl ${
              headerSolid
                ? "text-jamaica-black active:bg-jamaica-cream"
                : "text-white active:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? ui.common.closeMenu : ui.common.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav-drawer max-h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain border-t border-jamaica-green/10 bg-white px-4 py-4 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={localizeHref(item.href, locale)}
                className="flex min-h-[3rem] touch-manipulation items-center rounded-xl px-3 text-base font-semibold text-jamaica-black active:bg-jamaica-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href={localizeHref("/blog", locale)}
              className="flex min-h-[3rem] touch-manipulation items-center rounded-xl px-3 text-base font-semibold text-jamaica-black active:bg-jamaica-cream"
              onClick={() => setOpen(false)}
            >
              {ui.common.allGuides}
            </Link>
          </nav>

          <div className="mt-4 grid gap-2 border-t border-jamaica-green/10 pt-4">
            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[3rem] touch-manipulation items-center justify-center gap-2 rounded-full bg-jamaica-green px-4 text-sm font-bold text-white active:scale-[0.98]"
              onClick={() => setOpen(false)}
            >
              {ui.common.whatsappUs}
            </a>
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex min-h-[3rem] touch-manipulation items-center justify-center gap-2 rounded-full border-2 border-jamaica-green/20 px-4 text-sm font-bold text-jamaica-green active:bg-jamaica-cream"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.business.phoneDisplay}
            </a>
            <Button
              href={localizeHref("/#tours", locale)}
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {ui.common.bookTour}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
