import { NextIntlClientProvider,hasLocale } from "next-intl";
import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

export function generateStaticParams(){
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {

  const { locale } = await params;

  if(!hasLocale(routing.locales, locale)){
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn("h-full", "antialiased", spaceGrotesk.variable, spaceMono.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <NextIntlClientProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
