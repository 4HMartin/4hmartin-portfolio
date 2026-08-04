"use client"
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useRef, MouseEvent } from 'react';
import { fadeUp, flickerVariant } from "@/lib/animations";
import CustomCtaButton from "../ui/CustomCtaButton";
import Link from "next/link";
import Image from "next/image";
import { CircleDot } from "lucide-react";

import ProfileBadge from "@/public/images/PROFILE_BADGE_V6.webp";
import M85mm from "@/public/images/85mm.webp";
import M54mm from "@/public/images/54mm.webp";
import M5mm from "@/public/images/5mm.webp";
import ScrambleText from "../ui/ScrambleText";

export default function Hero() {

    const t = useTranslations('hero_section');

    const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;

    // Crosshair on cursor
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
        if (xCoordinateRef.current){
            xCoordinateRef.current.textContent = `${x}`;
        }
        if (yCoordinateRef.current){
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

    const CornerPlusIcon = ({ position, color }: { position: string, color: string }) => {
        return (
            // animate-ping ?
            <motion.span className={`absolute ${position} ${color} text-xs bg-gray-950 w-3 flex items-center justify-center rounded-full cursor-default`}
                variants={flickerVariant} initial="hidden" animate="visible"
            >
                ⊹
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
            <motion.div className={`${primary ? 'border-lime-500 text-lime-500' : 'border-dashed border-gray-500 text-gray-500'} relative border bg-gray-950 w-10 h-10 flex items-center justify-center -rotate-45 skew-12 cursor-default ${styles}`}
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
        <section
            id="hero"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden cursor-crosshair flex flex-col mt-14 bg-gray-950 lg:flex-row"
        >

            {/* Vertical dashed line */}
            <div
                ref={vLineRef}
                className="absolute z-10 top-0 bottom-0 w-px border-l border-dashed border-gray-800 pointer-events-none opacity-0 transition-opacity duration-150"
            />

            {/* Horizontal dashed line */}
            <div
                ref={hLineRef}
                className="absolute z-10 left-0 right-0 h-px border-t border-dashed border-gray-800 pointer-events-none opacity-0 transition-opacity duration-150"
            />

            {/* LEFT CONTENT CONTAINER */}
            <div className="relative flex gap-0 w-full border-b border-gray-800 2xl:border-0">

                {/* VERTICAL LEFT TEXT DECORATION */}
                <motion.div className="z-10 bg-gray-950 border-r border-gray-800 md:border-0 2xl:border-r 2xl:border-gray-800 w-7.5 xl:w-11 2xl:w-12.75 min-h-full flex flex-col items-center justify-between py-2"
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
                        {/* <Box className="w-4 h-4 text-violet-900" /> */}
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
                <article className="relative w-full text-gray-400 pt-10 px-2 md:px-12 lg:pl-14 lg:pr-4">
                    <motion.span className="md:hidden text-violet-500 absolute top-2 right-2" variants={flickerVariant} initial="hidden" animate="visible">
                        ⊹
                    </motion.span>
                    <motion.span className="md:hidden text-violet-500 absolute bottom-2 right-2" variants={flickerVariant} initial="hidden" animate="visible">
                        ⊹
                    </motion.span>

                    {/* TOP DETAILS */}
                    <motion.div className="flex justify-between text-gray-800 text-xs"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <span>/01</span>
                        <div className="flex flex-col items-end gap-2">
                            <span>▸ PORTFOLIO_V1.0</span>
                            <span>100%</span>
                        </div>
                    </motion.div>

                    {/* TITLE + SHORT DESCRIPTION */}
                    <div>
                        {/* FULL NAME */}
                        <motion.h1 className="relative z-20 text-white text-[50px] lg:text-7xl font-bold leading-12 lg:leading-18 mb-4 w-72.5"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                        >
                            HEBER MARTIN RODRIGUEZ
                        </motion.h1>

                        {/* SCRAMBLE TEXT ANIMATION */}
                        <ScrambleText />

                        {/* HERO DESCRIPTION */}
                        <motion.p className="relative z-20 text-xs xl:text-base text-gray-300 mb-4 xs:max-w-87.5"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
                        >
                            {t('hero-description_label')}
                        </motion.p>
                    </div>

                    {/* BUTTONS */}
                    <div className="relative z-20 pb-12 md:flex md:itmes-center md:gap-4 lg:flex-col">
                        {/* Explore work button */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
                        >
                            <CustomCtaButton
                                variant="primary"
                                text={t('explore-work_label')}
                                icon="MoveDown"
                                target="projects"
                                width="w-36 lg:w-40"
                                height="h-8 lg:h-12"
                            />
                        </motion.div>
                        <motion.div className="mt-4 md:mt-0 flex items-center gap-4"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
                        >
                            {/* Linkeding button */}
                            <CustomCtaButton
                                variant="neutral"
                                text="linkedin"
                                icon="ExternalLink"
                                target={linkedinURL!}
                                width="w-30 lg:w-40"
                                height="h-8 lg:h-12"
                            />
                            {/* GitHub button */}
                            <CustomCtaButton
                                variant="neutral"
                                text="github"
                                icon="ExternalLink"
                                target={githubURL!}
                                width="w-30 lg:w-40"
                                height="h-8 lg:h-12"
                            />
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

                <article className="relative w-full px-4 lg:px-0 lg:mr-10 pb-6 overflow-hidden flex flex-col items-center bg-[url('/patterns/bg_image_pattern_dots.png')] bg-repeat bg-contain border-t border-gray-800 2xl:border-0">

                    {/* DETAIL BOXES CONTAINER */}
                    <div className="absolute top-2 xs:top-6 flex items-start justify-between w-full">
                        {/* LEFT BOX DETAILS */}
                        <motion.div className="relative z-20 w-27.5 xs:w-32 md:w-fit bg-gray-950 border border-dashed border-lime-800 ml-2 xs:ml-6 md:ml-23 lg:ml-6 p-1 md:py-2 md:px-4 flex flex-col gap-1 xs:gap-3"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                        >
                            <CornerPlusIcon position="-top-2 -left-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-top-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -left-1.5" color="text-lime-400" />

                            <div className="flex flex-col items-start gap-0 overflow-hidden">
                                <p className="text-[9px] xs:text-xs xl:text-sm text-lime-500 uppercase">EMAIL</p>
                                <Link href={'mailto:dev@4hmartin.com'} className="text-[8px] xs:text-xs xl:text-sm text-gray-300">
                                    dev@4hmartin.com
                                </Link>
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-[9px] xs:text-xs xl:text-sm text-lime-500 uppercase">
                                    {t('phone_label')}
                                </p>
                                <p className="text-[8px] xs:text-xs xl:text-sm text-gray-300">+34-640-77-44-30</p>
                            </div>
                        </motion.div>

                        {/* RIGHT BOX DETAILS */}
                        <motion.div className="relative z-20 w-26 xs:w-31 md:w-55 lg:w-36.5 3xl:w-70 bg-gray-950 border border-dashed border-lime-800 mr-2 xs:mr-6 md:mr-23 lg:mr-6 p-1 md:py-2 md:px-4 flex flex-col md:flex-row md:flex-wrap gap-1 xs:gap-3"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                        >
                            <CornerPlusIcon position="-top-2 -left-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-top-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -right-1.5" color="text-lime-400" />
                            <CornerPlusIcon position="-bottom-2 -left-1.5" color="text-lime-400" />
                            {/* PATH */}
                            <div>
                                <p className="text-[9px] xs:text-xs 3xl:text-sm text-lime-500 uppercase">
                                    {t('path_label')}
                                </p>
                                <p className="text-[8px] xs:text-[10px] 3xl:text-sm text-gray-300">/components/IDCard</p>
                            </div>
                            {/* STATUS */}
                            <div className="lg:hidden 3xl:block">
                                <p className="text-[9px] xs:text-xs 3xl:text-sm text-lime-500 uppercase">
                                    {t('status_label')}
                                </p>
                                <p className="text-[8px] xs:text-[10px] 3xl:text-sm text-gray-300">
                                    {t('rendered_label')}
                                </p>
                            </div>
                            {/* COMPONENT */}
                            <div className="md:w-28">
                                <p className="text-[9px] xs:text-xs 3xl:text-sm text-lime-500 uppercase">
                                    {t('component_label')}
                                </p>
                                <p className="text-[8px] xs:text-[10px] 3xl:text-sm text-gray-300">{'<IDCard />'}</p>
                            </div>
                            {/* SSR */}
                            <div className="hidden md:block lg:hidden 3xl:block">
                                <p className="text-xs 3xl:text-sm text-lime-500 uppercase">SSR</p>
                                <p className="text-[10px] 3xl:text-sm text-gray-300">True</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image container */}
                    <motion.div className="relative w-[70vw] max-w-67.5 group"
                        initial={{ opacity: 0, y: 12, x: -12 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                    >
                        {/* Main profile card image */}
                        <Image
                            src={ProfileBadge}
                            alt="Heber Martin Rodriguez profile photo"
                            priority={true}
                            quality={100}
                            className="relative z-20"
                        />

                        {/* Height measurement 85mm */}
                        <motion.div className="absolute left-[-10%] top-[24%] w-[15%] h-[67%] transition-all duration-150 group-hover:left-[-14%] group-hover:top-[23%]"
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                        >
                            <Image
                                src={M85mm}
                                alt="Heber Martin Rodriguez card measurement"
                                fill
                                sizes="41px"
                            />
                        </motion.div>

                        {/* Width measurement 54mm */}
                        <motion.div className="absolute bottom-[-4%] left-[5%] w-[84%] h-[13%] transition-all duration-150 group-hover:bottom-[-8%]"
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
                        >
                            <Image
                                src={M54mm}
                                alt="Heber Martin Rodriguez card measurement"
                                fill
                                sizes="228px"
                            />
                        </motion.div>

                        {/* Depth measurement 5mm */}
                        <motion.div className="absolute bottom-[-1%] right-[-19%] w-[32%] h-[6%] transition-all duration-150 group-hover:bottom-[-2%] group-hover:right-[-24%]"
                            initial={{ opacity: 0, x: -24, y: -12 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.6 }}
                        >
                            <Image
                                src={M5mm}
                                alt="Heber Martin Rodriguez card measurement"
                                fill
                                sizes="88px"
                            />
                        </motion.div>

                        {/* CASE PROPERTIES DETAILS */}
                        <motion.div className="absolute opacity-0! top-[34%] right-[-18%] xs:right-[-22%] md:right-[-30%] lg:right-[-25%] 2xl:right-[-35%] transition-all duration-150 group-hover:opacity-100! 2xl:group-hover:right-[-45%]"
                            
                            transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                        >
                            {/* MATERIAL */}
                            <div className="relative flex flex-col items-start mb-4">
                                <p className="text-[7px] xs:text-[10px] 2xl:text-sm text-lime-500 uppercase tracking-wider">
                                    MATERIAL
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300">
                                    {t('anodized_label')}
                                </p>
                            </div>
                            {/* FINISH */}
                            <div className="relative flex flex-col items-start mb-4">
                                <p className="text-[7px] xs:text-[10px] 2xl:text-sm text-lime-500 uppercase tracking-wider">
                                    {t('finish_label')}
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300">
                                    Matte
                                </p>
                            </div>
                            {/* WEIGHT */}
                            <div className="relative flex flex-col items-start mb-4">
                                <p className="text-[7px] xs:text-[10px] 2xl:text-sm text-lime-500 uppercase tracking-wider">
                                    {t('weight_label')}
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300">
                                    28.4 g
                                </p>
                            </div>
                            {/* PROPERTIES */}
                            <div className="relative flex flex-col items-start mb-4">
                                <p className="text-[7px] xs:text-[10px] 2xl:text-sm text-lime-500 uppercase tracking-wider mb-0.5">
                                    {t('properties_label')}
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ {t('durable_label')}
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ {t('lightweight_label')}
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ premium
                                </p>
                                <p className="text-[6px] xs:text-[8px] 2xl:text-xs text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ {t('minimal_label')}
                                </p>
                            </div>
                        </motion.div>
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
                        <CircleDot className="w-4 h-4 text-violet-600 animate-ping" />
                        {/* <Box className="w-4 h-4 text-violet-900" /> */}
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
                <motion.div className="hidden lg:flex z-10 bg-gray-950 w-7.5 xl:w-11 2xl:w-13.5 min-h-full flex-col items-center justify-between py-2 2xl:border-l 2xl:border-gray-800"
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