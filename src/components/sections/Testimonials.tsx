"use client";

import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";

export function Testimonials() {
  const { siteConfig, ui } = useI18n();

  return (
    <section id="reviews" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.testimonials.eyebrow}
          title={ui.sections.testimonials.title}
          description={ui.sections.testimonials.description}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
          {siteConfig.testimonials.map((review) => (
            <article
              key={review.name}
              className="relative rounded-2xl border-2 border-jamaica-green/10 bg-jamaica-cream p-5 sm:p-6"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-jamaica-gold/40" />
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-jamaica-gold text-jamaica-gold"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-jamaica-black-soft">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-jamaica-green/10 pt-4">
                <p className="font-bold text-jamaica-black">{review.name}</p>
                <p className="text-sm text-jamaica-green">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
