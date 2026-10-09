import { useState, useEffect } from 'react';
import { SHOW_DISCLAIMER_GATE } from '../config';
import { FlowButton } from './ui/flow-button';

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!SHOW_DISCLAIMER_GATE) return;

    try {
      const accepted = localStorage.getItem('bci_disclaimer_accepted');
      if (!accepted) {
        setIsOpen(true);
      }
    } catch {
      // In case localStorage is blocked
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('bci_disclaimer_accepted', 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  const handleLeave = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0C0C0B]/90 backdrop-blur-md"
    >
      <div className="w-full max-w-[560px] rounded-[28px] bg-[#F6F5F2] border border-[#DAD8D2] p-8 sm:p-10 text-[#1A1A18] shadow-2xl">
        <h2 id="disclaimer-title" className="font-heading text-2xl font-medium mb-4 text-[#1A1A18]">
          Bar Council of India Disclaimer
        </h2>

        <p className="text-[1rem] leading-[1.65] text-[#6B6A65] mb-8">
          As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is provided only for information, at your own request. Nothing here is legal advice, and using this website does not create an advocate-client relationship.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end items-stretch sm:items-center">
          <button
            type="button"
            onClick={handleLeave}
            className="px-6 py-2.5 rounded-full border border-[#DAD8D2] text-[#1A1A18] text-sm font-semibold hover:bg-black/5 transition-all cursor-pointer"
          >
            Leave
          </button>

          <FlowButton
            text="I understand"
            onClick={handleAccept}
            className="!px-7 !py-2.5 !text-sm"
          />
        </div>
      </div>
    </div>
  );
}
