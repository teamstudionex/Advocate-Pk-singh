import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TextRollButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: 'primary' | 'secondary' | 'dark-primary' | 'ghost';
  showArrow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function TextRollButton({
  children,
  variant = 'primary',
  showArrow = true,
  href,
  target,
  rel,
  className,
  onClick,
  ...props
}: TextRollButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  // Style variants
  const baseClasses =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors cursor-pointer select-none";

  const sizeClasses = "h-[42px] sm:h-[52px] px-5 sm:px-7 text-[0.875rem] sm:text-[0.95rem]";

  const variantClasses = {
    primary:
      "bg-[#1F3D2F] text-[#F6F5F2] hover:bg-[#2A5240] active:scale-[0.99]",
    secondary:
      "bg-transparent text-current border border-current/40 hover:border-current hover:bg-black/5 active:scale-[0.99]",
    'dark-primary':
      "bg-[#F6F5F2] text-[#0C0C0B] hover:bg-[#ECEAE5] active:scale-[0.99]",
    ghost:
      "bg-transparent text-current hover:text-[#1F3D2F] p-0 h-auto",
  }[variant];

  const content = (
    <>
      <span className="relative inline-block overflow-hidden h-[1.3em] leading-[1.3em]">
        {prefersReducedMotion ? (
          <span>{children}</span>
        ) : (
          <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            <span className="block">{children}</span>
            <span className="block absolute left-0 top-full" aria-hidden="true">
              {children}
            </span>
          </span>
        )}
      </span>
      {showArrow && (
        <ArrowUpRight
          className={cn(
            "ml-2 h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !prefersReducedMotion && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          )}
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(baseClasses, sizeClasses, variantClasses, className)}
        onClick={onClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

interface TextRollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  showArrow?: boolean;
  className?: string;
}

export function TextRollLink({
  children,
  showArrow = true,
  className,
  ...props
}: TextRollLinkProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <a
      className={cn(
        "group inline-flex items-center text-[0.9375rem] font-medium text-[#1A1A18] hover:text-[#1F3D2F] transition-colors cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="relative inline-block overflow-hidden h-[1.3em] leading-[1.3em]">
        {prefersReducedMotion ? (
          <span>{children}</span>
        ) : (
          <span className="block transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            <span className="block">{children}</span>
            <span className="block absolute left-0 top-full" aria-hidden="true">
              {children}
            </span>
          </span>
        )}
      </span>
      {showArrow && (
        <ArrowUpRight
          className={cn(
            "ml-1 h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !prefersReducedMotion && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          )}
          strokeWidth={1.75}
        />
      )}
    </a>
  );
}
