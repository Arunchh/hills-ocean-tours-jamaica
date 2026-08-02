import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getContent } from "@/i18n/index";
import { localizedPath } from "@/i18n/paths";
import { getTourDetailSlugs } from "@/lib/tour-page-data";
import { resortGuides } from "@/content/resort-guides";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/tours", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/transfers", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/resorts", priority: 0.88, changeFrequency: "monthly" as const },
  { path: "/nightlife", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/locations", priority: 0.88, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteConfig } = getContent("en");
  const base = siteConfig.seo.siteUrl;
  const tourSlugs = getTourDetailSlugs(siteConfig);
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const { blogPosts, cityTourGuides } = getContent(locale);

    for (const route of STATIC_ROUTES) {
      entries.push({
        url: `${base}${localizedPath(route.path, locale)}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

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

    for (const guide of resortGuides) {
      entries.push({
        url: `${base}${localizedPath(`/resorts/${guide.slug}`, locale)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.86,
      });
    }

    for (const slug of tourSlugs) {
      entries.push({
        url: `${base}${localizedPath(`/tours/${slug}`, locale)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.92,
      });
    }
  }

  return entries;
}
