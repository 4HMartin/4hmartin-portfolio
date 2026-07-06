// /components/ui/ThemeImage.tsx
'use client'

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

type ThemeImageProps = Omit<ImageProps, 'src'> & {
    lightSrc: string | any;
    darkSrc: string | any;
};

export function ThemeImage({ lightSrc, darkSrc, alt, ...props }: ThemeImageProps) {
    const { resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className={`bg-gray-200 animate-pulse ${props.className}`} />;
    }

    return (
        <Image
            src={resolvedTheme === 'light' ? lightSrc : darkSrc}
            alt={alt}
            {...props}
        />
    );
}