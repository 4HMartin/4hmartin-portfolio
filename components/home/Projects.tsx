"use client";
import { motion } from "motion/react";
import { fadeUp, flickerVariant } from "@/lib/animations";
import SectionHeader from "../layout/SectionHeader";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectCard from "../layout/ProjectCard";

type Tab = "all" | "production_ready" | "practice" | "in_development";

export default function Projects() {

    const t = useTranslations('projects_section');

    const [tab, setTab] = useState<Tab>("all");
    const tabLabels: Record<Tab, string> = {
        all: t('all_label'),
        production_ready: t('production_label'),
        practice: t('practice_label'),
        in_development: t('development_label')
    }

    const filtered = tab === 'all' ? projects : projects.filter((p) => p.category === tab);

    return (
        <section id="projects" className="relative bg-white dark:bg-gray-950">

            {/* HEADER */}
            <SectionHeader parentTranslations="projects_section" titleLabel="projects_label" sectionNumber="03" />

            {/* TABS */}
            <motion.div className="flex mb-4 md:mx-17 xl:mx-20 2xl:mx-48 border-b border-gray-200 dark:border-gray-800 overflow-x-scroll lg:overflow-x-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
            >
                {(["all", "production_ready", "practice", "in_development"] as Tab[]).map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-6 py-3 text-xs uppercase cursor-pointer border-r border-gray-200 dark:border-gray-800 transition-colors ${tab === t
                            ? "bg-gray-900 dark:bg-violet-700 text-white"
                            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900"
                            }`}
                    >
                        {tabLabels[t]}
                        <span className={`ml-2 text-[10px] ${tab === t ? "text-gray-400" : "text-gray-300 dark:text-gray-600"}`}>
                            {t === "all"
                                ? projects.length
                                : projects.filter((p) => p.category === t).length}
                        </span>
                    </button>
                ))}
            </motion.div>

            {/* PROJECTS CONTAINER */}
            <article className="mb-4 px-4 md:px-22 xl:px-26 2xl:px-52">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                            custom={(index + 2) * 0.2}
                        >
                            <ProjectCard key={project.slug} project={project} />
                        </motion.div>
                    ))}
                </div>
            </article>
        </section>
    )
}