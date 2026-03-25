"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop&q=80";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [hideHint, setHideHint] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setHideHint(y > 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = scrollY * 0.4;

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <div className="relative h-[100dvh] min-h-[100dvh] w-full overflow-hidden md:min-h-[600px]">
          <Image
            src={HERO_IMAGE}
            alt="Modern, bright dental clinic interior at Kalyan Dental"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_72%] md:object-center"
            style={{
              animation: "kenBurns 12s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(11,76,108,0.85)] via-[rgba(11,76,108,0.45)] to-transparent md:bg-gradient-to-r md:from-[rgba(11,76,108,0.85)] md:via-[rgba(11,76,108,0.35)] md:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(11,76,108,0.75)] to-transparent md:hidden"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-4 pb-28 pt-28 md:px-6 md:pb-20">
        <div className="max-w-2xl text-center md:text-left">
          <p
            className="mb-4 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)] opacity-0"
            style={{
              animation: "fadeUp 0.7s var(--ease-out) 0ms forwards",
            }}
          >
            Rajamahendravaram&apos;s Trusted Dental Care
          </p>
          <h1
            className="font-heading mb-6 max-w-xl break-words text-[length:var(--text-display)] font-extrabold leading-[1.05] text-white opacity-0"
            style={{
              animation: "fadeUp 0.7s var(--ease-out) 150ms forwards",
            }}
          >
            Your Healthiest Smile Starts Here
          </h1>
          <p
            className="mx-auto mb-10 max-w-[520px] text-[length:var(--text-body-lg)] leading-relaxed text-white/90 opacity-0 md:mx-0"
            style={{
              animation: "fadeUp 0.7s var(--ease-out) 300ms forwards",
            }}
          >
            Comprehensive dental care for your entire family — from routine
            cleanings to advanced procedures, delivered with precision and warmth.
          </p>
          <div
            className="flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center sm:justify-start md:justify-start"
            style={{
              animation: "fadeUp 0.7s var(--ease-out) 450ms forwards",
            }}
          >
            <Link
              href="/#appointment"
              className="inline-flex min-h-[48px] min-w-[44px] items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-cta)] px-8 py-3 text-center text-sm font-semibold text-white transition-transform duration-[var(--transition-base)] hover:scale-[1.02] hover:bg-[var(--color-cta-hover)]"
            >
              Book an Appointment
            </Link>
            <Link
              href="/#services"
              className="inline-flex min-h-[48px] min-w-[44px] items-center justify-center rounded-[var(--radius-md)] border border-white/90 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-300 md:bottom-10 ${
            hideHint ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-wider text-white/80">
            Scroll to explore
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce text-white/90" aria-hidden />
        </div>

      </div>
    </section>
  );
}
