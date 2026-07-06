import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en','es'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    pathnames: {
        '/': '/',
        '/projects': {
            en: '/projects',
            es: '/proyectos'
        },
        '/legal-notice': {
            en: '/legal-notice',
            es: '/aviso-legal'
        },
        '/privacy-policy': {
            en: '/privacy-policy',
            es: '/politica-privacidad'
        },
        '/cookie-policy': {
            en: '/cookie-policy',
            es: '/politica-cookies'
        }
    }
})