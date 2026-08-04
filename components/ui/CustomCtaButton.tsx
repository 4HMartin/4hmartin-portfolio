import { Button } from "@/components/ui/button";
import { IconMap } from "./IconMap";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { CustomCtaButtonProps, InnerButtonProps } from "@/data/types";


const InnerButton = ({ variant, text, icon, width, height, setIsOpen }: InnerButtonProps) => {

    const IconComponent = icon ? IconMap[icon] : null;

    return (
        <Button
            onClick={() => setIsOpen?.(false)}
            className={
                `relative group rounded-none uppercase font-bold tracking-widest cursor-pointer text-xs  
                    ${variant === 'primary' ? 'bg-transparent bg-[url("/patterns/diagonal-lines-button-primary.svg")] bg-repeat flex items-center gap-2 text-violet-600 hover:bg-violet-600 hover:text-white dark:hover:text-white'
                    : variant === 'secondary' ? 'bg-transparent bg-[url("/patterns/diagonal-lines-button-secondary.svg")] bg-repeat text-gray-600 hover:bg-gray-600 hover:text-white'
                        : 'text-gray-400 flex flex-row-reverse bg-transparent border border-gray-800 border-dashed hover:bg-gray-800 hover:text-gray-300'}
                    ${width} ${height}`
            }
        >
            {text} {IconComponent && <IconComponent className="w-12" />}

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
    )
}

export default function CustomCtaButton({ variant, text, icon, target, width, height, setIsOpen }: CustomCtaButtonProps) {

    const externalLink = target.startsWith('https');

    return externalLink ? (
        <Link href={target} target="_blank" rel="noopener noreferrer">
            <InnerButton
                variant={variant}
                text={text}
                icon={icon}
                width={width}
                height={height}
                setIsOpen={setIsOpen}
            />
        </Link>
    ) : (
        <ScrollLink
            to={target}
            smooth={true}
            duration={250}
            offset={-56} // fixed header height
        >
            <InnerButton
                variant={variant}
                text={text}
                icon={icon}
                width={width}
                height={height}
                setIsOpen={setIsOpen}
            />
        </ScrollLink>
    );
}