import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import CornerIcons from "./cornerIcons";

type TechBadgeProps = {
    name: string
}

export default function TechBadge({ name }: TechBadgeProps) {

    const t = useTranslations('skills_section');

    return (
        <Tooltip>
            <TooltipTrigger className="inline-block border border-violet-300 dark:border-violet-700 text-violet-500 dark:text-violet-400 text-[10px] xs:text-xs px-2 py-0.5">
                {name}
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={10} className="rounded-none shadow-md">
                <p className="relative p-1">
                    {t(`${name.toLowerCase().trim().replace('.', '')}_info`)}
                </p>
            </TooltipContent>
        </Tooltip>

    )
}