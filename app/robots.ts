import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Primary rule: all well-behaved crawlers
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",           // server routes — never index
                    "/admin/",         // if an admin panel is added later
                    "/_next/",         // Next.js internals (usually blocked by default, explicit is safer)
                ],
            },

            // Block aggressive SEO/scraping tools
            {
                userAgent: [
                    "AhrefsBot",
                    "SemrushBot",
                    "DotBot",
                    "MJ12bot",
                    "BLEXBot",
                ],
                disallow: "/",
            },
        ],

        // Sitemap
        // Submit this URL in Google Search Console too.
        sitemap: `${BASE_URL}/sitemap.xml`,

        // Host directive
        // Tells crawlers the canonical host (www vs non-www).
        host: BASE_URL,
    };
}