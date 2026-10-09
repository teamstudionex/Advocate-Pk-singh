import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { profile } from '../data/profile';
import { images } from '../data/images';
import { SHOW_HINDI_LINE } from '../config';
import { SectionLabel } from './SectionLabel';
import { FlowButton } from './ui/flow-button';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax on photograph: translateY 0 to 8%
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-[100svh] min-h-[100svh] sm:h-auto sm:min-h-[92svh] lg:min-h-[94svh] w-full overflow-hidden rounded-b-[24px] sm:rounded-b-[32px] bg-[#0C0C0B] flex flex-col justify-end"
    >
      {/* Background Photograph with Scale Entrance, Parallax & Blur-Up Placeholder */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#141413]"
        style={prefersReducedMotion ? {} : { y: photoY }}
      >
        {/* Instant Blur-Up Placeholder (0ms render, improves LCP) */}
        <div
          className="absolute inset-0 z-0 h-full w-full transform scale-110 blur-xl pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%231a1917'/><stop offset='50%' stop-color='%233d2c25'/><stop offset='100%' stop-color='%230c0c0b'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>

        {/* High-Resolution Hero Photograph */}
        <motion.img
          src={images.hero.url}
          alt={images.hero.alt}
          width={images.hero.width}
          height={images.hero.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="relative z-10 h-full w-full object-cover object-center filter grayscale-[0.35] contrast-[1.05]"
          initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Precise Dual-Layer Overlay from Section 6.1 */}
        <div
          className="absolute inset-0 z-20 bg-[#0C0C0B]/40 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-[#0C0C0B]/30 to-[#0C0C0B]/80 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-32 pb-7 sm:pb-14 md:pb-20">
        {/* Label */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2.5 sm:mb-6 flex flex-col gap-1.5"
        >
          <SectionLabel variant="dark">
            {profile.court}
          </SectionLabel>
        </motion.div>

        {/* Main 2-column or stacked layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-end">
          {/* Headline (Columns 1-7): Two-line fixed break with overflow-hidden mask reveal */}
          <div className="lg:col-span-7">
            <h1 className="font-heading font-medium text-[#F6F5F2] leading-[1.05] tracking-[-0.04em] text-[clamp(1.75rem,5.8vw,6.5rem)]">
              <span className="block overflow-hidden pb-0.5 sm:pb-1">
                <motion.span
                  className="block"
                  initial={prefersReducedMotion ? { y: 0 } : { y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  Pravesh Kumar Singh
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-0.5 sm:pb-1">
                <motion.span
                  className="block"
                  initial={prefersReducedMotion ? { y: 0 } : { y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.0, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  Advocate, High Court.
                </motion.span>
              </span>
            </h1>

            {/* Hindi line below the hero headline */}
            {SHOW_HINDI_LINE && (
              <motion.p
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="font-hindi text-[clamp(0.875rem,1.5vw,1.375rem)] text-[#A9A79F] font-normal tracking-normal mt-2 sm:mt-6 leading-[1.35]"
              >
                न्याय की हर सीढ़ी पर, आपके साथ।
              </motion.p>
            )}
          </div>

          {/* Right Column (Columns 8-12): Sentence, Chips, CTA */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-start gap-3 sm:gap-6 pb-1"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mobile & Tablet Advocate Portrait Badge */}
            <div className="flex lg:hidden items-center gap-3 p-1.5 pr-4 rounded-full bg-[rgba(246,245,242,0.08)] border border-[rgba(246,245,242,0.18)] backdrop-blur-md">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D4AF37]/50 shrink-0 shadow-xs bg-[#1F3D2F]">
                <img
                  src={profile.photo}
                  alt={`Advocate ${profile.name}`}
                  className="w-full h-full object-cover object-[50%_20%]"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <span className="block text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#F6F5F2] leading-tight">
                  {profile.name}
                </span>
                <span className="block text-[0.6875rem] sm:text-[0.75rem] text-[#A9A79F] leading-tight">
                  Enrolment No. {profile.enrolmentNo} • High Court
                </span>
              </div>
            </div>

            {/* Sentence */}
            <p className="text-[0.875rem] sm:text-[1.125rem] leading-[1.45] sm:leading-[1.6] text-[#ECEAE5]/90 max-w-[50ch] font-normal">
              Advocate Pravesh Kumar Singh practises before the High Court of Judicature at Allahabad, from a chamber in the Old Building.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full border border-[rgba(246,245,242,0.16)] text-[0.72rem] sm:text-[0.875rem] font-medium text-[#A9A79F] backdrop-blur-xs">
                Writ petitions
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full border border-[rgba(246,245,242,0.16)] text-[0.72rem] sm:text-[0.875rem] font-medium text-[#A9A79F] backdrop-blur-xs">
                Criminal matters
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full border border-[rgba(246,245,242,0.16)] text-[0.72rem] sm:text-[0.875rem] font-medium text-[#A9A79F] backdrop-blur-xs">
                Civil litigation
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <FlowButton
                text="Chamber information"
                href="#contact"
                variant="dark"
                className="!px-6 sm:!px-8 !py-3 sm:!py-3.5 !text-[0.8125rem] sm:!text-[0.95rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
