import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 16,
  inViewMargin = "0px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: inViewMargin as any });
  const prefersReducedMotion = useReducedMotion();
  const [forcedVisible, setForcedVisible] = useState(false);

  // Safety fallback: on mobile/tablets or if iframe IntersectionObserver doesn't fire,
  // ensure content is displayed after a short timeout so nothing is ever permanently invisible
  useEffect(() => {
    const timer = setTimeout(() => {
      setForcedVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const isVisible = inView || forcedVisible;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur})`,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: yOffset,
              filter: `blur(${blur})`,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
