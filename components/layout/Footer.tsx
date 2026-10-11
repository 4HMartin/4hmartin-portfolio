"use client";
import Image from "next/image";
import IMAGOTYPE_DARK from "@/public/IMAGOTYPE_DARK.png";
import Link from "next/link";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import CornerIcons from "../ui/cornerIcons";
import GitHubIcon from "../icons/GitHubIcon";
import { Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslations } from "next-intl";

export default function Footer() {

    const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
    const DEV_EMAIL = process.env.NEXT_PUBLIC_DEV_EMAIL;

    const t = useTranslations('footer')

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gray-950 dark:border-t dark:border-dashed dark:border-gray-800 text-gray-400 flex flex-col 2xl:flex-row mb-4 md:px-22 xl:px-26 2xl:px-52">

            {/* CORNER ICONS DECORATION */}
            <span className="absolute top-4 left-4 md:left-2 xl:left-4 text-violet-500">⊹</span>
            <span className="absolute bottom-4 left-4 md:left-2 xl:left-4 text-violet-500">⊹</span>
            <span className="absolute top-4 right-4 md:right-2 xl:right-4 text-violet-500">⊹</span>
            <span className="absolute bottom-4 right-4 md:right-2 xl:right-4 text-violet-500">⊹</span>

            {/* <span className="absolute bottom-[50%] translate-y-[50%] left-21 text-gray-800 text-4xl">
                <CircleDot />
            </span>
            <span className="absolute bottom-[50%] translate-y-[50%] right-21 text-gray-800 text-4xl">
                <CircleDot />
            </span> */}

            {/* IMAGOTYPE + SOCIALS */}
            <section className="flex flex-col items-center 2xl:items-start 2xl:pb-4 2xl:border-r 2xl:border-dashed 2xl:border-gray-800">
                <Image
                    src={IMAGOTYPE_DARK}
                    alt="Heber Martin Rodriguez - Imagotype"
                    width={358}
                    height={200}
                />

                <h4 className="text-gray-400 text-xs mb-4">
                    &copy; {currentYear} HEBER MARTIN RODRIGUEZ
                </h4>

                <article className="flex items-center gap-4">
                    {/* LINKEDIN */}
                    <div className="relative group w-8 xs:w-10 lg:w-12 h-8 xs:h-10 lg:h-12 place-self-end md:place-self-auto flex items-center justify-center hover:cursor-pointer 2xl:mr-2">
                        <Link href={LINKEDIN_URL ?? 'https://www.linkedin.com/in/heber-martin-rodriguez/'} target="_blank" className="z-10">
                            <LinkedInIcon className="w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 text-gray-400 transition-all duration-150 group-hover:text-violet-500" />
                        </Link>
                        <CornerIcons />
                    </div>
                    {/* GITHUB */}
                    <div className="relative group w-8 xs:w-10 lg:w-12 h-8 xs:h-10 lg:h-12 flex items-center justify-center hover:cursor-pointer">
                        <Link href={GITHUB_URL ?? 'https://github.com/4HMartin'} target="_blank" className="z-10">
                            <GitHubIcon className="w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 text-gray-400 transition-all duration-150 group-hover:text-violet-500" />
                        </Link>
                        <CornerIcons />
                    </div>
                    {/* EMAIL */}
                    <div className="relative group w-8 xs:w-10 lg:w-12 h-8 xs:h-10 lg:h-12 flex items-center justify-center hover:cursor-pointer">
                        <Link href={`mailto:${DEV_EMAIL}`}>
                            <Mail className="w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 text-gray-400 transition-all duration-150 group-hover:text-violet-500" />
                        </Link>
                        <CornerIcons />
                    </div>
                </article>
            </section>

            {/* GRID CONTAINER */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 2xl:gap-y-0 px-4 py-10 2xl:py-0 md:px-0 2xl:w-full">

                {/* NAVIGATION */}
                <article className="flex flex-col items-start gap-4 2xl:pl-4 2xl:pt-8 2xl:border-r 2xl:border-dashed 2xl:border-gray-800">
                    <h5 className="uppercase text-xs text-gray-400 font-bold tracking-widest">
                        {t('navigation_label')}
                    </h5>
                    <ScrollLink to="hero" offset={-56} aria-label="4HMartin Portfolio - Home" className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('home_label')}
                    </ScrollLink>
                    <ScrollLink to="about" offset={-56} aria-label="4HMartin Portfolio - About" className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('about_label')}
                    </ScrollLink>
                    <ScrollLink to="projects" offset={-56} aria-label="4HMartin Portfolio - Projects" className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('projects_label')}
                    </ScrollLink>
                    <ScrollLink to="certs" offset={-56} aria-label="4HMartin Portfolio - Certificates" className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('certs_label')}
                    </ScrollLink>
                    <ScrollLink to="skills" offset={-56} aria-label="4HMartin Portfolio - Skills" className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('skills_label')}
                    </ScrollLink>
                    <ScrollLink to="contact" offset={-56} aria-label="4HMartin Portfolio - Contact" className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('contact_label')}
                    </ScrollLink>
                </article>

                {/* BUILT WITH */}
                <article className="flex flex-col items-start gap-4 2xl:pl-4 2xl:pt-8 2xl:border-r 2xl:border-dashed 2xl:border-gray-800">
                    <h5 className="uppercase text-xs text-gray-400 font-bold tracking-widest">
                        {t('built_label')}
                    </h5>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        Next.js
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        React
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        TypeScript
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        Tailwind CSS
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        Framer Motion
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        React Hook Form
                    </p>
                </article>

                {/* SYSTEM STATUS */}
                <article className="flex flex-col items-start gap-4 2xl:pl-4 2xl:pt-8 2xl:border-r 2xl:border-dashed 2xl:border-gray-800">
                    <h5 className="uppercase text-xs text-gray-400 font-bold tracking-widest">
                        {t('system_label')}
                    </h5>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        {t('portfolio_label')} <span className="uppercase text-[8px] text-violet-500">Online</span>
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        {t('open_work_label')} <span className="uppercase text-[8px] text-violet-500">True</span>
                    </p>
                    <p className="uppercase text-xs text-gray-500 tracking-widest">
                        {t('response_time_label')} <span className="uppercase text-[8px] text-violet-500">{'<24H'}</span>
                    </p>
                    <p className="uppercase text-[8px] text-lime-500 tracking-widest">
                        {t('system_op_label')}
                    </p>
                </article>

                {/* LEGALS */}
                <article className="flex flex-col items-start gap-4 2xl:pl-4 2xl:pt-8">
                    <h5 className="uppercase text-xs text-gray-400 font-bold tracking-widest">
                        {t('legals_label')}
                    </h5>
                    <Link href={'/legal-notice'} className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('legal_notice_label')}
                    </Link>
                    <Link href={'/privacy-policy'} className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('privacy_label')}
                    </Link>
                    <Link href={'/cookie-policy'} className="uppercase text-xs text-gray-500 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500">
                        {t('cookie_label')}
                    </Link>
                </article>
            </section>
        </footer>
    )
}