import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

  const STATIC_DATE = new Date("2026-06-05T00:00:00.000Z");

  return [
    {
      url: SITE_URL,
      lastModified: STATIC_DATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/clinic`,
      lastModified: STATIC_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/awareness`,
      lastModified: STATIC_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
