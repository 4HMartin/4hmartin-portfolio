import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Download } from "lucide-react";

export default function DownloadCVButton() {

    const locale = useLocale();
    const t = useTranslations('about_section');
    const cvFilename = locale === 'en' ? 'HEBER_MARTIN_RODRIGUEZ_RESUME_CV_2026.pdf' : 'HEBER_MARTIN_RODRIGUEZ_CV_2026.pdf';

    return (
        <Link href={`/documents/${cvFilename}`} download className="flex items-center justify-center w-fit">
            <Button className={`relative group rounded-none xl:px-6 xl:py-6 flex items-center gap-2 uppercase font-bold tracking-widest cursor-pointer text-xs bg-transparent bg-[url("/patterns/diagonal-lines-button-secondary.svg")] bg-repeat text-gray-600 dark:text-gray-300 hover:bg-gray-600 hover:text-white`}>
                {t('download-cv_label')} <Download className="text-gray-600 group-hover:text-white dark:text-gray-300"/>
                
                <span className={`absolute -top-2.5 -left-0.5 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-left-1 group-active:top-0.5 group-active:left-2 text-gray-600`}>
                    ⌜
                </span>
                <span className={`absolute -bottom-2 -left-0.5 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-left-1 group-active:bottom-0.5 group-active:left-2 text-gray-600`}>
                    ⌞
                </span>
                <span className={`absolute -top-2.5 -right-1 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-right-1.5 group-active:top-0.5 group-active:right-2 text-gray-600`}>
                    ⌝
                </span>
                <span className={`absolute -bottom-2 -right-1 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-right-1.5 group-active:bottom-0.5 group-active:right-2 text-gray-600`}>
                    ⌟
                </span>
            </Button>
        </Link >
    )
}