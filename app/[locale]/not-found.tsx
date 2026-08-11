import Header from "@/components/layout/Header";
import CustomCtaButton from "@/components/ui/CustomCtaButton";
import { SearchAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Image404 from "@/public/images/404.webp";
import WhiteRabbit from "@/public/images/white_rabbit.gif";
import { Button } from "@/components/ui/button";

export default function NotFound() {

    const FTWR_ORIGIN = process.env.NEXT_PUBLIC_FTWR_ORIGIN!;

    const t = useTranslations("not-found");

    const CornerPlusIcon = ({ position, color }: { position: string, color: string }) => {
        return (
            // animate-ping ?
            <span className={`absolute ${position} ${color} text-xs bg-gray-950 w-3 flex items-center justify-center rounded-full cursor-default`}>
                ⊹
            </span>
        )
    }

    return (
        <>
            <Header />
            <main className="pt-28 px-4 md:px-17 xl:px-20 2xl:px-48 bg-gray-950 flex flex-col items-center justify-center border-b border-gray-800">
                <h1 className="text-5xl font-bold flex flex-col items-center justify-center gap-2 uppercase text-gray-300 tracking-wider">
                    <SearchAlert className="w-16 h-16 text-gray-300" />
                    error
                </h1>
                <p className="text-2xl mt-2 mb-4 uppercase text-gray-500 tracking-wider">
                    {t("page_not_found_label").replaceAll(' ', '_')}
                </p>

                <section className="relative w-full flex flex-col items-center justify-center border-y border-dashed border-gray-800 bg-[url('/patterns/bg_image_pattern_dots.png')] bg-repeat bg-contain">
                    {/* FTWR BOX */}
                    <article className="absolute z-20 top-0 md:w-fit bg-gray-950 border border-dashed border-lime-800 mt-8 p-1 md:py-2 md:px-4 flex flex-col gap-1 xs:gap-3">

                        <CornerPlusIcon position="-top-2 -left-1.5" color="text-lime-400" />
                        <CornerPlusIcon position="-top-2 -right-1.5" color="text-lime-400" />
                        <CornerPlusIcon position="-bottom-2 -right-1.5" color="text-lime-400" />
                        <CornerPlusIcon position="-bottom-2 -left-1.5" color="text-lime-400" />

                        <p className="text-lime-500 text-sm">
                            FOLLOW_THE_WHITE_RABBIT
                        </p>

                    </article>
                    {/* IMAGE CONTAINER */}
                    <article>
                        <Image
                            src={Image404}
                            alt="Page not found - 404 follow the white rabbit"
                            width={840}
                            height={460}
                            className="w-auto h-auto"
                        />
                    </article>
                </section>

                {/* BACK TO HOME BUTTON CONTAINER */}
                <section className="flex flex-col items-center pb-18">
                    {/* RABBIT GIF CONTAINER */}
                    <Link href={FTWR_ORIGIN} target="_blank" referrerPolicy="no-referrer" className="-mb-2 cursor-pointer">
                        <Image
                            src={WhiteRabbit}
                            alt="Follow the white rabbit"
                            width={80}
                            height={80}
                            unoptimized
                        />
                    </Link>

                    <Link href={'/#hero'}>
                        <Button
                            className={`relative group rounded-none px-6 py-4 uppercase font-bold tracking-widest cursor-pointer text-xs bg-transparent bg-[url("/patterns/diagonal-lines-button-primary.svg")] bg-repeat flex items-center gap-2 text-violet-600 hover:bg-violet-600 hover:text-white dark:hover:text-white`}
                        >
                            {t('back_to_home_label')}

                            <span className={`absolute -top-2.5 -left-0.5 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-left-1 group-active:top-0.5 group-active:left-2 text-violet-600`}>
                                ⌜
                            </span>
                            <span className={`absolute -bottom-2 -left-0.5 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-left-1 group-active:bottom-0.5 group-active:left-2 text-violet-600`}>
                                ⌞
                            </span>
                            <span className={`absolute -top-2.5 -right-1 text-2xl transition-all duration-300 group-hover:-top-3.5 group-hover:-right-1.5 group-active:top-0.5 group-active:right-2 text-violet-600`}>
                                ⌝
                            </span>
                            <span className={`absolute -bottom-2 -right-1 text-2xl transition-all duration-300 group-hover:-bottom-3 group-hover:-right-1.5 group-active:bottom-0.5 group-active:right-2 text-violet-600`}>
                                ⌟
                            </span>
                        </Button>
                    </Link>
                </section>
            </main>
        </>
    );
}