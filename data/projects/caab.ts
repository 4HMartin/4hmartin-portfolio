import { Project } from "../types";

export const caab: Project = {
  slug: "security-system-comparison",
  category: "production_ready",
  name: {
    en: "SECURITY SYSTEM COMPARISON APP",
    es: "COMPARADOR DE SISTEMAS DE SEGURIDAD"
  },
  developmentType: "full-stack web app",
  shortDescription: {
    en: "A reference digital platform in the security sector for the Balearic Islands market - helping users compare, evaluate and request quotes for alarm systems for homes, offices and businesses.",
    es: "Lorem ipsum dolor"
  },
  publicUrl: "https://caab.4hmartin.com/",
  publicRepo: "https://github.com/...",
  mainGif: "/images/projects/caab/home_gif_01.gif",
  mainGifSection: "Home",
  overview: {
    en: "Lorem ipsum dolor",
    es: "Lorem ipsum dolor"
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
        es: "Descripción..."
      }
    },
  ],
  keyFeaturesAdmin: [
    {
      key: {
        en: "Management panel",
        es: "Panel de gestión"
      },
      value: {
        en: "Description...",
        es: "Descripción..."
      }
    },
  ],
  architectureImage: "/projects/security-system/architecture.png",
  dbDiagramImage: "/projects/security-system/db-diagram.png",
  screenshots: [
    "/images/projects/caab/home_01.webp",
    "/projects/security-system/screenshot-2.png",
  ],
};