"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";

const stepColors = [
  "bg-jamaica-green",
  "bg-jamaica-gold text-jamaica-black",
  "bg-rasta-red",
  "bg-jamaica-black text-jamaica-gold",
];

export function HowItWorks() {
  const { siteConfig, ui } = useI18n();

  return (
    <section id="how-it-works" className="section-py bg-jamaica-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.howItWorks.eyebrow}
          title={ui.sections.howItWorks.title}
          description={ui.sections.howItWorks.description}
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.howItWorks.map((item, i) => (
            <div key={item.step} className="relative text-center">
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-2xl font-bold text-white shadow-lg ${stepColors[i]}`}
              >
                {item.step}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-jamaica-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
