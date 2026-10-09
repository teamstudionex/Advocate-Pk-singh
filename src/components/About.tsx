import { profile } from '../data/profile';
import { useYearsSince } from '../hooks/useYearsSince';
import { SectionLabel } from './SectionLabel';
import { PortraitCard } from './PortraitCard';
import { FlowButton } from './ui/flow-button';
import { NumberTicker } from './ui/number-ticker';
import { BlurFade } from './ui/blur-fade';

export function About() {
  const yearsAtBar = useYearsSince(profile.enrolmentDate);

  return (
    <section id="about" className="py-7 sm:py-20 md:py-32 bg-[#F6F5F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols on tablet & desktop, full width on mobile) */}
          <div className="md:col-span-7 flex flex-col items-start w-full">
            <BlurFade delay={0.05}>
              <SectionLabel className="mb-2 sm:mb-6">
                The advocate
              </SectionLabel>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h2 className="font-heading text-[clamp(1.5rem,4.2vw,3.75rem)] font-medium leading-[1.12] sm:leading-[1.06] text-[#1A1A18] tracking-[-0.03em] mb-4 sm:mb-8">
                Careful examination of records, before the courtroom.
              </h2>
            </BlurFade>

            {/* Mobile Portrait Image: prominently placed right below headline on mobile devices (<768px) */}
            <div className="block md:hidden w-full flex justify-center mb-6">
              <PortraitCard className="w-full max-w-[280px] xs:max-w-[320px] shadow-lg" />
            </div>

            <BlurFade delay={0.15}>
              <p className="text-[0.9375rem] sm:text-[1.25rem] md:text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.45] sm:leading-[1.35] text-[#1A1A18] tracking-[-0.02em] max-prose-editorial mb-4 sm:mb-10">
                Every matter starts with the case records. The chamber examines the orders, pleadings and chronology of events to ascertain jurisdiction, maintainability and statutory limitation periods in accordance with the law.
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="mb-6 sm:mb-14">
                <FlowButton
                  text="Chamber information"
                  href="#contact"
                  className="!px-7 !py-3 sm:!py-3.5 !text-[0.875rem] sm:!text-[0.95rem]"
                />
              </div>
            </BlurFade>

            {/* Facts Row: 3 verified statutory credentials, compact on mobile */}
            <BlurFade delay={0.25} className="w-full">
              <div className="w-full pt-4 sm:pt-10 border-t border-[#DAD8D2] grid grid-cols-3 gap-1.5 sm:gap-6">
                {/* Fact 1: State Bar Council */}
                <div className="pr-1.5 sm:pr-6 border-r border-[#DAD8D2]">
                  <div className="font-heading text-[1.15rem] sm:text-[2rem] md:text-[2.25rem] font-medium text-[#1A1A18] leading-none mb-1 sm:mb-2.5">
                    BCUP
                  </div>
                  <p className="text-[0.625rem] sm:text-[0.875rem] leading-[1.25] sm:leading-[1.4] text-[#6B6A65]">
                    Bar Council of Uttar Pradesh
                  </p>
                </div>

                {/* Fact 2: Enrolment No */}
                <div className="px-1.5 sm:px-6 border-r border-[#DAD8D2]">
                  <div className="font-heading text-[1.15rem] sm:text-[2rem] md:text-[2.25rem] font-medium text-[#1A1A18] leading-none mb-1 sm:mb-2.5 tabular-nums">
                    {profile.enrolmentNo}
                  </div>
                  <p className="text-[0.625rem] sm:text-[0.875rem] leading-[1.25] sm:leading-[1.4] text-[#6B6A65]">
                    Enrolment No., Enrolled 12 June 2022
                  </p>
                </div>

                {/* Fact 3: Chamber */}
                <div className="pl-1.5 sm:pl-6">
                  <div className="font-heading text-[1.15rem] sm:text-[2rem] md:text-[2.25rem] font-medium text-[#1A1A18] leading-none mb-1 sm:mb-2.5">
                    Room 3
                  </div>
                  <p className="text-[0.625rem] sm:text-[0.875rem] leading-[1.25] sm:leading-[1.4] text-[#6B6A65]">
                    Common Room, Old Building, High Court
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column (5 cols on tablet & desktop): Portrait Card */}
          <div className="hidden md:block md:col-span-5 w-full">
            <PortraitCard />
          </div>
        </div>
      </div>
    </section>
  );
}
