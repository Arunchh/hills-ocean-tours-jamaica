"use client";

import { MapPin, Music } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";

export function Nightlife() {
  const { siteConfig } = useI18n();
  const { nightlife } = siteConfig;

  return (
    <section id="nightlife" className="section-py bg-jamaica-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={nightlife.eyebrow}
          title={nightlife.title}
          description={nightlife.description}
          light
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {nightlife.venues.map((venue) => (
            <article
              key={venue.name}
              className="rounded-2xl border border-jamaica-gold/20 bg-jamaica-black-soft p-5 transition-colors hover:border-jamaica-gold/40"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-jamaica-gold/20 text-jamaica-gold">
                <Music className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">{venue.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-jamaica-gold">
                {venue.type}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{venue.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">{nightlife.disclaimer}</p>
      </div>
    </section>
  );
}
