import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getContent } from "@/i18n/index";
import { localizedPath } from "@/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteConfig } = getContent("en");
  const base = siteConfig.seo.siteUrl;
  const tourSlugs = ["clear-kayak-photoshoot", "jet-car-rental"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const { blogPosts, cityTourGuides } = getContent(locale);

    entries.push({
      url: `${base}${localizedPath("/", locale)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    entries.push({
      url: `${base}${localizedPath("/blog", locale)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const post of blogPosts) {
      entries.push({
        url: `${base}${localizedPath(`/blog/${post.slug}`, locale)}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const guide of cityTourGuides) {
      entries.push({
        url: `${base}${localizedPath(`/locations/${guide.slug}`, locale)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }

    for (const slug of tourSlugs) {
      entries.push({
        url: `${base}${localizedPath(`/tours/${slug}`, locale)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}
