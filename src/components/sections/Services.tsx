"use client";

import { Hotel, Map, Plane, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPrice } from "@/lib/utils";

const iconMap = {
  plane: Plane,
  hotel: Hotel,
  map: Map,
  users: Users,
};

export function Services() {
  const { siteConfig, ui } = useI18n();

  return (
    <section id="services" className="section-py bg-jamaica-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.services.eyebrow}
          title={ui.sections.services.title}
          description={ui.sections.services.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const accent =
              i % 3 === 0
                ? "bg-jamaica-green group-hover:bg-jamaica-green-dark"
                : i % 3 === 1
                  ? "bg-rasta-red group-hover:bg-rasta-red-dark"
                  : "bg-jamaica-gold group-hover:bg-jamaica-gold-dark text-jamaica-black";
            return (
              <article
                key={service.title}
                className="group rounded-2xl border-2 border-jamaica-green/10 bg-white p-5 shadow-sm transition-all duration-300 active:scale-[0.99] sm:p-6 sm:hover:-translate-y-1 sm:hover:shadow-xl"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors ${accent}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-jamaica-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                  {service.description}
                </p>
                <p className="mt-5 text-sm font-bold text-jamaica-green">
                  {service.priceFrom > 0
                    ? formatUi(ui.common.fromPriceUsd, { price: formatPrice(service.priceFrom) })
                    : ui.common.getQuote}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
