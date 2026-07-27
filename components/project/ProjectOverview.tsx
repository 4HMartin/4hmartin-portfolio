"use client";

import { Project, Locale } from "@/data/types";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import SectionHeader from "../layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";

interface ProjectOverviewProps {
    overview: Project["overview"];
}

export default function ProjectOverview({ overview }: ProjectOverviewProps) {

    const locale = useLocale();

    return (
        <section className="relative h-fit lg:border-b lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="overview_label" sectionNumber="02" />

            <article className="relative px-4 py-6 flex flex-col gap-4">

                {overview[locale as Locale].map((paragraph, index) => (
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2 * (index + 1)}
                        key={index}
                        className="text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </article>
        </section>
    )
}