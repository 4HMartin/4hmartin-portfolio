'use client'

import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

type ProvidersProps = {
    children: ReactNode;
    locale: string;
    messages: any;
    timeZone?: string;
};

export function Providers({ 
    children, 
    locale, 
    messages,
    timeZone = "Europe/Madrid"
}: ProvidersProps) {
    return (
        <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange
            storageKey="theme"
            enableColorScheme={false}  // Disable next-themes script
        >
            <NextIntlClientProvider 
                locale={locale}
                messages={messages}
                timeZone={timeZone}
            >
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}