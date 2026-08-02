"use client";

import Image from "next/image";
import { Camera, Film, ImageIcon, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";

const deliverableIcons = [Camera, Film, ImageIcon, Sparkles];

export function DroneShowcase() {
  const { siteConfig, ui, locale } = useI18n();
  const showcase = siteConfig.droneShowcase;

  return (
    <section id="drone" className="section-py relative overflow-hidden bg-jamaica-cream-dark">
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-jamaica-green/5 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-jamaica-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={showcase.eyebrow}
          title={showcase.title}
          description={showcase.description}
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-jamaica-green/20 via-jamaica-gold/20 to-rasta-red/20 blur-sm" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={showcase.image}
                  alt={showcase.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-jamaica-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-jamaica-black">
                  <Sparkles className="h-3.5 w-3.5" />
                  @hillsoceansja
                </span>
                <p className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                  Same-day delivery via WeTransfer
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
              {ui.sections.droneShowcase.deliverablesTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {showcase.deliverables.map((item, i) => {
                const Icon = deliverableIcons[i] ?? Camera;
                return (
                  <li
                    key={item.label}
                    className="flex gap-4 rounded-2xl border-2 border-jamaica-green/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-jamaica-green-light text-jamaica-green">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-jamaica-black">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-jamaica-black-soft/80">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={localizeHref(`/tours/${showcase.ctaTourSlug}`, locale)}
                variant="secondary"
              >
                {ui.common.exploreDronePackage}
              </Button>
              <Button
                href={localizeHref("/#featured", locale)}
                variant="outline"
                className="!border-jamaica-green/30 !bg-white !text-jamaica-green hover:!bg-jamaica-green-light"
              >
                {ui.common.viewDetails}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <JamaicaStripe variant="flag" className="mt-12" />
    </section>
  );

}
