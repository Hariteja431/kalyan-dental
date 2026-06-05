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
    id: "kalyan",
    name: "Dr. Kalyan K.S.V.K",
    designation: "Orthodontics, Invisalign Certified",
    qualification: "MDS",
    imageSrc: "/images/doctors/kalyan.png",
    imageAlt: "Portrait of Dr. Kalyan K.S.V.K",
  },
  {
    id: "jhansi",
    name: "Dr. Jhansi K",
    designation: "Dental Surgeon",
    qualification: "BDS",
    imageSrc: "/images/doctors/jhansi.png",
    imageAlt: "Portrait of Dr. Jhansi K",
  },
  {
    id: "durga-lakshmi",
    name: "Dr. Bh DURGA LAKSHMI",
    designation: "Dental Surgeon",
    qualification: "BDS",
    imageSrc: "/images/doctors/lakshmi.png",
    imageAlt: "Portrait of Dr. Bh DURGA LAKSHMI",
  },
];

export const doctorOptionsForForm = [
  { value: "", label: "No preference" },
  ...doctors.map((d) => ({ value: d.name, label: d.name })),
];
