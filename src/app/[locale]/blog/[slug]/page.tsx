import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPost, getContent, getUi, formatUi } from "@/i18n/index";
import { localizeHref, localizedPath } from "@/i18n/paths";
import { dateLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).blogPosts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const post = getBlogPost(localeParam, slug);
  if (!post) return {};

  const { siteConfig } = getContent(localeParam);
  const base = siteConfig.seo.siteUrl;
  const path = localizedPath(`/blog/${slug}`, localeParam);

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `${base}${path}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const { siteConfig } = getContent(locale);
  const ui = getUi(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: locale,
    author: { "@type": "Organization", name: siteConfig.business.name },
    publisher: { "@type": "Organization", name: siteConfig.business.name },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="safe-top rasta-gradient-bg pb-10 pt-24 sm:pb-12 sm:pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href={localizeHref("/blog", locale)}
            className="mb-6 inline-flex min-h-12 touch-manipulation items-center gap-2 rounded-lg px-2 text-sm font-semibold text-jamaica-gold active:text-white sm:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.common.allGuides}
          </Link>
          <span className="rounded-full bg-jamaica-gold/20 px-3 py-1 text-xs font-bold text-jamaica-gold">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-jamaica-gold-light/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString(dateLocale[locale], {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
        <JamaicaStripe variant="flag" className="mt-10" />
      </div>

      <article className="section-py bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-base font-medium leading-relaxed text-jamaica-black-soft sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-xl font-bold text-jamaica-black sm:text-2xl">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className={`leading-relaxed text-jamaica-black-soft/85 ${section.heading || j > 0 ? "mt-4" : "mt-0"}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-jamaica-cream p-5 text-center sm:mt-14 sm:p-8">
            <h3 className="font-display text-xl font-bold text-jamaica-black">
              {ui.common.needTransferCtaTitle}
            </h3>
            <p className="mt-2 text-sm text-jamaica-black-soft/80">
              {formatUi(ui.common.needTransferCtaDescription, {
                business: siteConfig.business.name,
              })}
            </p>
            <div className="mt-6">
              <Button href={localizeHref("/#contact", locale)} variant="primary" fullWidthMobile>
                {ui.common.needTransferCtaButton}
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
