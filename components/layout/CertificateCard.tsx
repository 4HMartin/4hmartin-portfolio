"use client";
import { useTranslations, useLocale } from "next-intl";
import { Cert, Locale, Project } from "@/data/types";
import Link from "next/link";
import Image from "next/image";
import CornerIcons from "../ui/cornerIcons";
import { Download, ExternalLink } from "lucide-react";


export default function CertificateCard({ cert }: { cert: Cert }) {

    const t = useTranslations('certificates_section');
    const locale = useLocale() as Locale;

    function InfoBadge({ name }: { name: string }) {
        return (
            <span
                className="inline-block border border-violet-300 dark:border-violet-700 text-violet-500 dark:text-violet-400 text-[10px] xs:text-xs px-2 py-0.5"
            >
                {name}
            </span>
        );
    }

    return (
        <div className="p-4 border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors flex flex-col group">
            {/* PLATFORM LOGOTYPE */}
            <div className="relative w-20 mb-4 p-2 dark:bg-gray-900">
                <Image
                    src={cert.platformLogo}
                    alt="Heber Martin Rodriguez - Certificate platform logotype"
                    width={80}
                    height={30}
                />
                <CornerIcons />
            </div>

            {/* PLATFORM */}
            <Link href={cert.courseLink} target="_blank" className="text-xs text-violet-500 capitalize">
                {cert.platform}
            </Link>

            {/* NAME */}
            <h3 className="text-gray-900 dark:text-gray-100 text-xs md:text-sm font-bold leading-tight mb-4">
                {cert.name[locale]}
            </h3>

            {/* OVERVIEW */}
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                {cert.overview[locale]}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-1">
                {cert.tags.map((tag) => (
                    <InfoBadge key={tag} name={tag} />
                ))}
            </div>

            {/* SEPARATOR AUX LINE */}
            <div className="relative w-full h-2 mt-3 mb-4 md:w-full border-b border-dashed border-gray-300
                before:content-['◂'] before:absolute before:-left-1.5 before:-top-1.25 before:text-gray-300
                after:content-['▸'] after:absolute after:-right-1.5 after:-top-1.25 after:text-gray-300"/>
            
            <div className="flex items-center justify-between">
                {/* COURSE LINK */}
                <Link href={cert.courseLink} className="text-gray-500 text-[10px] xs:text-xs uppercase tracking-wider flex items-center gap-2 group transition-all duration-300 hover:text-violet-500">
                   <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-violet-500"/> {t('course-link_label')}
                </Link>

                {/* VERIFY CERTIFICATE */}
                <Link href={`/documents/${cert.filename}`} download className="text-violet-500 text-[10px] xs:text-xs uppercase tracking-wider flex items-center gap-2">
                    {t('verify_label')} <Download className="w-3 h-3 text-violet-500"/>
                </Link>
            </div>
        </div>
    );
}