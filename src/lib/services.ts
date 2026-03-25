/** PRD §1.4 — Mock services (replace when client provides) */

export type Service = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "checkup",
    title: "Dental Check-up & Cleaning",
    description:
      "Regular exams and professional scaling to keep your teeth healthy.",
    imageSrc: "/api/service-images/dental%20checkup%20and%20cleaning.png",
    imageAlt: "Dentist performing a routine dental check-up and cleaning",
  },
  {
    id: "fillings",
    title: "Tooth Fillings",
    description:
      "Tooth-coloured fillings that restore and protect damaged teeth naturally.",
    imageSrc: "/api/service-images/tooth%20filling.png",
    imageAlt: "Close-up of a tooth filling procedure in a dental clinic",
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    description:
      "Pain-free root canal procedures to save your natural tooth.",
    imageSrc: "/api/service-images/root%20canal%20treatment%20photo.jpg",
    imageAlt: "Dentist performing a root canal treatment with precision tools",
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description:
      "Safe, gentle extractions including wisdom tooth removal.",
    imageSrc: "/api/service-images/tooth%20extraction.jpg",
    imageAlt: "Tooth extraction setup in a sterile dental treatment room",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking replacements for missing teeth.",
    imageSrc: "/api/service-images/dental-implant.webp",
    imageAlt: "Dental implant model and consultation context",
  },
  {
    id: "ortho",
    title: "Orthodontics (Braces & Aligners)",
    description:
      "Traditional braces and clear aligners to straighten your smile.",
    imageSrc: "/api/service-images/Orthodontic%20braces%20and%20aligners.jpg",
    imageAlt: "Orthodontic treatment showing braces or clear aligners",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a noticeably brighter smile.",
    imageSrc: "/api/service-images/teeth%20whitening.jpg",
    imageAlt: "Professional teeth whitening treatment setup",
  },
  {
    id: "crowns",
    title: "Dental Crowns & Bridges",
    description:
      "Restorations that protect and rebuild damaged or missing teeth.",
    imageSrc: "/api/service-images/crowns%20and%20bridges.png",
    imageAlt: "Dental crown and bridge restoration context",
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care from the very first tooth.",
    imageSrc: "/api/service-images/Pediatric-dentistry.jpg",
    imageAlt: "Child-friendly pediatric dental visit",
  },
  {
    id: "gum",
    title: "Gum Disease Treatment",
    description:
      "Diagnosis and treatment of gingivitis and periodontitis.",
    imageSrc: "/api/service-images/gum%20diseas%20treatment.jpg",
    imageAlt: "Dentist examining gum health for periodontal treatment",
  },
  {
    id: "dentures",
    title: "Dentures",
    description:
      "Custom-fitted full and partial dentures for a complete smile.",
    imageSrc: "/api/service-images/denturess.png",
    imageAlt: "Dentures and prosthetic dental consultation context",
  },
  {
    id: "makeover",
    title: "Smile Makeover",
    description:
      "A combination of cosmetic treatments personalized to transform your smile.",
    imageSrc:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=675&fit=crop&q=80",
    imageAlt: "Cosmetic smile makeover consultation and results context",
  },
];

export const serviceOptionsForForm = services.map((s) => ({
  value: s.title,
  label: s.title,
}));
