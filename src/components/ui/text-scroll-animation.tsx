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
      className="w-full bg-[#ECEAE5] overflow-hidden border-t border-[#DAD8D2] relative box-border flex flex-col items-center justify-center py-10 sm:py-20 md:py-28 px-4 sm:px-8"
    >
      {/* Editorial Pill */}
      <div className="mb-3.5 sm:mb-6 flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F5F2] border border-[#DAD8D2] shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1F3D2F]" />
        <span className="text-[0.6875rem] sm:text-xs uppercase tracking-widest text-[#6B6A65] font-medium">
          Seat of Judicature • Est. 1866
        </span>
      </div>

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

      <p className="mt-3 sm:mt-5 text-[0.75rem] sm:text-sm text-[#6B6A65] tracking-wide text-center max-w-[42ch] px-2 leading-relaxed">
        Constitutional & Appellate Jurisdictions • High Court of Judicature at Allahabad
      </p>
    </div>
  );
};

export { CharacterV1 };
export default Skiper31;
