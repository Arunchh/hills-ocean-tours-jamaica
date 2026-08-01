"use client";

import { MapPin, Car } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/LocaleProvider";

export function TransportPolicy() {
  const { siteConfig, ui } = useI18n();
  const { transport } = siteConfig;

  return (
    <section id="pickup" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={transport.eyebrow}
          title={transport.title}
          description={transport.description}
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-jamaica-green text-white">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-jamaica-black">
              {transport.includedNote}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
              {transport.nonParticipantNote}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-rasta-red/15 bg-white p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rasta-red text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-jamaica-black">
              {transport.feeNote}
            </h3>
            <ul className="mt-4 space-y-2">
              {transport.outOfAreaResorts.map((resort) => (
                <li
                  key={resort}
                  className="flex items-center gap-2 text-sm font-medium text-jamaica-black-soft"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-rasta-red" />
                  {resort}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-jamaica-black-soft p-6 text-center sm:p-8">
          <p className="text-lg font-bold text-jamaica-gold">{ui.sections.transportCta.title}</p>
          <p className="mt-2 text-sm text-white/80">{ui.sections.transportCta.description}</p>
          <div className="mt-6">
            <Button href="#contact" variant="gold" fullWidthMobile>
              {ui.sections.transportCta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
