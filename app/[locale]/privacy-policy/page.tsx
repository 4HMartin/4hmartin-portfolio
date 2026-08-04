"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { flickerVariant, fadeUp } from "@/lib/animations";
import { CircleDot } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import IMAGOTYPE_WHITE_LINES from "@/public/IMAGOTYPE_WHITE_LINES.webp";
import CornerIcons from "@/components/ui/cornerIcons";
import SectionHeader from "@/components/layout/SectionHeader";

export default function PrivacyPolicy() {

    const t = useTranslations('privacy_policy');

    // CORNER PLUS ICON COMPONENT
    const CornerPlusIcon = ({ position, color }: { position: string, color: string }) => {
        return (
            // animate-ping ?
            <motion.span className={`absolute ${position} ${color} text-xs bg-gray-950 w-3 flex items-center justify-center rounded-full cursor-default`}
                variants={flickerVariant} initial="hidden" animate="visible"
            >
                ∷
            </motion.span>
        )
    }

    // ISOMETRIC CUBES
    const IsometricCube = ({
        primary, styles, animationDelay, opacity, animationDirection
    }: {
        primary: boolean, styles: string, animationDelay: number, opacity: number, animationDirection: string
    }) => {

        const yAxis = animationDirection === 'down' ? -12 : 12;
        const xAxis = animationDirection === 'down' ? 12 : -12;

        return (
            <motion.div className={`${primary ? 'border-lime-500 text-lime-500' : 'border-dashed border-gray-500 text-gray-500'} relative rounded-full border bg-gray-950 w-10 h-10 flex items-center justify-center -rotate-45 skew-12 cursor-default ${styles}`}
                initial={{
                    opacity: 0, y: yAxis, x: xAxis, skewY: 18, skewX: 18
                }}
                animate={{ opacity: opacity, y: 0, x: 0, skewY: 18, skewX: 18 }}
                transition={{ ease: 'easeOut', duration: 0.4, delay: animationDelay }}
            >
                <CornerPlusIcon position="-top-2.5 -left-1.5" color={`${primary ? 'text-lime-400' : 'text-lime-400 '}`} />
                <CornerPlusIcon position="-top-2.5 -right-1.5" color={`${primary ? 'text-lime-400' : 'text-lime-400 '}`} />
                <CornerPlusIcon position="-bottom-1.75 -left-1.5" color={`${primary ? 'text-lime-400' : 'text-lime-400 '}`} />
                <CornerPlusIcon position="-bottom-1.75 -right-1.5" color={`${primary ? 'text-lime-400' : 'text-lime-400 '}`} />
                {primary ? '○' : '◌'}
            </motion.div>
        )
    }

    return (
        <div id="privacy-policy" className="flex flex-col">

            {/** HERO SECTION */}
            <section className="relative overflow-hidden flex flex-col mt-14 bg-gray-950 lg:flex-row">
                {/* LEFT CONTENT CONTAINER */}
                <div className="relative flex gap-0 w-full border-b border-gray-800 2xl:border-0">

                    {/* LEFT VERTICAL LINE TEXTURE */}
                    <motion.div className='z-10 md:hidden top-0 min-h-full w-10 border-x border-gray-800 bg-[url("/patterns/texture_gray_800_6px.svg")] bg-repeat'
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    />

                    {/* VERTICAL LEFT TEXT DECORATION */}
                    <motion.div className="hidden md:flex flex-col items-center justify-between z-10 bg-gray-950 border-r border-gray-800 md:border-0 2xl:border-r 2xl:border-gray-800 3xl:dark:border-b 3xl:dark:border-dashed 3xl:dark:border-gray-800 w-7.5 xl:w-11 2xl:w-12.75 min-h-full py-2"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                    >
                        <motion.span className="text-violet-500" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                        <p className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-gray-800">
                            2026 - FULL-STACK DEVELOPER
                        </p>
                        <motion.span className="text-violet-500" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                    </motion.div>

                    {/* VERTICAL LEFT CUBES DECORATION - VISIBLE >2XL */}
                    <div className="hidden 2xl:flex 2xl:flex-col 2xl:w-35.5 2xl:items-center 2xl:justify-between">

                        {/* CUBES LINES TOP ◌ ○ */}
                        <div className="group w-full h-[40%] flex flex-col items-center pt-6 transition-all duration-150 hover:scale-95">
                            <IsometricCube primary={true} styles="z-40 transition-all duration-150" animationDelay={0.4} opacity={1} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-30 -translate-y-3 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.6} opacity={0.8} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-20 -translate-y-5 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.8} opacity={0.6} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-10 -translate-y-7 transition-all duration-150 group-hover:translate-y-0" animationDelay={1} opacity={0.4} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-0 -translate-y-9 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.2} opacity={0.2} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-0 -translate-y-11 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.4} opacity={0.1} animationDirection="down" />
                        </div>

                        {/* CUBE ISOMETRIC ICON */}
                        <motion.div className="w-full h-[20%] flex items-center justify-center"
                            variants={flickerVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <CircleDot className="w-4 h-4 text-violet-600 animate-ping" />
                            {/* <Box className="w-4 h-4 text-violet-900 animate-ping" /> */}
                            {/* <LocateFixed className="w-4 h-4 text-violet-600 animate-ping" /> */}
                        </motion.div>

                        {/* CUBES LINES BOTTOM */}
                        <div className="group w-full h-[40%] flex flex-col items-center pb-6 transition-all duration-150 hover:scale-95">
                            <IsometricCube primary={false} styles="z-0 translate-y-11 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.4} opacity={0.1} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-0 translate-y-9 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.2} opacity={0.2} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-10 translate-y-7 transition-all duration-150 group-hover:translate-y-0" animationDelay={1} opacity={0.4} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-20 translate-y-5 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.8} opacity={0.6} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-30 translate-y-3 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.6} opacity={0.8} animationDirection="up" />
                            <IsometricCube primary={true} styles="z-40 transition-all duration-150" animationDelay={0.4} opacity={1} animationDirection="up" />
                        </div>
                    </div>

                    {/* LEFT CONTENT */}
                    <article className="relative w-full text-gray-400 pt-10 px-2 md:px-14 lg:pb-8 lg:pl-14 lg:pr-4">
                        <motion.span className="md:hidden text-violet-500 absolute top-2 right-2" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                        <motion.span className="md:hidden text-violet-500 absolute bottom-2 right-2" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>

                        {/* BREADCRUMB CONTAINER */}
                        <motion.div className="text-gray-800 text-xs mb-4 2xl:mb-12"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* BREADCRUMB */}
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink render={
                                            <Link href={'/'} />
                                        } className="z-20 uppercase text-xs tracking-widest text-lime-500 hover:text-lime-400">
                                            ◂{t('home_label')}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink render={
                                            <Link href={'/#projects'} />
                                        } className="z-20 uppercase text-xs tracking-widest text-lime-500 hover:text-lime-400">
                                            ◂{t('legals_label')}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="uppercase text-xs tracking-widest text-gray-600">
                                            {t('privacy_policy_label').replace(' ', '_')}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </motion.div>

                        {/* TITLE */}
                        <div>
                            <motion.h1 className="relative z-20 text-white uppercase text-[40px] lg:text-7xl font-bold leading-12 lg:leading-18 my-4 md:w-2/3 3xl:w-full"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                            >
                                {t('privacy_policy_label')}
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                                className="relative z-20 uppercase font-mono font-bold tracking-wide text-violet-600 text-base xl:text-lg mb-4 flex flex-wrap"
                            >
                                {t('index_label')}
                            </motion.h2>

                            {/* INDEX LIST */}
                            <motion.ul className="relative z-20 flex flex-col gap-2"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                            >
                                {/* INTRO */}
                                <li>
                                    <ScrollLink
                                        to="intro"
                                        offset={-56}
                                        aria-label="4HMartin Portfolio - Intro"
                                        className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('intro_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* DATA CONTROLLER IDENTIFICATION */}
                                <li>
                                    <ScrollLink to="data-controller" offset={-56} aria-label="4HMartin Portfolio - data controller identification" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('data_controller_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* WHAT PERSONAL DATA IS COLLECTED? */}
                                <li>
                                    <ScrollLink to="data-collected" offset={-56} aria-label="4HMartin Portfolio - what personal data is collected" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('data_collected_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* PURPOSE OF DATA PROCESSING */}
                                <li>
                                    <ScrollLink to="data-processing" offset={-56} aria-label="4HMartin Portfolio - purpose of data processing" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('data_processing_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* LEGAL BASIS FOR PROCESSING */}
                                <li>
                                    <ScrollLink to="basis-processing" offset={-56} aria-label="4HMartin Portfolio - legal basis for processing" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('basis_processing_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* DATA RETENTION PERIOD */}
                                <li>
                                    <ScrollLink to="data-retention" offset={-56} aria-label="4HMartin Portfolio - data retention period" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('data_retention_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* DATA RECIPIENTS AND THIRD PARTY DISCLOUSURES */}
                                <li>
                                    <ScrollLink to="data-recipients" offset={-56} aria-label="4HMartin Portfolio - data recipients" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('data_recipients_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* DATA SECURITY MEASURES */}
                                <li>
                                    <ScrollLink to="data-security-measures" offset={-56} aria-label="4HMartin Portfolio - data security measures" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('data_security_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* YOUR RIGHTS AS A DATA SUBJECT */}
                                <li>
                                    <ScrollLink to="rights" offset={-56} aria-label="4HMartin Portfolio - your rights as a data subject" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('rights_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* COOKIES AND ANALYTICS */}
                                <li>
                                    <ScrollLink to="cookies" offset={-56} aria-label="4HMartin Portfolio - cookies and analytics" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('cookies_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                                {/* UPDATES TO THIS PRIVACY POLICY */}
                                <li>
                                    <ScrollLink to="updates" offset={-56} aria-label="4HMartin Portfolio - updates to this privacy policy" className="w-full uppercase text-xs 2xl:text-sm text-gray-300 tracking-widest cursor-pointer transition-colors duration-150 hover:text-violet-500 flex items-center justify-between">
                                        <p>⊢ {t('updates_label')}</p>
                                        <span>⊣</span>
                                    </ScrollLink>
                                </li>
                            </motion.ul>
                        </div>
                    </article>

                    {/* VERTICAL RIGHT LINE DECORATION */}
                    <motion.div className="hidden md:flex lg:hidden bg-gray-950 w-7.5 min-h-full flex-col items-center justify-between py-2"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.span className="text-violet-500" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                        <p className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-gray-800">
                            PORTFOLIO WEB
                        </p>
                        <motion.span className="text-violet-500" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                    </motion.div>
                </div>

                {/* RIGHT CONTENT */}
                <motion.div className="relative w-full lg:border-l lg:border-dashed lg:border-gray-800 lg:flex lg:justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                >

                    {/* Horizontal pattern separator */}
                    <div className="w-full h-7.5 bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat opacity-20 lg:hidden" />

                    <article className="relative w-full px-4 md:px-22 lg:px-4 2xl:px-6 2xl:pt-4 lg:mr-10 pb-6 overflow-hidden flex flex-col items-center bg-[url('/patterns/bg_image_pattern_dots.png')] bg-repeat bg-contain border-t border-gray-800 2xl:border-0">

                        {/* IMAGE CONTAINER */}
                        <motion.div className="relative w-full group p-2"
                            initial={{ opacity: 0, y: 12, x: -12 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                        >
                            {/* Main project gif */}
                            <Image
                                src={IMAGOTYPE_WHITE_LINES}
                                alt="Heber Martin Rodriguez - Project gif"
                                width={1300}
                                height={750}
                                priority={true}
                                quality={100}
                                className="relative z-20"
                            />

                            <CornerIcons />
                        </motion.div>
                    </article>

                    {/* VERTICAL RIGHT LINES DECORATION - VISIBLE >2XL */}
                    <div className="hidden 2xl:flex 2xl:flex-col 2xl:w-37 2xl:items-center">
                        {/* CUBES LINES TOP ◌ ○ */}
                        <div className="group w-full h-[40%] flex flex-col items-center pt-6 transition-all duration-150 hover:scale-95">
                            <IsometricCube primary={true} styles="z-40 transition-all duration-150" animationDelay={0.4} opacity={1} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-30 -translate-y-3 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.6} opacity={0.8} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-20 -translate-y-5 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.8} opacity={0.6} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-10 -translate-y-7 transition-all duration-150 group-hover:translate-y-0" animationDelay={1} opacity={0.4} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-0 -translate-y-9 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.2} opacity={0.2} animationDirection="down" />
                            <IsometricCube primary={false} styles="z-0 -translate-y-11 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.4} opacity={0.1} animationDirection="down" />
                        </div>

                        {/* CUBE ISOMETRIC ICON */}
                        <motion.div className="w-full h-[20%] flex items-center justify-center"
                            variants={flickerVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <CircleDot className="w-4 h-4 text-violet-600 animate-ping" />
                            {/* <Box className="w-4 h-4 text-violet-900 animate-ping" /> */}
                            {/* <LocateFixed className="w-4 h-4 text-violet-600 animate-ping" /> */}
                        </motion.div>

                        {/* CUBES LINES BOTTOM */}
                        <div className="group w-full h-[40%] flex flex-col items-center pb-6 transition-all duration-150 hover:scale-95">
                            <IsometricCube primary={false} styles="z-0 translate-y-11 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.4} opacity={0.1} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-0 translate-y-9 transition-all duration-150 group-hover:translate-y-0" animationDelay={1.2} opacity={0.2} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-10 translate-y-7 transition-all duration-150 group-hover:translate-y-0" animationDelay={1} opacity={0.4} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-20 translate-y-5 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.8} opacity={0.6} animationDirection="up" />
                            <IsometricCube primary={false} styles="z-30 translate-y-3 transition-all duration-150 group-hover:translate-y-0" animationDelay={0.6} opacity={0.8} animationDirection="up" />
                            <IsometricCube primary={true} styles="z-40 transition-all duration-150" animationDelay={0.4} opacity={1} animationDirection="up" />
                        </div>
                    </div>

                    {/* VERTICAL RIGHT TEXT DECORATION */}
                    <motion.div className="hidden lg:flex z-10 bg-gray-950 w-7.5 xl:w-11 2xl:w-13.5 min-h-full flex-col items-center justify-between py-2 2xl:border-l 2xl:border-gray-800 3xl:dark:border-b 3xl:dark:border-dashed 3xl:dark:border-gray-800"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 0.6 }}
                    >
                        <motion.span className="text-violet-500" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                        <p className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-gray-800">
                            PORTFOLIO WEB
                        </p>
                        <motion.span className="text-violet-500" variants={flickerVariant} initial="hidden" animate="visible">
                            ⊹
                        </motion.span>
                    </motion.div>
                </motion.div>
            </section>

            {/** INTRODUCTION */}
            <section id="intro">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="intro_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('intro_p_1')}</p>
                    <p className="xl:mb-4">{t('intro_p_2')}</p>
                    <p className="xl:mb-4">{t('intro_p_3')}</p>
                </motion.article>
            </section>

            {/** DATA CONTROLLER */}
            <section id="data-controller">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="data_controller_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('data_controller_p_1')}</p>
                    <p><strong className="capitalize">· {t('data_controller_p_key_1')}</strong> {t('data_controller_p_value_1')}</p>
                    <p><strong className="capitalize">· {t('data_controller_p_key_2')}</strong> {t('data_controller_p_value_2')}</p>
                    <p><strong className="capitalize">· {t('data_controller_p_key_3')}</strong> {t('data_controller_p_value_3')}</p>
                    <p><strong className="capitalize">· {t('data_controller_p_key_4')}</strong> {t('data_controller_p_value_4')}</p>
                    <p><strong className="capitalize">· {t('data_controller_p_key_5')}</strong> {t('data_controller_p_value_5')}</p>
                    <p className="xl:my-4">{t('data_controller_p_2')}</p>
                </motion.article>
            </section>

            {/** WHAT PERSONAL DATA IS COLLECTED? */}
            <section id="data-collected">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="data_collected_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('data_collected_p_1')}</p>
                    <p className="xl:mb-4 capitalize"><strong>{t('data_collected_sub_1')}</strong></p>
                    <p className="xl:mb-4">{t('data_collected_p_2')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_1')}</strong> {t('data_collected_p_value_1')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_2')}</strong> {t('data_collected_p_value_2')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_3')}</strong> {t('data_collected_p_value_3')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_4')}</strong> {t('data_collected_p_value_4')}</p>
                    <p className="xl:my-4 capitalize"><strong>{t('data_collected_sub_2')}</strong></p>
                    <p className="xl:mb-4">{t('data_collected_p_3')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_5')}</strong> {t('data_collected_p_value_5')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_6')}</strong> {t('data_collected_p_value_6')}</p>
                    <p><strong className="capitalize">· {t('data_collected_p_key_7')}</strong> {t('data_collected_p_value_7')}</p>
                    <p className="xl:mb-4">{t('data_collected_p_4')}</p>
                </motion.article>
            </section>

            {/** PURPOSE OF DATA PROCESSING */}
            <section id="data-processing">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="content_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('content_p_1')}</p>
                    <p className="xl:mb-4"><strong>{t('content_sub_1')}</strong></p>
                    <p className="xl:mb-4">{t('content_p_2')}</p>
                    <p><strong className="capitalize">· {t('content_p_key_1')}</strong> {t('content_p_value_1')}</p>
                    <p><strong className="capitalize">· {t('content_p_key_2')}</strong> {t('content_p_value_2')}</p>
                    <p><strong className="capitalize">· {t('content_p_key_3')}</strong> {t('content_p_value_3')}</p>
                    <p className="xl:my-4"><strong>{t('content_sub_2')}</strong></p>
                    <p className="xl:mb-4">{t('content_p_3')}</p>
                    <p>· {t('content_l_1')}</p>
                    <p>· {t('content_l_2')}</p>
                </motion.article>
            </section>

            {/** LEGAL BASIS FOR PROCESSING */}
            <section id="basis-processing">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="correct_use_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('correct_p_1')}</p>
                    <p className="xl:mb-4"><strong>{t('correct_sub_1')}</strong></p>
                    <p className="xl:mb-4">{t('correct_p_2')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_1')}</strong> {t('correct_p_value_1')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_2')}</strong> {t('correct_p_value_2')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_3')}</strong> {t('correct_p_value_3')}</p>
                    <p className="xl:my-4"><strong>{t('correct_sub_2')}</strong></p>
                    <p className="xl:mb-4">{t('correct_p_3')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_4')}</strong> {t('correct_p_value_4')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_5')}</strong> {t('correct_p_value_5')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_6')}</strong> {t('correct_p_value_6')}</p>
                    <p><strong className="capitalize">· {t('correct_p_key_7')}</strong> {t('correct_p_value_7')}</p>
                    <p className="xl:my-4">{t('correct_p_4')}</p>
                </motion.article>
            </section>

            {/** DATA RETENTION PERIOD */}
            <section id="data-retention">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="applicable_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('applicable_p_1')}</p>
                    <p className="xl:mb-4">{t('applicable_p_2')}</p>
                    <p className="xl:mb-4">{t('applicable_p_3')}</p>
                </motion.article>
            </section>

            {/** DATA RECIPIENTS AND THIRD PARTY DISCLOUSURES */}
            <section id="data-recipients">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="applicable_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('applicable_p_1')}</p>
                    <p className="xl:mb-4">{t('applicable_p_2')}</p>
                    <p className="xl:mb-4">{t('applicable_p_3')}</p>
                </motion.article>
            </section>

            {/** DATA SECURITY MEASURES */}
            <section id="data-security-measures">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="applicable_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('applicable_p_1')}</p>
                    <p className="xl:mb-4">{t('applicable_p_2')}</p>
                    <p className="xl:mb-4">{t('applicable_p_3')}</p>
                </motion.article>
            </section>

            {/** YOUR RIGHTS AS A DATA SUBJECT */}
            <section id="rights">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="applicable_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('applicable_p_1')}</p>
                    <p className="xl:mb-4">{t('applicable_p_2')}</p>
                    <p className="xl:mb-4">{t('applicable_p_3')}</p>
                </motion.article>
            </section>

            {/** COOKIES AND ANALYTICS */}
            <section id="cookies">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="applicable_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('applicable_p_1')}</p>
                    <p className="xl:mb-4">{t('applicable_p_2')}</p>
                    <p className="xl:mb-4">{t('applicable_p_3')}</p>
                </motion.article>
            </section>

            {/** UPDATES TO THIS PRIVACY POLICY */}
            <section id="updates">
                <SectionHeader parentTranslations="privacy_policy" titleLabel="applicable_label" />
                <motion.article
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-4 xl:p-8 2xl:p-4 md:mx-18 xl:mx-20 2xl:mx-48 flex flex-col gap-2 text-xs xl:text-sm text-gray-700 dark:text-gray-300"
                >
                    <p className="xl:mb-4">{t('applicable_p_1')}</p>
                    <p className="xl:mb-4">{t('applicable_p_2')}</p>
                    <p className="xl:mb-4">{t('applicable_p_3')}</p>
                </motion.article>
            </section>
        </div>
    )
}