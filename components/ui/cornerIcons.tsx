import { motion } from "motion/react";
import { flickerVariant } from "@/lib/animations";

export default function CornerIcons() {
    return (
        <motion.div
            variants={flickerVariant}
            initial="hidden"
            animate="visible"
        >
            <span className="absolute -top-2 left-0 text-2xl text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-top-1 group-hover:left-1 group-active:text-primary">
                ⌜
            </span>
            <span className="absolute -bottom-2 left-0 text-2xl text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-bottom-1 group-hover:left-1 group-active:text-primary">
                ⌞
            </span>
            <span className="absolute -top-2 right-0 text-2xl text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-top-1 group-hover:right-1 group-active:text-primary">
                ⌝
            </span>
            <span className="absolute -bottom-2 right-0 text-2xl text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-bottom-1 group-hover:right-1 group-active:text-primary">
                ⌟
            </span>
        </motion.div>
    )
}