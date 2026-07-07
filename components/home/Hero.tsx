"use client"
import { useTranslations } from "next-intl"
import CustomCtaButton from "../ui/CustomCtaButton";
import Link from "next/link";
import Image from "next/image";

import ProfileBadge from "@/public/images/PROFILE_BADGE_V6.png";
import M85mm from "@/public/images/85mm.png";
import M54mm from "@/public/images/54mm.png";
import M5mm from "@/public/images/5mm.png";
import AuxLine1 from "@/public/images/lines_material.png";
import AuxLine2 from "@/public/images/lines_finish.png";
import AuxLine3 from "@/public/images/lines_weight.png";

export default function Hero() {

    const t = useTranslations('hero_section');

    const linkedinURL = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const githubURL = process.env.NEXT_PUBLIC_GITHUB_URL;

    const CornerPlusIcon = ({ position }: { position: string }) => {
        return (
            <span className={`absolute ${position} text-xs text-lime-400 bg-secondary w-3 flex items-center justify-center rounded-full`}>
                ⊹
            </span>
        )
    }

    return (
        <section id="hero" className="min-h-screen flex flex-col mt-14 bg-secondary">

            <div className="relative flex w-full border-b border-gray-800">
                {/* Vertical line decoration */}
                <div className="border-r border-gray-800 w-7.5 min-h-full flex flex-col items-center justify-between py-2">
                    <span className="text-lime-500">
                        ⊹
                    </span>
                    <p className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-gray-800">
                        2026 - FULL-STACK DEVELOPER
                    </p>
                    <span className="text-lime-500">
                        ⊹
                    </span>
                </div>

                {/* LEFT CONTENT */}
                <article className="relative w-full text-gray-400 pt-10 px-2">
                    <span className="text-lime-500 absolute top-2 right-2">
                        ⊹
                    </span>
                    <span className="text-lime-500 absolute bottom-2 right-2">
                        ⊹
                    </span>

                    <div className="flex justify-between text-gray-800 text-xs">
                        <span>/01</span>
                        <div className="flex flex-col items-end gap-2">
                            <span>▸ PORTFOLIO_V1.0</span>
                            <span>100%</span>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-white text-[50px] font-bold leading-12 mb-4">
                            HEBER MARTIN RODRIGUEZ
                        </h1>
                        <h2 className="text-primary text-base mb-4">
                            FULL-STACK DEVELOPER
                        </h2>
                        <p className="text-xs text-gray-300 mb-4">
                            {t('hero-description_label')}
                        </p>
                    </div>

                    <div className="pb-12">
                        {/* Explore work button */}
                        <CustomCtaButton
                            variant="primary"
                            text={t('explore-work_label')}
                            icon="MoveDown"
                            target="/#projects"
                            width="w-36 lg:w-40"
                            height="h-8 lg:h-12"
                        />
                        <div className="mt-4 flex items-center gap-4">
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
                        </div>
                    </div>
                </article>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative w-full">
                {/* Horizontal pattern separator */}
                <div className="w-full h-7.5 bg-[url('/patterns/diagonal-lines-gray-300.svg')] bg-repeat opacity-20" />

                <article className="relative w-full px-4 pb-6 overflow-hidden flex flex-col items-center bg-[url('/patterns/bg_image_pattern_dots.png')] bg-repeat bg-contain">

                    {/* DETAIL BOXES CONTAINER */}
                    <div className="absolute top-2 flex items-start justify-between w-full">
                        {/* BOX DETAILS LEFT */}
                        <div className="relative w-27.5 border border-lime-500/40 ml-2 p-1 flex flex-col gap-1">
                            <CornerPlusIcon position="-top-2 -left-1.5" />
                            <CornerPlusIcon position="-top-2 -right-1.5" />
                            <CornerPlusIcon position="-bottom-2 -right-1.5" />
                            <CornerPlusIcon position="-bottom-2 -left-1.5" />

                            <div className="flex flex-col items-start gap-0">
                                <p className="text-[9px] text-lime-500 uppercase">EMAIL</p>
                                <Link href={'mailto:dev@4hmartin.com'} className="text-[8px] text-gray-300">
                                    dev@4hmartin.com
                                </Link>
                            </div>
                            <div>
                                <p className="text-[9px] text-lime-500 uppercase">
                                    {t('phone_label')}
                                </p>
                                <p className="text-[8px] text-gray-300">+34-640-77-44-30</p>
                            </div>
                        </div>

                        {/* BOX DETAILS RIGHT */}
                        <div className="relative w-26 border border-lime-500/40 mr-2 p-1 flex flex-col gap-1">
                            <CornerPlusIcon position="-top-2 -left-1.5" />
                            <CornerPlusIcon position="-top-2 -right-1.5" />
                            <CornerPlusIcon position="-bottom-2 -right-1.5" />
                            <CornerPlusIcon position="-bottom-2 -left-1.5" />

                            <div>
                                <p className="text-[9px] text-lime-500 uppercase">
                                    {t('path_label')}
                                </p>
                                <p className="text-[8px] text-gray-300">/components/IDCard</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-lime-500 uppercase">
                                    {t('status_label')}
                                </p>
                                <p className="text-[8px] text-gray-300">
                                    {t('rendered_label')}
                                </p>
                            </div>
                            <div>
                                <p className="text-[9px] text-lime-500 uppercase">
                                    {t('component_label')}
                                </p>
                                <p className="text-[8px] text-gray-300">{'<IDCard />'}</p>
                            </div>
                            <div className="hidden lg:block">
                                <p className="text-[9px] text-lime-500 uppercase">SSR</p>
                                <p className="text-[8px] text-gray-300">True</p>
                            </div>
                        </div>
                    </div>

                    {/* Image container */}
                    <div className="relative w-[70vw] max-w-67.5">
                        <Image
                            src={ProfileBadge}
                            alt="Heber Martin Rodriguez profile photo"
                            priority={true}
                            quality={100}
                        />

                        {/* Height measurement 85mm */}
                        <div className="absolute left-[-10%] top-[24%] w-[15%] h-[67%]">
                            <Image
                                src={M85mm}
                                alt="Heber Martin Rodriguez card measurement"
                                fill
                            />
                        </div>
                        {/* Width measurement 54mm */}
                        <div className="absolute bottom-[-4%] left-[5%] w-[84%] h-[13%]">
                            <Image
                                src={M54mm}
                                alt="Heber Martin Rodriguez card measurement"
                                fill
                            />
                        </div>
                        {/* Depth measurement 5mm */}
                        <div className="absolute bottom-[-1%] right-[-19%] w-[32%] h-[6%]">
                            <Image
                                src={M5mm}
                                alt="Heber Martin Rodriguez card measurement"
                                fill
                            />
                        </div>

                        <div className="absolute top-[34%] right-[-18%]">
                            {/* MATERIAL */}
                            <div className="relative w- flex flex-col items-start mb-4">
                                <p className="text-[7px] text-lime-500 uppercase tracking-wider">
                                    MATERIAL
                                </p>
                                <p className="text-[6px] text-gray-300">
                                    {t('anodized_label')}
                                </p>
                            </div>
                            {/* FINISH */}
                            <div className="relative w- flex flex-col items-start mb-4">
                                <p className="text-[7px] text-lime-500 uppercase tracking-wider">
                                    {t('finish_label')}
                                </p>
                                <p className="text-[6px] text-gray-300">
                                    Matte
                                </p>
                            </div>
                            {/* WEIGHT */}
                            <div className="relative w- flex flex-col items-start mb-4">
                                <p className="text-[7px] text-lime-500 uppercase tracking-wider">
                                    {t('weight_label')}
                                </p>
                                <p className="text-[6px] text-gray-300">
                                    28.4 g
                                </p>
                            </div>
                            {/* PROPERTIES */}
                            <div className="relative w- flex flex-col items-start mb-4">
                                <p className="text-[7px] text-lime-500 uppercase tracking-wider mb-0.5">
                                    {t('properties_label')}
                                </p>
                                <p className="text-[6px] text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ {t('durable_label')}
                                </p>
                                <p className="text-[6px] text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ {t('lightweight_label')}
                                </p>
                                <p className="text-[6px] text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ premium
                                </p>
                                <p className="text-[6px] text-gray-300 uppercase tracking-wider mb-1">
                                    ▹ {t('minimal_label')}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}