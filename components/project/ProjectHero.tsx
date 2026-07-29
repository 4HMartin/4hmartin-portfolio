"use client"

import { motion } from "motion/react";
import { fadeUp, flickerVariant } from "@/lib/animations";
import { useRef, MouseEvent } from "react";
import CustomCtaButton from "../ui/CustomCtaButton";
import Image from "next/image";
import { Locale, Project } from "@/data/types";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import CornerIcons from "../ui/cornerIcons";
import { Box } from "lucide-react";

interface ProjectHeroProps {
    project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {

    const t = useTranslations('project_detail');
    const locale = useLocale();

    // CROSSHAIR ON CURSOR
    const containerRef = useRef<HTMLDivElement>(null);
    const vLineRef = useRef<HTMLDivElement>(null);
    const hLineRef = useRef<HTMLDivElement>(null);
    const xCoordinateRef = useRef<HTMLSpanElement>(null);
    const yCoordinateRef = useRef<HTMLSpanElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (vLineRef.current) {
            vLineRef.current.style.left = `${x}px`;
        }
        if (hLineRef.current) {
            hLineRef.current.style.top = `${y}px`;
        }
        if (xCoordinateRef.current) {
            xCoordinateRef.current.textContent = `${x}`;
        }
        if (yCoordinateRef.current) {
            yCoordinateRef.current.textContent = `${y}`;
        }
    };

    const handleMouseEnter = () => {
        vLineRef.current?.style.setProperty('opacity', '1');
        hLineRef.current?.style.setProperty('opacity', '1');
    };

