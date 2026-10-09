import React from 'react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speedSeconds?: number;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speedSeconds = 38,
  pauseOnHover = true,
}: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0",
          !prefersReducedMotion && "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        <div className="flex items-center shrink-0 pr-8">{children}</div>
        <div className="flex items-center shrink-0 pr-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
