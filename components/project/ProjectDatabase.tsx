"use client";
import Image from "next/image";
import { Project, Locale, buildItemProps } from "@/data/types";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import SectionHeader from "../layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";

interface ProjectDatabaseProps {
    dbDiagramImage: buildItemProps;
    handleLightboxOpen: (imgSrc: string) => void;
}

export default function ProjectDatabase({ dbDiagramImage, handleLightboxOpen }: ProjectDatabaseProps) {

    return (
        <section className="relative h-fit w-full lg:border-b lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="database_label" sectionNumber="05" />

            <article className="px-4 py-6 flex items-center justify-center">
                <motion.div
                    onClick={() => handleLightboxOpen(dbDiagramImage.src)}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.2}
                    className="relative flex items-center justify-center w-full p-2 group hover:cursor-pointer"
                >
                    <Image
                        src={`${dbDiagramImage.src}`}
                        alt={`${dbDiagramImage.alt}`}
                        objectFit={`${dbDiagramImage.imageFit}`}
                        width={580}
                        height={330}
                        // fill
                        // sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="brightness-90 transition-all duration-150 group-hover:brightness-100"
                    />
                    <CornerIcons />
                </motion.div>
            </article>
        </section>
    )
}