export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Transmission of details",
    description: "Basic record of the litigating parties, the lower court or tribunal, and current listing status of the matter.",
  },
  {
    number: "02",
    title: "Examination of records",
    description: "Certified copies of impugned orders, earlier pleadings, statutory notices and an orderly chronology of events.",
  },
  {
    number: "03",
    title: "Legal assessment",
    description: "Appraisal of judicial maintainability, applicable writ or appellate jurisdiction, and statutory limitation.",
  },
  {
    number: "04",
    title: "Vakalatnama & filing",
    description: "Execution of the formal vakalatnama and presentation of the memorandum or petition before the High Court registry.",
  },
];
