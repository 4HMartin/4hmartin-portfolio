'use client'

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Spinner } from "../ui/spinner";

export default function ThemeSwitch(){
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if(!mounted) return (
        <Spinner />
    )

    if(resolvedTheme === 'dark'){
        return <Sun onClick={() => setTheme('light')} className="z-10 w-3 lg:w-5 h-3 lg:h-5 text-secondary transition-all duration-150 group-hover:text-primary"/>
    }

    if(resolvedTheme === 'light'){
        return <Moon onClick={() => setTheme('dark')} className="z-10 w-3 lg:w-5 h-3 lg:h-5  text-secondary transition-all duration-150 group-hover:text-primary"/>
    }
}