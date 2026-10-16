import type { Project } from "../types";

export const projectInDevelopment: Project = {
    slug: "project-in-development",
    category: "in_development",
    name: {
        en: "THE HAPPY QUAIL RESTAURANT",
        es: "RESTAURANTE THE HAPPY QUAIL",
    },
    developmentType: "frontend",
    shortDescription: {
        en: "Coming soon to Sundew Court, The Happy Quail. Bar and restaurant ran by Emma and Heber of Rodriguez Events.",
        es: "Próximamente en Sundew Court: 'The Happy Quail', un bar y restaurante dirigido por Emma y Heber, de 'Rodriguez Events'.",
    },
    publicUrl: "https://thehappyquail.co.uk",
    // publicPageSpeedReport: "",
    // publicSitemap: "",
    // publicFigmaWireframe: "",
    // publicRepo: "https://github.com/4HMartin/",
    mainGif: "/images/projects/project-in-development/screenshot_home_coming_soon.webp",
    mainGifSection: "Home",
    overview: {
        en: [
            "Landing page for 'The Happy Quail Restaurant'.",
            "Coming soon to Sundew Court - Newport, The Happy Quail. Bar and restaurant ran by Emma and Heber of Rodriguez Events.",
            "Opening 19th October for breakfast, lunch, hot & soft drinks. Opening for evenings & weekends with wine, cocktails & G&Ts from late November."
        ],
        es: [
            "Landing page para 'The Happy Quail Restaurant'.",
            "Próximamente en Sundew Court - Newport: 'The Happy Quail', un bar y restaurante dirigido por Emma y Heber, de 'Rodriguez Events'.",
            "Abierto a partir del 19 de Octubre para desayunos, comidas, bebidas calientes y refrescos. A partir de finales de Noviembre, también abrirá por las tardes y los fines de semana, con vino, cócteles y gin-tonics."
        ],
    },
    techStack: ["Next.js", "React", "Shadcn UI", "TypeScript", "Tailwind CSS", "Motion", "Cloudinary"],
    // keyFeaturesUser: [
    //     {
    //         key: {
    //             en: "",
    //             es: ""
    //         },
    //         value: {
    //             en: [""],
    //             es: [""]
    //         },
    //     },
    // ],
    keyFeaturesAdmin: [
        {
            key: {
                en: "Clear Value Proposition (Hero Section)",
                es: "Propuesta de valor clara (sección principal)"
            },
            value: {
                en: ["A concise headline and subheadline above the fold that instantly explains what the restaurant does and why it matters to the visitor."],
                es: ["Un titular y un subtítulo concisos, situados en la parte superior de la página, que expliquen de inmediato a qué se dedica el restaurante y por qué es importante para el visitante."]
            },
        },
        {
            key: {
                en: "Prominent Call to Action (CTA)",
                es: "Llamada a la acción (CTA) destacada"
            },
            value: {
                en: ["High-contrast buttons placed immediately above the fold for \"Book a Table\""],
                es: ["Botones de alto contraste situados justo encima del pliegue para 'Reservar mesa'"]
            },
        },
        {
            key: {
                en: "Mobile-First Interactive Menu",
                es: "Menú interactivo Mobile-First"
            },
            value: {
                en: ["A clean HTML menu optimized for smartphone screens. Includes dietary badges (Vegan, Gluten-Free, Halal, Nut-Free)."],
                es: ["Un menú en HTML sencillo y optimizado para las pantallas de los smartphones. Incluye iconos de tipo de dieta (vegano, sin gluten, halal, sin frutos secos)."]
            },
        },
        {
            key: {
                en: "Location, Hours & One-Click Directions",
                es: "Ubicación, horario y cómo llegar con un solo clic"
            },
            value: {
                en: ["Opening hours, address, cross-streets/parking details, and an interactive map link featured right near the top header so visitors don't have to scroll to find basic logistics."],
                es: ["Horario de apertura, dirección, cruces de calles y datos sobre el aparcamiento, así como un enlace a un mapa interactivo, aparecen justo al lado del encabezado, para que los visitantes no tengan que desplazarse hacia abajo para encontrar la información logística básica."]
            },
        },
        {
            key: {
                en: "Ambiance & Food Photography",
                es: "Fotografía de ambientes y comida"
            },
            value: {
                en: ["High-resolution photos showing signature dishes and the interior dining space, giving potential guests a clear sense of the dress code, vibe, and seating."],
                es: ["Fotografías en alta resolución que muestran los platos estrella y el interior del restaurante, lo que permite a los posibles comensales hacerse una idea clara del código de vestimenta, el ambiente y la distribución de las mesas."]
            },
        },
        {
            key: {
                en: "Event & Private Dining Enquiries",
                es: "Consultas sobre eventos y cenas privadas"
            },
            value: {
                en: ["A dedicated link or short form for private bookings, catering requests, or large group reservations."],
                es: ["Un enlace específico o un formulario breve para reservas privadas, solicitudes de catering o reservas para grupos numerosos."]
            },
        },
    ],
    images: {
        // architectureImage: {
        //     src: "/images/projects/cocktail-recipes/architecture_diagram_v1.webp",
        //     alt: "Project architecture diagram - 4hmartin",
        //     title: "Project architecture diagram",
        //     imageFit: "contain",
        //     imageFormat: "tablet",
        // },
        screenshots: [
            {
                src: "/images/projects/project-in-development/screenshot_home_coming_soon.webp",
                alt: "Project under construction - 4hmartin",
                title: "Project under construction",
                imageFit: "contain",
                imageFormat: "desktop",
            },
            {
                src: "/images/projects/project-in-development/under_construction.webp",
                alt: "Project under construction - 4hmartin",
                title: "Project under construction",
                imageFit: "contain",
                imageFormat: "desktop",
            },
        ],
    },
    otherProjects: [
        "security-system-comparison",
        "rodriguez-events-website",
        "massagearte-landing-page"
    ],
};
