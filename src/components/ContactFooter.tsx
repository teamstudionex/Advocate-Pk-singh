import { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import { profile } from '../data/profile';
import { images } from '../data/images';
import { FlowButton } from './ui/flow-button';
import { BlurFade } from './ui/blur-fade';
import { BlurImage } from './ui/blur-image';
import { LegalTermsModal } from './LegalTermsModal';
import { cn } from '../lib/utils';

export function ContactFooter() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const openLegalModal = (_tab?: string) => {
    setLegalModalOpen(true);
  };

  const handleCopy = async (key: string, text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or insecure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 1700);
    } catch {
      // In case of error, select the text in the view
      setCopiedKey(null);
    }
  };

  return (
    <>
      <footer id="contact" className="relative w-full bg-[#0C0C0B] text-[#F6F5F2] pt-4 sm:pt-6">
        {/* Top Contact Panel with Photographic Overlay */}
        <div className="relative w-full overflow-hidden rounded-t-[20px] sm:rounded-t-[32px] bg-[#0C0C0B] border-t border-[rgba(246,245,242,0.16)]">
          {/* Background photo behind reach the chamber (Allahabad High Court Chamber premises) */}
          <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <BlurImage
              src={images.chamber.url}
              alt="High Court of Judicature at Allahabad, Chamber and Premises"
              width={images.chamber.width}
              height={images.chamber.height}
              fill
              className="h-full w-full object-cover filter grayscale-[0.25] contrast-[1.08] opacity-55 sm:opacity-65"
            />
            <div
              className="absolute inset-0 z-20 bg-gradient-to-t from-[#0C0C0B] via-[#0C0C0B]/80 to-[#0C0C0B]/85"
              aria-hidden="true"
            />
          </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 lg:gap-14 items-start mb-5 sm:mb-16">
            {/* Header & Subtitle */}
            <div className="lg:col-span-7">
              <BlurFade delay={0.05}>
                <h2 className="font-heading text-[clamp(1.6rem,4.5vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#F6F5F2] mb-2 sm:mb-6">
                  Reach the chamber.
                </h2>
              </BlurFade>

              <BlurFade delay={0.12}>
                <p className="text-[0.8125rem] sm:text-[1.125rem] text-[#ECEAE5]/85 leading-[1.45] sm:leading-[1.6] max-w-[50ch]">
                  Calling or emailing is the quickest way. Keep the first message short and leave confidential papers for the meeting.
                </p>
              </BlurFade>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-5 flex flex-wrap gap-2.5 sm:gap-4 items-center lg:justify-end">
              <BlurFade delay={0.18}>
                <FlowButton
                  text="Call the chamber"
                  href={`tel:${profile.mobileTel}`}
                  variant="dark"
                  className="!px-6 sm:!px-8 !py-3 sm:!py-3.5 !text-[0.8125rem] sm:!text-[0.95rem]"
                />
              </BlurFade>

              <BlurFade delay={0.24}>
                <FlowButton
                  text="Open in Maps"
                  href={profile.mapsUrl}
                  variant="dark"
                  className="!px-6 sm:!px-8 !py-3 sm:!py-3.5 !text-[0.8125rem] sm:!text-[0.95rem]"
                />
              </BlurFade>
            </div>
          </div>

          {/* Contact Details with Working Copy Buttons */}
          <BlurFade delay={0.3} className="w-full">
            <div className="divide-y divide-[rgba(246,245,242,0.16)] border-t border-b border-[rgba(246,245,242,0.16)]">
              {/* Chamber address */}
              <div className="py-2.5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                <span className="text-[0.6875rem] sm:text-[0.875rem] font-medium text-[#A9A79F] sm:w-32 shrink-0">
                  Chamber
                </span>
                <span className="text-[0.8125rem] sm:text-[1.0625rem] text-[#F6F5F2] select-all flex-grow">
                  {profile.chamber}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy('chamber', profile.chamber)}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full border border-[rgba(246,245,242,0.2)] hover:border-white text-[0.6875rem] sm:text-[0.8125rem] font-medium text-[#ECEAE5] hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy chamber address"
                >
                  {copiedKey === 'chamber' ? (
                    <>
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mobile */}
              <div className="py-2.5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                <span className="text-[0.6875rem] sm:text-[0.875rem] font-medium text-[#A9A79F] sm:w-32 shrink-0">
                  Mobile
                </span>
                <a
                  href={`tel:${profile.mobileTel}`}
                  className="text-[0.8125rem] sm:text-[1.0625rem] text-[#F6F5F2] hover:text-white tabular-nums select-all flex-grow"
                >
                  {profile.mobileDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('mobile', profile.mobileDisplay)}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full border border-[rgba(246,245,242,0.2)] hover:border-white text-[0.6875rem] sm:text-[0.8125rem] font-medium text-[#ECEAE5] hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedKey === 'mobile' ? (
                    <>
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="py-2.5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                <span className="text-[0.6875rem] sm:text-[0.875rem] font-medium text-[#A9A79F] sm:w-32 shrink-0">
                  Email
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[0.8125rem] sm:text-[1.0625rem] text-[#F6F5F2] hover:text-white select-all flex-grow break-all sm:break-normal"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('email', profile.email)}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full border border-[rgba(246,245,242,0.2)] hover:border-white text-[0.6875rem] sm:text-[0.8125rem] font-medium text-[#ECEAE5] hover:text-white transition-colors cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Footer Block */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 pt-8 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-6 md:pb-14">
          {/* Column 1: Wordmark, Credential, Legal Disclaimer Paragraph */}
          <div className="md:col-span-6 flex flex-col items-start">
            <span className="font-heading text-[1.2rem] sm:text-[1.375rem] font-medium text-[#F6F5F2] tracking-tight">
              {profile.name}
            </span>
            <span className="text-[0.8125rem] sm:text-[0.9375rem] text-[#A9A79F] mt-0.5 mb-3 sm:mb-6">
              {profile.title}, {profile.court}
            </span>

            {/* Mandatory Bar Council of India disclaimer paragraph */}
            <p className="text-[0.75rem] sm:text-[0.8125rem] leading-[1.55] sm:leading-[1.65] text-[#A9A79F] max-w-[54ch]">
              Advocate, {profile.barCouncil}, Enrolment No. {profile.enrolmentNo}. In accordance with Rule 36 of the Bar Council of India Rules, this website is maintained solely for general informational purposes. It does not solicit work, advertise, or provide legal advice. Accessing this website or communicating with the chamber does not create an advocate-client relationship.
            </p>

            {/* Regulatory and Statutory Links - Only Terms of Use / Conditions */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-3 border-t border-[rgba(246,245,242,0.1)] text-[0.75rem] text-[#ECEAE5]/75">
              <button
                type="button"
                onClick={() => openLegalModal('terms')}
                className="hover:text-[#F6F5F2] underline underline-offset-4 decoration-[rgba(246,245,242,0.3)] transition-colors cursor-pointer text-left font-medium"
              >
                Terms of Use & Conditions
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="block text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#F6F5F2] mb-2 sm:mb-4">
              Navigation
            </span>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[0.8125rem] sm:text-[0.9375rem] text-[#A9A79F]">
              <li>
                <a href="#about" className="hover:text-[#F6F5F2] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-[#F6F5F2] transition-colors">
                  Areas of practice
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F6F5F2] transition-colors">
                  How a matter begins
                </a>
              </li>
              <li>
                <a href="#prepare" className="hover:text-[#F6F5F2] transition-colors">
                  Before you come
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F6F5F2] transition-colors">
                  Chamber location
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F6F5F2] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F6F5F2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Chamber Info */}
          <div className="md:col-span-3">
            <span className="block text-[0.8125rem] sm:text-[0.875rem] font-medium text-[#F6F5F2] mb-2 sm:mb-4">
              Chamber
            </span>
            <div className="space-y-2 sm:space-y-3 text-[0.8125rem] sm:text-[0.9375rem] text-[#A9A79F]">
              <p className="leading-snug">
                {profile.chamber}
              </p>
              <p>
                <a
                  href={`tel:${profile.mobileTel}`}
                  className="hover:text-[#F6F5F2] transition-colors tabular-nums"
                >
                  {profile.mobileDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-[#F6F5F2] transition-colors"
                >
                  {profile.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row with Hairline */}
        <div className="border-t border-[rgba(246,245,242,0.16)] pt-5 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 text-[0.75rem] sm:text-[0.8125rem] text-[#A9A79F]">
          <div>
            © {currentYear} {profile.name}, {profile.title}
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => openLegalModal('terms')}
              className="hover:text-[#F6F5F2] transition-colors cursor-pointer"
            >
              Terms of Use & Conditions
            </button>
            <span className="text-[#ECEAE5]/30">•</span>
            <span>{profile.court}</span>
          </div>
        </div>
      </div>
    </footer>

    <LegalTermsModal
      isOpen={legalModalOpen}
      onClose={() => setLegalModalOpen(false)}
    />
  </>
  );
}
