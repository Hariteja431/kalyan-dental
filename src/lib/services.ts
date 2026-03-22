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
    imageSrc:
      "https://images.unsplash.com/photo-1606811971618-4486f45173af?w=800&h=450&fit=crop&q=80",
    imageAlt: "Dental examination and cleaning",
  },
  {
    id: "fillings",
    title: "Tooth Fillings",
    description:
      "Tooth-coloured fillings that restore and protect damaged teeth naturally.",
    imageSrc:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=450&fit=crop&q=80",
    imageAlt: "Dental filling procedure",
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    description:
      "Pain-free root canal procedures to save your natural tooth.",
    imageSrc:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=450&fit=crop&q=80",
    imageAlt: "Root canal treatment",
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description:
      "Safe, gentle extractions including wisdom tooth removal.",
    imageSrc:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=450&fit=crop&q=80",
    imageAlt: "Dental extraction care",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking replacements for missing teeth.",
    imageSrc:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=450&fit=crop&q=80",
    imageAlt: "Dental implant consultation",
  },
  {
    id: "ortho",
    title: "Orthodontics (Braces & Aligners)",
    description:
      "Traditional braces and clear aligners to straighten your smile.",
    imageSrc:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=450&fit=crop&q=80",
    imageAlt: "Orthodontic treatment",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a noticeably brighter smile.",
    imageSrc:
      "https://images.unsplash.com/photo-1559591935-cf8729a8ceb4?w=800&h=450&fit=crop&q=80",
    imageAlt: "Teeth whitening",
  },
  {
    id: "crowns",
    title: "Dental Crowns & Bridges",
    description:
      "Restorations that protect and rebuild damaged or missing teeth.",
    imageSrc:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=450&fit=crop&q=80",
    imageAlt: "Dental crown",
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care from the very first tooth.",
    imageSrc:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=450&fit=crop&q=80",
    imageAlt: "Pediatric dental visit",
  },
  {
    id: "gum",
    title: "Gum Disease Treatment",
    description:
      "Diagnosis and treatment of gingivitis and periodontitis.",
    imageSrc:
      "https://images.unsplash.com/photo-1606811971618-4486f45173af?w=800&h=450&fit=crop&q=80",
    imageAlt: "Gum health examination",
  },
  {
    id: "dentures",
    title: "Dentures",
    description:
      "Custom-fitted full and partial dentures for a complete smile.",
    imageSrc:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=450&fit=crop&q=80",
    imageAlt: "Dentures consultation",
  },
  {
    id: "makeover",
    title: "Smile Makeover",
    description:
      "A combination of cosmetic treatments personalized to transform your smile.",
    imageSrc:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=450&fit=crop&q=80",
    imageAlt: "Smile makeover consultation",
  },
];

export const serviceOptionsForForm = services.map((s) => ({
  value: s.title,
  label: s.title,
}));
