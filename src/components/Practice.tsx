import { CinematicList, type CinematicItemProps } from './ui/cinematic-list';
import { SectionLabel } from './SectionLabel';
import { BlurFade } from './ui/blur-fade';
import { images } from '../data/images';

export function Practice() {
  const matters: CinematicItemProps[] = [
    {
      id: "01",
      title: "Writ Petitions",
      category: "Articles 226 & 227",
      description: "Constitutional remedies, mandamus, certiorari and petitions before the High Court.",
      src: images.practice.writ.url,
      alt: images.practice.writ.alt,
    },
    {
      id: "02",
      title: "Criminal Matters",
      category: "Bail & Quashing",
      description: "Bail applications, quashing under Section 482 Cr.P.C., and criminal revisions.",
      src: images.practice.criminal.url,
      alt: images.practice.criminal.alt,
    },
    {
      id: "03",
      title: "Civil Litigation",
      category: "Appeals & Execution",
      description: "First appeals, second appeals, stay applications and execution proceedings.",
      src: images.practice.civil.url,
      alt: images.practice.civil.alt,
    },
    {
      id: "04",
      title: "Property & Land",
      category: "Title & Revenue",
      description: "Title disputes, partition, tenancy and revenue court appellate matters.",
      src: images.practice.property.url,
      alt: images.practice.property.alt,
    },
    {
      id: "05",
      title: "Service Matters",
      category: "Public Employment",
      description: "Appointments, promotions, seniority, departmental actions and pensionary claims.",
      src: images.practice.service.url,
      alt: images.practice.service.alt,
    },
    {
      id: "06",
      title: "Family Matters",
      category: "Matrimonial",
      description: "Matrimonial appeals, maintenance, custody and related judicial proceedings.",
      src: images.practice.family.url,
      alt: images.practice.family.alt,
    },
  ];

  return (
    <section id="practice" className="py-7 sm:py-20 md:py-32 bg-white border-t border-[#DAD8D2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-5 sm:mb-16">
          <BlurFade delay={0.05}>
            <SectionLabel className="mb-2 sm:mb-4">
              Areas of practice
            </SectionLabel>
          </BlurFade>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 sm:gap-6">
            <BlurFade delay={0.12}>
              <h2 className="font-heading text-[clamp(1.5rem,4.2vw,3.75rem)] font-medium leading-[1.12] sm:leading-[1.06] text-[#1A1A18] tracking-[-0.03em] max-w-[20ch]">
                Matters the chamber takes up
              </h2>
            </BlurFade>

            <BlurFade delay={0.18}>
              <p className="text-[0.8125rem] sm:text-[1.125rem] text-[#6B6A65] leading-[1.45] sm:leading-[1.6] max-w-[42ch]">
                Before the High Court of Judicature at Allahabad and related appellate forums.
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Clean Line-by-Line Cinematic List Component */}
        <BlurFade delay={0.24}>
          <CinematicList items={matters} />
        </BlurFade>
      </div>
    </section>
  );
}
