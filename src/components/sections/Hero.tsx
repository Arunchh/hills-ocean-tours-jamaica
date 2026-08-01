"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function Hero() {
  const { siteConfig, ui } = useI18n();
  const whatsappMessage = formatUi(ui.contact.whatsappResort, {
    business: siteConfig.business.name,
  });

  return (
    <section className="relative min-h-[100dvh] overflow-hidden sm:min-h-screen">
      <Image
        src={siteConfig.hero.image}
        alt={siteConfig.hero.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 rasta-gradient-bg opacity-90" />
      <div className="absolute inset-0 pattern-lion" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-4 pb-[calc(var(--mobile-cta-height)+2rem)] pt-[calc(var(--header-height)+1rem)] sm:min-h-screen sm:justify-center sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
            {siteConfig.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-jamaica-gold/30 bg-jamaica-black/40 px-2.5 py-1.5 text-[11px] font-bold text-jamaica-gold backdrop-blur-sm sm:px-3 sm:py-2 sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="section-heading-balance font-display text-[1.625rem] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>

          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-jamaica-gold-light/95 sm:mt-6 sm:text-lg lg:text-xl">
            {siteConfig.hero.subheadline}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#tours" variant="primary" fullWidthMobile>
              {siteConfig.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#transfers" variant="gold" fullWidthMobile>
              {siteConfig.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-10 sm:flex sm:flex-wrap sm:gap-6">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex min-h-11 touch-manipulation items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-2 py-2.5 text-xs font-semibold text-white active:bg-white/20 sm:min-h-12 sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="truncate">{siteConfig.business.phoneDisplay}</span>
            </a>
            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 touch-manipulation items-center justify-center gap-1.5 rounded-xl border border-jamaica-green/40 bg-jamaica-green/30 px-2 py-2.5 text-xs font-semibold text-white active:bg-jamaica-green/50 sm:min-h-12 sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span className="truncate">{ui.common.whatsappUs}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <JamaicaStripe variant="rasta" />
        <JamaicaStripe variant="flag" />
      </div>
    </section>
  );
}
