import type { Locale } from "./config";
import { uiEn } from "./ui/en";
import { uiEs } from "./ui/es";
import { uiPt } from "./ui/pt";
import { uiFr } from "./ui/fr";
import type { LocaleContent, UiMessages } from "./types";
import { siteConfig as siteConfigEn } from "@/config/site-config";
import {
  blogPosts as blogPostsEn,
  cityTourGuides as cityTourGuidesEn,
  getCityGuide as getCityGuideEn,
} from "@/content/tours-and-blog";
import {
  resortGuides as resortGuidesEn,
  getResortGuide as getResortGuideEn,
} from "@/content/resort-guides";
import { siteConfigEs } from "./content/site-config.es";
import { siteConfigPt } from "./content/site-config.pt";
import { siteConfigFr } from "./content/site-config.fr";
import {
  blogPostsEs,
  cityTourGuidesEs,
} from "./content/tours-and-blog.es";
import {
  blogPostsPt,
  cityTourGuidesPt,
} from "./content/tours-and-blog.pt";
import {
  blogPostsFr,
  cityTourGuidesFr,
} from "./content/tours-and-blog.fr";

const uiByLocale: Record<Locale, UiMessages> = {
  en: uiEn,
  es: uiEs,
  pt: uiPt,
  fr: uiFr,
};

const contentByLocale: Record<Locale, LocaleContent> = {
  en: {
    siteConfig: siteConfigEn as unknown as LocaleContent["siteConfig"],
    cityTourGuides: cityTourGuidesEn,
    resortGuides: resortGuidesEn,
    blogPosts: blogPostsEn,
  },
  es: {
    siteConfig: siteConfigEs,
    cityTourGuides: cityTourGuidesEs,
    resortGuides: resortGuidesEn,
    blogPosts: blogPostsEs,
  },
  pt: {
    siteConfig: siteConfigPt,
    cityTourGuides: cityTourGuidesPt,
    resortGuides: resortGuidesEn,
    blogPosts: blogPostsPt,
  },
  fr: {
    siteConfig: siteConfigFr,
    cityTourGuides: cityTourGuidesFr,
    resortGuides: resortGuidesEn,
    blogPosts: blogPostsFr,
  },
};

export function getUi(locale: Locale): UiMessages {
  return uiByLocale[locale];
}

export function getContent(locale: Locale): LocaleContent {
  return contentByLocale[locale];
}

export function getBlogPost(locale: Locale, slug: string) {
  return getContent(locale).blogPosts.find((post) => post.slug === slug);
}

export function getCityGuide(slug: string) {
  return getCityGuideEn(slug);
}

export function getResortGuide(slug: string) {
  return getResortGuideEn(slug);
}

export function formatUi(
  template: string,
  values: Record<string, string | number>
): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template
  );
}
