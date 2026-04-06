/** PRD §10 — Contact & location (real) */

export const CLINIC_NAME = "Kalyan Dental";

export const ADDRESS_LINES = [
  "Door No. 79-2-20/3, Ibaco Lane",
  "Tilak Road, Opposite Canara Bank, Beside IBACO",
  "Srinivas Nagar, Gandhipuram",
  "Rajamahendravaram (Rajahmundry), Andhra Pradesh – 533103",
  "India",
] as const;

export const PHONE_1 = "+91 99854 78470";
export const PHONE_2 = "+91 81288 16769";
export const PHONE_1_TEL = "tel:+919985478470";
export const PHONE_2_TEL = "tel:+918128816769";

export const CLINIC_HOURS = {
  weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
  sunday: "Sunday: 10:00 AM – 1:00 PM",
};

export const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/ohYJuVxYtyCv8V8EA";

/** Client logo — direct CDN URL (hosted at https://postimg.cc/JDkN1MT5) */
export const LOGO_IMAGE_URL =
  "/logo.png";

export const META = {
  title: "Kalyan Dental | Rajamahendravaram's Trusted Dental Care",
  description:
    "Kalyan Dental in Rajahmundry offers comprehensive dental care by 4 specialist doctors. Book an appointment online or call +91 99854 78470.",
} as const;
