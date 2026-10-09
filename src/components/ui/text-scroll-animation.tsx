import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.45], [distanceFromCenter * 16, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [distanceFromCenter * 12, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.35, 1]);

  return (
    <motion.span
      className="inline-block text-[#1F3D2F] font-heading select-none transition-colors"
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

export const Skiper31 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = ["Allahabad", "High", "Court"];
  const allCharacters = words.join(" ").split("");
  const centerIndex = Math.floor(allCharacters.length / 2);

  // Keep track of global character offset across words
  let globalCharIndex = 0;

  return (
    <div
      ref={targetRef}
      className="w-full bg-[#ECEAE5] overflow-hidden border-t border-[#DAD8D2] relative box-border flex flex-col items-center justify-center py-8 sm:py-14 md:py-20 px-4 sm:px-8"
    >
      {/* Kinetic Text Reveal: Words grouped in whitespace-nowrap spans */}
      <div
        className="w-full max-w-6xl text-center text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#1A1A18] font-heading"
        style={{ perspective: "800px" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-5 md:gap-x-6 gap-y-1 sm:gap-y-2">
          {words.map((word, wordIdx) => {
            const wordChars = word.split("");
            const wordStartIdx = globalCharIndex;
            globalCharIndex += wordChars.length + 1; // +1 accounts for space

            return (
              <span key={wordIdx} className="inline-flex whitespace-nowrap">
                {wordChars.map((char, charIdx) => {
                  const currIdx = wordStartIdx + charIdx;
                  return (
                    <CharacterV1
                      key={currIdx}
                      char={char}
                      index={currIdx}
                      centerIndex={centerIndex}
                      scrollYProgress={scrollYProgress}
                    />
                  );
                })}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CharacterV1 };
export default Skiper31;
