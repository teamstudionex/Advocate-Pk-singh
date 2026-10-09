import { useState } from 'react';
import { FileText, Calendar, Scroll, HelpCircle, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { images } from '../data/images';
import { SectionLabel } from './SectionLabel';
import { TextRollLink } from './ui/text-roll';
import { BlurFade } from './ui/blur-fade';
import { BlurImage } from './ui/blur-image';

export function Prepare() {
  const [chamberImgError, setChamberImgError] = useState(false);

  return (
    <section id="prepare" className="py-7 sm:py-20 md:py-32 bg-[#ECEAE5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-5 sm:mb-16">
          <BlurFade delay={0.05}>
            <SectionLabel className="mb-2 sm:mb-4">
              Before you come
            </SectionLabel>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h2 className="font-heading text-[clamp(1.5rem,4.2vw,3.75rem)] font-medium leading-[1.12] sm:leading-[1.06] text-[#1A1A18] tracking-[-0.03em] mb-1.5 sm:mb-4">
              Papers that help at the first meeting
            </h2>
          </BlurFade>

          <BlurFade delay={0.18}>
            <p className="text-[0.8125rem] sm:text-[1.125rem] text-[#6B6A65] leading-[1.45] sm:leading-[1.6] max-w-[56ch]">
              Copies are enough for a first discussion. Bring whatever you have; the advocate will say what else is needed.
            </p>
          </BlurFade>
        </div>

        {/* 12-Column Bento Grid: compact on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-4 md:gap-5">
          {/* Tile 1: Court papers (md: 7 cols) */}
          <div className="sm:col-span-2 md:col-span-7">
            <BlurFade delay={0.1}>
              <div className="h-full rounded-[16px] sm:rounded-[28px] bg-[#FFFFFF] border border-[#DAD8D2] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-[#1F3D2F]/30 transition-colors">
                <div>
                  <div className="mb-2 sm:mb-6 text-[#1A1A18]">
                    <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-[#1A1A18]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] sm:text-[1.375rem] md:text-[1.5rem] font-medium leading-[1.25] text-[#1A1A18] mb-1 sm:mb-3">
                    Court papers
                  </h3>
                  <p className="text-[0.78125rem] sm:text-[1rem] md:text-[1.0625rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65] max-w-[48ch]">
                    Orders, the case number and certified copies, if the matter is already in court. Include the last order sheet.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Tile 2: A one-page timeline (md: 5 cols) */}
          <div className="sm:col-span-2 md:col-span-5">
            <BlurFade delay={0.16}>
              <div className="h-full rounded-[16px] sm:rounded-[28px] bg-[#FFFFFF] border border-[#DAD8D2] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-[#1F3D2F]/30 transition-colors">
                <div>
                  <div className="mb-2 sm:mb-6 text-[#1A1A18]">
                    <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-[#1A1A18]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] sm:text-[1.375rem] md:text-[1.5rem] font-medium leading-[1.25] text-[#1A1A18] mb-1 sm:mb-3">
                    A one-page timeline
                  </h3>
                  <p className="text-[0.78125rem] sm:text-[1rem] md:text-[1.0625rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65] max-w-[38ch]">
                    Dates and events in order. Of everything you bring, this saves the most time.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Tile 3: Notices and agreements (md: 4 cols) */}
          <div className="sm:col-span-1 md:col-span-4">
            <BlurFade delay={0.22}>
              <div className="h-full rounded-[16px] sm:rounded-[28px] bg-[#FFFFFF] border border-[#DAD8D2] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-[#1F3D2F]/30 transition-colors">
                <div>
                  <div className="mb-2 sm:mb-6 text-[#1A1A18]">
                    <Scroll className="h-4 w-4 sm:h-6 sm:w-6 text-[#1A1A18]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] sm:text-[1.375rem] md:text-[1.5rem] font-medium leading-[1.25] text-[#1A1A18] mb-1 sm:mb-3">
                    Notices and agreements
                  </h3>
                  <p className="text-[0.78125rem] sm:text-[1rem] md:text-[1.0625rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65]">
                    Legal notices, replies, deeds and contracts, signed or served.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Tile 4: Your questions (md: 4 cols) */}
          <div className="sm:col-span-1 md:col-span-4">
            <BlurFade delay={0.28}>
              <div className="h-full rounded-[16px] sm:rounded-[28px] bg-[#FFFFFF] border border-[#DAD8D2] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between group hover:border-[#1F3D2F]/30 transition-colors">
                <div>
                  <div className="mb-2 sm:mb-6 text-[#1A1A18]">
                    <HelpCircle className="h-4 w-4 sm:h-6 sm:w-6 text-[#1A1A18]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[0.95rem] sm:text-[1.375rem] md:text-[1.5rem] font-medium leading-[1.25] text-[#1A1A18] mb-1 sm:mb-3">
                    Your questions
                  </h3>
                  <p className="text-[0.78125rem] sm:text-[1rem] md:text-[1.0625rem] leading-[1.45] sm:leading-[1.6] text-[#6B6A65]">
                    Write down what you want to know, including fees and likely timelines.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Tile 5: Chamber (md: 4 cols, image tile with black overlay, text on dark) */}
          <div className="sm:col-span-2 md:col-span-4">
            <BlurFade delay={0.34}>
              <div className="relative h-full min-h-[130px] sm:min-h-[220px] rounded-[16px] sm:rounded-[28px] overflow-hidden bg-[#0C0C0B] border border-[rgba(246,245,242,0.16)] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between text-[#F6F5F2] group">
                {/* Background image with photo grade and blur-up */}
                {!chamberImgError ? (
                  <BlurImage
                    src={images.chamber.url}
                    alt={images.chamber.alt}
                    width={images.chamber.width}
                    height={images.chamber.height}
                    fill
                    onError={() => setChamberImgError(true)}
                    className="h-full w-full object-cover filter grayscale-[0.35] contrast-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#1A1A18]" />
                )}

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 bg-[#0C0C0B]/65 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-1.5 sm:mb-4 text-[#A9A79F]">
                      <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-[#A9A79F]" strokeWidth={1.5} />
                    </div>
                    <div className="text-[0.6875rem] sm:text-[0.875rem] font-medium text-[#A9A79F] mb-0.5 sm:mb-1">
                      Chamber
                    </div>
                    <h3 className="font-heading text-[0.95rem] sm:text-[1.25rem] md:text-[1.375rem] font-medium leading-[1.3] text-[#F6F5F2] mb-1.5 sm:mb-3">
                      Common Room No. 3, Old Building, High Court
                    </h3>
                  </div>

                  <div className="pt-1 sm:pt-2">
                    <TextRollLink
                      href="#location"
                      className="!text-[#F6F5F2] hover:!text-[#ECEAE5] !text-[0.78125rem] sm:!text-[0.9375rem]"
                    >
                      View on High Court Map
                    </TextRollLink>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
