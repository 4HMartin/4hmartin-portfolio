import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

type TechBadgeProps = {
    variant: "primary" | "secondary" | "accent"
    name: string
}

export default function TechBadge({ variant, name }: TechBadgeProps) {

    const t = useTranslations('skills_section');

    return (
        <Tooltip>
            <TooltipTrigger className={`inline-block border text-[10px] xs:text-xs px-2 py-0.5 transition-all duration-150
                ${variant === "primary" ? 'border-violet-300 hover:border-violet-300 hover:bg-violet-50 dark:border-violet-700 text-violet-500 dark:text-violet-400 dark:hover:bg-violet-950' : 
                    variant === "secondary" ? 'border-gray-300 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-100 text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 dark:hover:bg-violet-950' :
                    'border-lime-300 dark:border-lime-800 bg-lime-50 dark:bg-lime-950 text-lime-700 dark:text-lime-600 hover:border-lime-400 hover:text-lime-900 hover:bg-lime-100 dark:hover:bg-lime-900 dark:hover:text-lime-500'
                }`
            }>
                {name}
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={10} className="rounded-none shadow-md max-w-2xs">
                <p className="relative p-1">
                    {t(`${name.toLowerCase().trim().replace('.', '').replace(' ','')}_info`)}
                </p>
            </TooltipContent>
        </Tooltip>
    )
}