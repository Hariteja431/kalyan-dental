import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import {
  ADDRESS_LINES,
  CLINIC_HOURS,
  GOOGLE_MAPS_URL,
  PHONE_1,
  PHONE_2,
  PHONE_1_TEL,
  PHONE_2_TEL,
} from "@/lib/constants";

const social = [
  { href: "#", label: "Facebook", Icon: Facebook },
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "WhatsApp", Icon: MessageCircle },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-primary)]">
            KD
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/80">
            Kalyan Dental — Caring for your smile with expertise and compassion.
          </p>
          <div className="mt-6 flex gap-3">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 text-white/90 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label={label}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Clinic
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/clinic#about" className="hover:text-[var(--color-accent)]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/clinic#doctors" className="hover:text-[var(--color-accent)]">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link href="/clinic#services" className="hover:text-[var(--color-accent)]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/clinic#testimonials" className="hover:text-[var(--color-accent)]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/clinic#appointment" className="hover:text-[var(--color-accent)]">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Awareness Hub
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/awareness#prevention" className="hover:text-[var(--color-accent)]">
                Prevention Guide
              </Link>
            </li>
            <li>
              <Link href="/awareness#problems" className="hover:text-[var(--color-accent)]">
                Common Problems
              </Link>
            </li>
            <li>
              <Link href="/awareness#treatment-guide" className="hover:text-[var(--color-accent)]">
                Treatment Guide
              </Link>
            </li>
            <li>
              <Link href="/awareness#children" className="hover:text-[var(--color-accent)]">
                Children&apos;s Health
              </Link>
            </li>
            <li>
              <Link href="/awareness#faq" className="hover:text-[var(--color-accent)]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact Us
          </h3>
          <address className="not-italic text-sm leading-relaxed text-white/80">
            <p className="mb-3">
              📍 {ADDRESS_LINES.slice(0, 4).join(", ")}
            </p>
            <p className="mb-1">
              <a href={PHONE_1_TEL} className="hover:text-[var(--color-accent)]">
                📞 {PHONE_1}
              </a>
            </p>
            <p className="mb-3">
              <a href={PHONE_2_TEL} className="hover:text-[var(--color-accent)]">
                📞 {PHONE_2}
              </a>
            </p>
            <p className="mb-1">🕘 {CLINIC_HOURS.weekdays}</p>
            <p className="mb-4">🚫 {CLINIC_HOURS.sunday}</p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[var(--color-accent)] hover:underline"
            >
              Open in Google Maps →
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 Kalyan Dental. All rights reserved. | Designed with care.
      </div>
    </footer>
  );
}
