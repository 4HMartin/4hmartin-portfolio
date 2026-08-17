import { Project } from "../types";

export const rodriguezEvents: Project = {
  slug: "rodriguez-events-website",
  category: "production_ready",
  name: {
    en: "RODRIGUEZ EVENTS WEBSITE",
    es: "RODRIGUEZ EVENTS WEB",
  },
  developmentType: "full-stack web app",
  shortDescription: {
    en: "Exquisite Flavours, Unforgettable Moments. Professional multi-page website for Rodriguez Events Ltd., a family-run catering company specialising in Spanish, South American, and Mediterranean cuisine.",
    es: "Sabores exquisitos, momentos inolvidables. Página web profesional de varias páginas para Rodríguez Events Ltd., una empresa familiar de catering especializada en cocina española, sudamericana y mediterránea.",
  },
  publicUrl: "https://rodriguez-events.com/",
  publicPageSpeedReport: "https://pagespeed.web.dev/analysis/https-rodriguez-events-com/x6j9277nn9?utm_source=search_console&form_factor=desktop&hl=en",
  publicSitemap: "https://rodriguez-events.com/sitemap.xml",
  // publicFigmaWireframe: "",
  // publicRepo: "https://github.com/...",
  mainGif: "/images/projects/rodriguez-events/home_gif_01.gif",
  mainGifSection: "Home",
  overview: {
    en: [
      "Rodriguez Events Ltd. is a family-run catering company run by husband-and-wife team Emma and Heber, who laverage over 30 years of high-end hospitality experience - including Michelin-starred backgrounds. Based in Priorslee, Telford, covering Shropshire, Staffordshire, North Wales, and the West Midlands.",
      "I'm proud to be able to help out with the family business by creating this website, which serves as the primary digital presence for the business, aiming to:",
      "Generate qualified enquires from couples, private clients, and corporate event organisers.",
      "Establish credibility and showcase the food and events portfolio.",
      "Drive conversions through quote requests, call bookings, and direct contact."
    ],
    es: [
      "Rodríguez Events Ltd. es una empresa familiar de catering dirigida por el matrimonio formado por Emma y Heber, que cuentan con más de 30 años de experiencia en el sector de la hostelería de alta gama, incluyendo su trayectoria en restaurantes con estrellas Michelin. Con sede en Priorslee, Telford, presta sus servicios en Shropshire, Staffordshire, el norte de Gales y las West Midlands.",
      "Me enorgullece poder echar una mano en el negocio familiar creando esta página web, que constituye la principal presencia digital de la empresa y cuyo objetivo es:",
      "Generar consultas cualificadas para parejas, clientes particulares y organizadores de eventos corporativos.",
      "Generar credibilidad y dar a conocer la oferta gastronómica y de eventos.",
      "Impulsar las conversiones a través de solicitudes de presupuesto, reservas telefónicas y contacto directo."
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
    "Cloudinary"
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
        es: "HTML semántico, navegación por teclado, etiquetas ARIA, títulos «VisuallyHidden» en los paneles deslizantes.",
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
    pageSpeedImage: {
      src: "/images/projects/rodriguez-events/pagespeed_insights_report_14-08-2026.webp",
      alt: "Project PageSpeed Insights Report - 4hmartin",
      title: "Project PageSpeed Insights Report",
      imageFit: "contain",
      imageFormat: "desktop"
    },
    gscSitemapIndexImage: {
      src: "/images/projects/rodriguez-events/gsc_sitemap_index.webp",
      alt: "Project Sitemap Indexation on Google Search - 4hmartin",
      title: "Project Sitemap Indexation on Google Search",
      imageFit: "contain",
      imageFormat: "desktop"
    },
    gscReportImage: {
      src: "/images/projects/rodriguez-events/gsc_report_3_months.webp",
      alt: "Project Google Search Console Report - 4hmartin",
      title: "Project Google Search Console Report",
      imageFit: "contain",
      imageFormat: "desktop"
    },
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
        src: "/images/projects/rodriguez-events/home_01.webp",
        alt: "Hero section desktop screenshot - 4hmartin",
        title: "Home - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/home_02.webp",
        alt: "Home - About banner desktop screenshot - 4hmartin",
        title: "Home - About banner - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/home_03.webp",
        alt: "Home - Reviews carousel desktop screenshot - 4hmartin",
        title: "Home - Reviews carousel - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/weddings_01.webp",
        alt: "Services Weddings - Hero desktop screenshot - 4hmartin",
        title: "Services Weddings - Hero - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/weddings_02.webp",
        alt: "Services Weddings - Experience description desktop screenshot - 4hmartin",
        title: "Services Weddings - Experience description - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/chef_at_home_01.webp",
        alt: "Services Chef at Home - Hero section desktop screenshot - 4hmartin",
        title: "Services Chef at Home - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/chef_at_home_02.webp",
        alt: "Services Chef at Home - Experience description desktop screenshot - 4hmartin",
        title: "Services Chef at Home - Experience description - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/chef_at_home_03.webp",
        alt: "Services Chef at Home - Inclusive banner desktop screenshot - 4hmartin",
        title: "Services Chef at Home - Inclusive banner - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/corporate_01.webp",
        alt: "Services Corporate - Hero section desktop screenshot - 4hmartin",
        title: "Services Corporate - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/corporate_02.webp",
        alt: "Services Corporate - Service Types desktop screenshot - 4hmartin",
        title: "Services Corporate - Service Types - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/corporate_03.webp",
        alt: "Services Corporate - Logistics & Capacity desktop screenshot - 4hmartin",
        title: "Services Corporate - Logistics & Capacity - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/cloudinary_assets.webp",
        alt: "Gallery - Cloudinary admin dashboard desktop screenshot - 4hmartin",
        title: "Gallery - Cloudinary admin dashboard - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/gallery_01.webp",
        alt: "Gallery - Filters desktop screenshot - 4hmartin",
        title: "Gallery - Filters - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/gallery_02.webp",
        alt: "Gallery - Masonry grid desktop screenshot - 4hmartin",
        title: "Gallery - Masonry grid - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/gallery_03.webp",
        alt: "Gallery - Lightbox view open desktop screenshot - 4hmartin",
        title: "Gallery - Lightbox view open - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/events_01.webp",
        alt: "Events & Menus - Hero section desktop screenshot - 4hmartin",
        title: "Events & Menus - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/events_02.webp",
        alt: "Events & Menus - Bistro information desktop screenshot - 4hmartin",
        title: "Events & Menus - Bistro information - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/events_03.webp",
        alt: "Events & Menus - Bistro menu modal open desktop screenshot - 4hmartin",
        title: "Events & Menus - Bistro menu modal open - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/events_04.webp",
        alt: "Events & Menus - Bistro Latin night event modal desktop screenshot - 4hmartin",
        title: "Events & Menus - Bistro Latin night event modal open - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/events_05.webp",
        alt: "Events & Menus - Event modal open desktop screenshot - 4hmartin",
        title: "Events & Menus - Event modal open - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/about_01.webp",
        alt: "About - Hero section desktop screenshot - 4hmartin",
        title: "About - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/about_02.webp",
        alt: "About - The team images desktop screenshot - 4hmartin",
        title: "About - The team images - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/about_03.webp",
        alt: "About - Co-founders section desktop screenshot - 4hmartin",
        title: "About - Co-founders section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/about_04.webp",
        alt: "About - Passion & Experience section desktop screenshot - 4hmartin",
        title: "About - Passion & Experience section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/about_05.webp",
        alt: "About - TWIA Regional Winner desktop screenshot - 4hmartin",
        title: "About - TWIA Regional Winner - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/partners_01.webp",
        alt: "Partners - Hero section desktop screenshot - 4hmartin",
        title: "Partners - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/partners_02.webp",
        alt: "Partners - Partners information cards desktop screenshot - 4hmartin",
        title: "Partners - Partners information cards - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/contact_01.webp",
        alt: "Contact - Hero section desktop screenshot - 4hmartin",
        title: "Contact - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/contact_02.webp",
        alt: "Contact - Complete form desktop screenshot - 4hmartin",
        title: "Contact - Complete form - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/privacy_policy_01.webp",
        alt: "Privacy Policy page - desktop screenshot - 4hmartin",
        title: "Privacy Policy - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/cookie_policy_01.webp",
        alt: "Cookie Policy page - desktop screenshot - 4hmartin",
        title: "Cookie Policy - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/terms_conditions_01.webp",
        alt: "Terms Conditions page - desktop screenshot - 4hmartin",
        title: "Terms & Conditions - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/rodriguez-events/home_mobile_01.webp",
        alt: "Home - Hero section mobile screenshot - 4hmartin",
        title: "Home - Hero section - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/rodriguez-events/home_mobile_02.webp",
        alt: "Home - About section mobile screenshot - 4hmartin",
        title: "Home - About section - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/rodriguez-events/weddings_mobile_01.webp",
        alt: "Services Weddings - Reviews section mobile screenshot - 4hmartin",
        title: "Services Weddings - Reviews section - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/rodriguez-events/gallery_mobile_01.webp",
        alt: "Gallery - Filters section mobile screenshot - 4hmartin",
        title: "Gallery - Filters section - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      
    ],
    designInspiration: [
      {
        src: "/images/projects/caab/logotype_options.webp",
        alt: "Logotype options for the client",
        title: "Design inspiration - Logotype options for the client",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/caab/header_navigation_design_example.webp",
        alt: "Header/Navigation design inspiration",
        title: "Design inspiration - Header/Navigation (runonflux.com)",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/versus_ui_inspiration.webp",
        alt: "UI and filters examples",
        title: "Design inspiration - UI and filters examples (versus.com)",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/kimovil_ui_inspiration_1.webp",
        alt: "UI and filters examples",
        title: "Design inspiration - UI comparison example 1 (kimovil.com)",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/kimovil_ui_inspiration_2.webp",
        alt: "UI and filters examples",
        title: "Design inspiration - UI comparison example 2 (kimovil.com)",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/tools_for_picking_colors.webp",
        alt: "Material design color picker",
        title: "Design inspiration - Material design - Tools for picking colors (m2.material.io)",
        imageFit: "contain",
        imageFormat: "desktop"
      },
    ]
  },
  otherProjects: ["rodriguez-events-wedding-catering", "massage-arte-website"],
};
