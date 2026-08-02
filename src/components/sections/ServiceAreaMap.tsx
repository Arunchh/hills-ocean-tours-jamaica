"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";

export function ServiceAreaMap() {
  const { siteConfig, ui, locale } = useI18n();
  const area = siteConfig.serviceArea;

  return (
    <section id="service-area" className="section-py bg-jamaica-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.serviceArea.eyebrow}
          title={ui.sections.serviceArea.title}
          description={ui.sections.serviceArea.description}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ul className="space-y-4">
            {area.regions.map((region) => (
              <li key={region.name}>
                <Link
                  href={localizeHref(`/locations/${region.slug}`, locale)}
                  className="flex gap-4 rounded-2xl border-2 border-jamaica-green/10 bg-white p-5 transition-colors hover:border-jamaica-green/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jamaica-green-light text-jamaica-green">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-jamaica-black">{region.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-jamaica-black-soft/80">
                      {region.description}
                    </p>
                    <span className="mt-2 inline-block text-xs font-bold text-jamaica-green">
                      {ui.common.viewLocationGuide} →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-2xl border-2 border-jamaica-green/15 shadow-lg">
            <iframe
              title={area.mapTitle}
              src={area.mapEmbedUrl}
              className="h-[320px] w-full sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href={localizeHref("/resorts", locale)} variant="secondary">
            {ui.common.allResortZones}
          </Button>
        </div>
      </div>
    </section>
  );
}
