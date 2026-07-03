export type ProjectCategory = "production_ready" | "in_development" | "archived";
export type DevelopmentType = "full-stack web app" | "frontend" | "backend" | "mobile app";

export interface KeyFeature {
  key: string;
  value: string;
}

export interface Project {
  slug: string; // usado para la URL: /projects/[slug]
  category: ProjectCategory;
  name: string;
  developmentType: DevelopmentType;
  shortDescription: string;
  publicUrl?: string;
  publicRepo?: string;
  mainGif: string;
  overview: string;
  techStack: string[];
  keyFeaturesUser: KeyFeature[];
  keyFeaturesAdmin: KeyFeature[];
  architectureImage?: string;
  dbDiagramImage?: string;
  screenshots: string[];
}