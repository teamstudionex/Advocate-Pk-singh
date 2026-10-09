import { useState } from "react";
import { MoveRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { BlurImage } from "./blur-image";

export interface CinematicItemProps {
  id: string;
  title: string;
  category: string;
  description?: string;
  src?: string;
  alt?: string;
}

interface CinematicListItemProps extends CinematicItemProps {
  onClick?: () => void;
}

export function CinematicListItem({
  id,
  title,
  category,
  description,
  src,
  alt = "",
  onClick,
}: CinematicListItemProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      role="listitem"
      tabIndex={0}
      className={cn(
        "group relative flex w-full cursor-pointer flex-col justify-center overflow-hidden border-b border-[#DAD8D2] bg-white",
        // Height Transition: fast start, slow end (Quartz ease)
        "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
        // Mobile: comfortable height / Desktop: starts compact, smoothly expands on hover
        "min-h-[64px] sm:min-h-[76px] py-3.5 sm:py-5 md:py-0 md:h-28 md:hover:h-56"
      )}
    >
      {/* --- Background Image Layer (Subtle architectural reveal on hover with blur-up) --- */}
      {src && !imgError && (
        <div className="absolute inset-0 z-0 h-full w-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 pointer-events-none">
          <BlurImage
            src={src}
            alt={alt}
            fill
            onError={() => setImgError(true)}
            className="h-full w-full object-cover filter grayscale-[0.35] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-100 scale-110"
          />
          {/* Tone overlay in website palette: soft contrast gradient */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0C0C0B]/85 via-[#0C0C0B]/60 to-[#0C0C0B]/30" />
        </div>
      )}

      {/* --- Content Layer in Website Colour Theory --- */}
      <div className="relative z-10 flex w-full items-center justify-between px-3 sm:px-8 md:px-12">
        {/* Left Side: ID & Title & Description */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0 flex-1 pr-2">
          <span className="font-mono text-xs sm:text-base font-medium text-[#6B6A65] transition-colors duration-500 group-hover:text-[#F6F5F2]/80 shrink-0">
            {id}
          </span>

          <div className="flex flex-col min-w-0 flex-1">
            <h3
              className={cn(
                "font-heading text-base sm:text-2xl md:text-3xl font-medium tracking-tight text-[#1A1A18]",
                "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                // On hover, title slides up smoothly and changes to white when photo overlay is present
                "group-hover:-translate-y-0.5 group-hover:text-white"
              )}
            >
              {title}
            </h3>

            {/* Description / Scope note */}
            {description && (
              <p
                className={cn(
                  "text-[0.75rem] sm:text-sm text-[#6B6A65] transition-colors duration-500 max-w-[50ch] mt-0.5 sm:mt-1",
                  "group-hover:text-[#ECEAE5]/90"
                )}
              >
                {description}
              </p>
            )}

            {/* Category note on mobile */}
            <span className="block text-[0.6875rem] font-medium text-[#6B6A65] group-hover:text-[#ECEAE5] md:hidden mt-1">
              {category}
            </span>
          </div>
        </div>

        {/* Leader line guiding the eye across the row on large screens */}
        <div className="hidden lg:block flex-1 mx-4 sm:mx-6 border-b border-dotted border-[#DAD8D2]/80 group-hover:border-white/30 transition-colors" />

        {/* Right Side: Category Badge & Action */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0 ml-2">
          {/* Category: Title/sentence case without long uppercase run */}
          <span className="hidden text-xs sm:text-sm font-medium text-[#6B6A65] transition-all duration-500 group-hover:text-[#F6F5F2] md:block">
            {category}
          </span>

          {/* Icon Circle in Website Theme (Border #DAD8D2 -> Forest green on hover) */}
          <div
            className={cn(
              "flex h-6 w-6 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
              "border-[#DAD8D2] text-[#6B6A65] bg-transparent",
              "group-hover:border-[#1F3D2F] group-hover:bg-[#1F3D2F] group-hover:text-[#F6F5F2]",
              "group-hover:scale-110"
            )}
          >
            <MoveRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-500 group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface CinematicListProps {
  items: CinematicItemProps[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function CinematicList({
  items,
  title,
  subtitle,
  className,
}: CinematicListProps) {
  return (
    <div className={cn("w-full", className)}>
      {(title || subtitle) && (
        <div className="mb-10 flex items-end justify-between px-2 sm:px-4">
          {title && (
            <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1A18]">
              {title}
            </h2>
          )}
          {subtitle && (
            <span className="hidden text-sm font-medium text-[#6B6A65] md:block">
              {subtitle}
            </span>
          )}
        </div>
      )}

      <div
        role="list"
        aria-label="Areas of Practice"
        className="flex flex-col border-t border-[#DAD8D2]"
      >
        {items.map((item) => (
          <CinematicListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
