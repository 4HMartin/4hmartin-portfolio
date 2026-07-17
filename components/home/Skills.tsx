import SectionHeader from "../layout/SectionHeader";
import { SkillsData } from "@/data/skills";
import TechBadge from "../ui/TechBadge";
import { BookOpen, CodeXml, SquareTerminal, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import CornerIcons from "../ui/cornerIcons";

export default function Skills() {

    const t = useTranslations('skills_section');

    return (
        <section id="projects" className="relative bg-white dark:bg-gray-950">
            {/* HEADER */}
            <SectionHeader parentTranslations="skills_section" titleLabel="skills_label" sectionNumber="05" />

            {/* CONTAINER */}
            <div className="grid grid-cols-1 gap-1 md:gap-0 md:mx-17 xl:mx-20 2xl:mx-48 md:grid-cols-2 2xl:grid-cols-4">
                {/* DECORATION CENTER ICON */}

                {/* FRONTEND */}
                <article className="relative w-full p-4 xl:p-6 md:border-r md:border-b md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white">
                        <CodeXml className="w-4 text-violet-500 dark:text-lime-500"/> frontend
                    </h3>
                    {/* SEPARATOR AUX LINE */}
                    <div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                    />
                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.frontend.map((skill) => ( <TechBadge key={skill} variant="secondary" name={skill}/> ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />

                {/* BACKEND */}
                <article className="relative w-full p-4 xl:p-6 md:border-b 2xl:border-r md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white">
                        <SquareTerminal className="w-4 text-violet-500 dark:text-lime-500"/> backend
                    </h3>
                    {/* SEPARATOR AUX LINE */}
                    <div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                    />
                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.backend.map((skill) => ( <TechBadge key={skill} variant="secondary" name={skill}/> ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />

                {/* LEARNING */}
                <article className="relative w-full p-4 xl:p-6 md:border-r md:border-b md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white">
                        <BookOpen className="w-4 text-violet-500 dark:text-lime-500"/> {t('learning_label')}
                    </h3>
                    {/* SEPARATOR AUX LINE */}
                    <div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                    />
                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.learning.map((skill) => ( <TechBadge key={skill} variant="accent" name={skill}/> ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />

                {/* TOOLS */}
                <article className="relative w-full p-4 xl:p-6 md:border-b md:border-dashed md:border-gray-300 md:dark:border-gray-800">
                    {/* TITLE */}
                    <h3 className="flex items-center gap-1 uppercase font-bold tracking-wider text-xs text-gray-950 dark:text-white">
                        <Wrench className="w-4 text-violet-500 dark:text-lime-500"/> {t('tools_label')}
                    </h3>
                    {/* SEPARATOR AUX LINE */}
                    <div className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
                        before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
                        after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"
                    />
                    {/* TECH BADGES */}
                    <div className="flex items-center flex-wrap gap-1 mt-4">
                        {SkillsData.tools.map((skill) => ( <TechBadge key={skill} variant="secondary" name={skill}/> ))}
                    </div>

                    <CornerIcons />
                </article>

                {/* SEPARATOR LINE DASHED */}
                <div className="md:hidden h-1 w-full border-b border-dashed text-gray-400" />
            </div>

            {/* LEGEND FOOTER */}
            <p className="flex items-center gap-2 w-full p-4 md:px-22 xl:px-26 2xl:px-54 xl:py-4 text-[10px] md:text-xs text-gray-400">
                <span className="w-4 h-4 border border-lime-300 dark:border-lime-800 bg-lime-50 dark:bg-lime-950 flex items-center justify-center text-lime-700 dark:text-lime-600 text-xs">∷</span>
                {t('legend_label')}
            </p>
        </section>
    );
}