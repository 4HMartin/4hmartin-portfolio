"use client";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import SectionHeader from "../layout/SectionHeader";
import { useTranslations } from "next-intl";
import { certificates } from "@/data/certificates";
import CertificateCard from "../layout/CertificateCard";

export default function Certificates() {

    return (
        <section id="certs" className="relative bg-white dark:bg-gray-950">
            {/* HEADER */}
            <SectionHeader parentTranslations="certificates_section" titleLabel="certificates_label" sectionNumber="04" />

            {/* PROJECTS CONTAINER */}
            <article className="mb-4 px-4 md:px-22 xl:px-26 2xl:px-52">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:p-6 gap-4 pt-4 xl:pt-10">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.slug}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: "some" }}
                            custom={(index + 2) * 0.2}
                        >
                            <CertificateCard cert={cert} />
                        </motion.div>
                    ))}
                </div>
            </article>
        </section>
    );
}