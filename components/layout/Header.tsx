'use client'

import { motion } from "motion/react";
import Link from "next/link";
import CornerIcons from "@/components/ui/cornerIcons";
import { ThemeImage } from "@/components/ui/ThemeImage";

import ImagotypeLight from "@/public/IMAGOTYPE_LIGHT.png";
import ImagotypeDark from "@/public/IMAGOTYPE_DARK.png";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {

    return (
        <header className="fixed top-0 w-full h-14 flex justify-between items-center bg-background border-b-[0.5px] border-gray-300">
            <MobileMenu />
            <Link href={'/#hero'} aria-label="4HMartin Portfolio - Home">
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
        </header>
    );
}