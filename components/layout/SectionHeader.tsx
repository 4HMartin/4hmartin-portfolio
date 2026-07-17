"use client";
import { motion } from "motion/react";
import { fadeUp, flickerVariant } from "@/lib/animations";
import { useTranslations } from "next-intl";

type SectionHeaderProps = {
    parentTranslations: string,
    titleLabel: string,
    sectionNumber: string
}

export default function SectionHeader({ parentTranslations, titleLabel, sectionNumber }: SectionHeaderProps) {

    const t = useTranslations(parentTranslations);

    return (
        <motion.header className="w-full flex items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
        >
            {/* TOP LEFT CORNER ICON */}
            <div className="hidden md:flex w-20.5 2xl:w-60 h-12.5 border-y border-dashed border-gray-300 dark:border-gray-800 items-center justify-start md:pl-2 xl:pl-3.5">
                <motion.span className="hidden md:block text-violet-500 dark:text-lime-500"
                    variants={flickerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: "some" }}
                >
                    ⊹
                </motion.span>
            </div>

            {/* TEXT */}
            <div className="border-y border-gray-300 dark:border-gray-800 w-full h-8 md:h-12.5 pt-1 px-4 xl:px-8 2xl:px-4 flex items-center bg-[url('/patterns/diagonal-lines-gray-300.svg')] dark:bg-[url('/patterns/diagonal-lines-gray-800.svg')] bg-repeat">
                <h2 className="text-xs uppercase tracking-wider font-bold text-gray-950 dark:text-white">
                    <motion.span className="text-violet-500 mr-0.5 md:mr-1"
                        variants={flickerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        /{sectionNumber}
                    </motion.span>
                    {t(titleLabel)}
                </h2>
            </div>

            {/* TOP RIGHT CORNER ICON */}
            <div className="hidden md:flex w-20.5 2xl:w-60 h-12.5 border-y border-dashed border-gray-300 dark:border-gray-800 items-center justify-end md:pr-2 xl:pr-3.5">
                <motion.span className="hidden md:block text-violet-500 dark:text-lime-500"
                    variants={flickerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: "some" }}
                >
                    ⊹
                </motion.span>
            </div>
        </motion.header>
    )
}