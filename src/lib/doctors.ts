/** PRD §1.3 — Mock doctor data (replace when client provides) */

export type Doctor = {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  imageSrc: string;
  imageAlt: string;
};

export const doctors: Doctor[] = [
  {
    id: "kiran",
    name: "Dr. Kiran Kumar Reddy",
    designation: "Chief Dental Surgeon",
    qualification: "BDS, MDS (Oral Surgery)",
    imageSrc:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    imageAlt: "Portrait placeholder for Dr. Kiran Kumar Reddy",
  },
  {
    id: "swetha",
    name: "Dr. Swetha Varma",
    designation: "Cosmetic & Aesthetic Dentist",
    qualification: "BDS, MDS (Prosthodontics)",
    imageSrc:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
    imageAlt: "Portrait placeholder for Dr. Swetha Varma",
  },
  {
    id: "aditya",
    name: "Dr. Aditya Prasad",
    designation: "Orthodontist",
    qualification: "BDS, MDS (Orthodontics)",
    imageSrc:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&q=80",
    imageAlt: "Portrait placeholder for Dr. Aditya Prasad",
  },
  {
    id: "lalitha",
    name: "Dr. Lalitha Devi",
    designation: "Pediatric Dentist",
    qualification: "BDS, MDS (Pediatric Dentistry)",
    imageSrc:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80",
    imageAlt: "Portrait placeholder for Dr. Lalitha Devi",
  },
];

export const doctorOptionsForForm = [
  { value: "", label: "No preference" },
  ...doctors.map((d) => ({ value: d.name, label: d.name })),
];
