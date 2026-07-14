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
    title: project.name['en'],
    description: project.shortDescription['en'],
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
    <section className="min-h-screen flex flex-col gap-4 items-center justify-center">
      {/* ProjectHero, TechStackBadges, KeyFeaturesList, etc. */}
      <h1 className="text-gray-800 dark:text-gray-300">
        PROJECT PAGE
      </h1>
      <h2>{project.name['en']}</h2>
    </section>
  );
}