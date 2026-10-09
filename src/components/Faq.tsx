import { faqItems } from '../data/faq';
import { SectionLabel } from './SectionLabel';
import { FlowButton } from './ui/flow-button';
import { Accordion } from './ui/accordion';
import { BlurFade } from './ui/blur-fade';

export function Faq() {
  const accordionData = faqItems.map((item, index) => ({
    id: `faq-${index}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section id="faq" className="py-10 sm:py-20 md:py-32 bg-[#F6F5F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-start">
          {/* Left Column (5 cols, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <BlurFade delay={0.05}>
              <SectionLabel className="mb-2 sm:mb-4">
                FAQ
              </SectionLabel>
            </BlurFade>

            <BlurFade delay={0.12}>
              <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.15] sm:leading-[1.08] text-[#1A1A18] tracking-[-0.03em] mb-2 sm:mb-6">
                Good to know before you call
              </h2>
            </BlurFade>

            <BlurFade delay={0.18}>
              <p className="text-[0.875rem] sm:text-[1.0625rem] md:text-[1.125rem] leading-relaxed text-[#6B6A65] mb-4 sm:mb-8 max-w-[42ch]">
                Short answers on reaching the chamber and what to prepare.
              </p>
            </BlurFade>

            <BlurFade delay={0.24}>
              <div className="mb-6 sm:mb-0">
                <FlowButton
                  text="Chamber details"
                  href="#contact"
                  className="!px-6 sm:!px-8 !py-3 sm:!py-3.5 !text-[0.8125rem] sm:!text-[0.95rem]"
                />
              </div>
            </BlurFade>
          </div>

          {/* Right Column (7 cols): Accordion */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.15}>
              <Accordion items={accordionData} defaultOpenId="faq-0" />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
