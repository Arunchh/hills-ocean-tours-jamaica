import type { CityTourGuide, BlogPost } from "@/content/tours-and-blog";
import { cityTourGuides as cityTourGuidesEn, blogPosts as blogPostsEn } from "@/content/tours-and-blog";

export const cityTourGuidesFr: CityTourGuide[] = cityTourGuidesEn.map((guide) => ({
  ...guide,
  tagline:
    guide.slug === "montego-bay"
      ? "Votre base pour les aventures de la côte nord"
      : guide.slug === "falmouth"
        ? "Excursions croisière et transferts portuaires"
        : "Cascades, Blue Hole et excursions combinées",
  description:
    guide.slug === "montego-bay"
      ? "Montego Bay est notre point de départ principal — de l'Hip Strip et de l'aéroport Sangster (MBJ) aux complexes hors zone. Sports nautiques à One Man Beach et Pier One, plus les excursions vers Ocho Rios et Falmouth."
      : guide.slug === "falmouth"
        ? "Falmouth est le principal port de croisière de l'ouest de la Jamaïque. Nous accueillons les passagers au terminal pour des excursions programmées avec retour avant l'heure d'embarquement."
        : "Ocho Rios est le cœur des aventures de la côte nord — Dunn's River Falls, Blue Hole et forfaits combinés. Nous transportons les clients depuis les resorts de Montego Bay.",
  highlights: guide.highlights.map((h) => h),
  tours: guide.tours.map((t) => ({
    ...t,
    description:
      t.type === "transfer"
        ? "Prise en charge et dépose selon votre horaire."
        : t.description,
  })),
}));

export const blogPostsFr: BlogPost[] = blogPostsEn.map((post) => ({
  ...post,
  title:
    post.slug === "montego-bay-airport-transfer-guide"
      ? "Guide transfert aéroport Montego Bay (MBJ) — Réservez avant d'atterrir"
      : post.slug === "falmouth-cruise-port-excursions"
        ? "Excursions port de croisière Falmouth — Planifiez votre journée"
        : post.slug === "best-combo-tours-montego-bay"
          ? "Meilleures excursions combinées depuis Montego Bay"
          : post.slug === "clear-kayak-photoshoot-guide"
            ? "Séance photo kayak transparent à Montego Bay — À quoi s'attendre"
            : post.title,
  excerpt:
    post.slug === "montego-bay-airport-transfer-guide"
      ? "Comment pré-réserver votre transfert depuis l'aéroport Sangster, à quoi vous attendre à MBJ, et pourquoi WhatsApp vaut mieux qu'un taxi à l'arrivée."
      : post.slug === "falmouth-cruise-port-excursions"
        ? "Passagers croisière : comment caler votre excursion à Falmouth, quelles visites rentrent dans une escale, et comment nous vous ramènons à temps."
        : post.slug === "best-combo-tours-montego-bay"
          ? "Combinez ATV, cascades, tyrolienne et plus en une journée. Comment fonctionnent les forfaits combinés."
          : post.excerpt,
  category:
    post.category === "Transfers"
      ? "Transferts"
      : post.category === "Cruise"
        ? "Croisière"
        : post.category === "Tours"
          ? "Excursions"
          : post.category === "Water Sports"
            ? "Sports nautiques"
            : post.category,
}));
