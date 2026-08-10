import Header from "@/components/layout/Header";
import { SearchAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
    const t = useTranslations("not-found");

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-bold flex flex-col items-center justify-center uppercase text-gray-300 tracking-wider">
                    <SearchAlert className="w-6 text-gray-300" />
                    error
                </h1>
                <p className="text-xl mt-4 uppercase text-gray-500 tracking-wider">
                    {t("page_not_found_label").replaceAll(' ', '_')}
                </p>
                {/* <Link href="/" className="mt-6 underline text-primary">
                    {t("back_to_home_label")}
                </Link> */}
            </main>
        </>
    );
}