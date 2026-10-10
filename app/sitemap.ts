import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Update these dates manually whenever a page's content changes.
// Format: YYYY-MM-DD — Google uses this to decide recrawl priority.
export default function sitemap(): MetadataRoute.Sitemap {
    return [

        // Core / highest commercial intent
        {
            url: BASE_URL!,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 1.0,           // homepage always 1.0
        },
        {
            url: `${BASE_URL}/projects/security-system-comparison`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/rodriguez-events-website`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/massagearte-landing-page`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/4hmartin-portfolio`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/cocktail-recipes`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/veterinary-patient-follow-up`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/expense-management`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/calorie-tracker`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects/tips-consumption-calculator`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "monthly",
            priority: 0.9,
        },

        // Legal pages
        // Low priority but included — Google uses these for E-E-A-T trust signals.
        // See robots.ts: these are intentionally NOT disallowed.
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/cookie-policy`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/legal-notice`,
            lastModified: new Date("2025-10-10"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}