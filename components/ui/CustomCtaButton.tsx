import { Button } from "@/components/ui/button";
import { IconMap } from "./IconMap";
import Link from "next/link";

type CustomCtaButtonProps = {
    variant: "primary" | "secondary" | "neutral",
    text: string,
    icon: string,
    target: string,
    width: string,
    height: string,
    setIsOpen?: (value: boolean) => void
}

export default function CustomCtaButton({ variant, text, icon, target, width, height, setIsOpen }: CustomCtaButtonProps) {

    const IconComponent = IconMap[icon] ?? '⊹';

    return (
        <Link href={`#${target}`}>
            <Button
                onClick={() => setIsOpen?.(false)}
                className={
                    `relative group rounded-none uppercase font-bold tracking-widest  
                    ${variant === 'primary' ? 'bg-transparent bg-[url("/patterns/diagonal-lines-button-primary.svg")] bg-repeat text-primary hover:bg-violet-600 hover:text-white'
                    : variant === 'secondary' ? 'bg-transparent bg-[url("/patterns/diagonal-lines-button-secondary.svg")] bg-repeat text-gray-600 hover:bg-gray-600 hover:text-white'
                    : 'text-gray-400'}
                    ${width} ${height}`
                }
            >
                {text} <IconComponent className="w-12" />

                <span className={`absolute -top-2.5 -left-0.5 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-left-1 group-active:top-0.5 group-active:left-2
                    ${variant === 'primary' ? 'text-violet-600' : 'text-gray-600'}`}>
                    ⌜
                </span>
                <span className={`absolute -bottom-2 -left-0.5 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-left-1 group-active:bottom-0.5 group-active:left-2
                    ${variant === 'primary' ? 'text-violet-600' : 'text-gray-600'}`}>
                    ⌞
                </span>
                <span className={`absolute -top-2.5 -right-1 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-right-1.5 group-active:top-0.5 group-active:right-2
                    ${variant === 'primary' ? 'text-violet-600' : 'text-gray-600'}`}>
                    ⌝
                </span>
                <span className={`absolute -bottom-2 -right-1 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-right-1.5 group-active:bottom-0.5 group-active:right-2
                    ${variant === 'primary' ? 'text-violet-600' : 'text-gray-600'}`}>
                    ⌟
                </span>
            </Button>
        </Link>
    )
}