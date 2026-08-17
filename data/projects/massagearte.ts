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
//   publicPageSpeedReport: "https://pagespeed.web.dev/analysis/https-rodriguez-events-com/x6j9277nn9?utm_source=search_console&form_factor=desktop&hl=en",
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
      "Múltiples servicios de masaje con horarios flexibles."
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
    "Next-intl"
  ],
  keyFeaturesUser: [
    {
      key: {
        en: "Design fully responsive",
        es: "Diseño totalmente adaptativo",
      },
      value: {
        en: "Mobile-first design across all breakpoints (320px -> 1536px+).",
        es: "Diseño mobile-first a través de todos los breakpoints (320px -> 1536px+).",
      },
    },
    {
      key: {
        en: "Scroll animations",
        es: "Animaciones de scroll",
      },
      value: {
        en: "Framer Motion 'whileInView' entrance animations on every section.",
        es: "Animaciones de entrada 'whileInView' de Framer Motion en cada sección.",
      },
    },
    {
      key: {
        en: "Auto-scrolling reviews carousel",
        es: "Carrusel de reseñas con desplazamiento automático",
      },
      value: {
        en: "Pauses on hover; 16 verified Google reviews.",
        es: "Se detiene al pasar el cursos por encima; 16 reseñas verificadas de Google.",
      },
    },
    {
      key: {
        en: "Masonry portfolio grid",
        es: "Cuadrícula de portfolio tipo 'Masonry'.",
      },
      value: {
        en: "Responsive 2-col → 4-col → 12-col layout + Lazy loading for performance.",
        es: "Diseño adaptativo de 2 columnas → 4 columnas → 12 columnas + carga diferida para mejorar el rendimiento.",
      },
    },
    {
      key: {
        en: "Sticky header",
        es: "Encabezado fijo al scroll",
      },
      value: {
        en: "Backdrop blur on scroll with mobile slide-out drawer menu (Shadcn UI).",
        es: "Desenfoque del fondo al desplazarse con el menú deslizante de móvil (Shadcn UI).",
      },
    },
    {
      key: {
        en: "TWIA Award badge",
        es: "Insignia del premio TWIA",
      },
      value: {
        en: "2025 Wedding Industry Awards nominee.",
        es: "Nominado a los Wedding Industry Awards 2025.",
      },
    },
    {
      key: {
        en: "Accessibility",
        es: "Accesibilidad",
      },
      value: {
        en: "Semantic HTML, keyboard navigation, ARIA labels, VisuallyHidden titles on drawers.",
        es: "HTML semántico, navegación por teclado, etiquetas ARIA, títulos 'VisuallyHidden' en los paneles deslizantes.",
      },
    },
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Capture leads",
        es: "Captar clientes potenciales",
      },
      value: {
        en: "Personalised email template for enquiries submitted via the web form.",
        es: "Plantilla de email personalizada para las consultas desde formulario web.",
      },
    },
    {
      key: {
        en: "Cloudinary - Gallery images management platform",
        es: "Cloudinary - Plataforma para gestionar las imágenes de la galería",
      },
      value: {
        en: "Administrator account for adding/removing images and editing the gallery category.",
        es: "Cuenta de usuario administrador para añadir/eliminar imágenes y editar la categoría de la galería.",
      },
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/rodriguez-events/rodriguez_events_web_architecture.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
      imageFormat: "tablet"
    },
    // pageSpeedImage: {
    //   src: "/images/projects/rodriguez-events/pagespeed_insights_report_14-08-2026.webp",
    //   alt: "Project PageSpeed Insights Report - 4hmartin",
    //   title: "Project PageSpeed Insights Report",
    //   imageFit: "contain",
    //   imageFormat: "desktop"
    // },
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
    //   imageFormat: "desktop"
    // },
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
        imageFormat: "desktop"
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
