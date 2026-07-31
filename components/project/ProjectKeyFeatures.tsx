"use client";
import { Project, Locale } from "@/data/types";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import SectionHeader from "../layout/SectionHeader";
import { fadeUp } from "@/lib/animations";
import CornerIcons from "../ui/cornerIcons";

const SeparatorAuxLine = () => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        className="relative w-full h-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
    before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
    after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"/>
)

interface ProjectKeyFeaturesProps {
    keyFeaturesUsers: Project['keyFeaturesUser'];
    keyFeaturesAdmin: Project['keyFeaturesAdmin'];
}

export default function ProjectKeyFeatures({ keyFeaturesUsers, keyFeaturesAdmin }: ProjectKeyFeaturesProps) {

    const t = useTranslations('project_detail');
    const locale = useLocale();

    return (
        <section className="relative h-fit lg:border-b lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="key_features_label" />

            <article className="relative px-4 py-6 flex flex-col gap-4">
                {/* SUBTITLE - FOR END USERS */}
                <motion.h4
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                    className="uppercase text-xs xl:text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                    {t('for_users_label').replaceAll(' ', '_')}
                </motion.h4>

                <motion.ul
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.4}
                    className="list-none list-inside"
                >
                    {keyFeaturesUsers.map((feature, index) => {
                        return (
                            <div
                                key={feature.key['en']}
                                className="flex items-start gap-1"
                            >
                                <span className="text-xs xl:text-sm text-violet-600">
                                    {index < 10 && '0'}{`${index + 1}.`}
                                </span>
                                <li
                                    className="text-xs xl:text-sm text-gray-700 dark:text-gray-300 mb-4"
                                >
                                    <strong>
                                        {feature.key[locale as Locale]} ▸
                                    </strong>
                                    {' '}{feature.value[locale as Locale]}
                                </li>
                            </div>
                        )
                    })}
                </motion.ul>

                <SeparatorAuxLine />

                {/* SUBTITLE - FOR ADMIN */}
                <motion.h4
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                    className="uppercase text-xs xl:text-sm font-bold text-gray-700 dark:text-gray-300"
                >
                    {t('for_admin_label').replaceAll(' ', '_')}
                </motion.h4>

                <motion.ul
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.4}
                    className="list-none list-inside"
                >
                    {keyFeaturesAdmin.map((feature, index) => {
                        return (
                            <div
                                key={feature.key['en']}
                                className="flex items-start gap-1"
                            >
                                <span className="text-xs xl:text-sm text-violet-600">
                                    {index < 10 && '0'}{`${index + 1}.`}
                                </span>
                                <li
                                    className="text-xs xl:text-sm text-gray-700 dark:text-gray-300 mb-4"
                                >
                                    <strong>
                                        {feature.key[locale as Locale]} ▸
                                    </strong>
                                    {' '}{feature.value[locale as Locale]}
                                </li>
                            </div>
                        )
                    })}
                </motion.ul>
            </article>
        </section>
    )
}