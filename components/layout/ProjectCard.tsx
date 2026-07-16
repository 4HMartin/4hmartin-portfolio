"use client";
import { useTranslations, useLocale } from "next-intl";
import { Locale, Project } from "@/data/types";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import GitHubIcon from "../icons/GitHubIcon";
import CornerIcons from "../ui/cornerIcons";
import { ThemeImage } from "../ui/ThemeImage";
import SafariUIFrameLight from "@/public/images/safari_browser_ui_light.png";
import SafariUIFrameDark from "@/public/images/safari_browser_ui_dark.png";
import Image from "next/image";
import TechBadge from "../ui/TechBadge";

export default function ProjectCard({ project }: { project: Project; }) {

    const t = useTranslations('projects_section');
    const locale = useLocale() as Locale;

    const catLabel = project.category === "production_ready" ? t('production_label') :
        project.category === "practice" ? t('practice_label') : t('development_label');

    return (
        <div className="border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors flex flex-col group">

            {/* MAIN GIF */}
            <div className="relative bg-violet-100 dark:bg-violet-950 aspect-video flex items-center justify-center pl-8 overflow-hidden border-b border-gray-200 dark:border-gray-800 group-hover:border-violet-300 dark:group-hover:border-violet-800 transition-colors">
                <Link href={`/projects/${project.slug}`} className="flex flex-col items-center w-full h-[80%] -rotate-6 scale-105 transition-all duration-300 hover:scale-100">
                    <ThemeImage
                        lightSrc={SafariUIFrameLight}
                        darkSrc={SafariUIFrameDark}
                        alt="Safari browser frame template"
                        width={480}
                        height={280}
                        className="z-10"
                    />
                    <Image
                        src={project.screenshots[0]}
                        alt="Heber Martin Rodriguez - Project main gif"
                        width={480}
                        height={280}
                        unoptimized
                        className="absolute top-4 z-20"
                    />
                </Link>

                {/* CATEGORY */}
                <div
                    className={`absolute top-2 left-2 text-[9px] xs:text-xs uppercase tracking-wider px-2 py-0.5 ${project.category === "production_ready"
                        ? "bg-violet-600 text-white"
                        : "bg-gray-700 text-white"
                        }`}
                >
                    {catLabel}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    {/* NAME */}
                    <h3 className="text-gray-900 dark:text-gray-100 text-xs lg:text-sm font-bold leading-tight">
                        {project.name[locale]}
                    </h3>
                    <Link
                        href={`/projects/${project.slug}`}
                        className="relative w-6 h-6 xs:w-8 xs:h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors shrink-0"
                    >
                        <ArrowUpRight className="w-4 xs:w-5" />
                        <CornerIcons />
                    </Link>
                </div>

                {/* SHORT DESCRIPTION */}
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed flex-1">
                    {project.shortDescription[locale]}
                </p>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} variant="primary" name={tech} />
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-gray-400 dark:text-gray-600 text-[10px] xs:text-xs px-1">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* SEPARATOR AUX LINE */}
                <div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"/>

                <div className="flex items-center gap-3">
                    {/* PUBLIC URL */}
                    {project.publicUrl && (
                        <Link
                            href={project.publicUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[10px] xs:text-xs uppercase text-gray-500 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                            <Globe className="w-2 md:w-3" /> {t('live_label')}
                        </Link>
                    )}
                    {/* REPO URL */}
                    <Link
                        href={project.publicRepo!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] xs:text-xs text-gray-500 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                        <GitHubIcon className="w-2 md:w-3 h-2 md:h-3 text-secondary dark:text-gray-300 transition-all duration-150 hover:text-primary dark:hover:text-violet-500" />
                        REPO
                    </Link>
                    {/* VIEW DETAIL LINK */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="ml-auto text-[10px] xs:text-xs uppercase text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    >
                        {t('view-docs_label')} ⇢
                    </Link>
                </div>
            </div>
        </div>
    );
}
