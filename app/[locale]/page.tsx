import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
// import Certificates from "@/components/home/Certificates";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://4hmartin.com";

// Metadata
export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    // # Title
    title: {
        absolute: "Heber Martin Rodríguez | Full-Stack Developer — React, Next.js & TypeScript",
    },

    // # Description
    description:
        "Portfolio of Heber Martin Rodríguez, a full-stack web developer based in Palma de Mallorca. React, Next.js, TypeScript, Node.js & PostgreSQL. Production websites, web apps and open-source practice projects. Open to freelance and full-time roles.",

    // # Keywords
    keywords: [
        // Primary intent
        "full-stack developer",
        "freelance web developer",
        "web developer portfolio",
        "Next.js developer",
        "React developer",
        "TypeScript developer",

        // Local intent
        "web developer Palma de Mallorca",
        "freelance developer Mallorca",
        "desarrollador web Mallorca",
        "desarrollador full-stack España",

        // Stack
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "Shadcn UI",
        "Framer Motion",

        // Services / long-tail
        "custom web application development",
        "landing page developer",
        "multi-language website next-intl",
        "web developer open to work remote Europe",
        "hire full-stack developer",
    ],

    // # Open Graph
    openGraph: {
        type: "website",
        url: BASE_URL,
        siteName: "4HMartin Portfolio",
        title: "Heber Martin Rodríguez | Full-Stack Developer",
        description:
            "Full-stack developer specialised in React, Next.js and TypeScript. Explore production projects, certificates, skills and get in touch for freelance or full-time opportunities.",
        images: [
            {
                url: "/images/og/og-home.webp",
                width: 1200,
                height: 630,
                alt: "Heber Martin Rodríguez — Full-Stack Developer Portfolio",
            },
        ],
        locale: "en_GB",
        alternateLocale: ["es_ES"],
    },

    // # Twitter / X
    twitter: {
        card: "summary_large_image",
        title: "Heber Martin Rodríguez | Full-Stack Developer",
        description:
            "React, Next.js & TypeScript developer based in Palma de Mallorca. Browse projects and get in touch.",
        images: ["/images/og/og-home.webp"],
    },

    // # Canonical & alternates
    alternates: {
        canonical: BASE_URL,
        languages: {
            en: BASE_URL,
            es: `${BASE_URL}/es`,
            "x-default": BASE_URL,
        },
    },

    // # Robots
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // # Authorship & verification
    authors: [{ name: "Heber Martin Rodríguez", url: BASE_URL }],
    creator: "Heber Martin Rodríguez",
    category: "technology",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/*<Certificates />*/}
      <Skills />
      <Contact />
    </>
  );
}
