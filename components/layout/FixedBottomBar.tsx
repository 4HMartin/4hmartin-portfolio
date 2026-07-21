

export default function FixedBottomBar(){

    return (
        <section className="fixed bottom-0 w-full flex items-center justify-between bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-800">
            {/* AVAILABLE */}
            <article className="text-[10px]">
                <span>◈</span> AVAILABLE
            </article>

            {/* FTWR */}
            <article className="text-[10px]">
                <span>404</span>_FOLLOW_THE_WHITE_RABBIT
            </article>

            {/* BTC */}
            <article className="text-[10px]">
                <span>₿</span> 65.228 $
            </article>
        </section>
    )
}