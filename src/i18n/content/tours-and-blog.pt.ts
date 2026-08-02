import type { CityTourGuide, BlogPost } from "@/content/tours-and-blog";
import { cityTourGuides as cityTourGuidesEn, blogPosts as blogPostsEn } from "@/content/tours-and-blog";

export const cityTourGuidesPt: CityTourGuide[] = cityTourGuidesEn.map((guide) => ({
  ...guide,
  tagline:
    guide.slug === "montego-bay"
      ? "Sua base para aventuras na costa norte"
      : guide.slug === "falmouth"
        ? "Passeios de cruzeiro e transfers portuários"
        : "Cataratas, Blue Hole e passeios combinados",
  description:
    guide.slug === "montego-bay"
      ? "Montego Bay é nosso ponto de partida principal — do Hip Strip e do aeroporto Sangster (MBJ) aos resorts fora da área. Esportes aquáticos em One Man Beach e Pier One, além de passeios para Ocho Rios e Falmouth."
      : guide.slug === "falmouth"
        ? "Falmouth é o principal porto de cruzeiros do oeste da Jamaica. Recebemos passageiros no terminal para passeios programados com retorno antes do horário de embarque."
        : "Ocho Rios é o coração das aventuras da costa norte — Dunn's River Falls, Blue Hole e pacotes combinados. Transportamos hóspedes dos resorts de Montego Bay.",
  highlights: guide.highlights.map((h) => h),
  tours: guide.tours.map((t) => ({
    ...t,
    description:
      t.type === "transfer"
        ? "Pickup e entrega conforme seu horário."
        : t.description,
  })),
}));

const blogTitlePt: Record<string, string> = {
  "clear-kayak-photoshoot-guide":
    "Sessão de fotos em caiaque transparente em Montego Bay — O que esperar",
  "montego-bay-airport-transfer-guide":
    "Guia de transfer para o aeroporto de Montego Bay (MBJ) — Reserve antes de pousar",
  "falmouth-cruise-port-excursions":
    "Passeios no porto de cruzeiros de Falmouth — Planeje seu dia",
  "best-combo-tours-montego-bay":
    "Melhores passeios combinados a partir de Montego Bay",
  "montego-bay-nightlife-guide":
    "Guia de vida noturna em Montego Bay — Hip Strip e mais",
  "tours-from-rose-hall-resorts":
    "Passeios a partir dos resorts de Rose Hall — Hyatt, Hilton e Secrets",
  "things-to-do-grand-palladium-jamaica":
    "O que fazer no Grand Palladium Jamaica — Passeios e transfers",
};

const blogExcerptPt: Record<string, string> = {
  "montego-bay-airport-transfer-guide":
    "Como pré-reservar seu transfer do aeroporto Sangster, o que esperar no MBJ e por que WhatsApp é melhor que um táxi na chegada.",
  "falmouth-cruise-port-excursions":
    "Passageiros de cruzeiro: como encaixar seu passeio em Falmouth, quais tours cabem em uma escala e como levamos você de volta a tempo.",
  "best-combo-tours-montego-bay":
    "Combine ATV, cataratas, tirolesa e mais em um único dia. Como funcionam os pacotes combinados.",
  "montego-bay-nightlife-guide":
    "Transporte noturno, Margaritaville, Lounge 2727 e como planejar uma noite no Hip Strip sem se preocupar com táxis.",
  "tours-from-rose-hall-resorts":
    "Pickup no Hyatt Zilara, Hilton Rose Hall e resorts do corredor — passeios e taxas de transporte explicadas.",
  "things-to-do-grand-palladium-jamaica":
    "Passeios a partir do Grand Palladium, Royalton e resorts próximos — Dunn's River, Blue Hole e mais com transporte cotado.",
};

export const blogPostsPt: BlogPost[] = blogPostsEn.map((post) => ({
  ...post,
  title: blogTitlePt[post.slug] ?? post.title,
  excerpt: blogExcerptPt[post.slug] ?? post.excerpt,
  category:
    post.category === "Transfers"
      ? "Transfers"
      : post.category === "Cruise"
        ? "Cruzeiro"
        : post.category === "Tours"
          ? "Passeios"
          : post.category === "Water Sports"
            ? "Esportes aquáticos"
            : post.category === "Nightlife"
              ? "Vida noturna"
              : post.category,
}));
