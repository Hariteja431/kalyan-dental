import { ADDRESS_LINES, CLINIC_NAME, PHONE_1, PHONE_2, SITE_URL, LOGO_IMAGE_URL } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${LOGO_IMAGE_URL}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_LINES.slice(0, 2).join(", "),
      addressLocality: "Rajamahendravaram",
      addressRegion: "Andhra Pradesh",
      postalCode: "533103",
      addressCountry: "IN",
    },
    telephone: [PHONE_1, PHONE_2],
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
