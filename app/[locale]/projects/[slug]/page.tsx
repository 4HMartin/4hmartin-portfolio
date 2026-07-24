import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import type { Metadata } from "next";
import ProjectClient from "@/components/project/ProjectClient";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-genera todas las páginas en build time (SSG)
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata
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

// Main component
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectClient project={project} />;
}