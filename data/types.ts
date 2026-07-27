export type ProjectCategory = "production_ready" | "in_development" | "practice";
export type DevelopmentType = "full-stack web app" | "frontend" | "backend" | "mobile app";
export type Locale = "en" | "es";

export interface KeyFeature {
  key: Record<Locale, string>;
  value: Record<Locale, string>;
}

export interface Project {
  slug: string; // usado para la URL: /projects/[slug]
  category: ProjectCategory;
  name: Record<Locale, string>;
  developmentType: DevelopmentType;
  shortDescription: Record<Locale, string>;
  publicUrl?: string;
  publicRepo?: string;
  mainGif: string;
  mainGifSection: string;
  // Cada párrafo es un elemento del array
  overview: Record<Locale, string[]>;
  techStack: string[];
  keyFeaturesUser: KeyFeature[];
  keyFeaturesAdmin: KeyFeature[];
  architectureImage?: string;
  dbDiagramImage?: string;
  screenshots: string[];
  otherProjects: Project['slug'][];
}

export interface Cert {
  slug: string;
  name: Record<Locale, string>;
  platform: string;
  platformLogo: string;
  overview: Record<Locale, string>;
  tags: string[];
  courseLink: string;
  certLink: string;
  filename: string;
}