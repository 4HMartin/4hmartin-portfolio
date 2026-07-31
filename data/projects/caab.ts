import { Project } from "../types";

export const caab: Project = {
  slug: "security-system-comparison",
  category: "production_ready",
  name: {
    en: "SECURITY SYSTEM COMPARISON APP",
    es: "COMPARADOR DE SISTEMAS DE SEGURIDAD",
  },
  developmentType: "full-stack web app",
  shortDescription: {
    en: "A reference digital platform in the security sector for the Balearic Islands market - helping users compare, evaluate and request quotes for alarm systems for homes, offices and businesses.",
    es: "Lorem ipsum dolor",
  },
  publicUrl: "https://caab.4hmartin.com/",
  // publicRepo: "https://github.com/...",
  publicFigmaWireframe: "https://www.figma.com/design/OcT9ub8DM78aPceYIdpcJP/Wireframe---comparadoralarmasbaleares.com?node-id=0-1&t=pVNVAG05XO2lx6NL-1",
  mainGif: "/images/projects/caab/home_gif_01.gif",
  mainGifSection: "Home",
  overview: {
    en: [
      "CAAB (ComparA Alarmas Baleares) is a multi-page web platform designed to become the leading digital reference in the security sector within the Balearic Islands. Its core is an interactive alarm comparator that lets users quickly and clearly analyse differences between security products and services - including technical specs, protection levels, pricing, maintenance plans, smart home compatibility, mobile apps, and monitoring centre connectivity.",
      "Beyond simple comparison, the platform acts as a strategic bridge between interested clients and verified security providers, featuring intelligent lead-generation forms, a quote request system, and an in-person advisory booking flow.",
    ],
    es: [
      "CAAB (ComparA Alarmas Baleares) es una plataforma web de varias páginas diseñada para convertirse en la principal referencia digital del sector de la seguridad en las Islas Baleares. Su núcleo es un comparador interactivo de sistemas de alarma que permite a los usuarios analizar de forma rápida y clara las diferencias entre los productos y servicios de seguridad, incluyendo especificaciones técnicas, niveles de protección, precios, planes de mantenimiento, compatibilidad con hogares inteligentes, aplicaciones móviles y conectividad con centros de monitorización.",
      "Más allá de la simple comparación, la plataforma actúa como un puente estratégico entre los clientes interesados y los proveedores de seguridad verificados, y cuenta con formularios inteligentes de generación de clientes potenciales, un sistema de solicitud de presupuestos y un proceso de reserva de asesoramiento presencial.",
    ],
  },
  techStack: ["TypeScript", "React", "TailwindCSS"],
  keyFeaturesUser: [
    {
      key: {
        en: "Interactive comparator",
        es: "Comparación interactiva",
      },
      value: {
        en: "select multiple products and compare them side by side in real time, with clearly structured differences.",
        es: "Selecciona varios productos y compáralos uno al lado del otro en tiempo real, con las diferencias claramente estructuradas.",
      },
    },
    {
      key: {
        en: "Advanced filters",
        es: "Filtros avanzados",
      },
      value: {
        en: "filter by alarm type, price range, security level, smart home compatibility, contract duration, company, and more.",
        es: "Filtra por tipo de alarma, rango de precios, nivel de seguridad, compatibilidad con el hogar inteligente, duración del contrato, empresa y mucho más.",
      },
    },
    {
      key: {
        en: "Intelligent contact forms",
        es: "Formularios de contacto inteligentes",
      },
      value: {
        en: "adaptive fields pre-filled from the selected comparison, reducing friction at conversion. [global state - zustand]",
        es: "campos adaptativos rellenados previamente a partir de la comparación seleccionada, lo que reduce las dificultades en la conversión. [estado global - zustand]",
      },
    },
    {
      key: {
        en: "Invoice review (Phase 2)",
        es: "Revisión de facturas (Fase 2)",
      },
      value: {
        en: "upload a current alarm invoice to receive a personalised market analysis within 48 hours.",
        es: "Sube una factura reciente de Alarm para recibir un análisis de mercado personalizado en un plazo de 48 horas.",
      },
    },
    {
      key: {
        en: "Multi-language support",
        es: "Compatibilidad con varios idiomas",
      },
      value: {
        en: "Spanish, English, Catalan and German via i18n.",
        es: "Español, inglés, catalán y alemán a través de i18n.",
      },
    },
    {
      key: {
        en: "Fully responsive design",
        es: "Diseño totalmente adaptativo",
      },
      value: {
        en: "optimised for mobile, tablet and desktop.",
        es: "Optimizado para móviles, tabletas y ordenadores de sobremesa.",
      },
    },
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Authentication system",
        es: "Sistema de autenticación",
      },
      value: {
        en: "An authentication system using Better Auth has been implemented to provide access to the administration panel.",
        es: "Para el acceso al panel de administración se implementa un sistema de autenticación utilizando Better Auth.",
      },
    },
    {
      key: {
        en: "Full content management panel",
        es: "Panel completo de gestión de contenidos",
      },
      value: {
        en: "manage partner companies (CRUD), product listings (CRUD), available features/services (CRUD) and manage contact requests.",
        es: "Gestionar empresas colaboradoras (CRUD), listados de productos (CRUD), funciones y servicios disponibles (CRUD) y gestionar las solicitudes de contacto.",
      },
    },
    {
      key: {
        en: "Lead notifications",
        es: "Notificaciones de clientes potenciales.",
      },
      value: {
        en: "Automatic email alerts when a user submits a form, including the comparison data generated (email template designed for multiple email clients).",
        es: "Alertas automáticas por correo electrónico cuando un usuario envía un formulario, incluyendo los datos comparativos generados (plantilla de correo electrónico diseñada para múltiples clientes de correo electrónico).",
      },
    },
    {
      key: {
        en: "Data visualization",
        es: "Visualización de datos.",
      },
      value: {
        en: "charts showing all grouped data, created using the re-charts library.",
        es: "Gráficos que muestran todos los datos agrupados, creados con la biblioteca re-charts.",
      },
    },
  ],
  images: {
    architectureImage: {
      src: "/images/projects/caab/architecture_infographic_diagram.webp",
      alt: "Project architecture diagram - 4hmartin",
      title: "Project architecture diagram",
      imageFit: "contain",
    },
    dbDiagramImage: {
      src: "/images/projects/caab/db_erd.webp",
      alt: "Project database entity relationship diagram - 4hmartin",
      title: "Database Entity Relationship Diagram",
      imageFit: "contain",
    },
    figmaWireframe: {
      src: "/images/projects/caab/figma_wireframe_1.webp",
      alt: "Figma wireframe",
      title: "Figma wireframe",
      imageFit: "contain",
      imageFormat: "desktop"
    },
    screenshots: [
      {
        src: "/images/projects/caab/home_01.webp",
        alt: "Hero section desktop screenshot - 4hmartin",
        title: "Home - Hero section - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/home_contact_form.webp",
        alt: "Contact form desktop screenshot - 4hmartin",
        title: "Home - Contact form - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/partner_companies_page.webp",
        alt: "Partner companies - Companies grid - Desktop screenshot",
        title: "Partner companies - Companies grid - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/partner_company_detailed.webp",
        alt: "Partner companies - Companies grid - Desktop screenshot",
        title: "Partner companies - Company details - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/how_it_works_page.webp",
        alt: "How it works - Desktop screenshot",
        title: "How it works - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/comparator_page.webp",
        alt: "Comparator - Products grid - Desktop screenshot",
        title: "Comparator - Products grid - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/comparator_filters.webp",
        alt: "Comparator - Filters - Desktop screenshot",
        title: "Comparator - Filters - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/comparator_compare_products.webp",
        alt: "Comparator - Selected products to compare - Desktop screenshot",
        title: "Comparator - Selected products to compare - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/comparison_result.webp",
        alt: "Comparator - Product comparison table - Desktop screenshot",
        title: "Comparator - Product comparison table - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/multi_step_form.webp",
        alt: "Request quote - Multi-steps form - Desktop screenshot",
        title: "Request quote - Multi-steps form - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/home_hero_mobile.webp",
        alt: "Home - Hero section - Mobile screenshot",
        title: "Home - Hero section - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/caab/partner_companies_mobile.webp",
        alt: "Partner companies - Mobile screenshot",
        title: "Partner companies - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/caab/how_it_works_mobile.webp",
        alt: "How it works - Mobile screenshot",
        title: "How it works - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/caab/comparator_filters_mobile.webp",
        alt: "Comparator filters - Mobile screenshot",
        title: "Comparator filters - Mobile screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/caab/demo_advice_modal.webp",
        alt: "Demo advice - Desktop screenshot",
        title: "Demo advice - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "mobile"
      },
      {
        src: "/images/projects/caab/admin_panel_login.webp",
        alt: "Admin panel - Login form - Desktop screenshot",
        title: "Admin panel - Login form - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "tablet"
      },
      {
        src: "/images/projects/caab/admin_panel_dashboard.webp",
        alt: "Admin panel - Dashboard - Desktop screenshot",
        title: "Admin panel - Dashboard - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/admin_panel_products.webp",
        alt: "Admin panel - Products list - Desktop screenshot",
        title: "Admin panel - Products list - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/admin_panel_product_create.webp",
        alt: "Admin panel - Create new product - Desktop screenshot",
        title: "Admin panel - Create new product - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "tablet"
      },
      {
        src: "/images/projects/caab/admin_panel_companies.webp",
        alt: "Admin panel - Companies list - Desktop screenshot",
        title: "Admin panel - Companies list - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/admin_panel_company_create.webp",
        alt: "Admin panel - Create new company - Desktop screenshot",
        title: "Admin panel - Create new company - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "tablet"
      },
      {
        src: "/images/projects/caab/admin_panel_contacts.webp",
        alt: "Admin panel - Contacts generated via request form - Desktop screenshot",
        title: "Admin panel - Contacts generated via request form - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/request_quote_email_template_0.webp",
        alt: "Request quote email example - Admin view (Gmail) - Desktop screenshot",
        title: "Request quote email example - Admin view (Gmail) - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
      {
        src: "/images/projects/caab/request_quote_email_template_1.webp",
        alt: "Request quote email example - Admin view (Gmail) - Desktop screenshot",
        title: "Request quote email example - Admin view (Gmail) - Desktop screenshot",
        imageFit: "contain",
        imageFormat: "desktop"
      },
    ],
  },
  otherProjects: ["rodriguez-events-wedding-catering", "massage-arte-website"],
};
