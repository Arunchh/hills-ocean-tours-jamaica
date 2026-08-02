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

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {homeExplore.links.map((link, i) => {
            const Icon = exploreIcons[i] ?? Sparkles;
            return (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="group flex flex-col rounded-2xl border-2 border-jamaica-green/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-jamaica-green/25 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-jamaica-green-light text-jamaica-green transition-colors group-hover:bg-jamaica-green group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-jamaica-black">{link.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-jamaica-black-soft/80">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rasta-red group-hover:text-rasta-red-dark">
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
