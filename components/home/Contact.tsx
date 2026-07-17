import SectionHeader from "../layout/SectionHeader";


export default function Contact() {
    return (
        <section id="contact" className="relative bg-white dark:bg-gray-950">
            {/* HEADER */}
            <SectionHeader parentTranslations="contact_section" titleLabel="contact_label" sectionNumber="06" />
        </section>
    )
}