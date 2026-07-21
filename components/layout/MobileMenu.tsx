"use client"
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useLocale, useTranslations } from "next-intl";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ThemeImage } from "../ui/ThemeImage";
import ThemeSwitch from "./ThemeSwitch";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";
import CornerIcons from "@/components/ui/cornerIcons";
import CustomCtaButton from "../ui/CustomCtaButton";
import { MenuIcon } from "lucide-react";
import { LinkedInIcon } from "../icons/LinkedInIcon";

import ImagotypeLight from "@/public/IMAGOTYPE_LIGHT.png";
import ImagotypeDark from "@/public/IMAGOTYPE_DARK.png";
import GitHubIcon from "../icons/GitHubIcon";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const t = useTranslations('navigation');
    const locale = useLocale();

    const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;

    const NavLinks = () => (
        <>
            <ScrollLink to={'hero'} offset={-56} onClick={() => setIsOpen(false)} className={` text-secondary dark:text-gray-400 relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -ml-0.5">⊢</span>
                {t('home_label')}
                <span className="absolute left-6 text-gray-200 dark:text-gray-800">01</span>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -mr-1">⊣</span>
            </ScrollLink>

            <ScrollLink to={'about'} offset={-56} onClick={() => setIsOpen(false)} className={`text-secondary dark:text-gray-400 relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -ml-0.5">⊢</span>
                {t('about_label')}
                <span className="absolute left-6 text-gray-200 dark:text-gray-800">02</span>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -mr-1">⊣</span>
            </ScrollLink>

            <ScrollLink to={'projects'} offset={-56} onClick={() => setIsOpen(false)} className={`text-secondary dark:text-gray-400 relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -ml-0.5">⊢</span>
                {t('projects_label')}
                <span className="absolute left-6 text-gray-200 dark:text-gray-800">03</span>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -mr-1">⊣</span>
            </ScrollLink>

            <ScrollLink to={'certs'} offset={-56} onClick={() => setIsOpen(false)} className={`text-secondary dark:text-gray-400 relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -ml-0.5">⊢</span>
                {t('certs_label')}
                <span className="absolute left-6 text-gray-200 dark:text-gray-800">04</span>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -mr-1">⊣</span>
            </ScrollLink>

            <ScrollLink to={'skills'} offset={-56} onClick={() => setIsOpen(false)} className={`text-secondary dark:text-gray-400 relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -ml-0.5">⊢</span>
                {t('skills_label')}
                <span className="absolute left-6 text-gray-200 dark:text-gray-800">05</span>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -mr-1">⊣</span>
            </ScrollLink>

            <ScrollLink to={'contact'} offset={-56} onClick={() => setIsOpen(false)} className={`text-secondary dark:text-gray-400 relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -ml-0.5">⊢</span>
                {t('contact_label')}
                <span className="absolute left-6 text-gray-200 dark:text-gray-800">06</span>
                <span className="text-gray-300 dark:text-gray-800 text-2xl -mr-1">⊣</span>
            </ScrollLink>
        </>
    );

    // Corner icons for grid icons
    const CornerIconsMobile = () => {
        return (
            <>
                <span className="absolute -top-2.5 left-0 text-2xl text-gray-600 transition-all duration-300 group-hover:text-violet-600">
                    ⌜
                </span>
                <span className="absolute -bottom-2 left-0 text-2xl text-gray-600 transition-all duration-300 group-hover:text-violet-600">
                    ⌞
                </span>
                <span className="absolute -top-2.5 -right-0.5 text-2xl text-gray-600 transition-all duration-300 group-hover:text-violet-600">
                    ⌝
                </span>
                <span className="absolute -bottom-2 -right-0.5 text-2xl text-gray-600 transition-all duration-300 group-hover:text-violet-600">
                    ⌟
                </span>
            </>
        )
    }

    return (
        !isDesktop &&
        <div>
            <Drawer swipeDirection="right" open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger aria-label="Open navigation menu" className="relative h-12 w-12 ml-1 flex items-center justify-center">
                    <MenuIcon className="text-secondary dark:text-gray-400"/>
                    <CornerIcons />
                </DrawerTrigger>
                <DrawerContent className={'px-4 dark:bg-gray-950'}>
                    {/* Vertical pattern left */}
                    <div className="absolute left-0 top-0 h-full w-4 bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat border-r border-gray-200 dark:border-gray-800 dark:opacity-20" />
                    {/* Vertical pattern right */}
                    <div className="absolute right-0 top-0 h-full w-4 bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat border-l border-gray-200 dark:border-gray-800 dark:opacity-20" />
                    {/* Drag indicator */}
                    <div className="absolute z-20 left-0.5 top-[50%] translate-y-[-50%] w-2.5 h-18 rounded-sm bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-800 flex items-center"><span className="text-gray-300 dark:text-gray-700">|</span></div>

                    {/* <DrawerTitle className="sr-only">Mobile Navigation Menu</DrawerTitle> */}
                    <DrawerHeader className="px-0">
                        <DrawerTitle className="relative border-y-2 border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-center gap-2 mb-10">
                            <ThemeImage
                                lightSrc={ImagotypeLight}
                                darkSrc={ImagotypeDark}
                                alt="4HMartin Imagotype"
                                className="w-full"
                            />
                            <span className="absolute -top-3 left-0 text-4xl text-gray-300 dark:text-gray-600">
                                ⌜
                            </span>
                            <span className="absolute -bottom-2 left-0 text-4xl text-gray-300 dark:text-gray-600">
                                ⌞
                            </span>
                            <span className="absolute -top-3 right-0 text-4xl text-gray-300 dark:text-gray-600">
                                ⌝
                            </span>
                            <span className="absolute -bottom-2 right-0 text-4xl text-gray-300 dark:text-gray-600">
                                ⌟
                            </span>
                            <span className="absolute top-2 left-2 text-xl text-lime-500 dark:text-lime-600">
                                ⊹
                            </span>
                            <span className="absolute top-2 right-2 text-xl text-lime-500 dark:text-lime-600">
                                ⊹
                            </span>
                            <span className="absolute bottom-2 left-2 text-xl text-lime-500 dark:text-lime-600">
                                ⊹
                            </span>
                            <span className="absolute bottom-2 right-2 text-xl text-lime-500 dark:text-lime-600">
                                ⊹
                            </span>
                        </DrawerTitle>
                        {/* Links */}
                        <div className="flex flex-col justify-center items-center gap-6">
                            <NavLinks />
                        </div>
                        <div className="flex items-center justify-center mt-6">

                            <CustomCtaButton
                                variant="primary"
                                text={t('hire-me_label')}
                                icon="MoveDown"
                                target="/#contact"
                                width="w-40"
                                height="h-10"
                                setIsOpen={setIsOpen}
                            />
                        </div>
                    </DrawerHeader>

                    <DrawerFooter className="w-full grid grid-cols-2 gap-4 pb-12 place-content-center items-center">
                        {/* Theme Switch */}
                        <div className="relative group w-14 h-14 place-self-end flex items-center justify-center">
                            <ThemeSwitch />
                            <CornerIconsMobile />
                        </div>
                        {/* Locale Switcher */}
                        <div className="relative group w-14 h-14 flex items-center justify-center">
                            <LocaleSwitcher />
                            <CornerIconsMobile />
                        </div>
                        {/* Linkedin link */}
                        <div className="relative group w-14 h-14 place-self-end flex items-center justify-center">
                            <Link href={linkedinURL ?? 'https://www.linkedin.com/in/heber-martin-rodriguez/'}>
                                <LinkedInIcon className="w-6 h-6 text-secondary dark:text-gray-400 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-400"/>
                            </Link>
                            <CornerIconsMobile />
                        </div>
                        {/* GitHub link */}
                        <div className="relative group w-14 h-14 flex items-center justify-center">
                            <Link href={githubURL ?? 'https://github.com/4HMartin'}>
                                <GitHubIcon className="w-6 h-6 text-secondary dark:text-gray-400 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-400"/>
                            </Link>
                            <CornerIconsMobile />
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}