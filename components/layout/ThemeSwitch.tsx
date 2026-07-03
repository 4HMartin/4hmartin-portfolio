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
        return <Sun onClick={() => setTheme('light')} />
    }

    if(resolvedTheme === 'light'){
        return <Moon onClick={() => setTheme('dark')} />
    }
}