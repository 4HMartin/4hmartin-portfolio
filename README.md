# 4HMartin — Developer Portfolio

A bilingual (EN/ES) full-stack developer portfolio built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS 4**. It showcases projects, certificates, skills and experience, with a "cyber brutalism" visual identity, light/dark themes, rich animations and GDPR-friendly analytics.

**Live site:** https://4hmartin.com

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Content Management](#content-management)
- [Internationalization](#internationalization)
- [Analytics & Cookie Consent](#analytics--cookie-consent)
- [Contact Form & Email](#contact-form--email)
- [Deployment](#deployment)
- [License & Contact](#license--contact)

---

## Features

- **Single-page home** with Hero, About, Projects, Certificates, Skills and Contact sections, using smooth scrolling navigation.
- **Detailed project pages** (`/projects/[slug]`) statically generated at build time (SSG), including overview, key features, tech stack, architecture/database/wireframe diagrams, PageSpeed and Search Console reports, screenshots and design inspiration.
- **Image lightbox** with captions, counter and zoom (`yet-another-react-lightbox`) integrated with `next/image`.
- **Internationalization** (English / Spanish) with `next-intl`, localized pathnames and locale switcher.
- **Light / dark / system theme** via `next-themes`, with flash-free initialization.
- **Animations** with Motion (scroll-triggered fade-ins, flicker effects, scramble text, isometric cubes, crosshair cursor).
- **Contact form** with client-side validation (React Hook Form + Zod), Cloudflare Turnstile anti-bot check and server-side email delivery via Nodemailer.
- **Cookie consent** with `vanilla-cookieconsent` and **Google Consent Mode v2** + Google Tag Manager / GA4.
- **Legal pages**: Legal Notice, Privacy Policy and Cookie Policy.
- **Live BTC price widget** in the fixed bottom bar (server-side cached API route).
- **Accessible, responsive UI** built with Shadcn UI (Base UI primitives) and custom breakpoints.
- **Custom 404 page** with a themed design.

---

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, Shadcn UI (`base-nova` style), `@base-ui/react`, `tw-animate-css`, `class-variance-authority`, `clsx`, `tailwind-merge` |
| Animation | Motion (Framer Motion) |
| i18n | `next-intl` |
| Theming | `next-themes` |
| Forms & validation | React Hook Form, Zod, `@hookform/resolvers` |
| Email | Nodemailer (SMTP) |
| Security | Cloudflare Turnstile (`@marsidev/react-turnstile`) |
| Analytics & consent | `@next/third-parties` (Google Tag Manager), `vanilla-cookieconsent` |
| UI extras | `yet-another-react-lightbox`, `react-scroll`, `react-syntax-highlighter`, `lucide-react`, `sonner` |
| HTTP | Axios |
| Tooling | ESLint 9 (`eslint-config-next`), PostCSS |

---

## Project Structure

```
.
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Root layout (fonts, GTM, consent mode, providers)
│   │   ├── page.tsx                # Home page
│   │   ├── providers.tsx           # Theme, i18n and tooltip providers
│   │   ├── globals.css             # Tailwind + theme tokens
│   │   ├── projects/[slug]/        # Dynamic project detail pages (SSG)
│   │   ├── legal-notice/
│   │   ├── privacy-policy/
│   │   ├── cookie-policy/
│   │   ├── [...catchAll]/          # Triggers localized 404
│   │   └── not-found.tsx
│   ├── api/
│   │   ├── send-email/route.ts     # Contact form endpoint
│   │   └── btc/route.ts            # BTC price endpoint (cached)
│   └── not-found.tsx
├── components/
│   ├── home/                       # Hero, About, Projects, Certificates, Skills, Contact
│   ├── project/                    # Project detail sections + lightbox client
│   ├── layout/                     # Header, Footer, MobileMenu, ContactForm, cards, switchers...
│   ├── icons/                      # Custom SVG icons
│   └── ui/                         # Shadcn UI components & shared UI pieces
├── data/
│   ├── projects/                   # One file per project + index
│   ├── certificates/               # Certificates data
│   ├── skills/                     # Skills grouped by category
│   └── types.ts                    # Shared TypeScript types
├── hooks/                          # Custom hooks (e.g. useMediaQuery)
├── i18n/                           # Routing, request config and navigation helpers
├── lib/
│   ├── animations.ts               # Motion variants
│   ├── cookieconsent-config.ts     # Cookie banner + Consent Mode v2 config
│   ├── projects.ts                 # Project data helpers
│   ├── email/                      # Nodemailer client, sender and HTML template
│   ├── coinmarketcap/              # BTC price fetching + types
│   └── utils.ts
├── messages/
│   ├── en.json                     # English translations
│   └── es.json                     # Spanish translations
├── public/                         # Static assets (images, patterns, documents)
├── middleware.ts                   # next-intl middleware
├── next.config.ts
├── components.json                 # Shadcn UI config
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 20.9`
- **npm** (or another package manager)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/4HMartin/<repository-name>.git
cd <repository-name>

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local   # or create .env.local manually (see below)

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in the project root. **Never commit it** (`.env*` is already git-ignored).

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Social links & contact
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_DEV_EMAIL=
NEXT_PUBLIC_EMAIL_LOGO_LINK=       # Absolute URL of the logo used in email templates
NEXT_PUBLIC_FTWR_ORIGIN=           # External URL used by the 404 page easter egg

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=

# SMTP (Nodemailer)
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM_EMAIL=

# CoinMarketCap (optional - BTC price widget)
COINMARKETCAP_API_KEY=
```

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep all secrets (SMTP credentials, API keys) in server-only variables.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase with ESLint |

---

## Content Management

All portfolio content is data-driven and typed (see `data/types.ts`).

### Adding a project

1. Create a new file in `data/projects/` exporting an object that satisfies the `Project` type (slug, category, localized name/description, tech stack, key features, images, related projects...).
2. Register it in `data/projects/index.ts`.
3. Add images under `public/images/projects/<project-name>/`.
4. The detail page `/projects/<slug>` is generated automatically.

**Project categories:** `production_ready`, `in_development`, `practice`.

### Adding a certificate

Create a file in `data/certificates/` following the `Cert` type, export it in `data/certificates/index.ts` and place the PDF in `public/documents/`.

### Editing skills

Update `data/skills/index.ts` (frontend, backend, learning, tools). Each skill needs a matching `<skillname>_info` key in `messages/en.json` and `messages/es.json` (lowercased, without spaces or dots) so its tooltip description renders.

---

## Internationalization

- Supported locales: `en` (default) and `es`.
- Locale prefix strategy: `as-needed` (English has no prefix, Spanish uses `/es`).
- Localized pathnames are defined in `i18n/routing.ts` (e.g. `/privacy-policy` → `/politica-privacidad`).
- Translations live in `messages/en.json` and `messages/es.json`. When adding a new key, add it to **both** files.

---

## Analytics & Cookie Consent

- **Google Consent Mode v2** defaults are set to `denied` before GTM loads (see `app/[locale]/layout.tsx`).
- The cookie banner (`vanilla-cookieconsent`) updates consent state on accept/reject through `lib/cookieconsent-config.ts`.
- Users can reopen preferences at any time from the **Cookies** button in the bottom bar.
- Cookie categories: Necessary, Analytics (GA4) and Marketing.

---

## Contact Form & Email

1. The form (`components/layout/ContactForm.tsx`) validates input with Zod and requires a Cloudflare Turnstile token and acceptance of the terms.
2. On submit, it posts to `/api/send-email`.
3. The API route renders an HTML email (`lib/email/email-template.ts`) and sends it through the configured SMTP server using Nodemailer.

> **Recommended hardening:** verify the Turnstile token server-side and sanitize/escape user input before injecting it into the email template.

---

## Deployment

The project is compatible with any Node.js host that supports Next.js (e.g. Vercel, Netlify, self-hosted Node).

```bash
npm run build
npm run start
```

Remember to configure all environment variables in your hosting provider's dashboard.

---

## License & Contact

© Heber Martin Rodríguez. All rights reserved unless a license file states otherwise.

- Website: https://4hmartin.com
- GitHub: https://github.com/4HMartin
- LinkedIn: https://www.linkedin.com/in/heber-martin-rodriguez/
