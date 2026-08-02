"use client";

import { AtSign, ExternalLink, MessageCircle, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";

function formatEngagement(likes: number, comments: number, views?: number) {
  const parts: string[] = [];
  if (likes > 0) parts.push(`${likes.toLocaleString()} likes`);
  if (comments > 0) parts.push(`${comments.toLocaleString()} comments`);
  if (views && views > 0) parts.push(`${views.toLocaleString()} views`);
  return parts.join(" · ");
}

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

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-jamaica-black-soft/80 sm:mt-6">
          {ui.sections.testimonials.instagramNote}
        </p>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {siteConfig.testimonials.map((review) => (
            <article
              key={review.id}
              className="relative flex flex-col rounded-2xl border-2 border-jamaica-green/10 bg-jamaica-cream p-5 sm:p-6"
            >
              <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-jamaica-green/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-jamaica-green">
                <AtSign className="h-3.5 w-3.5" aria-hidden />
                {ui.sections.testimonials.instagramComment}
              </div>
              <Quote className="absolute right-6 top-6 h-8 w-8 text-jamaica-gold/40" />

              {review.experience ? (
                <p className="text-xs font-bold uppercase tracking-wide text-jamaica-green">
                  {review.experience}
                </p>
              ) : null}

              <div className="mt-2 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-jamaica-gold text-jamaica-gold"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-jamaica-black-soft">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-jamaica-green/10 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-jamaica-black">{review.location}</p>
                    {review.publishedAt ? (
                      <p className="text-sm text-jamaica-green">
                        {ui.sections.testimonials.instagramSource} ·{" "}
                        {new Date(review.publishedAt).toLocaleDateString(undefined, {
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    ) : (
                      <p className="text-sm text-jamaica-green">
                        {ui.sections.testimonials.instagramSource}
                      </p>
                    )}
                  </div>
                  {review.source === "instagram" ? (
                    <AtSign className="h-5 w-5 shrink-0 text-jamaica-green" aria-hidden />
                  ) : null}
                </div>

                {review.engagement ? (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-jamaica-black-soft/80">
                    <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {formatEngagement(
                      review.engagement.likes,
                      review.engagement.comments,
                      review.engagement.views,
                    )}
                  </p>
                ) : null}

                {review.postUrl ? (
                  <a
                    href={review.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-jamaica-green hover:underline"
                  >
                    {ui.sections.testimonials.viewOnInstagram}
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
