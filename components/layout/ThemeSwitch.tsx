'use client'

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Spinner } from "../ui/spinner";

export default function ThemeSwitch(){
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        const stateMounted = () => setMounted(true)
        stateMounted()
    }, []);

    if(!mounted) return (
        <Spinner />
    )

    if(resolvedTheme === 'dark'){
        return <Sun onClick={() => setTheme('light')} className="z-10 w-6 md:w-3 lg:w-5 h-6 md:h-3 lg:h-5 text-secondary dark:text-gray-300 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500"/>
    }

    if(resolvedTheme === 'light'){
        return <Moon onClick={() => setTheme('dark')} className="z-10 w-6 md:w-3 lg:w-5 h-6 md:h-3 lg:h-5 text-secondary dark:text-gray-300 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500"/>
    }
}