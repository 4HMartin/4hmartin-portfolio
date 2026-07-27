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
        en: "",
        es: "Comparación en tiempo real ...",
      },
      value: {
        en: "Description...",
        es: "Descripción...",
      },
    },
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Management panel",
        es: "Panel de gestión",
      },
      value: {
        en: "Description...",
        es: "Descripción...",
      },
    },
  ],
  architectureImage: "/projects/security-system/architecture.png",
  dbDiagramImage: "/projects/security-system/db-diagram.png",
  screenshots: [
    "/images/projects/caab/home_01.webp",
    "/projects/security-system/screenshot-2.png",
  ],
  otherProjects: ["rodriguez-events-wedding-catering", "massage-arte-website"],
};
