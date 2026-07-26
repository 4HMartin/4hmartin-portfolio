'use client'

import { motion } from "motion/react";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";
import { useTranslations } from "next-intl";
import CornerIcons from "@/components/ui/cornerIcons";
import { ThemeImage } from "@/components/ui/ThemeImage";
import MobileMenu from "@/components/layout/MobileMenu";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitch from "./ThemeSwitch";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";
import { flickerVariant } from "@/lib/animations";

import ImagotypeLight from "@/public/IMAGOTYPE_LIGHT.png";
import ImagotypeDark from "@/public/IMAGOTYPE_DARK.png";
import CustomCtaButton from "../ui/CustomCtaButton";

export default function Header() {

    const t = useTranslations('navigation');

    const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;

    // Separator details
    const SeparatorDetails = ({ hiddeIcon }: { hiddeIcon?: string }) => {
        return (
            <motion.div className="hidden xl:flex items-center justify-center relative w-10 h-14 cursor-default"
                variants={flickerVariant}
                initial="hidden"
                animate="visible"
            >
                <span className="text-gray-300 dark:text-gray-800 text-xl cursor-default">∷</span>
                <span className={`${hiddeIcon === 'right' && 'hidden'} absolute -right-1 text-xl text-gray-300 dark:text-gray-800 cursor-default`}>
                    ⊣
                </span>
                <span className={`${hiddeIcon === 'left' && 'hidden'} absolute -left-1 text-xl text-gray-300 dark:text-gray-800 cursor-default`}>
                    ⊢
                </span>
                <span className="absolute left-2 top-2 text-xl text-gray-300 dark:text-gray-800 cursor-default">
                    ⌏
                </span>
                <span className="absolute right-2 top-2 text-xl text-gray-300 dark:text-gray-800 cursor-default">
                    ⌎
                </span>
                <span className="absolute left-2 bottom-2 text-xl text-gray-300 dark:text-gray-800 cursor-default">
                    ⌍
                </span>
                <span className="absolute right-2 bottom-2 text-xl text-gray-300 dark:text-gray-800 cursor-default">
                    ⌌
                </span>
            </motion.div>
        )
    }

    return (
        <motion.header className="fixed z-50 top-0 w-full h-14 flex justify-between items-center bg-background border-b-[0.5px] border-gray-300 dark:border-gray-800 dark:bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'linear' }}
        >
            <MobileMenu />

            {/* Imagotype + navigation */}
            <div className="flex items-center">
                {/* Separator */}
                <SeparatorDetails hiddeIcon="left" />

                {/* Imagotype */}
                <ScrollLink to="hero" aria-label="4HMartin Portfolio - Home" className="md:hidden xl:block xl:max-w-28">
                    <div className="relative h-12 flex items-center">
                        <ThemeImage
                            lightSrc={ImagotypeLight}
                            darkSrc={ImagotypeDark}
                            alt="4HMartin Imagotype"
                            width={168}
                            height={136}
                            loading="eager"
                            className="w-36 p-6 brightness-0 dark:brightness-200 scale-150"
                        />
                        <CornerIcons />
                    </div>
                </ScrollLink>

                {/* Separator */}
                <SeparatorDetails />

                {/* Navigation */}
                <nav className="relative h-14 hidden md:flex items-center px-4 lg:px-8 gap-2 lg:gap-3 xl:gap-4 text-sm lg:text-base">
                    {/* HOME-HERO */}
                    <ScrollLink to="hero" offset={-56}
                        className="text-secondary dark:text-gray-300 uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary cursor-pointer dark:hover:text-violet-400"
                    >
                        {t('home_label')}
                    </ScrollLink>
                    <motion.span className="text-gray-300 dark:text-gray-800 cursor-default"
                        variants={flickerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        ∷
                    </motion.span>

                    {/* ABOUT */}
                    <ScrollLink to="about" offset={-56}
                        className="text-secondary dark:text-gray-300 uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary cursor-pointer dark:hover:text-violet-400"
                    >
                        {t('about_label')}
                    </ScrollLink>
                    <motion.span className="text-gray-300 dark:text-gray-800 cursor-default"
                        variants={flickerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        ∷
                    </motion.span>

                    {/* PROJECTS */}
                    <ScrollLink to="projects" offset={-56}
                        className="text-secondary dark:text-gray-300 uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary cursor-pointer dark:hover:text-violet-400"
                    >
                        {t('projects_label')}
                    </ScrollLink>
                    <motion.span className="text-gray-300 dark:text-gray-800 cursor-default"
                        variants={flickerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        ∷
                    </motion.span>

                    {/* CERTS */}
                    <ScrollLink to="certs" offset={-56}
                        className="text-secondary dark:text-gray-300 uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary cursor-pointer dark:hover:text-violet-400"
                    >
                        {t('certs_label')}
                    </ScrollLink>
                    <motion.span className="text-gray-300 dark:text-gray-800 cursor-default"
                        variants={flickerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        ∷
                    </motion.span>

                    {/* SKILLS */}
                    <ScrollLink to="skills" offset={-56}
                        className="text-secondary dark:text-gray-300 uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary cursor-pointer dark:hover:text-violet-400"
                    >
                        {t('skills_label')}
                    </ScrollLink>
                    <motion.span className="text-gray-300 dark:text-gray-800 cursor-default"
                        variants={flickerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        ∷
                    </motion.span>
                    
                    {/* CONTACT */}
                    <ScrollLink to="contact" offset={-56}
                        className="text-secondary dark:text-gray-300 uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary cursor-pointer dark:hover:text-violet-400"
                    >
                        {t('contact_label')}
                    </ScrollLink>
                </nav>
            </div>

            {/* Icons + CTA Button */}
            <div className="hidden md:flex items-center gap-2 2xl:gap-0 md:mr-4 lg:mr-8 xl:mr-0">
                {/* Locale Switcher */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 flex items-center justify-center hover:cursor-pointer 2xl:mr-2">
                    <LocaleSwitcher />
                    <CornerIcons />
                </div>
                {/* Theme Switch */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 place-self-end md:place-self-auto flex items-center justify-center hover:cursor-pointer 2xl:mr-2">
                    <ThemeSwitch />
                    <CornerIcons />
                </div>
                {/* Linkedin link */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 place-self-end md:place-self-auto flex items-center justify-center hover:cursor-pointer 2xl:mr-2">
                    <Link href={linkedinURL ?? 'https://www.linkedin.com/in/heber-martin-rodriguez/'} target="_blank" className="z-10">
                        <LinkedInIcon className="w-3 lg:w-5 h-3 lg:h-5 text-secondary dark:text-gray-300 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500" />
                    </Link>
                    <CornerIcons />
                </div>
                {/* GitHub link */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 flex items-center justify-center hover:cursor-pointer">
                    <Link href={githubURL ?? 'https://github.com/4HMartin'} target="_blank" className="z-10">
                        <GitHubIcon className="w-3 lg:w-5 h-3 lg:h-5 text-secondary dark:text-gray-300 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500" />
                    </Link>
                    <CornerIcons />
                </div>
                <div className="flex items-center gap-0.5">
                    {/* Separator */}
                    <SeparatorDetails />

                    {/* CTA BUTTON */}
                    <CustomCtaButton
                        variant="primary"
                        text={t('hire-me_label')}
                        target="/#contact"
                        width="w-30 lg:w-[110px]"
                        height="h-8 lg:h-12"
                    />

                    {/* Separator */}
                    <SeparatorDetails hiddeIcon="right" />
                </div>
            </div>
        </motion.header>
    );
}