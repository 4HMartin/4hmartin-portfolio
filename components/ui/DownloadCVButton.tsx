import Link from "next/link";
import { Button } from "@/components/ui/button";
import CornerIcons from "./cornerIcons";
import { useLocale, useTranslations } from "next-intl";

export default function DownloadCVButton() {

    const locale = useLocale();
    const t = useTranslations('about_section');
    const cvFilename = locale === 'en' ? 'HEBER_MARTIN_RODRIGUEZ_RESUME_CV_2026.pdf' : 'HEBER_MARTIN_RODRIGUEZ_CV_2026.pdf';

    return (
        <Link href={`/documents/${cvFilename}`} download className="flex items-center justify-center w-fit">
            <Button className={`relative group rounded-none uppercase font-bold tracking-widest cursor-pointer text-xs bg-transparent bg-[url("/patterns/diagonal-lines-button-secondary.svg")] bg-repeat text-gray-600 hover:bg-gray-600 hover:text-white`}>
                {t('download-cv_label')} #
                <CornerIcons />
            </Button>
        </Link >
    )
}