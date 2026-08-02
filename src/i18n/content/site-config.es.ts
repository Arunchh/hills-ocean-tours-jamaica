import type { SiteConfig } from "@/i18n/types";
import { siteConfig } from "@/config/site-config";

export const siteConfigEs: SiteConfig = {
  ...siteConfig,
  business: {
    ...siteConfig.business,
    tagline: "Tu operador local de confianza en Montego Bay",
    description:
      "Especialista local en Montego Bay para excursiones, paquetes combinados, alquiler de yates privados y traslados al aeropuerto o puerto de cruceros. Montego Bay, Ocho Rios y Falmouth — reserva por WhatsApp.",
    businessHours: "Lunes – domingo, 9:00 AM – 6:30 PM (hora de Jamaica)",
    responseTime:
      "Normalmente respondemos por WhatsApp en 2 horas durante el horario de atención.",
  },
  hero: {
    ...siteConfig.hero,
    headline: "Tu operador local de confianza para excursiones y traslados en Montego Bay",
    subheadline:
      "Excursiones individuales, paquetes combinados, sesiones con dron, vida nocturna y yates privados en Montego Bay y Ocho Rios. Traslados al aeropuerto y puerto de cruceros disponibles. Escríbenos por WhatsApp para consultar disponibilidad.",
    primaryCta: "Ver excursiones",
    secondaryCta: "Traslado aeropuerto y crucero",
    imageAlt: "Agua turquesa del Caribe en Montego Bay, Jamaica",
    badges: [
      "Operador local MoBay",
      "Foto y video con dron",
      "Recogida en hotel",
      "Reserva por WhatsApp",
    ],
  },
  trustPoints: [
    { label: "Operador con licencia JTB", icon: "shield" },
    { label: "Depósito del 50% para reservar", icon: "dollar" },
    { label: "Cancelación 7 días antes", icon: "clock" },
    { label: "Confirmación por WhatsApp", icon: "star" },
  ],
  valueProps: [
    {
      title: "Un operador local en quien puedes confiar",
      description:
        "No somos una plataforma de reservas impersonal — somos un equipo con base en Montego Bay que conoce los resorts, las rutas y los mejores horarios para cada experiencia.",
    },
    {
      title: "Excursiones individuales y paquetes combinados",
      description:
        "Reserva una actividad o combina tu día — ATV más rafting en bambú, combos Dunn's River y más con un solo conductor y una sola cotización.",
    },
    {
      title: "Montego Bay, Ocho Rios y Falmouth",
      description:
        "Cubrimos el corredor de la costa norte que tu vacación realmente incluye — desde hoteles del Hip Strip hasta el puerto de cruceros de Falmouth y excursiones de un día a Ocho Rios.",
    },
  ],
  promoBanner: {
    ...siteConfig.promoBanner,
    message:
      "Bienvenido de nuevo a Jamaica — pregunta por nuestras ofertas de temporada cuando nos escribas.",
    ctaText: "Ver excursiones",
    terms:
      "Consulta por WhatsApp las fechas válidas y excursiones elegibles. No acumulable con otras ofertas salvo indicación contraria.",
  },
  serviceArea: {
    ...siteConfig.serviceArea,
    eyebrow: "Dónde operamos",
    title: "Montego Bay, Ocho Rios y la costa norte",
    description:
      "Nos enfocamos en las zonas donde la mayoría de visitantes se hospedan y desembarcan — no en toda la isla. Kingston está fuera de nuestra zona de servicio.",
    regions: [
      {
        name: "Montego Bay",
        slug: "montego-bay",
        description: "Hoteles, Airbnbs, Hip Strip, aeropuerto Sangster (MBJ) y malecón Pier One.",
      },
      {
        name: "Puerto de cruceros de Falmouth",
        slug: "falmouth",
        description: "Excursiones ida y vuelta y traslados para pasajeros de crucero.",
      },
      {
        name: "Ocho Rios",
        slug: "ocho-rios",
        description:
          "Blue Hole, cataratas Dunn's River y excursiones combinadas de un día desde resorts de MoBay.",
      },
      {
        name: "Resorts fuera de zona",
        slug: "montego-bay",
        description:
          "Royalton, Grand Palladium, Excellence Oyster Bay y propiedades cercanas — tarifa de transporte cotizada por adelantado.",
      },
    ],
    mapTitle: "Mapa de la zona de servicio de Montego Bay",
  },
  transport: {
    ...siteConfig.transport,
    eyebrow: "Recogida y transporte",
    title: "Recogida en Montego Bay incluida en excursiones selectas",
    description:
      "El transporte ida y vuelta está incluido cuando tu hotel o Airbnb está en Montego Bay. Se aplica una tarifa de transporte para resorts fuera de zona y acompañantes que no participan.",
    includedNote: "Transporte ida y vuelta incluido para hoteles y Airbnbs en Montego Bay",
    feeNote: "Se aplica tarifa de transporte para resorts fuera de Montego Bay",
    nonParticipantNote:
      "Solo los clientes inscritos en la experiencia tienen recogida gratuita. Los no participantes pagan la misma tarifa de transporte.",
  },
  services: siteConfig.services.map((service, index) => {
    const es: { title: string; description: string }[] = [
      {
        title: "Agua y playa",
        description:
          "Sesiones de kayak transparente con dron, jet skis, jet cars, parasailing, cruceros en catamarán y rafting en bambú.",
      },
      {
        title: "Aventura y tierra",
        description:
          "Rutas en ATV, tirolesa, tours de granjas y paseos a caballo — experiencias llenas de acción alrededor de Montego Bay.",
      },
      {
        title: "Cultura y excursiones de un día",
        description:
          "Dunn's River, Blue Hole, Rose Hall, 9 Mile Bob Marley, Rick's Café y excursiones de un día a Negril desde MoBay.",
      },
      {
        title: "Vida nocturna y romance",
        description:
          "Transporte nocturno en MoBay, Lounge 2727, Margaritaville y cenas románticas en la playa — planificamos tu noche.",
      },
      {
        title: "Yates privados",
        description:
          "Alquiler de yates y catamaranes privados para parejas, familias y grupos — cruceros al atardecer e itinerarios personalizados.",
      },
    ];
    return { ...service, ...es[index] };
  }),
  tourCategories: siteConfig.tourCategories.map((category, index) => {
    const es: { label: string; description: string }[] = [
      { label: "Agua y playa", description: "Kayak, jet cars, jet skis y aventuras oceánicas" },
      { label: "Aventura y tierra", description: "ATV, tours de granjas y paseos a caballo" },
      {
        label: "Excursiones de un día",
        description: "Cataratas de Ocho Rios, atardeceres en Negril y lo mejor de la costa norte",
      },
      {
        label: "Cultura y patrimonio",
        description: "Bob Marley, Rose Hall e historias de Jamaica",
      },
      { label: "Romance y gastronomía", description: "Cenas en la playa y paquetes para ocasiones especiales" },
      { label: "Excursiones combinadas", description: "Varias actividades, un solo precio de paquete" },
      { label: "Yate privado", description: "Alquiler de yates y catamaranes privados" },
    ];
    return { ...category, ...es[index] };
  }),
  excursions: [...siteConfig.excursions],
  nightlife: {
    ...siteConfig.nightlife,
    eyebrow: "Vida nocturna — Montego Bay",
    title: "Termina tu día — comienza tu noche",
    description:
      "¿Te hospedas en un resort animado de Montego Bay? Organizamos transporte y paquetes de vida nocturna para que no te preocupes por horarios ni taxis. Escríbenos con tu hotel y fecha — armamos tu noche.",
    disclaimer:
      "Horarios, cover y código de vestimenta cambian. Solo adultos 18+ en discotecas. El transporte nocturno se cotiza por separado — escríbenos para un presupuesto personalizado.",
    packages: siteConfig.nightlife.packages.map((pkg, index) => {
      const es = [
        {
          name: "Noche en el Hip Strip",
          description:
            "Transporte ida y vuelta desde tu hotel a Margaritaville y Pier One — cena, bebidas y ambiente frente al mar en el Hip Strip.",
          includes: ["Recogida y regreso al hotel", "Parada en Margaritaville", "Pier One frente al mar"],
          badge: "Más popular",
        },
        {
          name: "Noche VIP Lounge 2727",
          description:
            "Experiencia de lounge exclusivo en Montego Bay — manejamos el transporte ida y vuelta para que disfrutes sin preocupaciones.",
          includes: ["Transporte privado ida y vuelta", "Entrega en Lounge 2727", "Horario de regreso flexible"],
          badge: "Exclusivo",
        },
        {
          name: "Tour de fiesta entre resorts",
          description:
            "¿Visitas Breathless, RIU o Grand Palladium? Conectamos la vida nocturna de tu resort con locales fuera del complejo en una sola noche.",
          includes: ["Recogida en resort", "Ruta multi-local", "Regreso programado"],
          badge: "Huéspedes de resort",
        },
      ][index];
      return { ...pkg, ...es };
    }),
    venues: siteConfig.nightlife.venues.map((venue, index) => {
      const es = [
        {
          type: "Lounge exclusivo",
          description:
            "El lounge de referencia en Montego Bay — DJs en vivo, servicio de botellas y ambiente elegante.",
          vibe: "Exclusivo · DJs en vivo",
          highlight: "Ideal para parejas y grupos que buscan una noche sofisticada",
        },
        {
          type: "Bar de playa y restaurante",
          description:
            "Icónico bar de playa del Hip Strip — comida, bebidas congeladas, trampolines acuáticos y entretenimiento nocturno junto al mar.",
          vibe: "Casual · Frente al mar",
          highlight: "Perfecto para la primera noche en Jamaica — diversión sin planificar",
        },
        {
          type: "Local frente al mar",
          description:
            "Gastronomía y vida nocturna en el puerto — también sede de nuestra experiencia jet car de día.",
          vibe: "Frente al mar · Cena + noche",
          highlight: "Combina una sesión jet car con cena nocturna en el puerto",
        },
        {
          type: "Discoteca",
          description:
            "Discoteca de Montego Bay para bailar hasta tarde — pregunta a tu conductor por horarios y cover actuales.",
          vibe: "Noche tardía · 18+",
          highlight: "Solo adultos — cierre ideal para una gran noche",
        },
      ][index];
      return { ...venue, ...es };
    }),
    partyResorts: siteConfig.nightlife.partyResorts.map((resort, index) => {
      const es = [
        {
          description: "Resort solo adultos con fiestas en piscina, DJs en vivo y eventos temáticos.",
          vibe: "Adultos · Alta energía",
        },
        {
          description: "Todo incluido vibrante con entretenimiento nocturno y fiestas temáticas.",
          vibe: "Todo incluido · Animado",
        },
        {
          description: "Varios bares en piscina, bares de playa y fiestas temáticas cada noche.",
          vibe: "Familia + fiesta · Dinámico",
        },
      ][index];
      return { ...resort, ...es };
    }),
    ctaNote:
      "Cuéntanos tu hotel, fecha y tamaño del grupo — cotizamos transporte y ruta nocturna por WhatsApp.",
  },
  resortZones: {
    ...siteConfig.resortZones,
    eyebrow: "Zonas de recogida en hotel",
    title: "Excursiones desde tu resort — conocemos cada punto de recogida",
    description:
      "Ya sea en el Hip Strip, el corredor Rose Hall o un all-inclusive fuera de zona — cotizamos el transporte por adelantado y te recogemos a tiempo.",
    zones: siteConfig.resortZones.zones.map((zone, index) => {
      const es = [
        {
          tagline: "Hyatt, Hilton, Iberostar y Secrets",
          description:
            "El corredor Rose Hall es la zona con más resorts de Jamaica. Recogemos a diario para kayak transparente, excursiones a Ocho Rios y Rose Hall Great House.",
          pickupNote: "Puede aplicarse tarifa de transporte — cotizada antes de reservar",
        },
        {
          tagline: "RIU, Sandals, zona Margaritaville",
          description:
            "Lo más cerca de One Man Beach, jet cars en Pier One y vida nocturna del Hip Strip. Muchas excursiones incluyen recogida gratuita desde hoteles centrales de MoBay.",
          pickupNote: "Recogida gratuita en excursiones selectas para Hip Strip y MoBay central",
        },
        {
          tagline: "Grand Palladium, Royalton, Excellence",
          description:
            "Propiedades al este y oeste de MoBay central — Grand Palladium, Royalton Blue Waters, Excellence Oyster Bay y Ocean Eden Bay. Tarifa de transporte siempre cotizada por adelantado.",
          pickupNote: "Aplica tarifa fuera de zona — confirmada por WhatsApp",
        },
        {
          tagline: "RIU Ochi, Sandals Ochi, Moon Palace",
          description:
            "¿Te hospedas en Ocho Rios? Operamos excursiones locales de cataratas y aventura, y conectamos huéspedes de MoBay con combos de la costa norte.",
          pickupNote: "Recogida local en Ochi para cataratas; transporte desde MoBay para excursiones de un día",
        },
      ][index];
      return { ...zone, ...es };
    }),
  },
  droneShowcase: {
    ...siteConfig.droneShowcase,
    eyebrow: "Sesiones con dron • Excursiones • Jamaica",
    title: "Foto y video profesional con dron en tu excursión",
    description:
      "Destácate de cualquier otra excursión — nuestro kayak transparente y paquetes con dron entregan fotos editadas y video 4K el mismo día. Captura tus favoritos y envíalos por WhatsApp para edición.",
    deliverables: [
      { label: "5 fotos editadas", detail: "Corrección de color profesional entregada el mismo día" },
      { label: "1 video 4K editado", detail: "Metraje aéreo y a nivel del agua con estilo cinematográfico" },
      {
        label: "30–50+ fotos sin editar",
        detail: "Vía WeTransfer o Google Drive — elige tus favoritas",
      },
      {
        label: "Complemento en cualquier excursión",
        detail: "Cobertura con dron disponible en experiencias selectas — pregunta por WhatsApp",
      },
    ],
  },
  howItWorks: [
    {
      step: 1,
      title: "Elige tu excursión o traslado",
      description:
        "Explora excursiones individuales, paquetes combinados o solicita cotización de traslado al aeropuerto o puerto de cruceros por WhatsApp.",
    },
    {
      step: 2,
      title: "Confirma por WhatsApp",
      description:
        "Respondemos con disponibilidad, precio total y detalles de recogida. Sin reserva automática — una persona real confirma tu viaje.",
    },
    {
      step: 3,
      title: "Paga tu depósito del 50%",
      description:
        "Asegura tu fecha con un depósito del 50% vía CashApp o Zelle. Saldo pendiente el día de tu excursión o traslado.",
    },
    {
      step: 4,
      title: "Recogida y salida",
      description:
        "Te encontramos en tu hotel, Airbnb, aeropuerto o puerto de cruceros. Cancelación gratuita hasta 7 días antes de tu fecha.",
    },
  ],
  faqs: [
    {
      question: "¿Todos los precios están en dólares estadounidenses?",
      answer:
        "Sí. Cada precio en este sitio está en USD. Los depósitos se pagan vía CashApp o Zelle; los saldos restantes generalmente se pagan en efectivo al momento de la recogida.",
    },
    {
      question: "¿Está incluida la recogida en el hotel?",
      answer:
        "En excursiones selectas como la sesión de kayak transparente, el transporte ida y vuelta está incluido cuando tu hotel o Airbnb está en Montego Bay. Resorts fuera de Montego Bay (Royalton Blue Waters, Grand Palladium, Excellence Oyster Bay, etc.) tienen tarifa de transporte. Los acompañantes que no participan también pagan tarifa de transporte.",
    },
    {
      question: "¿Cómo funcionan los depósitos y cancelaciones?",
      answer:
        "Un depósito del 50% vía CashApp o Zelle confirma tu reserva. Puedes cancelar hasta 7 días antes de tu excursión o traslado para reembolso completo del depósito. Pueden aplicarse términos adicionales a experiencias específicas — los confirmaremos al reservar.",
    },
    {
      question: "¿Cómo reservo?",
      answer:
        "Escríbenos por WhatsApp con tu hotel, fecha, tamaño del grupo y la excursión o traslado deseado. Confirmamos disponibilidad y precios personalmente — sin checkout automático.",
    },
    {
      question: "¿Atienden Kingston?",
      answer:
        "No. Nos enfocamos en Montego Bay, puerto de cruceros de Falmouth, Ocho Rios y resorts de la costa norte circundante. Kingston está fuera de nuestra zona de servicio.",
    },
    {
      question: "¿Ofrecen alquiler de yates privados?",
      answer:
        "Sí. Organizamos alquiler de yates y catamaranes privados para parejas, familias y grupos. Escríbenos por WhatsApp con tu fecha, tamaño del grupo y ocasión para una cotización personalizada.",
    },
    {
      question: "¿Hay excursiones combinadas disponibles?",
      answer:
        "Sí. Los paquetes combinados agrupan varias actividades — como ATV más rafting en bambú o Dunn's River más tirolesa — en un solo día con un precio único. Explora la categoría Excursiones combinadas o pídenos un combo personalizado.",
    },
    {
      question: "Llego en crucero a Falmouth — ¿llegarán a tiempo?",
      answer:
        "Sí. Comparte el nombre del barco, fecha de atraque y hora de desembarque por WhatsApp. Seguimos horarios de cruceros y planificamos la recogida para que tengas tiempo de tu excursión y regreso antes del embarque.",
    },
    {
      question: "¿Qué pasa si mi vuelo se retrasa o el barco llega tarde?",
      answer:
        "Escríbenos por WhatsApp tan pronto lo sepas. Ajustamos horarios de recogida cuando es posible. Para pasajeros de crucero, priorizamos tu regreso al puerto antes de la salida.",
    },
    {
      question: "¿Qué pasa si el clima cancela mi excursión?",
      answer:
        "Si cancelamos por clima inseguro, puedes reprogramar sin cargo extra o recibir reembolso completo de tu depósito. Lluvia ligera puede no cancelar actividades acuáticas — te asesoraremos según las condiciones.",
    },
    {
      question: "¿A qué hora me recogerán?",
      answer:
        "La hora de recogida se confirma por WhatsApp después de reservar — normalmente 30–90 minutos antes del inicio de la actividad, según la ubicación de tu hotel y tipo de excursión. Las recogidas en puerto de cruceros se ajustan al horario de tu barco.",
    },
    {
      question: "¿Qué recibo con la sesión de kayak transparente?",
      answer:
        "Recibes 5 fotos editadas, 1 video 4K editado y 30–50+ fotos sin editar el mismo día vía WeTransfer o Google Drive. Captura tus 5 favoritas y envíalas por WhatsApp para edición. Fotos editadas extra: $10 c/u; edición express: $100.",
    },
    {
      question: "¿Qué edad necesito para conducir el jet car?",
      answer:
        "Los conductores deben tener 18 años o más. El precio del jet car es por vehículo, no por persona — 2 plazas ($350) o 4 plazas ($600) por 30 minutos.",
    },
    {
      question: "¿Puedo reservar excursiones sin precio publicado?",
      answer:
        "Sí. ATV, jet ski, Blue Hole, Dunn's River, Rick's Café, 9 Mile Bob Marley, Rose Hall, transporte nocturno y otras experiencias están disponibles — escríbenos por WhatsApp para una cotización según tu grupo y ubicación del hotel.",
    },
    {
      question: "¿Organizan transporte de vida nocturna en Montego Bay?",
      answer:
        "Sí. Organizamos transporte ida y vuelta a Lounge 2727, Margaritaville, Pier One y otros locales de MoBay. Escríbenos con tu hotel, fecha y tamaño del grupo — cover y entrada en locales son aparte.",
    },
    {
      question: "¿Recogen en Rose Hall y resorts fuera de zona?",
      answer:
        "Sí. Atendemos Hyatt Zilara/Ziva, Hilton Rose Hall, Grand Palladium, Royalton Blue Waters, Excellence Oyster Bay y muchos más. Las tarifas de transporte fuera de zona se cotizan por adelantado por WhatsApp antes de pagar el depósito.",
    },
  ],
  nav: [
    { label: "Excursiones", href: "/tours" },
    { label: "Resorts", href: "/resorts" },
    { label: "Traslados", href: "/transfers" },
    { label: "Vida nocturna", href: "/nightlife" },
    { label: "Destinos", href: "/locations" },
    { label: "Contacto", href: "/contact" },
  ],
} as unknown as SiteConfig;
