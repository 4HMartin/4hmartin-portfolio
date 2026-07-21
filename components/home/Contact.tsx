import SectionHeader from "../layout/SectionHeader";
import { ThemeImage } from "../ui/ThemeImage";
import CityMapLight from "@/public/images/palma_de_mallorca_map_light.webp";
import CityMapDark from "@/public/images/palma_de_mallorca_map_dark.webp";
import { useTranslations } from "next-intl";
import { ContactForm } from "../layout/ContactForm";
import CornerIcons from "../ui/cornerIcons";
import { Mail } from "lucide-react";
import Link from "next/link";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";

export default function Contact() {

    const t = useTranslations('contact_section');

    const DEV_EMAIL = process.env.NEXT_PUBLIC_DEV_EMAIL!;
    const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL!;
    const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL!;

    return (
        <section id="contact" className="relative">
            {/* HEADER */}
            <SectionHeader parentTranslations="contact_section" titleLabel="contact_label" sectionNumber="06" />

            {/* MAIN CONTAINER */}
            <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start md:mx-17 xl:mx-20 2xl:mx-48">

                {/* CURRENT LOCATION SECTION */}
                <article className="relative w-full 3xl:w-1/3 3xl:min-h-154.5 lg:flex lg:flex-col px-4 xl:px-6 2xl:px-4 py-12 border-b 3xl:border-r border-dashed border-gray-300 dark:border-gray-800">
                    {/* BACKGROUND IMAGE */}
                    <ThemeImage
                        lightSrc={CityMapLight}
                        darkSrc={CityMapDark}
                        alt="Heber Martin Rodriguez Portfolio - City Map"
                        fill
                        className="object-cover -z-10 opacity-50 md:object-[50%_86%] 3xl:object-[50%_75%] dark:3xl:object-[45%_75%] dark:scale-95"
                        preload
                        quality={100}
                    />
                    {/* TITLE */}
                    <h3 className="md:w-1/2 lg:w-52.5 text-4xl text-gray-950 dark:text-gray-100 uppercase font-bold tracking-widest mb-12">
                        {t('location_label')}
                    </h3>
                    {/* DESCRIPTION */}
                    <p className="text-xs xs:text-base xs:leading-relaxed xs:w-2/3 xl:w-130 2xl:w-4/5 text-gray-700 dark:text-gray-300 mb-24">
                        {t('description_paragraph')}
                    </p>

                    <CornerIcons />
                </article>

                {/* GET IN TOUCH SECTION */}
                <article className="hidden md:block relative w-full 3xl:w-1/3 lg:w-1/2 lg:min-h-154.5 3xl:max-h-154.5 px-4 xl:px-6 2xl:px-4 py-12 xl:pb-13! border-b lg:border-r border-dashed border-gray-300 dark:border-gray-800">
                    {/* TITLE */}
                    <h3 className="md:w-1/2 text-4xl text-gray-950 dark:text-gray-100 uppercase font-bold tracking-widest mb-12">
                        {t('build_label')}
                    </h3>
                    {/* DESCRIPTION */}
                    <p className="text-xs xs:text-base xs:w-2/3 text-gray-600 dark:text-gray-300 mb-14">
                        {t('build_description_paragraph')}
                    </p>

                    {/* DEV EMAIL */}
                    <div className="relative group flex fle-col gap-4 w-120 lg:w-full py-2 px-6 mb-4">
                        <Link href={`mailto:${DEV_EMAIL}`} className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                            <Mail className="w-4 h-4 text-gray-600 dark:text-gray-100 transition-all duration-150 group-hover:text-violet-500 dark:group-hover:text-violet-500" /> {DEV_EMAIL}
                        </Link>
                        <CornerIcons />
                    </div>

                    {/* DEV LINKEDIN */}
                    <div className="relative group flex fle-col gap-4 w-120 lg:w-full py-2 px-6 mb-4">
                        <Link href={LINKEDIN_URL ?? 'https://www.linkedin.com/in/heber-martin-rodriguez/'} target="_blank" className="z-10 flex items-center gap-4 text-gray-600 dark:text-gray-300">
                            <LinkedInIcon className="md:w-4 md:h-4 text-gray-600 dark:text-gray-100 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500" />
                            {LINKEDIN_URL.replace('https://www.','')}
                        </Link>
                        <CornerIcons />
                    </div>

                    {/* DEV GITHUB */}
                    <div className="relative group flex fle-col gap-4 w-120 lg:w-full py-2 px-6">
                        <Link href={GITHUB_URL ?? 'https://github.com/4HMartin'} target="_blank" className="z-10 flex items-center gap-4 text-gray-600 dark:text-gray-300">
                            <GitHubIcon className="md:w-4 md:h-4 text-gray-600 dark:text-gray-100 transition-all duration-150 group-hover:text-primary dark:group-hover:text-violet-500" />
                            {GITHUB_URL.replace('https://','')}
                        </Link>
                        <CornerIcons />
                    </div>

                    <CornerIcons />
                </article>

                {/* FORM SECTION */}
                <article className="relative w-full lg:w-1/2 3xl:w-1/3 lg:min-h-154.5 px-4 xl:px-6 2xl:px-4 py-8 lg:py-10.75 dark:border-b dark:border-dashed dark:border-gray-800">
                    {/* CONTACT FORM - RHF + ZOD */}
                    <ContactForm />

                    <CornerIcons />
                </article>
            </div>
        </section>
    )
}