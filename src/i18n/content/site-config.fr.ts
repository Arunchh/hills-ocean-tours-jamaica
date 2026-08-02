import type { SiteConfig } from "@/i18n/types";
import { siteConfig } from "@/config/site-config";

export const siteConfigFr: SiteConfig = {
  ...siteConfig,
  business: {
    ...siteConfig.business,
    tagline: "Votre opérateur local de confiance à Montego Bay",
    description:
      "Spécialiste local de Montego Bay pour les excursions, forfaits combinés, locations de yacht privé et transferts aéroport ou port de croisière. Montego Bay, Ocho Rios et Falmouth — réservez via WhatsApp.",
    businessHours: "Lundi – dimanche, 9 h 00 – 18 h 30 (heure de la Jamaïque)",
    responseTime:
      "Nous répondons généralement sur WhatsApp sous 2 heures pendant les heures d'ouverture.",
  },
  hero: {
    ...siteConfig.hero,
    headline: "Votre opérateur local de confiance pour les excursions et transferts à Montego Bay",
    subheadline:
      "Excursions à la carte, forfaits combinés et locations de yacht privé à Montego Bay et Ocho Rios. Transferts aéroport et port de croisière disponibles. Écrivez-nous sur WhatsApp pour vérifier les disponibilités.",
    primaryCta: "Voir les excursions",
    secondaryCta: "Transfert aéroport et croisière",
    imageAlt: "Eaux turquoise des Caraïbes à Montego Bay, Jamaïque",
    badges: [
      "Opérateur local MoBay",
      "Tarifs en USD",
      "Prise en charge à l'hôtel",
      "Réservation WhatsApp",
    ],
  },
  trustPoints: [
    { label: "Opérateur agréé JTB", icon: "shield" },
    { label: "Acompte de 50 % pour réserver", icon: "dollar" },
    { label: "Annulation 7 jours avant", icon: "clock" },
    { label: "Confirmation WhatsApp", icon: "star" },
  ],
  valueProps: [
    {
      title: "Un opérateur local en qui vous pouvez avoir confiance",
      description:
        "Pas une plateforme de réservation impersonnelle — une équipe basée à Montego Bay qui connaît les resorts, les routes et les meilleurs horaires pour chaque expérience.",
    },
    {
      title: "Excursions à la carte et forfaits combinés",
      description:
        "Réservez une activité ou enchaînez votre journée — ATV plus rafting en bambou, combos Dunn's River, et plus encore avec un seul chauffeur et un seul devis.",
    },
    {
      title: "Montego Bay, Ocho Rios et Falmouth",
      description:
        "Nous couvrons le corridor de la côte nord que votre séjour inclut réellement — des hôtels du Hip Strip au port de croisière de Falmouth et aux excursions d'une journée à Ocho Rios.",
    },
  ],
  promoBanner: {
    ...siteConfig.promoBanner,
    message:
      "Bon retour en Jamaïque — demandez nos offres saisonnières en cours lorsque vous nous écrivez.",
    ctaText: "Voir les excursions",
    terms:
      "Demandez sur WhatsApp les dates valides et les excursions éligibles. Non cumulable avec d'autres offres sauf indication contraire.",
  },
  serviceArea: {
    ...siteConfig.serviceArea,
    eyebrow: "Où nous intervenons",
    title: "Montego Bay, Ocho Rios et la côte nord",
    description:
      "Nous nous concentrons sur les zones où la plupart des visiteurs séjournent et accostent — pas sur toute l'île. Kingston est hors de notre zone de service.",
    regions: [
      {
        name: "Montego Bay",
        slug: "montego-bay",
        description:
          "Hôtels, Airbnbs, Hip Strip, aéroport Sangster (MBJ) et front de mer Pier One.",
      },
      {
        name: "Port de croisière de Falmouth",
        slug: "falmouth",
        description:
          "Excursions aller-retour et transferts pour les passagers de croisière.",
      },
      {
        name: "Ocho Rios",
        slug: "ocho-rios",
        description:
          "Blue Hole, chutes Dunn's River et excursions combinées d'une journée depuis les resorts de MoBay.",
      },
      {
        name: "Resorts hors zone",
        slug: "montego-bay",
        description:
          "Royalton, Grand Palladium, Excellence Oyster Bay et propriétés voisines — frais de transport indiqués à l'avance.",
      },
    ],
    mapTitle: "Carte de la zone de service de Montego Bay",
  },
  transport: {
    ...siteConfig.transport,
    eyebrow: "Prise en charge et transport",
    title: "Prise en charge à Montego Bay incluse sur certaines excursions",
    description:
      "Le transport aller-retour est inclus lorsque votre hôtel ou Airbnb se trouve à Montego Bay. Des frais de transport s'appliquent pour les resorts hors zone et les accompagnants non participants.",
    includedNote:
      "Transport aller-retour inclus pour les hôtels et Airbnbs de Montego Bay",
    feeNote: "Des frais de transport s'appliquent pour les resorts hors de Montego Bay",
    nonParticipantNote:
      "Seuls les clients inscrits à l'expérience bénéficient d'une prise en charge gratuite. Les non-participants paient les mêmes frais de transport.",
  },
  services: siteConfig.services.map((service, index) => {
    const fr: { title: string; description: string }[] = [
      {
        title: "Mer et plage",
        description:
          "Séances photo en kayak transparent, jet-skis, jet cars, parachute ascensionnel, croisières en catamaran et rafting en bambou.",
      },
      {
        title: "Aventure et terre",
        description:
          "Parcours ATV, visites de fermes et équitation — des expériences pleines d'action autour de Montego Bay.",
      },
      {
        title: "Forfaits combinés",
        description:
          "Un prix, plusieurs activités — enchaînez ATV, tyrolienne, cascades et plus en une seule journée.",
      },
      {
        title: "Locations de yacht privé",
        description:
          "Locations de yacht et catamaran privés pour couples, familles et groupes — croisières au coucher du soleil et itinéraires sur mesure.",
      },
    ];
    return { ...service, ...fr[index] };
  }),
  tourCategories: siteConfig.tourCategories.map((category, index) => {
    const fr: { label: string; description: string }[] = [
      {
        label: "Mer et plage",
        description: "Séances kayak, jet cars, jet-skis et aventures océaniques",
      },
      {
        label: "Aventure et terre",
        description: "ATV, visites de fermes et équitation",
      },
      {
        label: "Excursions d'une journée",
        description: "Cascades d'Ocho Rios et points forts de la côte nord",
      },
      {
        label: "Excursions combinées",
        description: "Plusieurs activités, un seul prix forfaitaire",
      },
      {
        label: "Yacht privé",
        description: "Locations de yacht et catamaran privés",
      },
    ];
    return { ...category, ...fr[index] };
  }),
  excursions: [...siteConfig.excursions],
  howItWorks: [
    {
      step: 1,
      title: "Choisissez votre excursion ou transfert",
      description:
        "Parcourez les excursions à la carte, les forfaits combinés ou demandez un devis de transfert aéroport ou port de croisière sur WhatsApp.",
    },
    {
      step: 2,
      title: "Confirmez sur WhatsApp",
      description:
        "Nous vous répondons avec les disponibilités, le prix total et les détails de prise en charge. Pas de réservation automatique — une vraie personne confirme votre sortie.",
    },
    {
      step: 3,
      title: "Payez votre acompte de 50 %",
      description:
        "Sécurisez votre date avec un acompte de 50 % via CashApp ou Zelle. Solde à régler le jour de votre excursion ou transfert.",
    },
    {
      step: 4,
      title: "Prise en charge et départ",
      description:
        "Nous vous retrouvons à votre hôtel, Airbnb, aéroport ou port de croisière. Annulation gratuite jusqu'à 7 jours avant votre date.",
    },
  ],
  faqs: [
    {
      question: "Tous les prix sont-ils en dollars américains ?",
      answer:
        "Oui. Chaque prix sur ce site est indiqué en USD. Les acomptes se paient via CashApp ou Zelle ; le solde est généralement réglé en espèces à la prise en charge.",
    },
    {
      question: "La prise en charge à l'hôtel est-elle incluse ?",
      answer:
        "Pour certaines excursions comme la séance photo en kayak transparent, le transport aller-retour est inclus lorsque votre hôtel ou Airbnb se trouve à Montego Bay. Les resorts hors de Montego Bay (Royalton Blue Waters, Grand Palladium, Excellence Oyster Bay, etc.) entraînent des frais de transport. Les accompagnants non participants paient également des frais de transport.",
    },
    {
      question: "Comment fonctionnent les acomptes et les annulations ?",
      answer:
        "Un acompte de 50 % via CashApp ou Zelle confirme votre réservation. Vous pouvez annuler jusqu'à 7 jours avant la date de votre excursion ou transfert pour un remboursement intégral de votre acompte. Des conditions d'annulation supplémentaires peuvent s'appliquer à certaines expériences — nous vous les confirmerons lors de la réservation.",
    },
    {
      question: "Comment réserver ?",
      answer:
        "Écrivez-nous sur WhatsApp avec votre hôtel, la date, la taille du groupe et l'excursion ou le transfert souhaité. Nous confirmons les disponibilités et les tarifs personnellement — pas de paiement automatique en ligne.",
    },
    {
      question: "Intervenez-vous à Kingston ?",
      answer:
        "Non. Nous nous concentrons sur Montego Bay, le port de croisière de Falmouth, Ocho Rios et les resorts de la côte nord environnante. Kingston est hors de notre zone de service.",
    },
    {
      question: "Proposez-vous des locations de yacht privé ?",
      answer:
        "Oui. Nous organisons des locations de yacht et catamaran privés pour couples, familles et groupes. Écrivez-nous sur WhatsApp avec votre date, la taille du groupe et l'occasion pour un devis personnalisé.",
    },
    {
      question: "Des excursions combinées sont-elles disponibles ?",
      answer:
        "Oui. Les forfaits combinés regroupent plusieurs activités — comme ATV plus rafting en bambou ou Dunn's River plus tyrolienne — en une journée à prix unique. Parcourez la catégorie Excursions combinées ou demandez-nous de composer un combo sur mesure.",
    },
    {
      question: "J'arrive en croisière à Falmouth — serez-vous à l'heure ?",
      answer:
        "Oui. Indiquez-nous sur WhatsApp le nom du navire, la date d'accostage et l'heure de débarquement. Nous suivons les horaires de croisière et planifions la prise en charge pour que vous ayez le temps de votre excursion et du retour avant l'heure limite d'embarquement.",
    },
    {
      question: "Que se passe-t-il si mon vol est retardé ou mon navire arrive en retard ?",
      answer:
        "Écrivez-nous sur WhatsApp dès que vous le savez. Nous ajustons les heures de prise en charge lorsque c'est possible. Pour les passagers de croisière, nous priorisons votre retour au port avant le départ.",
    },
    {
      question: "Que se passe-t-il si la météo annule mon excursion ?",
      answer:
        "Si nous annulons en raison de conditions météo dangereuses, vous pouvez reprogrammer sans frais supplémentaires ou recevoir un remboursement intégral de votre acompte. Une pluie légère n'annule pas forcément les activités nautiques — nous vous conseillerons selon les conditions.",
    },
    {
      question: "À quelle heure serez-vous me chercher ?",
      answer:
        "L'heure de prise en charge est confirmée sur WhatsApp après la réservation — généralement 30 à 90 minutes avant le début de l'activité, selon l'emplacement de votre hôtel et le type d'excursion. Les prises en charge au port de croisière sont calées sur l'horaire de votre navire.",
    },
    {
      question: "Que reçois-je avec la séance photo en kayak transparent ?",
      answer:
        "Vous recevez 5 photos retouchées, 1 vidéo 4K montée et 30 à 50+ photos non retouchées le jour même via WeTransfer ou Google Drive. Capturez vos 5 choix et envoyez-les via WhatsApp pour le montage. Photos retouchées supplémentaires : 10 $ chacune ; montage express : 100 $.",
    },
    {
      question: "Quel âge faut-il pour conduire le jet car ?",
      answer:
        "Les conducteurs doivent avoir 18 ans ou plus. Le tarif du jet car est par véhicule, pas par personne — 2 places (350 $) ou 4 places (600 $) pour 30 minutes.",
    },
    {
      question: "Puis-je réserver des excursions sans prix affiché ?",
      answer:
        "Oui. ATV, jet-ski, Blue Hole, Dunn's River et d'autres expériences sont disponibles — écrivez-nous sur WhatsApp pour un devis personnalisé selon la taille de votre groupe et l'emplacement de votre hôtel.",
    },
  ],
  nav: [
    { label: "Excursions", href: "/tours" },
    { label: "Resorts", href: "/resorts" },
    { label: "Transferts", href: "/transfers" },
    { label: "Nightlife", href: "/nightlife" },
    { label: "Destinations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
} as unknown as SiteConfig;
