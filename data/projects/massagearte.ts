import { Project } from "../types";

export const massagearte: Project = {
  slug: "massagearte-landing-page",
  category: "production_ready",
  name: {
    en: "MASSAGEARTE LANDING PAGE",
    es: "MASSAGEARTE LANDING PAGE",
  },
  developmentType: "frontend",
  shortDescription: {
    en: "Massage Arte is a luxury, single-page landing website designed to capture high-end clientele and streamline the booking and payment process for a professional massage service.",
    es: "Massage Arte es una página web de lujo, de una sola página (landing page), diseñada para atraer a una clientela de alto nivel y agilizar el proceso de reserva y pago de un servicio profesional de masajes.",
  },
  publicUrl: "https://massagearte.com/",
  publicPageSpeedReport: "https://pagespeed.web.dev/analysis/https-massagearte-com/9db7qkf8gj?use_original_url=true&hl=en&form_factor=desktop",
  //   publicSitemap: "https://rodriguez-events.com/sitemap.xml",
  // publicFigmaWireframe: "",
  // publicRepo: "https://github.com/...",
  mainGif: "/images/projects/massagearte/main_gif.gif",
  mainGifSection: "Home",
  overview: {
    en: [
      "Massage Arte is a luxury, single-page landing website designed to capture high-end clientele and streamline the booking and payment process for a professional massage service.",
      "The platform enables clients to reserve, pay instantly, and empowers the therapist with real-time notifications and calendar synchronization.",
      "Target audience:",
      "High-standing clients staying in luxury hotels, private villas, and chalets. Clients who value wellness, prefer not to travel, and expect seamless booking and payment in seconds from any device—without registration or complicated processes.",
      "Value proposition:",
      "Complete booking experience on one URL.",
      "Real-time online reservations prowered by Cal.com.",
      "Secure payments via Stripe integration.",
      "Automatic synchronization with professional's Google Calendar.",
      "Instant notifications via email.",
      "Multiple massage services with flexible scheduling.",
    ],
    es: [
      "Massage Arte es una página web, de una sola página, diseñada para atraer a una clientela de alto nivel y agilizar el proceso de reserva y pago de un servicio profesional de masajes.",
      "La plataforma permite a los clientes reservar y pagar al instante, y ofrece al terapeuta notificaciones en tiempo real y sincronización del calendario.",
      "Público objetivo:",
      "Clientes de alto nivel alojados en hoteles de lujo, villas privadas y chalés. Clientes que valoran el bienestar, prefieren no desplazarse y esperan poder realizar la reserva y el pago de forma fluida en cuestión de segundos desde cualquier dispositivo, sin necesidad de registrarse ni de pasar por procesos complicados.",
      "Propuesta de valor:",
      "Experiencia de reserva completa en una sola URL.",
      "Reservas online en tiempo real con la tecnología de Cal.com.",
      "Pagos seguros mediante la integración con Stripe.",
      "Sincronización automática con el Google Calendar del profesional.",
      "Notificaciones instantáneas por correo electrónico.",
      "Múltiples servicios de masaje con horarios flexibles.",
    ],
  },
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Shadcn UI",
    "Motion",
    "RHF",
    "Zod",
    "Nodemailer",
    "Next-intl",
  ],
  keyFeaturesUser: [
    {
      key: {
        en: "Instant Booking System",
        es: "Sistema de reservas instantáneo",
      },
      value: {
        en: ["Seamless, no-registration reservation from with real-time availability."],
        es: ["Reserva sencilla y sin necesidad de registrarse, con disponibilidad en tiempo real."],
      },
    },
    {
      key: {
        en: "Secure Payment Processing",
        es: "Proceso de pago seguro",
      },
      value: {
        en: ["Stripe-powered payments with automatic confirmation"],
        es: ["Pagos a través de Stripe con confirmación automática"],
      },
    },
    {
      key: {
        en: "Multi-language Support",
        es: "Compatibilidad con varios idiomas",
      },
      value: {
        en: ["Spanish and English (i18n with next-intl)."],
        es: ["Español e Inglés (i18n con next-intl)."],
      },
    },
    {
      key: {
        en: "Design fully responsive",
        es: "Diseño totalmente adaptativo",
      },
      value: {
        en: ["Mobile-first design across all breakpoints (320px -> 1536px+)."],
        es: ["Diseño mobile-first a través de todos los breakpoints (320px -> 1536px+)."],
      },
    },
    {
      key: {
        en: "Scroll animations",
        es: "Animaciones de scroll",
      },
      value: {
        en: ["Framer Motion 'whileInView' entrance animations on every section."],
        es: ["Animaciones de entrada 'whileInView' de Framer Motion en cada sección."],
      },
    },
    {
      key: {
        en: "Sticky header",
        es: "Encabezado fijo al scroll",
      },
      value: {
        en: ["Backdrop blur on scroll with mobile slide-out drawer menu (Shadcn UI)."],
        es: ["Desenfoque del fondo al desplazarse con el menú deslizante de móvil (Shadcn UI)."],
      },
    },
    {
      key: {
        en: "Accessibility",
        es: "Accesibilidad",
      },
      value: {
        en: ["Semantic HTML, keyboard navigation, ARIA labels, VisuallyHidden titles on drawers."],
        es: ["HTML semántico, navegación por teclado, etiquetas ARIA, títulos 'VisuallyHidden' en los paneles deslizantes."],
      },
    },
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Real-Time Calendar Sync",
        es: "Sincronización de calendario en tiempo real",
      },
      value: {
        en: ["Automatic Google Calendar integration for the therapist."],
        es: ["Integración automática con Google Calendar para el terapeuta."],
      },
    },
    {
      key: {
        en: "Multi-Channel Notifications",
        es: "Notificaciones multicanal",
      },
      value: {
        en: ["Email, WhatsApp Business or mobile push notifications."],
        es: ["Email, WhatsApp Business o notificaciones push de móvil."],
      },
    },
    {
      key: {
        en: "Capture leads",
        es: "Captar clientes potenciales",
      },
      value: {
        en: ["Personalised email template for enquiries submitted via the web form."],
        es: ["Plantilla de email personalizada para las consultas desde formulario web."],
      },
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/massagearte/architecture_diagram.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
      imageFormat: "tablet",
    },
    pageSpeedImage: {
      src: "/images/projects/massagearte/pagespeed_insights_report_v1.webp",
      alt: "Project PageSpeed Insights Report - 4hmartin",
      title: "Project PageSpeed Insights Report",
      imageFit: "contain",
      imageFormat: "desktop"
    },
    // gscSitemapIndexImage: {
    //   src: "/images/projects/rodriguez-events/gsc_sitemap_index.webp",
    //   alt: "Project Sitemap Indexation on Google Search - 4hmartin",
    //   title: "Project Sitemap Indexation on Google Search",
    //   imageFit: "contain",
    //   imageFormat: "desktop"
    // },
    // gscReportImage: {
    //   src: "/images/projects/rodriguez-events/gsc_report_3_months.webp",
    //   alt: "Project Google Search Console Report - 4hmartin",
    //   title: "Project Google Search Console Report",
    //   imageFit: "contain",
    //   imageFormat: "desktop" },
    // dbDiagramImage: {
    //   src: "/images/projects/caab/db_erd.webp",
    //   alt: "Project database entity relationship diagram - 4hmartin",
    //   title: "Database Entity Relationship Diagram",
    //   imageFit: "contain",
    // },
    // figmaWireframe: {
    //   src: "/images/projects/caab/figma_wireframe_1.webp",
    //   alt: "Figma wireframe",
    //   title: "Figma wireframe",
    //   imageFit: "contain",
    //   imageFormat: "desktop"
    // },
    screenshots: [
      {
        src: "/images/projects/massagearte/home_en_01.webp",
        alt: "Hero section desktop screenshot - 4hmartin",
        title: "Home - Hero section english - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/about_en.webp",
        alt: "About section desktop screenshot - 4hmartin",
        title: "About section english - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/services_en.webp",
        alt: "Services section desktop screenshot - 4hmartin",
        title: "Services section english - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/services_en_02.webp",
        alt: "Services section desktop screenshot - 4hmartin",
        title: "Services section english - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/booking_es_01.webp",
        alt: "Booking section desktop screenshot - 4hmartin",
        title: "Booking section ES - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/booking_es_02.webp",
        alt: "Booking section desktop screenshot - 4hmartin",
        title: "Booking section ES - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/faq_es_01.webp",
        alt: "FAQ section desktop screenshot - 4hmartin",
        title: "FAQ section ES - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/faq_es_02.webp",
        alt: "FAQ section desktop screenshot - 4hmartin",
        title: "FAQ section ES - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/contact_es_01.webp",
        alt: "Contact section desktop screenshot - 4hmartin",
        title: "Contact section ES - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/privacy_policy_en.webp",
        alt: "Privacy policy page desktop screenshot - 4hmartin",
        title: "Privacy Policy EN - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/cookie_policy_en.webp",
        alt: "Cookie policy page desktop screenshot - 4hmartin",
        title: "Cookie Policy EN - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/legal_notice_en.webp",
        alt: "Legal Notice page desktop screenshot - 4hmartin",
        title: "Legal Notice EN - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/home_en_tablet.webp",
        alt: "Hero section tablet screenshot - 4hmartin",
        title: "Hero section EN - Tablet screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/about_en_tablet.webp",
        alt: "About section tablet screenshot - 4hmartin",
        title: "About section EN - Tablet screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/home_en_mobile.webp",
        alt: "Hero section mobile screenshot - 4hmartin",
        title: "Hero section EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/home_en_mobile_menu_open.webp",
        alt: "Mobile menu open screenshot - 4hmartin",
        title: "Mobile menu open EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/about_en_mobile.webp",
        alt: "About section EN - Mobile screenshot - 4hmartin",
        title: "About section EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/services_en_mobile.webp",
        alt: "Services section EN - Mobile screenshot - 4hmartin",
        title: "Services section EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/booking_en_mobile.webp",
        alt: "Booking section EN - Mobile screenshot - 4hmartin",
        title: "Booking section EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/faq_en_mobile.webp",
        alt: "FAQ section EN - Mobile screenshot - 4hmartin",
        title: "FAQ section EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/contact_en_mobile.webp",
        alt: "Contact section EN - Mobile screenshot - 4hmartin",
        title: "Contact section EN - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile",
      },
      {
        src: "/images/projects/massagearte/cal-com_platform_01.webp",
        alt: "Cal.com booking system provider screenshot - 4hmartin",
        title: "Cal.com booking system provider - Available services",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/cal-com_platform_02.webp",
        alt: "Cal.com booking system provider screenshot - 4hmartin",
        title: "Cal.com booking system provider - Public url profile",
        imageFit: "contain",
        imageFormat: "desktop",
      },
      {
        src: "/images/projects/massagearte/cal-com_platform_03.webp",
        alt: "Cal.com booking system provider screenshot - 4hmartin",
        title: "Cal.com booking system provider - Schedule management",
        imageFit: "contain",
        imageFormat: "desktop",
      },
    ],
    // designInspiration: [
    //   {
    //     src: "/images/projects/caab/logotype_options.webp",
    //     alt: "Logotype options for the client",
    //     title: "Design inspiration - Logotype options for the client",
    //     imageFit: "contain",
    //     imageFormat: "mobile"
    //   },
    // ]
  },
  otherProjects: ["security-system-comparison", "rodriguez-events-website"],
};
