import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

export interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  containerClassName?: string;
  placeholderColor?: string;
  blurDataURL?: string;
  priority?: boolean;
  aspectRatio?: string;
  fill?: boolean;
  showShimmer?: boolean;
}

// Lightweight inline SVG blur placeholders tailored for legal & architectural imagery
const DEFAULT_PALETTES: Record<string, string> = {
  hero: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231a1917"/><stop offset="50%" stop-color="%233d2c25"/><stop offset="100%" stop-color="%230c0c0b"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/></svg>',
  advocate: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><defs><radialGradient id="g" cx="50%" cy="35%" r="60%"><stop offset="0%" stop-color="%2338332e"/><stop offset="60%" stop-color="%231a1a18"/><stop offset="100%" stop-color="%230c0c0b"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/></svg>',
  court: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23262320"/><stop offset="50%" stop-color="%233e3731"/><stop offset="100%" stop-color="%23151413"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/></svg>',
  practice: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%231f2326"/><stop offset="50%" stop-color="%232b2724"/><stop offset="100%" stop-color="%23121314"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)"/></svg>',
  default: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 3"><rect width="100%" height="100%" fill="%231a1a18"/></svg>',
};

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  placeholderColor,
  blurDataURL,
  priority = false,
  aspectRatio,
  fill = false,
  showShimmer = true,
  onError,
  onLoad,
  ...rest
}: BlurImageProps) {
  // If priority is true, do not start invisible (avoids blank image on mobile/tablet)
  const [isLoaded, setIsLoaded] = useState(() => priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Check if image is already cached/completed in browser memory
  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        setIsLoaded(true);
      }
    }
  }, [src]);

  // Determine appropriate placeholder SVG
  const placeholder = blurDataURL || (
    src.includes('Allahabad-high-court') ? DEFAULT_PALETTES.hero :
    src.includes('image.jpg') ? DEFAULT_PALETTES.advocate :
    src.includes('matters') || src.includes('pretions') || src.includes('litigation') || src.includes('property') ? DEFAULT_PALETTES.practice :
    src.includes('images-9') ? DEFAULT_PALETTES.court :
    DEFAULT_PALETTES.default
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden select-none",
        fill ? "absolute inset-0 h-full w-full" : "",
        containerClassName
      )}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width} / ${height}` : undefined),
        backgroundColor: placeholderColor || '#141413',
      }}
    >
      {/* --- Low-Quality / SVG Blur-Up Placeholder Layer --- */}
      <div
        className={cn(
          "absolute inset-0 z-0 h-full w-full transform scale-110 blur-xl transition-opacity duration-700 ease-out pointer-events-none",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{
          backgroundImage: `url("${placeholder}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      >
        {showShimmer && !isLoaded && (
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        )}
      </div>

      {/* --- Full Resolution Target Image --- */}
      {!hasError ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          onLoad={(e) => {
            setIsLoaded(true);
            onLoad?.(e);
          }}
          onError={(e) => {
            // Only set error if not already loaded
            if (!imgRef.current?.complete) {
              setHasError(true);
            }
            onError?.(e);
          }}
          className={cn(
            "relative z-10 transition-opacity duration-500 ease-out",
            fill ? "h-full w-full object-cover" : "",
            isLoaded || priority ? "opacity-100" : "opacity-0",
            className
          )}
          {...rest}
        />
      ) : (
        /* Fallback placeholder on error */
        <div className="flex h-full w-full items-center justify-center bg-[#1A1A18] text-[#A9A79F] p-4 text-center text-xs">
          <span>{alt || 'Image unavailable'}</span>
        </div>
      )}
    </div>
  );
}
