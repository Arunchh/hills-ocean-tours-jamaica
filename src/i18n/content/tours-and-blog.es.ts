import type { CityTourGuide, BlogPost } from "@/content/tours-and-blog";
import { cityTourGuides as cityTourGuidesEn, blogPosts as blogPostsEn } from "@/content/tours-and-blog";

export const cityTourGuidesEs: CityTourGuide[] = cityTourGuidesEn.map((guide) => ({
  ...guide,
  tagline:
    guide.slug === "montego-bay"
      ? "Tu base para aventuras en la costa norte"
      : guide.slug === "falmouth"
        ? "Excursiones de crucero y traslados portuarios"
        : "Cataratas, Blue Hole y excursiones combinadas",
  description:
    guide.slug === "montego-bay"
      ? "Montego Bay es nuestro punto de partida principal — desde el Hip Strip y el aeropuerto Sangster (MBJ) hasta resorts fuera de zona. Deportes acuáticos en One Man Beach y Pier One, además de excursiones a Ocho Rios y Falmouth."
      : guide.slug === "falmouth"
        ? "Falmouth es el principal puerto de cruceros del oeste de Jamaica. Recibimos pasajeros en el terminal para excursiones programadas con regreso antes de la hora de embarque."
        : "Ocho Rios es el corazón de las aventuras de la costa norte — Dunn's River Falls, Blue Hole y paquetes combinados. Transportamos huéspedes desde resorts de Montego Bay.",
  highlights: guide.highlights.map((h) => h),
  tours: guide.tours.map((t) => ({
    ...t,
    description:
      t.type === "transfer"
        ? "Recogida y entrega según tu horario."
        : t.description,
  })),
}));

const blogTitleEs: Record<string, string> = {
  "clear-kayak-photoshoot-guide":
    "Sesión de fotos en kayak transparente en Montego Bay — Qué esperar",
  "montego-bay-airport-transfer-guide":
    "Guía de traslado al aeropuerto de Montego Bay (MBJ) — Reserva antes de aterrizar",
  "falmouth-cruise-port-excursions":
    "Excursiones en el puerto de cruceros de Falmouth — Planifica tu día",
  "best-combo-tours-montego-bay":
    "Mejores excursiones combinadas desde Montego Bay",
  "montego-bay-nightlife-guide":
    "Guía de vida nocturna en Montego Bay — Hip Strip y más",
  "tours-from-rose-hall-resorts":
    "Excursiones desde resorts de Rose Hall — Hyatt, Hilton y Secrets",
  "things-to-do-grand-palladium-jamaica":
    "Qué hacer en Grand Palladium Jamaica — Excursiones y traslados",
};

const blogExcerptEs: Record<string, string> = {
  "montego-bay-airport-transfer-guide":
    "Cómo reservar con anticipación tu traslado desde el aeropuerto Sangster, qué esperar en MBJ y por qué WhatsApp es mejor que un taxi al llegar.",
  "falmouth-cruise-port-excursions":
    "Pasajeros de crucero: cómo organizar tu excursión en Falmouth, qué tours caben en una escala y cómo te devolvemos a tiempo.",
  "best-combo-tours-montego-bay":
    "Combina ATV, cataratas, tirolesa y más en un solo día. Cómo funcionan los paquetes combinados.",
  "montego-bay-nightlife-guide":
    "Transporte nocturno, Margaritaville, Lounge 2727 y cómo planificar una noche en el Hip Strip sin preocuparte por taxis.",
  "tours-from-rose-hall-resorts":
    "Recogida en Hyatt Zilara, Hilton Rose Hall y resorts del corredor — excursiones y tarifas de transporte explicadas.",
  "things-to-do-grand-palladium-jamaica":
    "Excursiones desde Grand Palladium, Royalton y resorts cercanos — Dunn's River, Blue Hole y más con transporte incluido cotizado.",
};

export const blogPostsEs: BlogPost[] = blogPostsEn.map((post) => ({
  ...post,
  title: blogTitleEs[post.slug] ?? post.title,
  excerpt: blogExcerptEs[post.slug] ?? post.excerpt,
  category:
    post.category === "Transfers"
      ? "Traslados"
      : post.category === "Cruise"
        ? "Crucero"
        : post.category === "Tours"
          ? "Excursiones"
          : post.category === "Water Sports"
            ? "Deportes acuáticos"
            : post.category === "Nightlife"
              ? "Vida nocturna"
              : post.category,
}));
