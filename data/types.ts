export type ProjectCategory = "production_ready" | "in_development" | "practice";
export type DevelopmentType = "full-stack web app" | "frontend" | "backend" | "mobile app";
export type Locale = "en" | "es";

export interface KeyFeature {
  key: Record<Locale, string>;
  value: Record<Locale, string>;
}

/**
 * @description Lightbox Slide props
 */
export type buildItemProps = {
    // id: number
    src: string;
    alt: string;
    title: string;
    imageFit: "contain" | "cover";
    imageFormat?: "desktop" | "tablet" | "mobile";
}

export interface Project {
  slug: string; // usado para la URL: /projects/[slug]
  category: ProjectCategory;
  name: Record<Locale, string>;
  developmentType: DevelopmentType;
  shortDescription: Record<Locale, string>;
  publicUrl?: string;
  publicRepo?: string;
  publicFigmaWireframe?: string;
  mainGif: string;
  mainGifSection: string;
  // Cada párrafo es un elemento del array
  overview: Record<Locale, string[]>;
  techStack: string[];
  keyFeaturesUser: KeyFeature[];
  keyFeaturesAdmin: KeyFeature[];
  images: {
    architectureImage?: buildItemProps;
    dbDiagramImage?: buildItemProps;
    figmaWireframe?: buildItemProps;
    screenshots: buildItemProps[];
  }
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

export interface CustomCtaButtonProps {
    variant: "primary" | "secondary" | "neutral",
    text: string,
    icon?: string,
    target: string,
    width: string,
    height: string,
    setIsOpen?: (value: boolean) => void
}

export type InnerButtonProps = Omit<CustomCtaButtonProps, 'target'>;

export {}
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}