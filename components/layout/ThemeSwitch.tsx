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
        return <Sun onClick={() => setTheme('light')} className="text-secondary transition-all duration-150 group-hover:text-primary"/>
    }

    if(resolvedTheme === 'light'){
        return <Moon onClick={() => setTheme('dark')} className="text-secondary transition-all duration-150 group-hover:text-primary"/>
    }
}