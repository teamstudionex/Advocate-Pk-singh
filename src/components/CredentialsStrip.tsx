import { Marquee } from './ui/marquee';

export function CredentialsStrip() {
  const credentials = [
    "Advocate",
    "High Court of Judicature at Allahabad",
    "Bar Council of Uttar Pradesh",
    "Enrolment No. 9089/2022",
    "Enrolled 12 June 2022",
    "Chamber: Common Room No. 3, Old Building",
  ];

  return (
    <aside
      aria-label="Advocate Credentials"
      className="w-full bg-[#F6F5F2] border-t border-b border-[#DAD8D2] py-2 sm:py-4 select-none overflow-hidden"
    >
      <Marquee speedSeconds={38} pauseOnHover={true}>
        <div className="flex items-center gap-4 sm:gap-6 text-[0.78125rem] sm:text-[1rem] text-[#6B6A65] font-normal tracking-normal whitespace-nowrap">
          {credentials.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6">
              <span>{item}</span>
              <span
                className="h-1 w-1 rounded-full bg-[#6B6A65]/50 inline-block shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </aside>
  );
}
