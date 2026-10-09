import { useState } from 'react';
import { PracticeArea } from '../data/practice';
import { TextRollLink } from './ui/text-roll';
import { BlurImage } from './ui/blur-image';

interface PracticeCardProps {
  practice: PracticeArea;
}

export function PracticeCard({ practice }: PracticeCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col h-full">
      {/* 4:5 Image container with rounded corners and chips overlay */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#ECEAE5] border border-[#DAD8D2]">
        {!imgError ? (
          <BlurImage
            src={practice.image.url}
            alt={practice.image.alt}
            width={practice.image.width}
            height={practice.image.height}
            fill
            onError={() => setImgError(true)}
            className="h-full w-full object-cover filter grayscale-[0.35] contrast-[1.05] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#ECEAE5] text-[#6B6A65] p-6 text-center">
            <span className="font-heading text-lg font-medium text-[#1A1A18]/60">
              {practice.title}
            </span>
          </div>
        )}

        {/* Subtle photo contrast scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B]/40 via-transparent to-[#0C0C0B]/30 pointer-events-none"
          aria-hidden="true"
        />

        {/* Chips overlaid top-left (white outline chips on the photo) */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5 max-w-[85%]">
          {practice.chips.map((chip, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-full border border-white/50 bg-[#0C0C0B]/30 backdrop-blur-xs text-[0.8125rem] font-medium text-white select-none"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Card Info below image */}
      <div className="pt-5 sm:pt-6 flex flex-col flex-grow items-start">
        <h3 className="font-heading text-[1.375rem] sm:text-[1.5rem] font-medium leading-[1.2] text-[#1A1A18] tracking-[-0.01em] mb-2 group-hover:text-[#1F3D2F] transition-colors">
          {practice.title}
        </h3>

        <p className="text-[1rem] leading-[1.6] text-[#6B6A65] mb-4 flex-grow max-w-[50ch]">
          {practice.description}
        </p>

        <TextRollLink href="#contact" showArrow={true}>
          Discuss a matter
        </TextRollLink>
      </div>
    </article>
  );
}
