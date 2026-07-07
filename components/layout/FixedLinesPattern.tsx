import { motion } from "motion/react";
// import TexturePattern from "@/public/patterns/texture.svg";

export default function FixedLinesPattern(){
    return(
        <>
            {/* LEFT VERTICAL LINE */}
            <div className='hidden md:block fixed z-40 left-7 top-0 min-h-screen w-10 border-x border-gray-800 bg-[url("/patterns/texture_gray_800_6px.svg")] bg-repeat'/>
            {/* RIGHT VERTICAL LINE */}
            <div className='hidden md:block fixed z-40 right-7 top-0 min-h-screen w-10 border-x border-gray-800 bg-[url("/patterns/texture_gray_800_6px.svg")] bg-repeat'/>
        </>
    )
} 