    const handleMouseLeave = () => {
        vLineRef.current?.style.setProperty('opacity', '0');
        hLineRef.current?.style.setProperty('opacity', '0');
    };

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
                {primary ? '◈' : '◇'}
            </motion.div>
        )
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden cursor-crosshair flex flex-col mt-14 bg-gray-950 lg:flex-row"
        >
            {/* Vertical dashed line */}
            <div ref={vLineRef}
                className="absolute z-10 top-0 bottom-0 w-px border-l border-dashed border-gray-800 pointer-events-none opacity-0 transition-opacity duration-150"
            />

            {/* Horizontal dashed line */}
            <div ref={hLineRef}
                className="absolute z-10 left-0 right-0 h-px border-t border-dashed border-gray-800 pointer-events-none opacity-0 transition-opacity duration-150"
            />

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
                        {/* <CircleDot className="w-4 h-4 text-violet-600 animate-ping" /> */}
                        <Box className="w-4 h-4 text-violet-900 animate-ping" />
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
                <article className="relative w-full text-gray-400 pt-10 px-2 md:px-14 lg:pl-14 lg:pr-4">
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
                                        ◂{t('projects_label')}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="uppercase text-xs tracking-widest text-gray-600">
                                        {project.slug}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </motion.div>

                    {/* TITLE + SHORT DESCRIPTION */}
                    <div>
                        {/* CATEGORY */}
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15, ease: "easeOut", delay: 0.2 }}
                            className={`${project.category === 'production_ready' ? 'bg-violet-600' : 
                                project.category === 'in_development' ? 'bg-lime-600' : 'bg-gray-700'
                            } relative w-fit z-20 px-2 py-0.5 uppercase text-xs text-white`}>
                            {project.category}
                        </motion.span>

                        {/* PROJECT NAME */}
                        <motion.h1 className="relative z-20 text-white text-[40px] lg:text-7xl font-bold leading-12 lg:leading-18 my-4 md:w-2/3 3xl:w-full"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        >
                            {project.name[locale as Locale]}
                        </motion.h1>

                        {/* DEVELOPMENT TYPE */}
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                            className="relative z-20 uppercase font-mono font-bold tracking-wide text-violet-600 text-base xl:text-lg mb-4 flex flex-wrap"
                        >
                            {project.developmentType}
                        </motion.h2>

                        {/* SHORT DESCRIPTION */}
                        <motion.p className="relative z-20 text-xs xl:text-base text-gray-300 mb-4 xs:max-w-87.5 3xl:max-w-full 2xl:min-h-33.5"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                        >
                            {project.shortDescription[locale as Locale]}
                        </motion.p>
                    </div>

                    {/* BUTTONS */}
                    <div className="relative z-20 pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
                            className="flex flex-col 2xl:flex-row gap-2 2xl:gap-4"
                        >
                            {/* LIVE SITE BUTTON */}
                            <CustomCtaButton
                                variant="primary"
                                text={t('live_site_label')}
                                icon="ExternalLink"
                                target={project.publicUrl!}
                                width="w-36 lg:w-40"
                                height="h-8 lg:h-12"
                            />
                            {/* GITHUB REPO */}
                            {project.publicRepo &&
                                <CustomCtaButton
                                    variant="neutral"
                                    text={t('source_code_label')}
                                    icon="ExternalLink"
                                    target={project.publicRepo}
                                    width="w-36 lg:w-40"
                                    height="h-8 lg:h-12"
                                />
                            }
                        </motion.div>
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

                    {/* DETAIL BOXES CONTAINER */}
                    <div className="flex lg:flex-col xl:flex-row lg:gap-4 items-start justify-between w-full my-4 lg:mb-4">

                        {/* LEFT BOX DETAILS */}
                        <motion.div className="relative z-20 w-fit bg-gray-950 border border-dashed border-lime-800 px-2 py-1 md:py-2 md:px-4 flex flex-col lg:flex-row xl:flex-col lg:w-full xl:w-fit lg:justify-between gap-1 xs:gap-3"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                        >
                            <CornerPlusIcon position="-top-2 -left-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-top-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -left-1.5" color="text-lime-400" />

                            {/* ORIGIN */}
                            <div className="flex flex-col items-start gap-0 overflow-hidden">
                                <p className="text-[9px] xs:text-xs xl:text-sm text-lime-500 uppercase">
                                    {t('origin_label')}
                                </p>
                                <p className="text-[8px] xs:text-xs xl:text-sm text-gray-300">
                                    {project.publicUrl}
                                </p>
                            </div>
                            {/* SECTION */}
                            <div className="overflow-hidden">
                                <p className="text-[9px] xs:text-xs xl:text-sm text-lime-500 uppercase">
                                    {t('section_label')}
                                </p>
                                <p className="text-[8px] xs:text-xs xl:text-sm text-gray-300">
                                    {project.mainGifSection}
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT BOX DETAILS */}
                        <motion.div className="relative z-20 w-fit bg-gray-950 border border-dashed border-lime-800 px-2 py-1 md:py-2 md:px-4 flex flex-col lg:flex-row xl:flex-col lg:w-full xl:w-fit lg:justify-between gap-1 xs:gap-3"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                        >
                            <CornerPlusIcon position="-top-2 -left-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-top-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -left-1.5" color="text-lime-400" />

                            {/* CATEGORY */}
                            <div className="flex flex-col">
                                <p className="text-[9px] xs:text-xs xl:text-sm text-lime-500 uppercase">
                                    {t('category_label')}
                                </p>
                                <p className="text-[8px] xs:text-xs xl:text-sm text-gray-300">
                                    {project.category.replaceAll(' ', '_')}
                                </p>
                            </div>
                            {/* DEVELOPMENT TYPE */}
                            <div className="flex flex-col">
                                <p className="text-[9px] xs:text-xs xl:text-sm text-lime-500 uppercase">
                                    {t('development_label')}
                                </p>
                                <p className="text-[8px] xs:text-xs xl:text-sm text-gray-300">
                                    {project.developmentType.replaceAll(' ', '_')}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image container */}
                    <motion.div className="relative w-full group p-2"
                        initial={{ opacity: 0, y: 12, x: -12 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                    >
                        {/* Main project gif */}
                        <Image
                            src={project.mainGif}
                            alt="Heber Martin Rodriguez - Project gif"
                            width={700}
                            height={400}
                            priority={true}
                            unoptimized={true}
                            quality={100}
                            className="relative z-20"
                        />

                        <CornerIcons />
                    </motion.div>

                    {/* CROSSHAIR CURSOR COORDINATES */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.6}
                        className="absolute z-20 hidden xl:flex flex-col items-start bottom-6 right-6 min-w-24 py-2 px-4 bg-gray-950 border border-dashed border-lime-800 text-lime-500 text-base tracking-wider"
                    >
                        <p className="text-sm tracking-widest">X_<span ref={xCoordinateRef} className="text-gray-300 tracking-widest">0</span></p>
                        <p className="text-sm tracking-widest">Y_<span ref={yCoordinateRef} className="text-gray-300 tracking-widest">0</span></p>

                        <CornerPlusIcon position="-top-2 -left-1.5" color="text-lime-500" />
                        <CornerPlusIcon position="-top-2 -right-1.5" color="text-lime-500" />
                        <CornerPlusIcon position="-bottom-2 -right-1.5" color="text-lime-500" />
                        <CornerPlusIcon position="-bottom-2 -left-1.5" color="text-lime-500" />
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
                        {/* <CircleDot className="w-4 h-4 text-violet-600 animate-ping" /> */}
                        <Box className="w-4 h-4 text-violet-900 animate-ping" />
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
    )
}