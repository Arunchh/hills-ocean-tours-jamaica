"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";

export function ResortPickup() {
  const { siteConfig, ui, locale } = useI18n();
  const { resortZones } = siteConfig;

  return (
    <section id="resorts" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={resortZones.eyebrow}
          title={resortZones.title}
          description={resortZones.description}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {resortZones.zones.map((zone, i) => (
            <Link
              key={zone.slug}
              href={localizeHref(`/resorts/${zone.slug}`, locale)}
              className="group relative overflow-hidden rounded-2xl border-2 border-jamaica-green/10 bg-jamaica-cream shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-jamaica-green/30 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={zone.image}
                  alt={zone.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/85 via-jamaica-black/30 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-jamaica-green shadow-md backdrop-blur-sm">
                  <Building2 className="h-3.5 w-3.5" />
                  {zone.resortCount}+ resorts
                </div>
              </div>

              <div className="relative p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-jamaica-green">
                  {zone.tagline}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                  {zone.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-jamaica-black-soft/80">
                  {zone.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {zone.featuredResorts.slice(0, 3).map((resort) => (
                    <span
                      key={resort}
                      className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-jamaica-black-soft"
                    >
                      {resort}
                    </span>
                  ))}
                </div>

                <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-jamaica-green">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {zone.pickupNote}
                </p>

                <span
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                    i % 2 === 0 ? "text-rasta-red group-hover:text-rasta-red-dark" : "text-jamaica-green group-hover:text-jamaica-green-dark"
                  }`}
                >
                  {ui.common.viewResortGuide}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
