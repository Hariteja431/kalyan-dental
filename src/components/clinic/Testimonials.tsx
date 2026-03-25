"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { testimonials } from "@/lib/testimonials";

const AUTO_MS = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      id="testimonials"
      className="bg-[var(--color-bg-primary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <SectionEyebrow className="text-center">Testimonials</SectionEyebrow>
            <h2 className="font-heading text-[length:var(--text-h1)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
              What Our Patients Say
            </h2>
          </div>
        </Reveal>

        <div
          className="relative w-full min-w-0 md:hidden"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full min-w-0 overflow-hidden">
            <div
              className="flex w-full min-w-0 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="w-full min-w-0 shrink-0 basis-full px-1"
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index
                      ? "bg-[var(--color-accent)]"
                      : "bg-[var(--color-border-strong)]"
                  }`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="hidden gap-6 md:grid md:grid-cols-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <article className="mx-auto flex h-full w-full min-w-0 max-w-lg flex-col rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] p-6 shadow-[var(--shadow-md)] sm:p-8 md:max-w-none">
      <span
        className="font-serif-quote mb-2 text-[80px] leading-none text-[var(--color-accent-light)]"
        aria-hidden
      >
        &ldquo;
      </span>
      <blockquote className="font-serif-quote mb-6 flex-1 text-[length:var(--text-body-lg)] italic leading-relaxed text-[var(--color-text-primary)]">
        {t.quote}
      </blockquote>
      <p className="font-heading text-base font-bold text-[var(--color-primary)]">
        {t.name}
      </p>
      <p className="mt-1 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
        {t.treatment}
      </p>
      <p className="mt-3 text-[var(--color-cta)]" aria-label={`${t.stars} out of 5 stars`}>
        {"★".repeat(t.stars)}
        <span className="sr-only"> {t.stars} out of 5</span>
      </p>
    </article>
  );
}
