"use client";
import { buildItemProps } from "@/data/types";
import Image from "next/image";
import SectionHeader from "../layout/SectionHeader";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";
import Link from "next/link";
import { useTranslations } from "next-intl";
import PSInsightsIcon from "../icons/PSInsightsIcon";

interface ProjectPageSpeedProps {
    pageSpeedImage: buildItemProps;
    publicPageSpeedReport: string;
    handleLightboxOpen: (imgSrc: string) => void;
}

export default function ProjectPageSpeed({ pageSpeedImage, publicPageSpeedReport, handleLightboxOpen }: ProjectPageSpeedProps) {

    const t = useTranslations('project_detail');

    return (
        <section className="relative w-full lg:border-b lg:border-r lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="pagespeed_label" />

            <article className="px-4 py-6 flex flex-col items-start justify-center">
                {/* PUBLIC REPORT LINK */}
                <motion.div className="relative group gap-4 w-full py-2 px-4 mb-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.6}
                >
                    <Link href={publicPageSpeedReport!} target="_blank" className="z-10 flex items-center gap-4 text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300 group-hover:text-gray-950 group-hover:dark:text-gray-100">
                        <PSInsightsIcon className="w-5" />
                        {t('pagespeed_label')}
                    </Link>
                    <CornerIcons />
                </motion.div>
                
                <motion.div
                    onClick={() => handleLightboxOpen(pageSpeedImage.src)}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.2}
                    className="relative flex items-center justify-center w-full p-2 group hover:cursor-pointer"
                >
                    <Image
                        src={`${pageSpeedImage.src}`}
                        alt={`${pageSpeedImage.alt}`}
                        width={pageSpeedImage.imageFormat === "mobile" ? 75 : pageSpeedImage.imageFormat === "tablet" ? 155 : 580}
                        height={330}
                        loading="lazy"
                        className="brightness-90 transition-all duration-150 group-hover:brightness-100"
                    />
                    <CornerIcons />
                </motion.div>
            </article>
        </section>
    )
}