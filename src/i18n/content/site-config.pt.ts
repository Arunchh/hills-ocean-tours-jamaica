import type { SiteConfig } from "@/i18n/types";
import { siteConfig } from "@/config/site-config";

export const siteConfigPt: SiteConfig = {
  ...siteConfig,
  business: {
    ...siteConfig.business,
    tagline: "Seu operador local de confiança em Montego Bay",
    description:
      "Especialista local em Montego Bay para passeios, pacotes combinados, aluguel de iates privados e transfers para aeroporto ou porto de cruzeiros. Montego Bay, Ocho Rios e Falmouth — reserve via WhatsApp.",
    businessHours: "Segunda – domingo, 9:00 – 18:30 (horário da Jamaica)",
    responseTime:
      "Normalmente respondemos no WhatsApp em 2 horas durante o horário comercial.",
  },
  hero: {
    ...siteConfig.hero,
    headline: "Seu operador local de confiança para passeios e transfers em Montego Bay",
    subheadline:
      "Passeios individuais, pacotes combinados, sessões com drone, vida noturna e iates privados em Montego Bay e Ocho Rios. Transfers de aeroporto e porto de cruzeiros disponíveis. Envie mensagem no WhatsApp para verificar disponibilidade.",
    primaryCta: "Ver passeios",
    secondaryCta: "Transfer aeroporto e cruzeiro",
    imageAlt: "Água turquesa do Caribe em Montego Bay, Jamaica",
    badges: [
      "Operador local MoBay",
      "Foto e vídeo com drone",
      "Pickup no hotel",
      "Reserva via WhatsApp",
    ],
  },
  trustPoints: [
    { label: "Operador licenciado JTB", icon: "shield" },
    { label: "Depósito de 50% para reservar", icon: "dollar" },
    { label: "Cancelamento 7 dias antes", icon: "clock" },
    { label: "Confirmação via WhatsApp", icon: "star" },
    { label: "Foto e vídeo com drone", icon: "camera" },
    { label: "30+ excursões", icon: "map" },
    { label: "Pacotes de nightlife", icon: "star" },
    { label: "17K+ no Instagram", icon: "users" },
  ],
  valueProps: [
    {
      title: "Um operador local em quem você pode confiar",
      description:
        "Não somos uma plataforma de reservas impessoal — somos uma equipe baseada em Montego Bay que conhece os resorts, rotas e melhores horários para cada experiência.",
    },
    {
      title: "Passeios individuais e pacotes combinados",
      description:
        "Reserve uma atividade ou combine seu dia — ATV mais rafting de bambu, combos Dunn's River e mais com um motorista e um orçamento só.",
    },
    {
      title: "Montego Bay, Ocho Rios e Falmouth",
      description:
        "Atendemos o corredor da costa norte que suas férias realmente cobrem — de hotéis do Hip Strip ao porto de cruzeiros de Falmouth e passeios de um dia em Ocho Rios.",
    },
  ],
  promoBanner: {
    ...siteConfig.promoBanner,
    message:
      "Bem-vindo de volta à Jamaica — pergunte sobre nossas ofertas sazonais quando nos escrever.",
    ctaText: "Ver passeios",
    terms:
      "Consulte no WhatsApp as datas válidas e passeios elegíveis. Não acumulável com outras ofertas salvo indicação contrária.",
  },
  serviceArea: {
    ...siteConfig.serviceArea,
    eyebrow: "Onde operamos",
    title: "Montego Bay, Ocho Rios e a costa norte",
    description:
      "Focamos nas áreas onde a maioria dos visitantes se hospeda e desembarca — não em toda a ilha. Kingston está fora da nossa área de serviço.",
    regions: [
      {
        name: "Montego Bay",
        slug: "montego-bay",
        description: "Hotéis, Airbnbs, Hip Strip, aeroporto Sangster (MBJ) e orla Pier One.",
      },
      {
        name: "Porto de cruzeiros de Falmouth",
        slug: "falmouth",
        description: "Passeios ida e volta e transfers para passageiros de cruzeiro.",
      },
      {
        name: "Ocho Rios",
        slug: "ocho-rios",
        description:
          "Blue Hole, cataratas Dunn's River e passeios combinados de um dia a partir de resorts de MoBay.",
      },
      {
        name: "Resorts fora da área",
        slug: "montego-bay",
        description:
          "Royalton, Grand Palladium, Excellence Oyster Bay e propriedades próximas — taxa de transporte cotada antecipadamente.",
      },
    ],
    mapTitle: "Mapa da área de serviço de Montego Bay",
  },
  transport: {
    ...siteConfig.transport,
    eyebrow: "Pickup e transporte",
    title: "Pickup em Montego Bay incluído em passeios selecionados",
    description:
      "Transporte ida e volta incluído quando seu hotel ou Airbnb está em Montego Bay. Taxa de transporte aplicável para resorts fora da área e acompanhantes que não participam.",
    includedNote: "Transporte ida e volta incluído para hotéis e Airbnbs em Montego Bay",
    feeNote: "Taxa de transporte aplicável para resorts fora de Montego Bay",
    nonParticipantNote:
      "Apenas clientes inscritos na experiência têm pickup gratuito. Não participantes pagam a mesma taxa de transporte.",
  },
  services: siteConfig.services.map((service, index) => {
    const pt: { title: string; description: string }[] = [
      {
        title: "Água e praia",
        description:
          "Sessões de caiaque transparente com drone, jet skis, jet cars, parasailing, cruzeiros de catamarã e rafting de bambu.",
      },
      {
        title: "Aventura e terra",
        description:
          "Trilhas de ATV, tirolesa, tours de fazendas e passeios a cavalo — experiências cheias de ação em Montego Bay.",
      },
      {
        title: "Cultura e passeios de um dia",
        description:
          "Dunn's River, Blue Hole, Rose Hall, 9 Mile Bob Marley, Rick's Café e passeios de um dia a Negril a partir de MoBay.",
      },
      {
        title: "Vida noturna e romance",
        description:
          "Transporte noturno em MoBay, Lounge 2727, Margaritaville e jantares românticos na praia — planejamos sua noite.",
      },
      {
        title: "Iates privados",
        description:
          "Aluguel de iates e catamarãs privados para casais, famílias e grupos — cruzeiros ao pôr do sol e rotas personalizadas.",
      },
    ];
    return { ...service, ...pt[index] };
  }),
  tourCategories: siteConfig.tourCategories.map((category, index) => {
    const pt: { label: string; description: string }[] = [
      { label: "Água e praia", description: "Caiaque, jet cars, jet skis e aventuras oceânicas" },
      { label: "Aventura e terra", description: "ATV, tours de fazendas e passeios a cavalo" },
      {
        label: "Passeios de um dia",
        description: "Cataratas de Ocho Rios, pôr do sol em Negril e destaques da costa norte",
      },
      {
        label: "Cultura e patrimônio",
        description: "Bob Marley, Rose Hall e experiências da história jamaicana",
      },
      { label: "Romance e gastronomia", description: "Jantares na praia e pacotes para ocasiões especiais" },
      { label: "Passeios combinados", description: "Várias atividades, um preço de pacote" },
      { label: "Iate privado", description: "Aluguel de iates e catamarãs privados" },
    ];
    return { ...category, ...pt[index] };
  }),
  excursions: [...siteConfig.excursions],
  nightlife: {
    ...siteConfig.nightlife,
    eyebrow: "Vida noturna — Montego Bay",
    title: "Seu dia termina — sua noite começa",
    description:
      "Hospedado em um resort animado de Montego Bay? Organizamos transporte e pacotes de vida noturna para você não se preocupar com horários ou táxis. Envie seu hotel e data — montamos sua noite.",
    disclaimer:
      "Horários, cover e dress code mudam. Somente adultos 18+ em casas noturnas. Transporte noturno cotado separadamente — envie mensagem para orçamento personalizado.",
    packages: siteConfig.nightlife.packages.map((pkg, index) => {
      const pt = [
        {
          name: "Noite no Hip Strip",
          description:
            "Transporte ida e volta do hotel para Margaritaville e Pier One — jantar, drinks e clima à beira-mar no Hip Strip.",
          includes: ["Pickup e retorno ao hotel", "Parada na Margaritaville", "Pier One à beira-mar"],
          badge: "Mais popular",
        },
        {
          name: "Noite VIP Lounge 2727",
          description:
            "Experiência de lounge sofisticado em Montego Bay — cuidamos do transporte ida e volta para você aproveitar sem preocupação.",
          includes: ["Transporte privado ida e volta", "Entrega no Lounge 2727", "Horário de retorno flexível"],
          badge: "Sofisticado",
        },
        {
          name: "Tour de festa entre resorts",
          description:
            "Visitando Breathless, RIU ou Grand Palladium? Conectamos a vida noturna do seu resort com locais externos em uma noite só.",
          includes: ["Pickup no resort", "Rota multi-local", "Retorno programado"],
          badge: "Hóspedes de resort",
        },
      ][index];
      return { ...pkg, ...pt };
    }),
    venues: siteConfig.nightlife.venues.map((venue, index) => {
      const pt = [
        {
          type: "Lounge sofisticado",
          description:
            "O lounge de referência em Montego Bay — DJs ao vivo, serviço de garrafa e público elegante.",
          vibe: "Sofisticado · DJs ao vivo",
          highlight: "Ideal para casais e grupos que querem uma noite refinada",
        },
        {
          type: "Bar de praia e restaurante",
          description:
            "Bar de praia icônico do Hip Strip — comida, drinks congelados, trampolins aquáticos e entretenimento noturno na areia.",
          vibe: "Casual · Beira-mar",
          highlight: "Perfeito para a primeira noite na Jamaica — diversão sem planejamento",
        },
        {
          type: "Local à beira-mar",
          description:
            "Gastronomia e vida noturna no porto — também sede da nossa experiência jet car durante o dia.",
          vibe: "Beira-mar · Jantar + noite",
          highlight: "Combine uma sessão jet car com jantar noturno no porto",
        },
        {
          type: "Casa noturna",
          description:
            "Boate de Montego Bay para dançar até tarde — pergunte ao motorista sobre horários e cover atuais.",
          vibe: "Madrugada · 18+",
          highlight: "Somente adultos — fechamento ideal para uma grande noite",
        },
      ][index];
      return { ...venue, ...pt };
    }),
    partyResorts: siteConfig.nightlife.partyResorts.map((resort, index) => {
      const pt = [
        {
          description: "Resort só para adultos com festas na piscina, DJs ao vivo e eventos temáticos.",
          vibe: "Adultos · Alta energia",
        },
        {
          description: "All-inclusive vibrante com entretenimento noturno e festas temáticas.",
          vibe: "All-inclusive · Animado",
        },
        {
          description: "Vários bares na piscina, bares de praia e festas temáticas todas as noites.",
          vibe: "Família + festa · Dinâmico",
        },
      ][index];
      return { ...resort, ...pt };
    }),
    ctaNote:
      "Informe seu hotel, data e tamanho do grupo — cotamos transporte e rota noturna no WhatsApp.",
  },
  resortZones: {
    ...siteConfig.resortZones,
    eyebrow: "Zonas de pickup no hotel",
    title: "Passeios a partir do seu resort — conhecemos cada ponto de pickup",
    description:
      "Seja no Hip Strip, corredor Rose Hall ou um all-inclusive fora da área — cotamos transporte antecipadamente e buscamos você no horário.",
    zones: siteConfig.resortZones.zones.map((zone, index) => {
      const pt = [
        {
          tagline: "Hyatt, Hilton, Iberostar e Secrets",
          description:
            "O corredor Rose Hall é a zona com mais resorts da Jamaica. Fazemos pickup diário para caiaque transparente, passeios a Ocho Rios e Rose Hall Great House.",
          pickupNote: "Taxa de transporte pode aplicar — cotada antes de reservar",
        },
        {
          tagline: "RIU, Sandals, área Margaritaville",
          description:
            "Mais perto de One Man Beach, jet cars no Pier One e vida noturna do Hip Strip. Muitos passeios incluem pickup gratuito de hotéis centrais de MoBay.",
          pickupNote: "Pickup gratuito em passeios selecionados para Hip Strip e MoBay central",
        },
        {
          tagline: "Grand Palladium, Royalton, Excellence",
          description:
            "Propriedades a leste e oeste de MoBay central — Grand Palladium, Royalton Blue Waters, Excellence Oyster Bay e Ocean Eden Bay. Taxa sempre cotada antecipadamente.",
          pickupNote: "Taxa fora da área aplicável — confirmada no WhatsApp",
        },
        {
          tagline: "RIU Ochi, Sandals Ochi, Moon Palace",
          description:
            "Hospedado em Ocho Rios? Operamos passeios locais de cataratas e aventura, e conectamos hóspedes de MoBay a combos da costa norte.",
          pickupNote: "Pickup local em Ochi para cataratas; transporte de MoBay para passeios de um dia",
        },
      ][index];
      return { ...zone, ...pt };
    }),
  },
  droneShowcase: {
    ...siteConfig.droneShowcase,
    eyebrow: "Sessões com drone • Passeios • Jamaica",
    title: "Foto e vídeo profissional com drone no seu passeio",
    description:
      "Destaque-se de qualquer outra excursão — nosso caiaque transparente e pacotes com drone entregam fotos editadas e vídeo 4K no mesmo dia. Capture seus favoritos e envie via WhatsApp para edição.",
    deliverables: [
      { label: "5 fotos editadas", detail: "Correção de cor profissional entregue no mesmo dia" },
      { label: "1 vídeo 4K editado", detail: "Imagens aéreas e na água com estilo cinematográfico" },
      {
        label: "30–50+ fotos sem editar",
        detail: "Via WeTransfer ou Google Drive — escolha seus favoritos",
      },
      {
        label: "Complemento em qualquer passeio",
        detail: "Cobertura com drone disponível em experiências selecionadas — pergunte no WhatsApp",
      },
    ],
  },
  howItWorks: [
    {
      step: 1,
      title: "Escolha seu passeio ou transfer",
      description:
        "Explore passeios individuais, pacotes combinados ou solicite orçamento de transfer para aeroporto ou porto de cruzeiros no WhatsApp.",
    },
    {
      step: 2,
      title: "Confirme no WhatsApp",
      description:
        "Respondemos com disponibilidade, preço total e detalhes de pickup. Sem reserva automática — uma pessoa real confirma sua viagem.",
    },
    {
      step: 3,
      title: "Pague seu depósito de 50%",
      description:
        "Garanta sua data com depósito de 50% via CashApp ou Zelle. Saldo devido no dia do passeio ou transfer.",
    },
    {
      step: 4,
      title: "Pickup e partida",
      description:
        "Encontramos você no hotel, Airbnb, aeroporto ou porto de cruzeiros. Cancelamento gratuito até 7 dias antes da data.",
    },
  ],
  faqs: [
    {
      question: "Todos os preços estão em dólares americanos?",
      answer:
        "Sim. Cada preço neste site está em USD. Depósitos são pagos via CashApp ou Zelle; saldos restantes geralmente em dinheiro no pickup.",
    },
    {
      question: "O pickup no hotel está incluído?",
      answer:
        "Em passeios selecionados como a sessão de caiaque transparente, transporte ida e volta está incluído quando seu hotel ou Airbnb está em Montego Bay. Resorts fora de Montego Bay (Royalton Blue Waters, Grand Palladium, Excellence Oyster Bay, etc.) têm taxa de transporte. Acompanhantes que não participam também pagam taxa.",
    },
    {
      question: "Como funcionam depósitos e cancelamentos?",
      answer:
        "Depósito de 50% via CashApp ou Zelle confirma sua reserva. Você pode cancelar até 7 dias antes do passeio ou transfer para reembolso integral do depósito. Termos adicionais podem aplicar a experiências específicas — confirmaremos ao reservar.",
    },
    {
      question: "Como reservo?",
      answer:
        "Envie mensagem no WhatsApp com seu hotel, data, tamanho do grupo e passeio ou transfer desejado. Confirmamos disponibilidade e preços pessoalmente — sem checkout automático.",
    },
    {
      question: "Vocês atendem Kingston?",
      answer:
        "Não. Focamos em Montego Bay, porto de cruzeiros de Falmouth, Ocho Rios e resorts da costa norte circundante. Kingston está fora da nossa área de serviço.",
    },
    {
      question: "Oferecem aluguel de iates privados?",
      answer:
        "Sim. Organizamos aluguel de iates e catamarãs privados para casais, famílias e grupos. Envie mensagem no WhatsApp com data, tamanho do grupo e ocasião para orçamento personalizado.",
    },
    {
      question: "Há passeios combinados disponíveis?",
      answer:
        "Sim. Pacotes combinados agrupam várias atividades — como ATV mais rafting de bambu ou Dunn's River mais tirolesa — em um dia com preço único. Explore a categoria Passeios combinados ou peça um combo personalizado.",
    },
    {
      question: "Chego de cruzeiro em Falmouth — vocês chegam a tempo?",
      answer:
        "Sim. Compartilhe nome do navio, data de atracação e horário de desembarque no WhatsApp. Acompanhamos horários de cruzeiro e planejamos pickup para você ter tempo do passeio e retorno antes do embarque.",
    },
    {
      question: "E se meu voo atrasar ou o navio chegar tarde?",
      answer:
        "Envie mensagem no WhatsApp assim que souber. Ajustamos horários de pickup quando possível. Para passageiros de cruzeiro, priorizamos seu retorno ao porto antes da partida.",
    },
    {
      question: "E se o clima cancelar meu passeio?",
      answer:
        "Se cancelarmos por clima inseguro, você pode remarcar sem taxa extra ou receber reembolso integral do depósito. Chuva leve pode não cancelar atividades aquáticas — orientaremos conforme as condições.",
    },
    {
      question: "A que horas vocês me buscam?",
      answer:
        "Horário de pickup confirmado no WhatsApp após reserva — geralmente 30–90 minutos antes do início da atividade, conforme localização do hotel e tipo de passeio. Pickups no porto de cruzeiros seguem horário do navio.",
    },
    {
      question: "O que recebo com a sessão de caiaque transparente?",
      answer:
        "Você recebe 5 fotos editadas, 1 vídeo 4K editado e 30–50+ fotos sem editar no mesmo dia via WeTransfer ou Google Drive. Capture suas 5 favoritas e envie via WhatsApp para edição. Fotos editadas extras: $10 cada; edição expressa: $100.",
    },
    {
      question: "Qual idade preciso para dirigir o jet car?",
      answer:
        "Motoristas devem ter 18 anos ou mais. Preço do jet car é por veículo, não por pessoa — 2 lugares ($350) ou 4 lugares ($600) por 30 minutos.",
    },
    {
      question: "Posso reservar passeios sem preço listado?",
      answer:
        "Sim. ATV, jet ski, Blue Hole, Dunn's River, Rick's Café, 9 Mile Bob Marley, Rose Hall, transporte noturno e outras experiências estão disponíveis — envie mensagem no WhatsApp para orçamento conforme grupo e hotel.",
    },
    {
      question: "Vocês organizam transporte de vida noturna em Montego Bay?",
      answer:
        "Sim. Organizamos transporte ida e volta para Lounge 2727, Margaritaville, Pier One e outros locais de MoBay. Envie hotel, data e tamanho do grupo — cover e entrada nos locais são separados.",
    },
    {
      question: "Vocês buscam em Rose Hall e resorts fora da área?",
      answer:
        "Sim. Atendemos Hyatt Zilara/Ziva, Hilton Rose Hall, Grand Palladium, Royalton Blue Waters, Excellence Oyster Bay e muitos outros. Taxas de transporte fora da área são cotadas antecipadamente no WhatsApp antes do depósito.",
    },
  ],
  nav: [
    { label: "Passeios", href: "/tours" },
    { label: "Resorts", href: "/resorts" },
    { label: "Transfers", href: "/transfers" },
    { label: "Vida noturna", href: "/nightlife" },
    { label: "Destinos", href: "/locations" },
    { label: "Contato", href: "/contact" },
  ],
} as unknown as SiteConfig;
