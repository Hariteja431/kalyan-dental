import { ADDRESS_LINES, CLINIC_NAME, PHONE_1, SITE_URL, LOGO_IMAGE_URL } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalOrganization", "LocalBusiness"],
        "@id": `${SITE_URL}/#clinic`,
        name: `${CLINIC_NAME} Hospitals`,
        alternateName: "Kalyan Dental",
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_IMAGE_URL}`,
        image: `${SITE_URL}${LOGO_IMAGE_URL}`,
        description: "Best dental hospital in Rajahmundry offering root canal treatment, dental implants, orthodontic braces, and cosmetic dentistry.",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS_LINES.slice(0, 2).join(", "),
          addressLocality: "Rajamahendravaram",
          addressRegion: "Andhra Pradesh",
          postalCode: "533103",
          addressCountry: "IN",
        },
        telephone: [PHONE_1],
        priceRange: "$$",
        medicalSpecialty: [
          "Dentistry",
          "Orthodontic",
          "Endodontic",
          "Cosmetic Dentistry",
          "Implantology",
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Rajahmundry",
          },
          {
            "@type": "City",
            name: "Rajamahendravaram",
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "10:00",
            closes: "13:00",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
