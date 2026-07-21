import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* Words to cycle through */
const WORDS = [
    "FULL-STACK DEVELOPER",
    "WEB DESIGNER",
    "PROGRAMMER",
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "AI ENTHUSIAST",
    "GEEK"
];

/* Character pool used while "scrambling" */
const SCRAMBLE_CHARS = "AB∷◇CD⊹EF◌GH⊹IJ∷◇KL⊹MN◌OP⊹QR∷◇ST⊹UV◌WX⊹YZ∷◇01⊹23◌45⊹67∷◇89";

/* Timing knobs */
const SCRAMBLE_INTERVAL = 35; // ms between scramble frames
const REVEAL_EVERY_N_FRAMES = 2; // reveal a new letter every N frames
const HOLD_TIME = 1400; // ms to hold the fully revealed word

/* Variants for the per-letter "lock-in" pop */
const charVariants = {
    scrambling: { color: "#94a3b8", opacity: 0.65, scale: 1 },
    revealed: { color: "#7f22fe", opacity: 1, scale: [1.15, 1] },
};

function useScrambleCycle(words: string[]) {
    const [display, setDisplay] = useState(words[0]);
    const [revealCount, setRevealCount] = useState(0);
    const wordIndexRef = useRef(0);

    useEffect(() => {
        let cancelled = false;
        let interval: ReturnType<typeof setInterval>;
        let timeout: ReturnType<typeof setTimeout>;

        const runCycle = () => {
            const target = words[wordIndexRef.current];
            let revealed = 0;
            let frame = 0;

            interval = setInterval(() => {
                if (cancelled) return;

                frame++;
                if (frame % REVEAL_EVERY_N_FRAMES === 0 && revealed < target.length) {
                    revealed++;
                }

                const next = target
                    .split("")
                    .map((char, i) => {
                        if (char === " ") return " ";
                        if (i < revealed) return target[i];
                        return SCRAMBLE_CHARS[
                            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                        ];
                    })
                    .join("");

                setDisplay(next);
                setRevealCount(revealed);

                if (revealed >= target.length) {
                    clearInterval(interval);
                    timeout = setTimeout(() => {
                        if (cancelled) return;
                        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
                        runCycle();
                    }, HOLD_TIME);
                }
            }, SCRAMBLE_INTERVAL);
        };

        runCycle();

        return () => {
            cancelled = true;
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [words]);

    return { display, revealCount };
}


/**
 * Component created using Claude Sonnet 5 (High).
 * 
 * How it works
 * 
 * Scramble loop: Every 35ms, the word rebuilds itself — letters not yet "locked" get a random character from SCRAMBLE_CHARS, while already-revealed letters stay fixed.
 * 
 * Progressive reveal: Every 2 frames, one more letter (left to right) gets permanently locked in, until the whole word is revealed.
 * 
 * Hold + cycle: Once fully revealed, it holds for 1400ms, then moves to the next word in the array and repeats — infinitely.
 * 
 * Framer Motion's job: Each letter is a motion.span that pops (scale + color shift) the moment it locks in, using variants (scrambling → revealed).
 * @returns 
 */
export default function ScrambleText() {
    const { display, revealCount } = useScrambleCycle(WORDS);

    return (
        <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
            className="uppercase font-mono font-bold tracking-wide text-violet-600 text-base xl:text-lg mb-4 flex flex-wrap"
        >
            {display.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={charVariants}
                    animate={i < revealCount ? "revealed" : "scrambling"}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="inline-block min-w-[0.65em] text-center"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h2>
    );
}