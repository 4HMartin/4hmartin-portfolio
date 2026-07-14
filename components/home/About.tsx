"use client"
import { motion } from "motion/react";
import { fadeUp, flickerVariant } from "@/lib/animations";
import SectionHeader from "../layout/SectionHeader";
import { useTranslations } from "next-intl";
import DownloadCVButton from "../ui/DownloadCVButton";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function About() {

    const t = useTranslations('about_section');

    return (
        <section id="about" className="relative bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800">

            {/* HEADER */}
            <SectionHeader parentTranslations="about_section" titleLabel="about-me_label" sectionNumber="02" />

            {/* CONTENT CONTAINER */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start xl:gap-6 px-4 md:px-22 xl:px-26 2xl:px-52">

                {/* DESCRIPTION */}
                <article className="py-8 text-gray-600 dark:text-gray-300 flex flex-col gap-4">
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: "some" }}
                    >
                        {t('first-paragraph')}
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: "some" }}
                    >
                        {t('second-paragraph')}
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: "some" }}
                        className="mb-4"
                    >
                        {t('third-paragraph')}
                    </motion.p>

                    {/* DOWNLOAD CV BUTTON */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: "some" }}
                        custom={0.2}
                    >
                        <DownloadCVButton />
                    </motion.div>
                </article>

                {/* SEPARATOR AUX LINE */}
                <div className="xl:hidden relative w-full h-2 mt-4 mb-10 md:w-full border-b border-dashed border-gray-300
                before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300
                after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300"/>

                {/* EXPERIENCE TIME-LINE SECTION */}
                <article className="relative pb-8 md:pb-12 xl:pt-6.5 flex flex-col">
                    {/* HEADER */}
                    <header className="h-8 flex items-center md:mb-4">
                        <motion.h3 className="uppercase text-xs xs:text-lg text-gray-400 dark:text-gray-300 tracking-wider"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                        >
                            {t('experience_label')}
                        </motion.h3>
                    </header>

                    {/* LINE */}
                    <motion.div className="absolute left-[3%] xs:left-[2.5%] md:left-[1.5%] lg:left-[1.1%] 2xl:left-[1.4%] top-10 md:top-14 2xl:top-18.5 w-0.5 h-[60%] bg-gray-200 dark:bg-gray-800"
                        initial={{ height: 0 }}
                        whileInView={{ height: '60%' }}
                        transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
                    />

                    {/* FREELANCE */}
                    <div className="relative flex items-start gap-2 mb-6">
                        <motion.span className="text-2xl text-violet-500 bg-white dark:bg-gray-950"
                            variants={flickerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            ◈
                        </motion.span>
                        <div className="flex flex-col gap-2 w-full">
                            {/* TITLE - SUBTITLE - BADGE */}
                            <motion.div className="flex items-start justify-between"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: "some" }}
                                custom={0.2}
                            >
                                <div className="flex flex-col items-start gap-1 pt-1">
                                    <h4 className="text-base font-bold dark:text-gray-300">{t('freelance-dev_label')}</h4>
                                    <p className="text-sm text-violet-500">{t('self-employed_label')}</p>
                                </div>
                                <span className="text-[9px] xs:text-xs uppercase border border-violet-500 text-violet-500 px-2 py-0.5 mt-2">
                                    2025 - {t('present_label')}
                                </span>
                            </motion.div>
                            {/* DESCRIPTION */}
                            <motion.p className="text-gray-600 dark:text-gray-300"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: "some" }}
                                custom={0.4}
                            >
                                {t('freelance_paragraph')}
                            </motion.p>
                        </div>
                    </div>

                    {/* WEB DEVELOPER */}
                    <div className="relative flex items-start gap-2 mb-6">
                        <motion.span className="text-2xl text-gray-600 bg-white dark:bg-gray-950"
                            variants={flickerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            ◇
                        </motion.span>
                        <div className="flex flex-col gap-2 w-full">
                            {/* TITLE - SUBTITLE - BADGE */}
                            <motion.div className="flex items-start justify-between"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: "some" }}
                                custom={0.2}
                            >
                                <div className="flex flex-col items-start gap-1 pt-1">
                                    <h4 className="text-base font-bold dark:text-gray-300">{t('web-dev_label')}</h4>
                                    <Link href={'https://w34marketing.com/'} target="_blank" className="text-sm text-violet-500 flex items-center gap-1">
                                        W34Marketing <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                                <span className="text-[9px] xs:text-xs uppercase border border-gray-300 text-gray-600 dark:text-gray-300 px-2 py-0.5 mt-2">
                                    2023 - 2025
                                </span>
                            </motion.div>
                            {/* DESCRIPTION */}
                            <motion.p className="text-gray-600 dark:text-gray-300"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: "some" }}
                                custom={0.4}
                            >
                                {t('dev_paragraph')}
                            </motion.p>
                        </div>
                    </div>

                    {/* IT TECHNICIAN */}
                    <div className="relative flex items-start gap-2">
                        <motion.span className="text-2xl text-gray-600 bg-white dark:bg-gray-950"
                            variants={flickerVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            ◇
                        </motion.span>
                        <div className="flex flex-col gap-2 w-full">
                            {/* TITLE - SUBTITLE - BADGE */}
                            <motion.div className="flex items-start justify-between"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: "some" }}
                                custom={0.2}
                            >
                                <div className="flex flex-col items-start gap-1 pt-1">
                                    <h4 className="text-base font-bold dark:text-gray-300">{t('it-technician_label')}</h4>
                                    <Link href={'https://labeltec.es/'} target="_blank" className="text-sm text-violet-500 flex items-center gap-1">
                                        LabelTEC <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                                <span className="text-[9px] xs:text-xs uppercase border border-gray-300 text-gray-600 dark:text-gray-300 px-2 py-0.5 mt-2">
                                    2021 - 2022
                                </span>
                            </motion.div>
                            {/* DESCRIPTION */}
                            <motion.p className="text-gray-600 dark:text-gray-300"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: "some" }}
                                custom={0.4}
                            >
                                {t('it_paragraph')}
                            </motion.p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}