import { useState } from 'react';
import { MapPin, Navigation, Compass, Layers } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { FlowButton } from './ui/flow-button';
import { BlurFade } from './ui/blur-fade';
import { BlurImage } from './ui/blur-image';
import { profile } from '../data/profile';
import { images } from '../data/images';
import { cn } from '../lib/utils';

export function HighCourtMap() {
  const [isInteractive, setIsInteractive] = useState(false);

  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801.2744248840659!2d81.81846689839477!3d25.453342399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb20afb206bd%3A0xbb47a507e1e4fee9!2sAllahabad%20High%20Court!5e0!3m2!1sen!2sin!4v1791522839623!5m2!1sen!2sin";

  return (
    <section id="location" className="py-10 sm:py-20 md:py-32 bg-[#F6F5F2] border-t border-[#DAD8D2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col mb-6 sm:mb-12 md:mb-14">
          <BlurFade delay={0.05}>
            <SectionLabel className="mb-2.5 sm:mb-4">
              Chamber location
            </SectionLabel>
          </BlurFade>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-6">
            <BlurFade delay={0.12}>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] sm:leading-[1.08] text-[#1A1A18] tracking-[-0.03em] max-w-[22ch]">
                High Court of Judicature at Allahabad
              </h2>
            </BlurFade>

            <BlurFade delay={0.18}>
              <p className="text-[0.875rem] sm:text-[1.0625rem] md:text-[1.125rem] text-[#6B6A65] leading-relaxed max-w-[46ch]">
                {profile.chamber}
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Cinematic Map Container */}
        <BlurFade delay={0.24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Left/Main: Cinematic Map Canvas (8 or 9 cols) */}
            <div className="lg:col-span-8 xl:col-span-9 relative w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[520px] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#ECEAE5] border border-[#DAD8D2] shadow-xs group">
              {/* Actual Google Map Iframe with Cinematic Filter */}
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                title="Allahabad High Court Location Map"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className={cn(
                  "w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isInteractive
                    ? "filter-none pointer-events-auto"
                    : "filter grayscale-[0.45] contrast-[1.06] brightness-[0.98] group-hover:grayscale-[0.1] group-hover:contrast-[1.02] pointer-events-none sm:pointer-events-auto"
                )}
              />

              {/* Cinematic Vignette Overlay (fades out when interactive) */}
              <div
                className={cn(
                  "absolute inset-0 pointer-events-none transition-opacity duration-500",
                  "bg-gradient-to-t from-[#0C0C0B]/60 via-transparent to-[#0C0C0B]/25",
                  isInteractive ? "opacity-20" : "opacity-80"
                )}
                aria-hidden="true"
              />

              {/* Cinematic Top HUD Bar */}
              <div className="absolute top-3 sm:top-6 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between pointer-events-none gap-2">
                {/* Radar beacon & Coordinate badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#0C0C0B]/85 backdrop-blur-md text-[#F6F5F2] border border-[rgba(246,245,242,0.18)] shadow-sm select-none">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[0.6875rem] sm:text-[0.8125rem] font-medium tracking-tight whitespace-nowrap">
                    Allahabad High Court
                  </span>
                  <span className="hidden sm:inline text-[0.75rem] text-[#A9A79F] font-mono border-l border-white/20 pl-2">
                    25.4533° N, 81.8185° E
                  </span>
                </div>

                {/* Direct Google Maps Navigation Button */}
                <div className="pointer-events-auto">
                  <a
                    href={profile.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-white/95 hover:bg-white text-[#1A1A18] text-[0.6875rem] sm:text-[0.8125rem] font-medium border border-[#DAD8D2] shadow-xs hover:shadow transition-all"
                  >
                    <Navigation className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1F3D2F]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Cinematic Bottom HUD Bar */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between gap-2 pointer-events-none">
                {/* Chamber Address Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl bg-[#0C0C0B]/85 backdrop-blur-md text-[#F6F5F2] border border-[rgba(246,245,242,0.18)] text-[0.6875rem] sm:text-[0.8125rem] shadow-sm max-w-[65%] sm:max-w-none">
                  <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#A9A79F] shrink-0" />
                  <span className="font-medium text-[#ECEAE5] truncate">
                    Common Room No. 3
                  </span>
                </div>

                {/* Interactive Mode Toggle */}
                <button
                  type="button"
                  onClick={() => setIsInteractive(!isInteractive)}
                  className="pointer-events-auto inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#0C0C0B]/85 hover:bg-[#0C0C0B] backdrop-blur-md text-[#F6F5F2] border border-[rgba(246,245,242,0.2)] text-[0.6875rem] sm:text-[0.8125rem] font-medium transition-all shadow-sm cursor-pointer select-none shrink-0"
                  aria-pressed={isInteractive}
                >
                  <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                  <span>
                    {isInteractive ? "Cinematic Tone" : "Interact"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Architectural Photo Card & Building Context (4 or 3 cols) */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between gap-3 sm:gap-5">
              {/* Architectural Image Card featuring the courtSecondary photo with blur-up */}
              <div className="group relative w-full h-[150px] sm:h-[220px] lg:h-auto lg:flex-1 rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#0C0C0B] border border-[#DAD8D2]">
                <BlurImage
                  src={images.courtSecondary.url}
                  alt={images.courtSecondary.alt}
                  width={images.courtSecondary.width}
                  height={images.courtSecondary.height}
                  fill
                  className="h-full w-full object-cover filter grayscale-[0.35] contrast-[1.05] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B]/85 via-[#0C0C0B]/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 text-[#F6F5F2]">
                  <span className="text-[0.625rem] sm:text-[0.75rem] font-medium uppercase tracking-wider text-[#A9A79F] block mb-0.5 sm:mb-1">
                    High Court Complex
                  </span>
                  <h3 className="font-heading text-sm sm:text-lg font-medium text-white leading-snug">
                    Old Building Chamber
                  </h3>
                  <p className="text-[0.625rem] sm:text-xs text-[#ECEAE5]/80 mt-0.5 sm:mt-1">
                    Judicature at Allahabad
                  </p>
                </div>
              </div>

              {/* Fast Information Card */}
              <div className="p-4 sm:p-6 rounded-[20px] sm:rounded-[28px] bg-white border border-[#DAD8D2] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.6875rem] sm:text-xs font-medium uppercase tracking-wider text-[#6B6A65] mb-1.5 sm:mb-2">
                    <Compass className="h-3.5 w-3.5 text-[#1F3D2F]" />
                    <span>Court Timings & Access</span>
                  </div>
                  <p className="text-[0.8125rem] sm:text-sm leading-relaxed text-[#1A1A18] font-medium">
                    High Court of Judicature at Allahabad operates during official judicial working hours.
                  </p>
                  <p className="text-[0.75rem] sm:text-xs leading-relaxed text-[#6B6A65] mt-1.5 sm:mt-2">
                    Litigants are advised to coordinate with the chamber prior to visiting the Old Building.
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-3 border-t border-[#DAD8D2] flex justify-center">
                  <FlowButton
                    text="Open in Maps"
                    href={profile.mapsUrl}
                    variant="light"
                    className="w-full justify-center !py-2.5 sm:!py-3 !text-xs sm:!text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
