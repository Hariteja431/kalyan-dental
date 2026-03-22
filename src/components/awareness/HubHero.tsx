import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function HubHero() {
  return (
    <section
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:px-6"
      style={{
        background: "linear-gradient(135deg, #0B5E5E 0%, #0B4C6C 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionEyebrow className="text-center text-white/90">
          Dental Awareness Hub
        </SectionEyebrow>
        <h1 className="font-heading mb-6 text-[length:var(--text-display)] font-extrabold leading-[1.05] text-white">
          Know Your Teeth. Love Your Smile.
        </h1>
        <p className="mx-auto max-w-2xl text-[length:var(--text-body-lg)] leading-relaxed text-white/90">
          Everything you need to know about keeping your mouth healthy — from
          simple daily habits to understanding your treatment options. Simple.
          Visual. Trustworthy.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/awareness#prevention"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Prevention
          </Link>
          <Link
            href="/awareness#treatment-guide"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Treatment Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
