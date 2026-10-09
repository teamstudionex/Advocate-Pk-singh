import { useEffect } from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';
import { FlowButton } from './ui/flow-button';

interface LegalTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export function LegalTermsModal({ isOpen, onClose }: LegalTermsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0C0C0B]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-[760px] max-h-[90vh] bg-[#F6F5F2] border border-[#DAD8D2] rounded-[24px] sm:rounded-[28px] shadow-2xl overflow-hidden text-[#1A1A18]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#E3E1DA] bg-[#EDEBE6]/70">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-[#1F3D2F]/10 flex items-center justify-center text-[#1F3D2F]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 id="terms-modal-title" className="font-heading text-lg sm:text-xl font-medium text-[#1A1A18] leading-tight">
                Terms of Use & Conditions
              </h2>
              <span className="text-[0.75rem] text-[#6B6A65]">
                Chamber of Advocate {profile.name} • High Court of Judicature at Allahabad
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6B6A65] hover:text-[#1A1A18] rounded-full hover:bg-[#E3E1DA] transition-colors cursor-pointer"
            aria-label="Close terms of use window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terms Content Area */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 text-[0.875rem] sm:text-[0.9375rem] leading-[1.65] text-[#4A4944] space-y-5">
          <div className="p-4 rounded-xl bg-[#EDEBE6] border border-[#DAD8D2]">
            <h3 className="font-heading text-base font-semibold text-[#1A1A18] mb-1">
              General Terms of Website Use & Professional Undertaking
            </h3>
            <p className="text-[0.8125rem] text-[#6B6A65]">
              This digital resource is maintained solely for informational clarity regarding Advocate Pravesh Kumar Singh&apos;s chamber location, enrolment details, and judicial forum before the High Court at Allahabad.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold text-[#1A1A18] text-base mb-1">
                1. Informational Purpose & No Legal Solicitation
              </h4>
              <p className="text-[0.875rem] text-[#55544E]">
                This website does not solicit legal work, advertise services, or provide formal legal opinions. In accordance with professional standards under the Advocates Act, 1961, information published here is intended only for voluntary reference by clients and members of the public seeking chamber contact particulars.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[#1A1A18] text-base mb-1">
                2. No Advocate-Client Relationship
              </h4>
              <p className="text-[0.875rem] text-[#55544E]">
                Browsing this website, reviewing procedure overviews, or contacting the chamber via telephone or email does not constitute or create an advocate-client relationship. Official representation is established solely after personal conference, scrutiny of original certified case records, and execution of a signed Vakalatnama.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[#1A1A18] text-base mb-1">
                3. Non-Reliance for Judicial Proceedings
              </h4>
              <p className="text-[0.875rem] text-[#55544E]">
                Court proceedings before the High Court of Judicature at Allahabad and subordinate judiciary are strictly governed by the High Court Rules, 1952, statutory limitation periods, the Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC, and the Code of Civil Procedure (CPC). Nothing on this platform should be construed as legal advice or taken as a substitute for examining actual court records.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[#1A1A18] text-base mb-1">
                4. Confidentiality & No Online Financial Transactions
              </h4>
              <p className="text-[0.875rem] text-[#55544E]">
                This website does not process payments or accept retainer fees online. All consultations take place at the chamber in the Old Building, High Court premises, Prayagraj. Communication sent to the chamber is treated with strict professional confidentiality in line with statutory standards.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[#1A1A18] text-base mb-1">
                5. Jurisdiction
              </h4>
              <p className="text-[0.875rem] text-[#55544E]">
                Any matters arising out of the use of this website shall be subject exclusively to the jurisdiction of the competent courts at Allahabad (Prayagraj), Uttar Pradesh.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#DAD8D2] flex items-center gap-2 text-xs text-[#6B6A65]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Enrolment No. {profile.enrolmentNo} • Bar Council of Uttar Pradesh</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 border-t border-[#E3E1DA] bg-[#EDEBE6]/50">
          <span className="text-[0.75rem] text-[#6B6A65]">
            Advocate {profile.name} • {profile.court}
          </span>
          <FlowButton
            text="Understood & Close"
            onClick={onClose}
            className="!px-6 !py-2 !text-xs !border-[#1A1A18]/30"
          />
        </div>
      </div>
    </div>
  );
}

export default LegalTermsModal;
