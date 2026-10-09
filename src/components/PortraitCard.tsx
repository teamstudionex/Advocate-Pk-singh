import { useState } from 'react';
import { motion } from 'motion/react';
import { profile } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { BlurImage } from './ui/blur-image';
import { cn } from '../lib/utils';

interface PortraitCardProps {
  className?: string;
}

export function PortraitCard({ className }: PortraitCardProps = {}) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "group relative w-full aspect-[4/5] rounded-[20px] sm:rounded-[26px] lg:rounded-[28px] overflow-hidden bg-[#ECEAE5] border border-[#DAD8D2] select-none shadow-md transition-shadow hover:shadow-xl",
        "w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] mx-auto lg:ml-auto",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="region"
      aria-label="Portrait and credentials of Advocate Pravesh Kumar Singh"
    >
      {/* Advocate Portrait Image with Blur-Up or Fallback */}
      {!imageError ? (
        <BlurImage
          src={profile.photo}
          alt={`Advocate ${profile.name}`}
          width={640}
          height={640}
          fill
          priority={true}
          containerClassName="h-full w-full"
          onError={() => {
            // Check if naturalWidth is > 0 before marking error
            setImageError(false);
          }}
          className="h-full w-full object-cover object-[50%_20%] filter grayscale-[0.06] contrast-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      ) : (
        /* Fallback with direct img tag */
        <img
          src={profile.photo}
          alt={`Advocate ${profile.name}`}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-[50%_20%]"
        />
      )}

      {/* Permanent subtle bottom gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B]/90 via-[#0C0C0B]/25 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Default At-Rest Caption (Bottom Left) */}
      <div
        className={`absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 z-10 transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none sm:opacity-0' : 'opacity-100'
        }`}
      >
        <span className="block text-[0.75rem] sm:text-[0.875rem] font-medium text-[#ECEAE5]/80">
          {profile.title}
        </span>
        <h3 className="font-heading text-[1.15rem] sm:text-[1.5rem] font-medium text-[#F6F5F2] leading-tight mt-0.5">
          {profile.name}
        </h3>
        <span className="inline-block mt-1 text-[0.7rem] sm:text-[0.75rem] text-[#A9A79F]">
          Enrolment No. {profile.enrolmentNo}
        </span>
      </div>

      {/* Slide-Up Credentials Panel (Hover on desktop, accessible via touch/focus) */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-7 bg-[#0C0C0B]/95 backdrop-blur-md text-[#F6F5F2] border-t border-[rgba(246,245,242,0.12)] flex flex-col justify-end"
        initial={false}
        animate={
          prefersReducedMotion
            ? { opacity: isHovered ? 1 : 0, y: 0 }
            : {
                y: isHovered ? '0%' : '100%',
                opacity: isHovered ? 1 : 0,
              }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="text-[0.75rem] sm:text-[0.8125rem] text-[#A9A79F] font-medium mb-1">
          Bar Council Credentials
        </div>
        <div className="font-heading text-[1.2rem] sm:text-[1.375rem] font-medium text-[#F6F5F2] leading-tight mb-2 sm:mb-3">
          {profile.name}
        </div>
        <div className="space-y-1 sm:space-y-1.5 text-[0.8125rem] sm:text-[0.875rem] text-[#ECEAE5]">
          <div className="flex justify-between border-b border-[rgba(246,245,242,0.12)] pb-1">
            <span className="text-[#A9A79F]">Enrolment No.</span>
            <span className="font-medium tabular-nums">{profile.enrolmentNo}</span>
          </div>
          <div className="flex justify-between border-b border-[rgba(246,245,242,0.12)] pb-1">
            <span className="text-[#A9A79F]">Bar Council</span>
            <span className="font-medium">{profile.barCouncil}</span>
          </div>
          <div className="flex justify-between pt-0.5">
            <span className="text-[#A9A79F]">Enrolled</span>
            <span className="font-medium">12 June 2022</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
