import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { META, SITE_URL } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: META.title,
  description: META.description,
  keywords: [
    "Kalyan Dental",
    "Kalyan Dental Hospitals",
    "Best dental hospitals in Rajahmundry",
    "Top dentist in Rajamahendravaram",
    "Dental clinic near me",
    "Root canal treatment Rajahmundry",
    "Dental implants",
    "Braces and Invisalign",
    "Cosmetic dentistry Rajahmundry",
  ],
  openGraph: {
    title: META.title,
    description: META.description,
    locale: "en_IN",
    type: "website",
    url: SITE_URL,
    siteName: "Kalyan Dental Hospitals",
  },
  icons: {
    icon: "/kalyan-dental-hospitals-logo.jpeg",
  },
};

export const viewport = {
  width: "device-width" as const,
  initialScale: 1,
  themeColor: "#0B4C6C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full min-w-0 overflow-x-hidden bg-[var(--color-bg-primary)] font-sans text-[var(--color-text-primary)]">
        <LocalBusinessJsonLd />
        <ReadingProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
