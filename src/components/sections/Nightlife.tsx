"use client";

import Image from "next/image";
import { Check, MessageCircle, Music2, Sparkles, Wine } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatWhatsAppLink } from "@/lib/utils";

export function Nightlife() {
  const { siteConfig, ui } = useI18n();
  const { nightlife } = siteConfig;

  const whatsappMessage = formatUi(
    "Hi {business}, I'd like a quote for a Montego Bay nightlife package. My hotel is [HOTEL]. Date: [DATE]. Group size: [N].",
    { business: siteConfig.business.name }
  );

  return (
    <section id="nightlife" className="section-py relative overflow-hidden bg-jamaica-black">
      <div className="absolute inset-0 pattern-lion opacity-40" />
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-jamaica-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={nightlife.eyebrow}
          title={nightlife.title}
          description={nightlife.description}
          light
        />

        {/* Nightlife packages */}
        <div className="mt-12">
          <h3 className="text-center font-display text-xl font-bold text-white sm:text-2xl">
            {ui.sections.nightlife.packagesTitle}
          </h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {nightlife.packages.map((pkg, i) => (
              <article
                key={pkg.name}
                className="group relative overflow-hidden rounded-2xl border border-jamaica-gold/20 bg-jamaica-black-soft shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black via-jamaica-black/20 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                      i === 0
                        ? "bg-rasta-red text-white"
                        : i === 1
                          ? "bg-jamaica-gold text-jamaica-black"
                          : "bg-jamaica-green text-white"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-display text-lg font-bold text-white">{pkg.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{pkg.description}</p>
                  <ul className="mt-4 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-jamaica-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
                    variant="gold"
                    fullWidthMobile
                    external
                    className="mt-6"
                  >
                    {ui.common.bookNightlifePackage}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Venues grid */}
        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-white sm:text-2xl">
            {ui.sections.nightlife.venuesTitle}
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nightlife.venues.map((venue) => (
              <article
                key={venue.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-jamaica-gold/30 hover:bg-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/90 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-jamaica-gold/90 px-2 py-0.5 text-[10px] font-bold uppercase text-jamaica-black">
                      <Music2 className="h-3 w-3" />
                      {venue.vibe}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-display font-bold text-white">{venue.name}</h4>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-jamaica-gold">
                    {venue.type}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{venue.description}</p>
                  <p className="mt-3 flex items-start gap-1.5 text-xs text-jamaica-gold-light/90">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {venue.highlight}
                  </p>
                  {venue.type.includes("18") || venue.name === "Taboo" ? (
                    <span className="mt-2 inline-block rounded bg-rasta-red/20 px-2 py-0.5 text-[10px] font-bold uppercase text-rasta-red">
                      {ui.common.adultsOnly}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Party resorts strip */}
        <div className="mt-16 rounded-2xl border border-jamaica-gold/20 bg-gradient-to-br from-jamaica-black-soft to-jamaica-green/10 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-white sm:text-2xl">
                <Wine className="h-6 w-6 text-jamaica-gold" />
                {ui.sections.nightlife.partyResortsTitle}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                {nightlife.ctaNote}
              </p>
            </div>
            <Button
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              variant="whatsapp"
              external
              className="shrink-0"
            >
              <MessageCircle className="h-4 w-4" />
              {ui.common.whatsappUs}
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {nightlife.partyResorts.map((resort) => (
              <div
                key={resort.name}
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-jamaica-gold/30"
              >
                <p className="font-bold text-white">{resort.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-jamaica-gold">
                  {resort.vibe}
                </p>
                <p className="mt-2 text-sm text-white/70">{resort.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-white/45">{nightlife.disclaimer}</p>
      </div>
      <JamaicaStripe variant="rasta" className="relative mt-0" />
    </section>
  );
}
