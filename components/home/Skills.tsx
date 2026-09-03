"use client"
import SectionHeader from "../layout/SectionHeader";
import { SkillsData } from "@/data/skills";
import TechBadge from "../ui/TechBadge";
import { BookOpen, CodeXml, SquareTerminal, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import CornerIcons from "../ui/cornerIcons";
import { motion } from "motion/react";
import { fadeUp, fadeLeft } from "@/lib/animations";

export default function Skills() {

    const t = useTranslations('skills_section');

    return (
        <section id="skills" className="relative bg-white dark:bg-gray-950">
            {/* HEADER */}
            <SectionHeader parentTranslations="skills_section" titleLabel="skills_label" sectionNumber="05" />

            {/* CONTAINER */}
            <div className="grid grid-cols-1 gap-1 md:gap-0 md:mx-17 xl:mx-20 2xl:mx-48 md:grid-cols-2 2xl:grid-cols-4">
                {/* DECORATION CENTER ICON */}

                {/* FRONTEND */}
                <article className="relative w-full p-4 xl:p-6 md:border-r md:border-b md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <motion.h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.2}
                    >
                        <CodeXml className="w-4 text-violet-500 dark:text-lime-500" /> frontend
                    </motion.h3>

                    {/* SEPARATOR AUX LINE */}
                    <motion.div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.4}
                    />

                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.frontend.map((skill, index) => (
                            <motion.div
                                key={skill}
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={(index + 3) * 0.15}
                            >
                                <TechBadge variant="secondary" name={skill} />
                            </motion.div>
                        ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />

                {/* BACKEND */}
                <article className="relative w-full p-4 xl:p-6 md:border-b 2xl:border-r md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <motion.h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.2}
                    >
                        <SquareTerminal className="w-4 text-violet-500 dark:text-lime-500" /> backend
                    </motion.h3>

                    {/* SEPARATOR AUX LINE */}
                    <motion.div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.4}
                    />

                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.backend.map((skill, index) => (
                            <motion.div
                                key={skill}
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={(index + 3) * 0.15}
                            >
                                <TechBadge variant="secondary" name={skill} />
                            </motion.div>
                        ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />

                {/* LEARNING */}
                <article className="relative w-full p-4 xl:p-6 md:border-r md:border-b md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <motion.h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.2}
                    >
                        <BookOpen className="w-4 text-violet-500 dark:text-lime-500" /> {t('learning_label')}
                    </motion.h3>

                    {/* SEPARATOR AUX LINE */}
                    <motion.div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.4}
                    />

                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.learning.map((skill, index) => (
                            <motion.div
                                key={skill}
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={(index + 3) * 0.15}
                            >
                                <TechBadge variant="accent" name={skill} />
                            </motion.div>
                        ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />

                {/* TOOLS */}
                <article className="relative w-full p-4 xl:p-6 md:border-b md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <motion.h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.2}
                    >
                        <Wrench className="w-4 text-violet-500 dark:text-lime-500" /> {t('tools_label')}
                    </motion.h3>

                    {/* SEPARATOR AUX LINE */}
                    <motion.div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={0.4}
                    />

                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.tools.map((skill, index) => (
                            <motion.div
                                key={skill}
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={(index + 3) * 0.15}
                            >
                                <TechBadge variant="secondary" name={skill} />
                            </motion.div>
                        ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />
            </div>

            {/* LEGEND FOOTER */}
            <motion.p className="flex items-center gap-2 w-full p-4 md:px-22 xl:px-26 2xl:px-54 xl:py-4 text-[10px] md:text-xs text-gray-400"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.4}
            >
                <span className="w-4 h-4 border border-lime-300 dark:border-lime-800 bg-lime-50 dark:bg-lime-950 flex items-center justify-center text-lime-700 dark:text-lime-600 text-xs">∷</span>
                {t('legend_label')}
            </motion.p>
        </section>
    );
}