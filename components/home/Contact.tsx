import SectionHeader from "../layout/SectionHeader";
import { ThemeImage } from "../ui/ThemeImage";
import CityMapLight from "@/public/images/palma_de_mallorca_map_light.webp";
import CityMapDark from "@/public/images/palma_de_mallorca_map_dark.webp";
import { useTranslations } from "next-intl";
import { ContactForm } from "../layout/ContactForm";

export default function Contact() {

    const t = useTranslations('contact_section');

    return (
        <section id="contact" className="relative">
            {/* HEADER */}
            <SectionHeader parentTranslations="contact_section" titleLabel="contact_label" sectionNumber="06" />

            {/* MAIN CONTAINER */}
            <div className="flex flex-col items-center">
                {/* CURRENT LOCATION SECTION */}
                <article className="relative w-full px-4 py-12">
                    {/* BACKGROUND IMAGE */}
                    <ThemeImage
                        lightSrc={CityMapLight}
                        darkSrc={CityMapDark}
                        alt="Heber Martin Rodriguez Portfolio - City Map"
                        fill
                        className="object-cover -z-10 opacity-50"
                        preload
                        quality={100}
                    />
                    {/* TITLE */}
                    <h3 className="text-4xl text-gray-950 uppercase font-bold tracking-widest mb-12">
                        {t('location_label')}
                    </h3>
                    {/* DESCRIPTION */}
                    <p className="text-xs text-gray-800 mb-24">
                        {t('description_paragraph')}
                    </p>
                </article>

                {/* GET IN TOUCH SECTION */}
                <article className="hidden lg:block">

                </article>

                {/* FORM SECTION */}
                <article className="relative w-full px-4 py-8">
                    <ContactForm />
                </article>
            </div>
        </section>
    )
}