"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { InfographicPlaceholder } from "@/components/ui/InfographicPlaceholder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { treatments, type TreatmentItem } from "@/lib/awareness-treatments";

const treatmentImages: Record<string, { src: string; alt: string }> = {
  filling: {
    src: "/api/understanding-treatment-images/tooth%20filling.png",
    alt: "Tooth filling infographic",
  },
  rct: {
    src: "/api/understanding-treatment-images/rootcanal%20treatment.png",
    alt: "Root canal treatment infographic",
  },
  extraction: {
    src: "/api/understanding-treatment-images/Tooth%20extraction.png",
    alt: "Tooth extraction infographic",
  },
  implant: {
    src: "/api/understanding-treatment-images/Dental%20Implant.png",
    alt: "Dental implant infographic",
  },
  ortho: {
    src: "/api/understanding-treatment-images/dental%20Braces.png",
    alt: "Dental braces infographic",
  },
  crown: {
    src: "/api/understanding-treatment-images/dental%20crown.png",
    alt: "Dental crown infographic",
  },
  whitening: {
    src: "/api/understanding-treatment-images/teetch%20whitening.png",
    alt: "Professional teeth whitening infographic",
  },
  srp: {
    src: "/api/understanding-treatment-images/scaling%20and%20root%20planing.svg",
    alt: "Scaling and root planing infographic",
  },
  bridge: {
    src: "/api/understanding-treatment-images/Dental%20bridge.png",
    alt: "Dental bridge infographic",
  },
};

function PainBadge({ t }: { t: TreatmentItem }) {
  const map = {
    low: { emoji: "🟢", label: "Low" },
    moderate: { emoji: "🟡", label: "Moderate" },
    managed: { emoji: "🟡", label: "Managed" },
  };
  const m = map[t.pain];
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
      {m.emoji} {m.label} — {t.painNote}
    </span>
  );
}

export function TreatmentGuide() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="treatment-guide"
      className="scroll-mt-24 bg-[var(--color-bg-primary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <SectionEyebrow className="text-center">Understanding Your Treatment</SectionEyebrow>
            <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold text-[var(--color-text-primary)]">
              What Happens During Your Dental Procedure
            </h2>
            <p className="mx-auto max-w-2xl text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
              Knowledge removes fear. Here&apos;s an honest, simple walkthrough
              of the most common dental treatments — what they involve and what
              to expect.
            </p>
          </div>
        </Reveal>

        <div className="grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((item, i) => {
            const open = openId === item.id;
            const img = treatmentImages[item.id];
            return (
              <Reveal key={item.id} staggerIndex={i % 6}>
                <article className="flex w-full min-h-[310px] min-w-0 flex-col overflow-visible rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[var(--shadow-sm)]">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex min-h-[310px] w-full min-w-0 flex-col items-start gap-2 p-6 text-left transition-colors hover:bg-[var(--color-bg-secondary)]"
                    aria-expanded={open}
                  >
                    <span className="text-2xl" aria-hidden>
                      🦷
                    </span>
                    <h3 className="break-words font-heading text-[length:var(--text-h3)] font-semibold text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>
                    <p className="break-words text-sm text-[var(--color-text-secondary)]">
                      {item.short}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      <span className="rounded-full bg-[var(--color-accent-light)] px-2 py-0.5 text-[var(--color-accent)]">
                        {item.duration}
                      </span>
                    </div>
                    <PainBadge t={item} />
                    <ChevronDown
                      className={`ml-auto mt-auto h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {open && (
                    <div className="w-full min-w-0 border-t border-[var(--color-divider)] px-6 pb-6 pt-2">
                      {item.infographic && (
                        <InfographicPlaceholder
                          width={item.infographic.w}
                          height={item.infographic.h}
                          label={item.infographic.label}
                          imageSrc={img?.src}
                          imageAlt={img?.alt}
                          className="mb-4 w-full max-w-full"
                        />
                      )}
                      {item.sections.map((sec, j) => (
                        <div key={j} className="mt-4 first:mt-0">
                          {sec.title && (
                            <h4 className="break-words font-heading mb-2 text-sm font-semibold text-[var(--color-primary)]">
                              {sec.title}
                            </h4>
                          )}
                          {sec.body?.map((line) => (
                            <p
                              key={line}
                              className="break-words text-sm leading-relaxed text-[var(--color-text-secondary)]"
                            >
                              {line}
                            </p>
                          ))}
                          {sec.list && (
                            <ul className="mt-2 w-full break-words list-disc space-y-1 pl-5 text-sm text-[var(--color-text-secondary)]">
                              {sec.list.map((li) => (
                                <li key={li}>{li}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
