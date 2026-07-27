"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/data/types";
import { useTranslations } from "next-intl";
import TechBadge from "../ui/TechBadge";
import CornerIcons from "../ui/cornerIcons";
import SectionHeader from "../layout/SectionHeader";
import { ExternalLink, Globe, MoveUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import GitHubIcon from "../icons/GitHubIcon";

const SeparatorAuxLine = () => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        className="relative w-full h-2 mt-2 mb-2 md:w-full border-b border-dashed border-gray-300 dark:border-gray-800
    before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300 dark:before:text-gray-800
    after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300 dark:after:text-gray-800"/>
)

interface ProjectTechStackProps {
    techStack: Project['techStack'];
    publicURL: Project['publicUrl'];
    publicRepo: Project['publicRepo'];
    category: Project['category'];
    otherProjects: Project['otherProjects'];
}

export default function ProjectTechStack(
    { techStack, publicURL, publicRepo, category, otherProjects }: ProjectTechStackProps
) {
    const t = useTranslations('project_detail');

    const MotionLink = motion.create(Link);

    return (
        <section className="relative md:mx-17 lg:ml-0 xl:mr-20 2xl:mr-48 lg:w-1/3 lg:border-l lg:border-gray-300 lg:dark:border-gray-800">
            <CornerIcons />

            {/* SECTION HEADER */}
            <SectionHeader parentTranslations="project_detail" titleLabel="tech_stack_label" sectionNumber="06" />

            <article className="relative h-[95%] px-4 py-6 flex flex-col gap-4">

                {/* TECH BADGES */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                >
                    {/* SUBTITLE - TECHNOLOGIES */}
                    <h4 className="uppercase text-sm tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                        {t('technologies_label')}
                    </h4>

                    <div className="flex gap-1 flex-wrap">
                        {techStack.map((tech) => (<TechBadge key={tech} variant="primary" name={tech} />))}
                    </div>
                </motion.div>

                <SeparatorAuxLine />

                {/* PUBLIC URL & PUBLIC REPO URL */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.4}
                    className="flex flex-col gap-2"
                >
                    {/* SUBTITLE - LINKS */}
                    <h4 className="uppercase text-sm tracking-wider text-gray-600 dark:text-gray-300">
                        {t('links_label')}
                    </h4>

                    {/* PUBLIC URL */}
                    <motion.div className="relative group gap-4 w-full py-2 px-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.6}
                    >
                        <Link href={publicURL ?? 'https://github.com/4HMartin'} target="_blank" className="z-10 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <Globe className="w-4 h-4 text-gray-600 dark:text-gray-100 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500" />
                            {publicURL?.replace('https://', '')}
                        </Link>
                        <CornerIcons />
                    </motion.div>

                    {/* PUBLIC REPO */}
                    {publicRepo &&
                        <motion.div className="relative group w-full py-2 px-4"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.6}
                        >
                            <Link href={publicRepo} target="_blank" className="z-10 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                                <GitHubIcon className="w-4 h-4 text-gray-600 dark:text-gray-100 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500" />
                                {publicRepo.replace('https://', '')}
                            </Link>
                            <CornerIcons />
                        </motion.div>
                    }
                </motion.div>

                <SeparatorAuxLine />

                {/* CATEGORY BADGE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.6}
                    className="flex flex-col gap-2"
                >
                    {/* SUBTITLE - CATEGORY */}
                    <h4 className="uppercase text-sm tracking-wider text-gray-600 dark:text-gray-300">
                        {t('category_label')}
                    </h4>
                    {/* CATEGORY */}
                    <span className={`${category === 'production_ready' ? 'bg-violet-600' :
                            category === 'in_development' ? 'bg-lime-600' : 'bg-gray-700'
                            } relative w-fit z-20 px-2 py-0.5 uppercase text-xs text-white`}>
                        {category}
                    </span>
                </motion.div>

                <SeparatorAuxLine />

                {/* OTHER PROJECTS LINKS */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.8}
                    className="flex flex-col gap-2"
                >
                    {/* SUBTITLE - OTHER PROJECTS */}
                    <h4 className="uppercase text-sm tracking-wider text-gray-600 dark:text-gray-300">
                        {t('other_pjt_label')}
                    </h4>
                    {/* OTHER PROJECTS */}
                    {otherProjects &&
                        otherProjects.map((slug) => (
                            <Link
                                key={slug}
                                href={`/projects/${slug}`}
                                className="w-full px-2 py-1 border border-gray-300 dark:border-gray-700 flex items-center justify-between uppercase text-xs text-gray-600 dark:text-gray-300 group transition-colors duration-150 hover:border-violet-600"
                            >
                                {slug} <MoveUpRight className="w-3 text-gray-600 dark:text-gray-300 transition-colors duration-150 group-hover:text-violet-600" />
                            </Link>
                        ))
                    }
                </motion.div>

                {/* BACK TO PORTFOLIO HOME */}
                <MotionLink
                    href={'/#projects'}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="absolute bottom-4 left-4 uppercase text-xs text-violet-600 transition-colors duration-150 hover:text-violet-800"
                >
                    ⇠ {t('back_portfolio_label')}
                </MotionLink>
            </article>
        </section>
    )
}