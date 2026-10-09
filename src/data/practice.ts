import { images } from './images';

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  chips: string[];
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'writ-petitions',
    title: 'Writ petitions',
    description: 'Petitions under Articles 226 and 227 against orders or inaction of public authorities.',
    chips: ['Article 226', 'Article 227'],
    image: images.practice.writ,
  },
  {
    id: 'criminal-matters',
    title: 'Criminal matters',
    description: 'Bail applications, quashing of proceedings and criminal revisions.',
    chips: ['Bail', 'Quashing', 'Revision'],
    image: images.practice.criminal,
  },
  {
    id: 'civil-litigation',
    title: 'Civil litigation',
    description: 'Suits, first and second appeals, and execution of decrees.',
    chips: ['Appeals', 'Execution'],
    image: images.practice.civil,
  },
  {
    id: 'property-and-land',
    title: 'Property and land',
    description: 'Title disputes, partition, tenancy and revenue court matters.',
    chips: ['Title', 'Partition', 'Tenancy'],
    image: images.practice.property,
  },
  {
    id: 'service-matters',
    title: 'Service matters',
    description: 'Appointment, promotion, disciplinary action and retirement-benefit disputes.',
    chips: ['Disciplinary', 'Pension'],
    image: images.practice.service,
  },
  {
    id: 'family-matters',
    title: 'Family matters',
    description: 'Divorce, maintenance, custody and related proceedings.',
    chips: ['Maintenance', 'Custody'],
    image: images.practice.family,
  },
];
