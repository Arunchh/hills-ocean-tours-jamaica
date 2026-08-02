"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Moon, Palmtree, Plane, Sparkles, Building2, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";
import { localizeHref } from "@/i18n/paths";

const exploreIcons = [Palmtree, Plane, Building2, Moon, MapPin, BookOpen] as const;

export function HomeExplore() {
  const { ui, locale } = useI18n();
  const { homeExplore } = ui;

  return (
    <section id="explore" className="section-py bg-jamaica-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={homeExplore.eyebrow}
          title={homeExplore.title}
          description={homeExplore.description}
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {homeExplore.links.map((link, i) => {
            const Icon = exploreIcons[i] ?? Sparkles;
            return (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="group flex min-h-[11rem] flex-col rounded-2xl border-2 border-jamaica-green/10 bg-white p-4 shadow-sm transition-all duration-300 active:scale-[0.98] sm:min-h-0 sm:p-6 sm:hover:-translate-y-1 sm:hover:border-jamaica-green/25 sm:hover:shadow-xl"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-jamaica-green-light text-jamaica-green transition-colors group-hover:bg-jamaica-green group-hover:text-white sm:mb-4 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-sm font-bold leading-snug text-jamaica-black sm:text-lg">{link.title}</h3>
                <p className="mt-1.5 hidden flex-1 text-sm leading-relaxed text-jamaica-black-soft/80 sm:mt-2 sm:block">
                  {link.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold text-rasta-red group-hover:text-rasta-red-dark sm:mt-4 sm:gap-2 sm:text-sm">
                  {link.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
