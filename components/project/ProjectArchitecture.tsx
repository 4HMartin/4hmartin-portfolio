"use client";
import { buildItemProps } from "@/data/types";
import Image from "next/image";
import SectionHeader from "../layout/SectionHeader";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";


interface ProjectArchitectureProps {
    architectureImage: buildItemProps;
    handleLightboxOpen: (imgSrc: string) => void;
}

export default function ProjectArchitecture({ architectureImage, handleLightboxOpen }: ProjectArchitectureProps) {

    return (
        <section className="relative w-full lg:border-b lg:border-r lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="architecture_label" />

            <article className="px-4 py-6 flex items-center justify-center">
                <motion.div
                    onClick={() => handleLightboxOpen(architectureImage.src)}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.2}
                    className="relative flex items-center justify-center w-full p-2 group hover:cursor-pointer"
                >
                    <Image
                        src={`${architectureImage.src}`}
                        alt={`${architectureImage.alt}`}
                        width={architectureImage.imageFormat === "mobile" ? 75 : architectureImage.imageFormat === "tablet" ? 155 : 580}
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