import { profile } from './profile';

export interface ImageData {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export const images = {
  hero: {
    url: "https://i.ibb.co/rfwMttZc/Allahabad-high-court.jpg",
    alt: "High Court of Judicature at Allahabad historic building facade",
    width: 2400,
    height: 1350,
  },
  advocate: {
    url: profile.photo,
    alt: "Advocate Pravesh Kumar Singh",
    width: 640,
    height: 640,
  },
  chamber: {
    url: "https://i.ibb.co/M5Gt6Vtf/images-9.jpg",
    alt: "High Court of Judicature at Allahabad, Old Building premises",
    width: 1200,
    height: 900,
  },
  courtSecondary: {
    url: "https://i.ibb.co/M5Gt6Vtf/images-9.jpg",
    alt: "Allahabad High Court premises and chamber corridor",
    width: 1200,
    height: 900,
  },
  practice: {
    writ: {
      url: "https://i.ibb.co/JWgkjdKK/writ-pretions.png",
      alt: "Writ Petitions before Allahabad High Court",
      width: 1200,
      height: 900,
    },
    criminal: {
      url: "https://i.ibb.co/9mHk191V/criminal-matters.png",
      alt: "Criminal Matters before Allahabad High Court",
      width: 1200,
      height: 900,
    },
    civil: {
      url: "https://i.ibb.co/JFW6HCXy/civil-litigation.png",
      alt: "Civil Litigation before Allahabad High Court",
      width: 1200,
      height: 900,
    },
    property: {
      url: "https://i.ibb.co/CKstxbmC/property-land.png",
      alt: "Property and Land Disputes Allahabad High Court",
      width: 1200,
      height: 900,
    },
    service: {
      url: "https://i.ibb.co/dJBNvZwM/service-matters.png",
      alt: "Service Matters before Allahabad High Court",
      width: 1200,
      height: 900,
    },
    family: {
      url: "https://i.ibb.co/1tT9NVXQ/Family-matters.png",
      alt: "Family Matters before Allahabad High Court",
      width: 1200,
      height: 900,
    },
  },
};
