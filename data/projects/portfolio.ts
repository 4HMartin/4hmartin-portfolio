import { Project } from "../types";

export const portfolio: Project = {
    slug: "4hmartin-portfolio",
    category: "production_ready",
    name: {
        en: "4HMARTIN PORTFOLIO",
        es: "4HMARTIN PORTFOLIO",
    },
    developmentType: "frontend",
    shortDescription: {
        en: "Portfolio designed to my own personal taste, which brings together my experience in the sector and projects that have had a real impact on the ventures of those who have placed their trust in my skills.",
        es: "Portfolio diseñado a mi gusto personal donde se recopilan mis experiencias en el sector y projectos con impacto real en los emprendimientos de las personas que depositaron su confianza en mis habilidades.",
    },
    publicUrl: "https://4hmartin.com/",
    // publicPageSpeedReport: "",
    // publicSitemap: "",
    publicFigmaWireframe: "https://www.figma.com/design/raAV09phqeYuicLVIDI9gg/Portfolio-mockup---4hmartin.com?node-id=0-1&t=I6Uyi3TCVweKqcHZ-1",
    // publicRepo: "",
    mainGif: "/images/projects/portfolio/portfolio_project_v1_loop.webp",
    mainGifSection: "projects/4hmartin-portfolio",
    overview: {
        en: [
            "As a part of the ongoing development of my digital presence, I'm proud to present a portfolio designed to my own personal taste, which brings together my experience in the sector and projects that have had a real impact on the ventures of those who have placed their trust in my skills.",
            "This platform aims to build a bridge between my services as a full-stack developer and individuals or organisations seeking freelancers for projects, full-time roles or interesting collaborations.",
            "I invite all visitors to this website to keep up to date with the content, as it will continue to grow alongside my career as a developer.",
            "This is the first of many versions of my online presence.",
        ],
        es: [
            "En el continuo desarrollo de mi presencia digital, orgulloso de presentar un portfolio diseñado a mi gusto personal donde se recopilan mis experiencias en el sector y projectos con impacto real en los emprendimientos de las personas que depositaron su confianza en mis habilidades.",
            "Esta plataforma tiene como objetivo crear un puente de conexión entre mis servicios como desarrollador full-stack y personas o entidades con bacantes en projectos freelace, puestos a jornada completa o colaboraciones interesantes.",
            "Invito a todos los visitantes de este sitio web que se mantengan actualizados con el contenido puesto que irá creciendo junto a mi carrera como desarrollador.",
            "Esta es la primera de muchas versiones de mi huella en internet."
        ],
    },
    techStack: [
        "Next.js",
        "React",
        "Shadcn UI",
        "TypeScript",
        "TailwindCSS",
        "Motion",
        "RHF",
        "Zod",
        "Nodemailer"
    ],
    keyFeaturesUser: [
        {
            key: {
                en: "Single-page home",
                es: "Single-page-home",
            },
            value: {
                en: ["Hero, About, Projects, Certificates, Skills and Contact sections, using smooth scrolling navigation."],
                es: ["Secciones Hero, About, Projects, Certificates, Skills y Contact, utilizando navegación por scroll suave."],
            },
        },
        {
            key: {
                en: "'Cyber brutalism' design",
                es: "Diseño 'Brutalismo cibernético'",
            },
            value: {
                en: [
                    "Cyber Brutalism-inspired design in web design as an interface style that blends the raw aesthetic of digital brutalism with the retro-futuristic aesthetic of cyberculture and the early web.",
                    "Structure and layout: Exposed grids, very pronounced black or neon borders.",
                    "Typography: Monospaced typefaces, heavy-weight industrial typeface families (space-mono, space-grotesk).",
                    "Colour and contrast: Neutral or dark backgrounds contrasted with blocks of saturated colours (neon green, cyan, fuchsia pink)."
                ],
                es: [
                    "Diseño inspirado en el brutalismo cibernético (Cyber Brutalism) en diseño web es un estilo de interfaz que fusiona la crudeza del brutalismo digital con la estética retro-futurista de la cibercultura y la web temprana.",
                    "Estructura y maquetación: Cuadrículas expuestas, bordes negros o de neón muy marcados.",
                    "Tipografía: Fuentes monoespaciadas, familias tipográficas industriales de gran grosor (space-mono, space-grotesk).",
                    "Color y contraste: Fondos neutros u oscuros contrastados con bloques de colores saturados (verde neón, cian, rosa fucsia)."
                ],
            },
        },
        {
            key: {
                en: "Design fully responsive",
                es: "Diseño totalmente adaptativo",
            },
            value: {
                en: ["Mobile-first design across all breakpoints (320px -> 1536px+)."],
                es: ["Diseño mobile-first a través de todos los breakpoints (320px -> 1536px+)."],
            },
        },
        {
            key: {
                en: "Image lightbox",
                es: "Image lightbox",
            },
            value: {
                en: ["with captions, counter and zoom (yet-another-react-lightbox) integrated with next/image."],
                es: ["Con leyendas, contador y zoom (yet-another-react-lightbox) integrado con next/image."],
            },
        },
        {
            key: {
                en: "Scroll animations",
                es: "Animaciones de scroll",
            },
            value: {
                en: ["Framer Motion 'whileInView' entrance animations on every section."],
                es: ["Animaciones de entrada 'whileInView' de Framer Motion en cada sección."],
            },
        },
        {
            key: {
                en: "Light/dark adaptive theme",
                es: "Tema claro/oscuro adaptativo",
            },
            value: {
                en: ["Selection of the website theme based on the user's system preference, with the option to change it manually using 'next-themes'."],
                es: ["Selección del tema de la web en base a la preferencia del sistema del usuario con opción de cambio manual mediante el uso de 'next-themes'."],
            },
        },
        {
            key: {
                en: "Multiple languages",
                es: "Múltiple idioma",
            },
            value: {
                en: ["The website main language is English, with the option to switch to Spanish using the language selector via 'next-intl'."],
                es: ["Idioma principal de la web en Inglés con la opción a traducción al Español utilizando selector de idioma via 'next-intl'."],
            },
        },
        {
            key: {
                en: "Animations",
                es: "Animaciones",
            },
            value: {
                en: [
                    "Animations with Motion (scroll-triggered fade-ins, flicker effects, scramble text, isometric cubes, crosshair cursor)."
                ],
                es: [
                    "Animaciones con movimiento (apariciones progresivas activadas al desplazarse, efectos de parpadeo, texto aleatorio, cubos isométricos, cursor en forma de cruz)."
                ],
            },
        },
        {
            key: {
                en: "Live Bitcoin price widget",
                es: "Widget con el precio en tiempo real de Bitcoin",
            },
            value: {
                en: [
                    "Live BTC price widget in the fixed bottom bar (server-side cached API route)."
                ],
                es: [
                    "Widget con el precio en tiempo real del BTC en la barra inferior fija (ruta de API almacenada en caché del lado del servidor)."
                ],
            },
        },
        {
            key: {
                en: "Sticky header",
                es: "Encabezado fijo al scroll",
            },
            value: {
                en: ["Sticky header with mobile slide-out drawer menu (Shadcn UI)."],
                es: ["Encabezado de navegación fijo con el menú deslizante de móvil (Shadcn UI)."],
            },
        },
        {
            key: {
                en: "Custom tooltip component (Shadcn UI)",
                es: "Componente tooltip personalizado (Shadcn UI)",
            },
            value: {
                en: ["Dynamic styles in the tooltip component (Shadcn UI) to explain the skills."],
                es: ["Estilos dinámicos en el componente de información emergente (Shadcn UI) para explicar las habilidades."],
            },
        },
        {
            key: {
                en: "Accessibility",
                es: "Accesibilidad",
            },
            value: {
                en: ["Semantic HTML, keyboard navigation, ARIA labels, VisuallyHidden titles on drawers."],
                es: ["HTML semántico, navegación por teclado, etiquetas ARIA, títulos «VisuallyHidden» en los paneles deslizantes."],
            },
        },
        {
            key: {
                en: "Custom 404",
                es: "Custom 404",
            },
            value: {
                en: ["Custom 404 page with a themed design."],
                es: ["Página 404 personalizada con un diseño temático."],
            },
        }
    ],
    keyFeaturesAdmin: [
        {
            key: {
                en: "Subdomain for practice projects",
                es: "Subdominios para los proyectos de práctica",
            },
            value: {
                en: ["Each practice project is published on its own subdomain at '4hmartin.com'."],
                es: ["Cada proyecto de prácticas se publica en su propio subdominio en '4hmartin.com'."],
            },
        },
        {
            key: {
                en: "Detailed project documentation page (/projects/[slug])",
                es: "Página de documentación detallada del proyecto",
            },
            value: {
                en: ["Statically generated at build time (SSG), including overview, key features, tech stack, architecture/database/wireframe diagrams, PageSpeed and Search Console reports, screenshots and design inspiration."],
                es: ["Generado estáticamente en el momento de la compilación (SSG), incluyendo una descripción general, características principales, pila tecnológica, diagramas de arquitectura, base de datos y esquemas de diseño, informes de PageSpeed y Search Console, capturas de pantalla e inspiración de diseño."],
            },
        },
        {
            key: {
                en: "Contact form",
                es: "Formulario de contacto",
            },
            value: {
                en: [
                    "Contact form with client-side validation (React Hook Form + Zod), Cloudflare Turnstile anti-bot check and server-side email delivery via Nodemailer."
                ],
                es: [
                    "Formulario de contacto con validación del lado del cliente (React Hook Form + Zod), verificación antibots de Cloudflare Turnstile y envío de correos electrónicos del lado del servidor a través de Nodemailer."
                ],
            },
        },
        {
            key: {
                en: "Capture leads",
                es: "Captar clientes potenciales",
            },
            value: {
                en: ["A section dedicated to the contact form for identifying new opportunities."],
                es: ["Sección dedicada al formulario de contacto para captar nuevas oportunidades."],
            },
        },
        {
            key: {
                en: "Analytics & Marketing",
                es: "Analíticas & Marketing",
            },
            value: {
                en: [
                    "SEO through the implementation of Google Analytics 4, Google Search Console and Google Tag Manager.",
                    "Cookies management using the 'vanilla-cookieconsent' library."
                ],
                es: [
                    "SEO mediante la implementación de Google Analytics 4, Google Search Console y Google Tag Manager.",
                    "Gestión de cookies utilizando la librería 'vanilla-cookieconsent'."
                ],
            },
        },
        {
            key: {
                en: "Legal pages",
                es: "Páginas legales",
            },
            value: {
                en: [
                    "Legal Notice, Privacy Policy and Cookie Policy."
                ],
                es: [
                    "Aviso legal, Política de privacidad y Política de cookies."
                ],
            },
        },
    ],
    images: {
        architectureImage: {
            src: "/images/projects/portfolio/4hmartin_portfolio_architecture_diagram.webp",
            alt: "Project architecture diagram - 4hmartin",
            title: "Project architecture diagram",
            imageFit: "contain",
            imageFormat: "tablet"
        },
        pageSpeedImage: {
            src: "/images/projects/portfolio/4hmartin_portfolio_architecture_diagram.webp",
            alt: "Project PageSpeed Insights Report - 4hmartin",
            title: "Project PageSpeed Insights Report",
            imageFit: "contain",
            imageFormat: "desktop"
        },
        gscSitemapIndexImage: {
            src: "/images/projects/portfolio/4hmartin_portfolio_architecture_diagram.webp",
            alt: "Project Sitemap Indexation on Google Search - 4hmartin",
            title: "Project Sitemap Indexation on Google Search",
            imageFit: "contain",
            imageFormat: "desktop"
        },
        // gscReportImage: {
        //     src: "/",
        //     alt: "Project Google Search Console Report - 4hmartin",
        //     title: "Project Google Search Console Report",
        //     imageFit: "contain",
        //     imageFormat: "desktop"
        // },
        // dbDiagramImage: {
        //   src: "",
        //   alt: "Project database entity relationship diagram - 4hmartin",
        //   title: "Database Entity Relationship Diagram",
        //   imageFit: "contain",
        // },
        figmaWireframe: {
          src: "/images/projects/portfolio/figma_wireframe_v1.webp",
          alt: "Figma wireframe",
          title: "Figma wireframe",
          imageFit: "contain",
          imageFormat: "desktop"
        },
        screenshots: [
            {
                src: "/images/projects/portfolio/hero_section_screenshot_v1.webp",
                alt: "Hero section desktop screenshot - 4hmartin",
                title: "EN - Dark theme - Home - Hero section - Desktop screenshot",
                imageFit: "contain",
                imageFormat: "desktop"
            },
            {
                src: "/images/projects/portfolio/screenshot_projects_section_dark_theme.webp",
                alt: "Projects section desktop screenshot - 4hmartin",
                title: "EN - Dark theme - Home - Projects section - Desktop screenshot",
                imageFit: "contain",
                imageFormat: "desktop"
            },
            {
                src: "/images/projects/portfolio/screenshot_projects_section_light_theme.webp",
                alt: "Projects section desktop screenshot - 4hmartin",
                title: "EN - Light theme - Home - Projects section - Desktop screenshot",
                imageFit: "contain",
                imageFormat: "desktop"
            },
            {
                src: "/images/projects/portfolio/screenshot_contact_section_light_theme.webp",
                alt: "Contact section desktop screenshot - 4hmartin",
                title: "EN - Light theme - Home - Contact section - Desktop screenshot",
                imageFit: "contain",
                imageFormat: "desktop"
            },
            {
                src: "/images/projects/portfolio/screenshot_tablet_about_me_section_light_theme.webp",
                alt: "About me section tablet screenshot - 4hmartin",
                title: "EN - Light theme - Home - About me section - Tablet screenshot",
                imageFit: "contain",
                imageFormat: "mobile"
            },
            {
                src: "/images/projects/portfolio/screenshot_tablet_about_me_section_dark_theme.webp",
                alt: "About me section tablet screenshot - 4hmartin",
                title: "ES - Dark theme - Home - About me section - Tablet screenshot",
                imageFit: "contain",
                imageFormat: "mobile"
            },
            {
                src: "/images/projects/portfolio/screenshot_mobile_menu_open_dark_theme.webp",
                alt: "Menu open mobile screenshot - 4hmartin",
                title: "EN - Dark theme - Home - Menu open - Mobile screenshot",
                imageFit: "contain",
                imageFormat: "tablet"
            },
            {
                src: "/images/projects/portfolio/screenshot_mobile_certificates_section_dark_theme.webp",
                alt: "Certificates section mobile screenshot - 4hmartin",
                title: "EN - Dark theme - Home - Certificates section - Mobile screenshot",
                imageFit: "contain",
                imageFormat: "tablet"
            },
            {
                src: "/images/projects/portfolio/screenshot_404_dark_theme.webp",
                alt: "Error 404 screenshot - 4hmartin",
                title: "Not found - Error 404 - Desktop screenshot",
                imageFit: "contain",
                imageFormat: "desktop"
            },
        ],
        designInspiration: [
          {
            src: "/IMAGOTYPE_WHITE_LINES.webp",
            alt: "brutalism inspiration ui ux design",
            title: "Design inspiration - My own Imagotype",
            imageFit: "contain",
            imageFormat: "desktop"
          },
          {
            src: "/images/projects/portfolio/brutalism_inspiration.webp",
            alt: "brutalism inspiration ui ux design",
            title: "Design inspiration - Brutalism UI/UX design",
            imageFit: "contain",
            imageFormat: "mobile"
          },
          {
            src: "/images/projects/portfolio/inspiration_grid_isometric.webp",
            alt: "inspiration grid isometric design",
            title: "Design inspiration - Grid lines on isometric perspective",
            imageFit: "contain",
            imageFormat: "desktop"
          },
          {
            src: "/images/projects/portfolio/inspiration_shadcn_ui_drawer_component.webp",
            alt: "inspiration shadcn_ui drawer component",
            title: "Design inspiration - Shadcn UI Drawer component for mobile menu [ui.shadcn.com/docs/components/base/drawer]",
            imageFit: "contain",
            imageFormat: "tablet"
          },
          {
            src: "/images/projects/portfolio/inspiration_tailwind_vertical_patterns.webp",
            alt: "inspiration tailwind vertical patterns",
            title: "Design inspiration - TailwindCSS vertical patterns [tailwindcss.com]",
            imageFit: "contain",
            imageFormat: "desktop"
          },
          {
            src: "/images/projects/portfolio/inspiration_line_details_elements.webp",
            alt: "motion website details inspiration",
            title: "Design inspiration - Motion website line details [motion.dev]",
            imageFit: "contain",
            imageFormat: "desktop"
          },
          {
            src: "/images/projects/portfolio/inspiration_motion_button_design.webp",
            alt: "motion website details inspiration",
            title: "Design inspiration - Motion website button design [motion.dev]",
            imageFit: "contain",
            imageFormat: "desktop"
          },
          {
            src: "/images/projects/portfolio/inspiration_trading_platform_crosshair_cursor_lines.webp",
            alt: "trading platform crosshair cursor lines",
            title: "Design inspiration - Trading platform crosshair cursor lines",
            imageFit: "contain",
            imageFormat: "mobile"
          },
          {
            src: "/images/projects/portfolio/inspiration_vertical_cubes.webp",
            alt: "vertical cubes",
            title: "Design inspiration - Vertical Cubes",
            imageFit: "contain",
            imageFormat: "mobile"
          },
          {
            src: "/images/projects/portfolio/inspiration_ui_elements.webp",
            alt: "ui elements inspiration",
            title: "Design inspiration - UI elements",
            imageFit: "contain",
            imageFormat: "tablet"
          },
          {
            src: "/images/projects/portfolio/inspiration_cyberpunk_hud_ui.webp",
            alt: "cyberpunk hud ui",
            title: "Design inspiration - Cyberpunk Hud UI",
            imageFit: "contain",
            imageFormat: "tablet"
          },
          {
            src: "/images/projects/portfolio/inspiration_profile_badge_v1.webp",
            alt: "profile badge",
            title: "Design inspiration - Original profile badge idea",
            imageFit: "contain",
            imageFormat: "mobile"
          },
          {
            src: "/images/projects/portfolio/inspiration_profile_badge_prototype_1.webp",
            alt: "profile badge",
            title: "Design inspiration - Profile badge prototype 1",
            imageFit: "contain",
            imageFormat: "mobile"
          },
          {
            src: "/images/projects/portfolio/resource_safari_browser_ui_dark.webp",
            alt: "safari browser ui dark",
            title: "Design resource - Safari browser ui dark",
            imageFit: "contain",
            imageFormat: "desktop"
          },
          {
            src: "/images/projects/portfolio/resource_safari_browser_ui_light.webp",
            alt: "safari browser ui light",
            title: "Design resource - Safari browser ui light",
            imageFit: "contain",
            imageFormat: "desktop"
          },
        ]
    },
    otherProjects: ["security-system-comparison", "massage-arte-website", "rodriguez-events"],
};
