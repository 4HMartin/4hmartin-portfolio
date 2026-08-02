"use client";
import Image from "next/image";
import { buildItemProps, Project } from "@/data/types";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeader from "../layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";
import Link from "next/link";
import FigmaIcon from "../icons/FigmaIcon";

interface ProjectFigmaWireframeProps {
    figmaWireframe: buildItemProps;
    publicFigmaWireframe: Project['publicFigmaWireframe'];
    handleLightboxOpen: (imgSrc: string) => void;
}

export default function ProjectFigmaWireframe({ figmaWireframe, publicFigmaWireframe, handleLightboxOpen }: ProjectFigmaWireframeProps) {

    const t = useTranslations('project_detail');

    return (
        <section className="relative h-full w-full lg:border-b lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="figma_label" />

            <article className="px-4 py-6 flex flex-col items-start justify-center">

                {/* PUBLIC WIREFRAME LINK */}
                <motion.div className="relative group gap-4 w-full py-2 px-4 mb-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.6}
                >
                    <Link href={publicFigmaWireframe!} target="_blank" className="z-10 flex items-center gap-2 text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300 group-hover:text-gray-950 group-hover:dark:text-gray-100">
                        <FigmaIcon className="w-5" stroke="#7f22fe" />
                        {t('view_wireframe_label')}
                    </Link>
                    <CornerIcons />
                </motion.div>

                <motion.div
                    onClick={() => handleLightboxOpen(figmaWireframe.src)}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.2}
                    className="relative flex items-center justify-center w-full p-2 group hover:cursor-pointer"
                >
                    <Image
                        src={`${figmaWireframe.src}`}
                        alt={`${figmaWireframe.alt}`}
                        objectFit={`${figmaWireframe.imageFit}`}
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