"use client"
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import { useTranslations } from "next-intl";
import DownloadCVButton from "../ui/DownloadCVButton";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function About() {

    const t = useTranslations('about_section');

    return (
        <section id="about" className="bg-white dark:bg-slate-900 border-b border-gray-300">
            {/* HEADER */}
            <motion.header className="h-8 border-b border-gray-200 px-4 flex items-center bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "some" }}
            >
                <h2 className="text-xs uppercase tracking-wider font-bold">
                    <span className="text-violet-500">/02</span> {t('about-me_label')}
                </h2>
            </motion.header>

            {/* DESCRIPTION */}
            <article className="px-4 py-8 text-gray-600 flex flex-col gap-4 mb-4 border-b border-gray-200">
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
                >
                    <DownloadCVButton />
                </motion.div>
            </article>

            {/* EXPERIENCE TIME-LINE SECTION */}
            <article className="relative px-4 pb-8 flex flex-col">
                {/* HEADER */}
                <header className="h-8 flex items-center">
                    <h3 className="uppercase text-xs text-gray-400 tracking-wider">
                        {t('experience_label')}
                    </h3>
                </header>
                {/* LINE */}
                <div className="absolute left-6.25 top-10 w-0.5 h-154 bg-gray-200" />
                {/* FREELANCE */}
                <div className="relative flex items-start gap-2 mb-6">
                    <span className="text-2xl text-violet-500 bg-white">
                        {/* ◇ */}
                        ◈
                    </span>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start gap-1 pt-1">
                                <h4 className="text-base font-bold">{t('freelance-dev_label')}</h4>
                                <p className="text-sm text-violet-500">{t('self-employed_label')}</p>
                            </div>
                            <span className="text-[9px] uppercase border border-violet-500 text-violet-500 px-2 py-0.5 mt-2">
                                2025 - {t('present_label')}
                            </span>
                        </div>
                        <p className="text-gray-600">
                            {t('freelance_paragraph')}
                        </p>
                    </div>
                </div>
                {/* WEB DEVELOPER */}
                <div className="relative flex items-start gap-2 mb-6">
                    <span className="text-2xl text-gray-600 bg-white">
                        ◇
                    </span>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start gap-1 pt-1">
                                <h4 className="text-base font-bold">{t('web-dev_label')}</h4>
                                <Link href={'https://w34marketing.com/'} target="_blank" className="text-sm text-violet-500 flex items-center gap-1">
                                    W34Marketing <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>
                            <span className="text-[9px] uppercase border border-gray-300 text-gray-600 px-2 py-0.5 mt-2">
                                2023 - 2025
                            </span>
                        </div>
                        <p className="text-gray-600">
                            {t('dev_paragraph')}
                        </p>
                    </div>
                </div>
                {/* IT TECHNICIAN */}
                <div className="relative flex items-start gap-2">
                    <span className="text-2xl text-gray-600 bg-white">
                        ◇
                    </span>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start gap-1 pt-1">
                                <h4 className="text-base font-bold">{t('it-technician_label')}</h4>
                                <Link href={'https://labeltec.es/'} target="_blank" className="text-sm text-violet-500 flex items-center gap-1">
                                    LabelTEC <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>
                            <span className="text-[9px] uppercase border border-gray-300 text-gray-600 px-2 py-0.5 mt-2">
                                2021 - 2022
                            </span>
                        </div>
                        <p className="text-gray-600">
                            {t('it_paragraph')}
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}