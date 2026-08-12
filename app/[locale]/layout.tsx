import { hasLocale } from "next-intl";
import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieConsentProvider from "@/components/layout/CookieConsentProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FixedLinesPattern from "@/components/layout/FixedLinesPattern";
import FixedBottomBar from "@/components/layout/FixedBottomBar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4HMartin - Portfolio",
  description: "Heber Martin - Portfolio web",
  icons: {
    icon: "/icon.png"
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {

  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn("h-full", "antialiased", spaceGrotesk.variable, spaceMono.variable, "font-sans")}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Google Search Console - Verification */}
        <meta name="google-site-verification" content="WVVfJBNrN983BA_28wbZgof77wetxCWjd73RC0FY_Io" />
        {/* Theme initialization script - prevents flash */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          suppressHydrationWarning
        >
          {`
            try {
              const theme = localStorage.getItem('theme') || 'system';
              const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
              if (isDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>

        {/*
          Set default consent BEFORE GTM fires.
          This inline script runs synchronously on every page load.
        */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage:              'denied',
              ad_user_data:            'denied',
              ad_personalization:      'denied',
              analytics_storage:       'denied',
              functionality_storage:   'denied',
              personalization_storage: 'denied',
              security_storage:        'granted',
              wait_for_update:         500,        // ms to wait before GTM fires
            });
          `}
        </Script>
      </head>
      <body className="relative min-h-full flex flex-col overflow-x-hidden">
        <Providers locale={locale} messages={messages}>
          <Header />
          <main>
            <FixedLinesPattern />
            {children}
          </main>
          <Footer />
          <FixedBottomBar />
          {/* Initialise cookie banner on the client */}
          <CookieConsentProvider />
        </Providers>

        {/* Load GTM after consent defaults are set */}
        <GoogleTagManager gtmId={GTM_ID!} />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" className="hidden invisible"></iframe>
        </noscript>
      </body>
    </html>
  );
}