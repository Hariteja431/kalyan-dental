"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { services } from "@/lib/services";

const INITIAL = 6;

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? services : services.slice(0, INITIAL);

  return (
    <section
      id="services"
      className="bg-[var(--color-bg-secondary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <SectionEyebrow className="text-center">What We Do</SectionEyebrow>
            <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
              Complete Dental Care Under One Roof
            </h2>
            <p className="mx-auto max-w-2xl text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
              From your child&apos;s first check-up to smile transformations for
              adults — every service delivered by specialists.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => (
            <Reveal key={s.id} staggerIndex={i % 6}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] shadow-[var(--shadow-sm)] transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-md)]">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[var(--transition-slow)] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[var(--color-accent)]/0 transition-colors duration-[var(--transition-base)] group-hover:bg-[var(--color-accent)]/10" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading mb-2 text-[length:var(--text-h3)] font-semibold text-[var(--color-text-primary)]">
                    {s.title}
                  </h3>
                  <p className="mb-4 flex-1 text-[length:var(--text-body-sm)] text-[var(--color-text-secondary)]">
                    {s.description}
                  </p>
                  <Link
                    href="/#appointment"
                    className="text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!showAll && services.length > INITIAL && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex min-h-[48px] items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-[var(--color-primary)] transition-all duration-[var(--transition-base)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
