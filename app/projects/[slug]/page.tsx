import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-genera todas las páginas en build time (SSG)
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      images: [project.mainGif],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main>
      {/* ProjectHero, TechStackBadges, KeyFeaturesList, etc. */}
    </main>
  );
}