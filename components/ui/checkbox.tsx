"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { flickerVariant } from "@/lib/animations"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 m-1 shrink-0 items-center justify-center border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary overflow-visible",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>

      <motion.div
        variants={flickerVariant}
        initial="hidden"
        animate="visible"
      >
        <span className="absolute -top-2 -left-1 text-xs text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-top-1 group-hover:left-1 group-active:text-primary">
          ⌜
        </span>
        <span className="absolute -bottom-2 -left-1 text-xs text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-bottom-1 group-hover:left-1 group-active:text-primary">
          ⌞
        </span>
        <span className="absolute -top-2 -right-1 text-xs text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-top-1 group-hover:right-1 group-active:text-primary">
          ⌝
        </span>
        <span className="absolute -bottom-2 -right-1 text-xs text-gray-300 dark:text-gray-700 transition-all duration-150 group-hover:-bottom-1 group-hover:right-1 group-active:text-primary">
          ⌟
        </span>
      </motion.div>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }