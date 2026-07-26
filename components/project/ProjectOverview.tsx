"use client";

import { Project, Locale } from "@/data/types";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import SectionHeader from "../layout/SectionHeader";

interface ProjectOverviewProps {
    overview: Project["overview"];
}

export default function ProjectOverview({ overview }: ProjectOverviewProps){

    const locale = useLocale();

    return (
        <section>
            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="overview_label" sectionNumber="02" />

            <article className="px-4 py-6 flex flex-col gap-4">
                {overview[locale as Locale].map((paragraph, index) => (
                    <p key={index} className="text-xs xl:text-base text-gray-600">
                        {paragraph}
                    </p>
                ))}
            </article>
        </section>
    )
}