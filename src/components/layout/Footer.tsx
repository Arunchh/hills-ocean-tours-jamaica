"use client";

import Link from "next/link";
import { Globe, MapPin, Phone, Clock } from "lucide-react";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";
import { formatPhoneLink } from "@/lib/utils";

export function Footer() {
  const { siteConfig, ui, locale } = useI18n();

  return (
    <footer className="bg-jamaica-black text-white/80">
      <JamaicaStripe variant="flag" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={localizeHref("/", locale)} className="inline-block">
              <span className="font-display text-xl font-bold text-jamaica-gold">
                {siteConfig.business.logoText}
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-jamaica-green">
                {siteConfig.business.logoAccent}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {siteConfig.business.description}
            </p>
            <div className="mt-4 flex gap-1">
              <span className="h-2 w-6 rounded-sm bg-jamaica-green" />
              <span className="h-2 w-6 rounded-sm bg-jamaica-gold" />
              <span className="h-2 w-6 rounded-sm border border-white/20 bg-jamaica-black" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-jamaica-gold">{ui.common.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={localizeHref(item.href, locale)}
                    className="text-sm transition-colors hover:text-jamaica-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={localizeHref("/blog", locale)}
                  className="text-sm transition-colors hover:text-jamaica-gold"
                >
                  {ui.common.allGuides}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-jamaica-gold">{ui.common.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={formatPhoneLink(siteConfig.business.phone)}
                  className="flex items-center gap-2 transition-colors hover:text-jamaica-gold"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="transition-colors hover:text-jamaica-gold"
                >
                  {siteConfig.business.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jamaica-green" />
                {siteConfig.business.address}
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-jamaica-gold" />
                {siteConfig.business.businessHours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-jamaica-gold">{ui.common.followUs}</h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-jamaica-gold"
              >
                <Globe className="h-4 w-4" />
                {ui.common.facebook}
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-jamaica-gold"
              >
                <Globe className="h-4 w-4" />
                {ui.common.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.business.name}.{" "}
            {ui.common.allRightsReserved}
          </p>
        </div>
      </div>
      <JamaicaStripe variant="rasta" />
    </footer>
  );
}
