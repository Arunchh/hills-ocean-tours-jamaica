import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { getContent, getUi } from "@/i18n/index";
import { localizeHref } from "@/i18n/paths";
import { dateLocale, isLocale, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const ui = getUi(localeParam);
  return {
    title: ui.blog.metadataTitle,
    description: ui.blog.metadataDescription,
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const { blogPosts } = getContent(locale);
  const ui = getUi(locale);

  return (
    <>
      <div className="safe-top rasta-gradient-bg pb-12 pt-24 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Link
            href={localizeHref("/", locale)}
            className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.common.backToHome}
          </Link>
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {ui.blog.indexTitle}
          </h1>
          <p className="mt-4 text-lg text-jamaica-gold-light/90">{ui.blog.indexSubtitle}</p>
        </div>
        <JamaicaStripe variant="flag" className="mt-12" />
      </div>

      <section className="section-py bg-jamaica-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border-2 border-jamaica-green/10 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="h-1 rasta-stripe" />
                <div className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-jamaica-green">
                    <span className="rounded-full bg-jamaica-green-light px-3 py-1">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-jamaica-black-soft/60">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString(dateLocale[locale], {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-jamaica-black-soft/60">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                    <Link
                      href={localizeHref(`/blog/${post.slug}`, locale)}
                      className="transition-colors hover:text-jamaica-green"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-jamaica-black-soft/80">
                    {post.excerpt}
                  </p>
                  <Link
                    href={localizeHref(`/blog/${post.slug}`, locale)}
                    className="mt-4 inline-flex min-h-12 touch-manipulation items-center text-sm font-bold text-rasta-red active:text-rasta-red-dark sm:hover:text-rasta-red-dark"
                  >
                    {ui.common.readMore}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
