import { useState, useEffect, useRef } from 'react';
import { processSteps } from '../data/steps';
import { SectionLabel } from './SectionLabel';
import { FlowButton } from './ui/flow-button';
import { BlurFade } from './ui/blur-fade';
import { cn } from '../lib/utils';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observers = stepRefs.current.map((el, idx) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setActiveStepIndex(idx);
          }
        },
        {
          rootMargin: '-30% 0px -40% 0px',
          threshold: 0.2,
        }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [prefersReducedMotion]);

  return (
    <section id="process" className="py-7 sm:py-20 md:py-32 bg-[#F6F5F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-start">
          {/* Left Column (5 cols, Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <BlurFade delay={0.05}>
              <SectionLabel className="mb-2 sm:mb-4">
                How it works
              </SectionLabel>
            </BlurFade>

            <BlurFade delay={0.12}>
              <h2 className="font-heading text-[clamp(1.5rem,4.2vw,3.5rem)] font-medium leading-[1.12] sm:leading-[1.06] text-[#1A1A18] tracking-[-0.03em] mb-2 sm:mb-6">
                How a matter begins
              </h2>
            </BlurFade>

            <BlurFade delay={0.18}>
              <p className="text-[0.8125rem] sm:text-[1.125rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65] mb-3 sm:mb-8 max-w-[42ch]">
                Standard procedural stages from initial document appraisal to presentation of proceedings before the High Court.
              </p>
            </BlurFade>

            <BlurFade delay={0.24}>
              <div className="mb-4 sm:mb-0">
                <FlowButton
                  text="Chamber details"
                  href="#contact"
                  className="!px-6 sm:!px-8 !py-3 sm:!py-3.5 !text-[0.8125rem] sm:!text-[0.95rem]"
                />
              </div>
            </BlurFade>
          </div>

          {/* Right Column (7 cols): Four Numbered Steps */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#DAD8D2] border-t border-b border-[#DAD8D2]">
            {processSteps.map((step, index) => {
              const isActive = activeStepIndex === index;

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className={cn(
                    "py-2.5 sm:py-8 md:py-12 transition-opacity duration-500 flex flex-row gap-3 sm:gap-10 items-start",
                    isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                  )}
                >
                  {/* Step Numeral: clear visual anchor with strong contrast */}
                  <span
                    className={cn(
                      "font-heading text-[1.4rem] sm:text-[3rem] md:text-[4rem] font-medium leading-none shrink-0 tabular-nums transition-colors duration-400 select-none",
                      isActive ? "text-[#1F3D2F]" : "text-[#7C7A73]"
                    )}
                  >
                    {step.number}
                  </span>

                  {/* Step Title & Description */}
                  <div className="flex flex-col pt-0 sm:pt-2">
                    <h3 className="font-heading text-[0.95rem] sm:text-[1.375rem] md:text-[1.5rem] font-medium leading-[1.25] text-[#1A1A18] mb-0.5 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[0.78125rem] sm:text-[1rem] md:text-[1.0625rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65] max-w-[50ch]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
