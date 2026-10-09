import React from 'react';
import { cn } from '../lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export function SectionLabel({
  children,
  variant = 'light',
  className,
}: SectionLabelProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[0.875rem] font-medium leading-[1.4] select-none",
        isDark ? "text-[#A9A79F]" : "text-[#6B6A65]",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-1.5 w-1.5 rounded-full shrink-0",
          isDark ? "bg-[#2A5240]" : "bg-[#1F3D2F]"
        )}
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
}
