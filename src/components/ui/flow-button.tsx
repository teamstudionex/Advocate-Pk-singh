// This is file of your component
import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'light' | 'dark';
}

export function FlowButton({ text = "Modern Button", href, className = "", variant = 'light', onClick, ...props }: FlowButtonProps) {
  const isDark = variant === 'dark';

  const content = (
    <>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={`absolute w-4 h-4 left-[-25%] z-[9] group-hover:left-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark 
            ? 'stroke-[#F6F5F2] fill-none group-hover:stroke-[#111111]' 
            : 'stroke-[#111111] fill-none group-hover:stroke-white'
        }`}
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle */}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-[50%] opacity-0 group-hover:w-[280px] group-hover:h-[280px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isDark ? 'bg-[#F6F5F2]' : 'bg-[#111111]'
      }`}></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={`absolute w-4 h-4 right-4 z-[9] group-hover:right-[-25%] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark 
            ? 'stroke-[#F6F5F2] fill-none group-hover:stroke-[#111111]' 
            : 'stroke-[#111111] fill-none group-hover:stroke-white'
        }`}
      />
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] bg-transparent px-7 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap select-none transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:rounded-[14px] active:scale-[0.96] ${
    isDark
      ? 'border-[rgba(246,245,242,0.3)] text-[#F6F5F2] hover:text-[#111111]'
      : 'border-[#333333]/40 text-[#111111] hover:text-white'
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}

export default FlowButton;
