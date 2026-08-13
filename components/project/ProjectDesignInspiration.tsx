"use client";
import { buildItemProps } from "@/data/types";
import Image from "next/image";
import SectionHeader from "../layout/SectionHeader";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";


interface ProjectDesignInspirationProps {
    screenshots: buildItemProps[];
    handleLightboxOpen: (imgSrc: string) => void;
}

export default function ProjectDesignInspiration({ screenshots, handleLightboxOpen }: ProjectDesignInspirationProps) {

    return (
        <section className="relative w-full lg:border-b lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="design_inspiration_label" />

            <article className="px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-2 items-center justify-center">
                {screenshots.map((image, index) => (
                    <motion.div
                        key={index}
                        onClick={() => handleLightboxOpen(image.src)}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.2}
                        className="relative flex items-center justify-center w-full p-2 group hover:cursor-pointer"
                    >
                        <Image
                            src={`${image.src}`}
                            alt={`${image.alt}`}
                            // objectFit={`${image.imageFit}`}
                            width={image.imageFormat === "mobile" ? 75 : image.imageFormat === "tablet" ? 155 : 580}
                            height={330}
                            // fill
                            // sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            className="w-auto h-auto brightness-90 transition-all duration-150 group-hover:brightness-100"
                        />
                        <CornerIcons />
                    </motion.div>
                ))}
            </article>
        </section>
    )
}