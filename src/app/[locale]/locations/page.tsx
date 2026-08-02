import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { getContent, getUi } from "@/i18n/index";
import { localizeHref } from "@/i18n/paths";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  return {
    title: ui.pages.locations.title,
    description: ui.pages.locations.description,
  };
}

export default async function LocationsIndexPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const { cityTourGuides } = getContent(locale);
  const ui = getUi(locale);

  return (
    <SiteChrome>
      <main>
        <SubpageHero
          title={ui.pages.locations.title}
          description={ui.pages.locations.description}
          eyebrow={ui.pages.locations.eyebrow}
          backHref={localizeHref("/", locale)}
          backLabel={ui.common.backToHome}
        />

        <section className="section-py bg-jamaica-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cityTourGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={localizeHref(`/locations/${guide.slug}`, locale)}
                  className="group overflow-hidden rounded-2xl border-2 border-jamaica-green/10 bg-white shadow-lg transition-all hover:-translate-y-1 hover:border-jamaica-green/25 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.city}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="font-display text-xl font-bold text-white">{guide.city}</h2>
                      <p className="mt-1 text-sm text-jamaica-gold-light/90">{guide.tagline}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="line-clamp-2 text-sm leading-relaxed text-jamaica-black-soft/80">
                      {guide.description}
                    </p>
                    <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-jamaica-green">
                      <MapPin className="h-3.5 w-3.5" />
                      {guide.tours.length} tours & transfers
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-rasta-red">
                      {ui.common.viewLocationGuide}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
