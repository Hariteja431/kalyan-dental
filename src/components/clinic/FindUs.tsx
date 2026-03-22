import Link from "next/link";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  ADDRESS_LINES,
  CLINIC_HOURS,
  GOOGLE_MAPS_URL,
  PHONE_1,
  PHONE_2,
  PHONE_1_TEL,
  PHONE_2_TEL,
} from "@/lib/constants";

export function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-[var(--color-bg-secondary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionEyebrow>Find Us</SectionEyebrow>
            <h2 className="font-heading mb-8 text-[length:var(--text-h1)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
              We&apos;re Easy to Find
            </h2>
            <div className="space-y-6 text-[length:var(--text-body)] text-[var(--color-text-secondary)]">
              <div>
                <p className="mb-2 font-semibold text-[var(--color-text-primary)]">
                  Address
                </p>
                <p className="max-w-[65ch]">
                  📍 {ADDRESS_LINES.join(", ")}
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[var(--color-text-primary)]">
                  Phone
                </p>
                <p>
                  <a href={PHONE_1_TEL} className="hover:text-[var(--color-accent)]">
                    📞 {PHONE_1}
                  </a>
                </p>
                <p>
                  <a href={PHONE_2_TEL} className="hover:text-[var(--color-accent)]">
                    📞 {PHONE_2}
                  </a>
                </p>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[var(--color-text-primary)]">
                  Hours
                </p>
                <p>🕘 {CLINIC_HOURS.weekdays}</p>
                <p>🚫 {CLINIC_HOURS.sunday}</p>
              </div>
            </div>
          </Reveal>

          <Reveal staggerIndex={2}>
            <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]">
              <div className="relative aspect-[4/3] w-full bg-[var(--color-divider)]">
                <iframe
                  title="Kalyan Dental on Google Maps"
                  src="https://www.google.com/maps?q=Kalyan+Dental+Rajahmundry&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 bg-[var(--color-bg-card)] p-4">
                <p className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                  Tap to open directions in Google Maps
                </p>
                <Link
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
                >
                  📍 Open in Google Maps
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
