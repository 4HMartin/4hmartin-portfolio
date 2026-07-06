"use client"
import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ThemeImage } from "../ui/ThemeImage";
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";
import CornerIcons from "@/components/ui/cornerIcons";
import { Mail, MenuIcon, Phone } from "lucide-react";

import ImagotypeLight from "@/public/IMAGOTYPE_LIGHT.png";
import ImagotypeDark from "@/public/IMAGOTYPE_DARK.png";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const t = useTranslations('navigation');
    const locale = useLocale();

    const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;

    const NavLinks = () => (
        <>
            <Link href={locale === 'es' ? '/es#hero' : '/#hero'} onClick={() => setIsOpen(false)} className={` text-secondary relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 text-2xl -ml-0.5">⊢</span>
                {t('home_label')}
                <span className="absolute left-6 text-gray-200">01</span>
                <span className="text-gray-300 text-2xl -mr-1">⊣</span>
            </Link>

            <Link href={locale === 'es' ? '/es#about' : '/#about'} onClick={() => setIsOpen(false)} className={`text-secondary relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 text-2xl -ml-0.5">⊢</span>
                {t('about_label')}
                <span className="absolute left-6 text-gray-200">02</span>
                <span className="text-gray-300 text-2xl -mr-1">⊣</span>
            </Link>

            <Link href={locale === 'es' ? '/es#projects' : '/#projects'} onClick={() => setIsOpen(false)} className={`text-secondary relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 text-2xl -ml-0.5">⊢</span>
                {t('projects_label')}
                <span className="absolute left-6 text-gray-200">03</span>
                <span className="text-gray-300 text-2xl -mr-1">⊣</span>
            </Link>

            <Link href={locale === 'es' ? '/es#certs' : '/#certs'} onClick={() => setIsOpen(false)} className={`text-secondary relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 text-2xl -ml-0.5">⊢</span>
                {t('certs_label')}
                <span className="absolute left-6 text-gray-200">04</span>
                <span className="text-gray-300 text-2xl -mr-1">⊣</span>
            </Link>

            <Link href={locale === 'es' ? '/es#skills' : '/#skills'} onClick={() => setIsOpen(false)} className={`text-secondary relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 text-2xl -ml-0.5">⊢</span>
                {t('skills_label')}
                <span className="absolute left-6 text-gray-200">05</span>
                <span className="text-gray-300 text-2xl -mr-1">⊣</span>
            </Link>

            <Link href={locale === 'es' ? '/es#contact' : '/#contact'} onClick={() => setIsOpen(false)} className={`text-secondary relative flex items-center justify-between uppercase tracking-widest text-sm font-medium active:text-primary w-full text-center`}>
                <span className="text-gray-300 text-2xl -ml-0.5">⊢</span>
                {t('contact_label')}
                <span className="absolute left-6 text-gray-200">06</span>
                <span className="text-gray-300 text-2xl -mr-1">⊣</span>
            </Link>
        </>
    );

    return (
        !isDesktop &&
        <div>
            <Drawer swipeDirection="right" open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger aria-label="Open navigation menu" className="relative h-14 w-16 ml-1 mt-1.5">
                    <MenuIcon className="ml-4 mt-2" />
                    <CornerIcons />
                </DrawerTrigger>
                <DrawerContent className={'px-4'}>
                    {/* Vertical pattern left */}
                    <div className="absolute left-0 top-0 h-full w-4 bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat border-r border-gray-200"></div>
                    {/* Vertical pattern right */}
                    <div className="absolute right-0 top-0 h-full w-4 bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat border-l border-gray-200"></div>

                    {/* <DrawerTitle className="sr-only">Mobile Navigation Menu</DrawerTitle> */}
                    <DrawerHeader className="px-0">
                        <DrawerTitle className="relative border-y-2 border-dashed border-gray-200 flex items-center justify-center gap-2 mb-10">
                            <ThemeImage
                                lightSrc={ImagotypeLight}
                                darkSrc={ImagotypeDark}
                                alt="4HMartin Imagotype"
                                className="w-full"
                            />
                            <span className="absolute -top-3 left-0 text-4xl text-gray-300">⌜</span>
                            <span className="absolute -bottom-2 left-0 text-4xl text-gray-300">⌞</span>
                            <span className="absolute -top-3 right-0 text-4xl text-gray-300">⌝</span>
                            <span className="absolute -bottom-2 right-0 text-4xl text-gray-300">⌟</span>
                            <span className="absolute top-2 left-2 text-xl text-gray-200">⊹</span>
                            <span className="absolute top-2 right-2 text-xl text-gray-200">⊹</span>
                            <span className="absolute bottom-2 left-2 text-xl text-gray-200">⊹</span>
                            <span className="absolute bottom-2 right-2 text-xl text-gray-200">⊹</span>
                        </DrawerTitle>
                        {/* Links */}
                        <div className="flex flex-col justify-center items-center gap-6">
                            <NavLinks />
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <Button
                                variant="default"
                                className="px-6 border bg-accent"
                            >
                                <Link href={'#reservar'} onClick={() => setIsOpen(false)} className="uppercase text-xs tracking-widest">
                                    Reservar ahora
                                </Link>
                            </Button>
                        </div>
                        <div className="flex flex-col w-full items-center mt-16 gap-4">
                            <div className="flex hover:text-secondary transition-all w-full ml-4">
                                <LocaleSwitcher />
                            </div>
                            {/* Email link */}
                            {/* <Link href={`mailto:${contactEmail}`} onClick={() => setIsOpen(false)} className="flex flex-col items-center gap-2 text-secondary text-sm  font-light group hover:cursor-pointer">
                                <Mail className="w-4 text-secondary pb-0.5 transition-all group-hover:text-secondary" />
                                {contactEmail}
                            </Link> */}
                            {/* Phone link */}
                            {/* <Link href={`tel:${contactPhone}`} onClick={() => setIsOpen(false)} className="flex flex-col items-center gap-2 text-secondary text-sm font-light group hover:cursor-pointer">
                                <Phone className="w-3.5 text-secondary pb-0.5 transition-all group-hover:text-secondary" />
                                {contactPhone}
                            </Link> */}
                        </div>
                    </DrawerHeader>
                    <DrawerFooter className="w-full flex items-center mb-4">
                        {/* Social links */}
                        <div className="flex gap-3">
                            {/* Instagram */}
                            {/* <Link href={`${instagramLink}`} onClick={() => setIsOpen(false)} aria-label="Visit our Instagram" className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link> */}
                            {/* Facebook */}
                            {/* <Link href={`${facebookLink}`} onClick={() => setIsOpen(false)} aria-label="Visit our Facebook" className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center transition-all duration-300 text-decoration-none group hover:border-secondary hover:bg-secondary/10 hover:text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link> */}
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}