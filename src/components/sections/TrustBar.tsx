"use client";

import { Award, Clock, DollarSign, Shield, Star } from "lucide-react";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";

const iconMap = {
  shield: Shield,
  award: Award,
  star: Star,
  clock: Clock,
  dollar: DollarSign,
};

export function TrustBar() {
  const { siteConfig } = useI18n();
  return (
    <section className="relative bg-jamaica-black">
      <JamaicaStripe variant="rasta" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:grid-cols-4 lg:px-8">
        {siteConfig.trustPoints.map((point) => {
          const Icon = iconMap[point.icon];
          return (
            <div
              key={point.label}
              className="flex min-h-12 items-center gap-3 rounded-xl bg-jamaica-black-soft/50 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jamaica-green text-jamaica-gold">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold leading-snug text-white sm:text-sm">{point.label}</p>
            </div>
          );
        })}
      </div>
      <JamaicaStripe variant="flag" />
    </section>
  );
}
