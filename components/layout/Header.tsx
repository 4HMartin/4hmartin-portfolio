'use client'

import { motion } from "motion/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import CornerIcons from "@/components/ui/cornerIcons";
import { ThemeImage } from "@/components/ui/ThemeImage";
import MobileMenu from "@/components/layout/MobileMenu";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitch from "./ThemeSwitch";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";

import ImagotypeLight from "@/public/IMAGOTYPE_LIGHT.png";
import ImagotypeDark from "@/public/IMAGOTYPE_DARK.png";
import CustomCtaButton from "../ui/CustomCtaButton";

export default function Header() {

    const t = useTranslations('navigation');

    const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;

    // ⌏ ⌎ ⌍ ⌌ ∷ ◈

    // Separator details
    const SeparatorDetails = ({ hiddeIcon }: { hiddeIcon?: string }) => {
        return (
            <div className="hidden xl:flex items-center justify-center relative w-10 h-14">
                <span className="text-gray-300 text-xl">∷</span>
                <span className={`${hiddeIcon === 'right' && 'hidden'} absolute -right-1 text-xl text-gray-300`}>⊣</span>
                <span className={`${hiddeIcon === 'left' && 'hidden'} absolute -left-1 text-xl text-gray-300`}>⊢</span>
                <span className="absolute left-2 top-2 text-xl text-gray-300">⌏</span>
                <span className="absolute right-2 top-2 text-xl text-gray-300">⌎</span>
                <span className="absolute left-2 bottom-2 text-xl text-gray-300">⌍</span>
                <span className="absolute right-2 bottom-2 text-xl text-gray-300">⌌</span>
            </div>
        )
    }

    return (
        <motion.header className="fixed top-0 w-full h-14 flex justify-between items-center bg-background border-b-[0.5px] border-gray-300"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'none' }}
            transition={{ duration: 0.3, ease: 'easeIn' }}
        >
            <MobileMenu />

            {/* Imagotype + navigation */}
            <div className="flex items-center">
                {/* Separator */}
                <SeparatorDetails hiddeIcon="left" />

                {/* Imagotype */}
                <Link href={'/#hero'} aria-label="4HMartin Portfolio - Home" className="md:hidden xl:block xl:min-w-fit">
                    <div className="relative h-14 overflow-hidden flex items-center">
                        <ThemeImage
                            lightSrc={ImagotypeLight}
                            darkSrc={ImagotypeDark}
                            alt="4HMartin Imagotype"
                            className="w-36 h-20"
                        />
                        <CornerIcons />
                    </div>
                </Link>

                {/* Separator */}
                <SeparatorDetails />

                {/* Navigation */}
                <nav className="relative h-14 hidden md:flex items-center px-4 lg:px-8 gap-2 lg:gap-3 xl:gap-4 text-sm lg:text-base">
                    {/* HOME-HERO */}
                    <Link href={'/#hero'}
                        className="text-secondary uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary"
                    >
                        {t('home_label')}
                    </Link>
                    <span className="text-gray-300">∷</span>
                    {/* ABOUT */}
                    <Link href={'/#about'}
                        className="text-secondary uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary"
                    >
                        {t('about_label')}
                    </Link>
                    <span className="text-gray-300">∷</span>
                    {/* PROJECTS */}
                    <Link href={'/#projects'}
                        className="text-secondary uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary"
                    >
                        {t('projects_label')}
                    </Link>
                    <span className="text-gray-300">∷</span>
                    {/* CERTS */}
                    <Link href={'/#certs'}
                        className="text-secondary uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary"
                    >
                        {t('certs_label')}
                    </Link>
                    <span className="text-gray-300">∷</span>
                    {/* SKILLS */}
                    <Link href={'/#skills'}
                        className="text-secondary uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary"
                    >
                        {t('skills_label')}
                    </Link>
                    <span className="text-gray-300">∷</span>
                    {/* CONTACT */}
                    <Link href={'/#contact'}
                        className="text-secondary uppercase tracking-wider font-mono transition-all duration-150 hover:text-primary"
                    >
                        {t('contact_label')}
                    </Link>
                </nav>
            </div>

            {/* Icons + CTA Button */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 md:mr-4 xl:mr-0">
                {/* Locale Switcher */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 flex items-center justify-center hover:cursor-pointer">
                    <LocaleSwitcher />
                    <CornerIcons />
                </div>
                {/* Theme Switch */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 place-self-end md:place-self-auto flex items-center justify-center hover:cursor-pointer">
                    <ThemeSwitch />
                    <CornerIcons />
                </div>
                {/* Linkedin link */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 place-self-end md:place-self-auto flex items-center justify-center hover:cursor-pointer">
                    <Link href={linkedinURL ?? 'https://www.linkedin.com/in/heber-martin-rodriguez/'} target="_blank" className="z-10">
                        <LinkedInIcon className="w-3 lg:w-5 h-3 lg:h-5 text-secondary transition-all duration-150 group-hover:text-primary" />
                    </Link>
                    <CornerIcons />
                </div>
                {/* GitHub link */}
                <div className="relative group w-8 lg:w-12 h-8 lg:h-12 flex items-center justify-center hover:cursor-pointer">
                    <Link href={githubURL ?? 'https://github.com/4HMartin'} target="_blank" className="z-10">
                        <GitHubIcon className="w-3 lg:w-5 h-3 lg:h-5 text-secondary transition-all duration-150 group-hover:text-primary" />
                    </Link>
                    <CornerIcons />
                </div>
                <div className="flex items-center gap-0.5">
                    {/* CTA BUTTON */}
                    <CustomCtaButton
                        variant="primary"
                        text={t('hire-me_label')}
                        icon="MoveUpRight"
                        target="/#contact"
                        width="w-30 lg:w-40"
                        height="h-8 lg:h-11"
                    />

                    {/* Separator */}
                    <SeparatorDetails hiddeIcon="right"/>
                </div>
            </div>
        </motion.header>
    );
}