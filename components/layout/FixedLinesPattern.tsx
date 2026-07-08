"use client"
import { motion } from "motion/react";
// import TexturePattern from "@/public/patterns/texture.svg";

export default function FixedLinesPattern(){
    return(
        <>
            {/* LEFT VERTICAL LINE */}
            <motion.div className='hidden md:block fixed z-40 left-7 xl:left-10 2xl:left-38 top-0 min-h-screen w-10 border-x border-gray-800 bg-[url("/patterns/texture_gray_800_6px.svg")] bg-repeat'
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
            {/* RIGHT VERTICAL LINE */}
            <motion.div className='hidden md:block fixed z-40 right-7 xl:right-10 2xl:right-38 top-0 min-h-screen w-10 border-x border-gray-800 bg-[url("/patterns/texture_gray_800_6px.svg")] bg-repeat'
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
        </>
    )
} 