import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type SubmitButtonProps = {
    text: string,
    termsStatus: boolean
}

export default function SubmitButton({ text, termsStatus }: SubmitButtonProps) {

    return (
        <Button
            type="submit"
            form="contact-form"
            disabled={!termsStatus}
            className={`${!termsStatus && 'opacity-50'} relative w-[98%] h-8 lg:h-12 uppercase rounded-none font-bold tracking-widest cursor-pointer text-xs bg-transparent bg-[url('/patterns/diagonal-lines-button-primary.svg')] bg-repeat flex items-center gap-2 text-violet-600 hover:bg-violet-600 hover:text-white dark:hover:text-white`}
        >
            {text} <Send className="w-4 h-4 text-violet-500" />

            <span className={`absolute -top-2.5 -left-0.5 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-left-1 group-active:top-0.5 group-active:left-2 text-violet-600`}>
                ⌜
            </span>
            <span className={`absolute -bottom-2 -left-0.5 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-left-1 group-active:bottom-0.5 group-active:left-2 text-violet-600`}>
                ⌞
            </span>
            <span className={`absolute -top-2.5 -right-1 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-right-1.5 group-active:top-0.5 group-active:right-2 text-violet-600`}>
                ⌝
            </span>
            <span className={`absolute -bottom-2 -right-1 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-right-1.5 group-active:bottom-0.5 group-active:right-2 text-violet-600`}>
                ⌟
            </span>
        </Button>
    )
}