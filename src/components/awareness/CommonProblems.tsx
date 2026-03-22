"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { InfographicPlaceholder } from "@/components/ui/InfographicPlaceholder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { problemTabs } from "@/lib/awareness-problems";

export function CommonProblems() {
  const [active, setActive] = useState(problemTabs[0].id);
  const tab = problemTabs.find((t) => t.id === active) ?? problemTabs[0];

  return (
    <section
      id="problems"
      className="scroll-mt-24 bg-[var(--color-bg-secondary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <SectionEyebrow className="text-center">Know What You&apos;re Facing</SectionEyebrow>
            <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold text-[var(--color-text-primary)]">
              Common Dental Problems Explained Simply
            </h2>
            <p className="mx-auto max-w-2xl text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
              Noticing something unusual? Here&apos;s what different symptoms
              might mean — and why seeing a dentist early always helps.
            </p>
          </div>
        </Reveal>

        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:justify-center"
          role="tablist"
          aria-label="Dental problems"
        >
          {problemTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`min-h-[44px] shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === t.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-[var(--color-text-secondary)] ring-1 ring-[var(--color-border)] hover:text-[var(--color-primary)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <Reveal staggerIndex={1}>
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-bg-card)] p-6 shadow-[var(--shadow-md)] md:p-10">
            <InfographicPlaceholder
              width={tab.infographic.w}
              height={tab.infographic.h}
              label={tab.infographic.label}
              className="mb-8 w-full max-w-2xl mx-auto"
            />
            <div className="prose prose-neutral max-w-none">
              {tab.blocks.map((b, i) => {
                if (b.type === "h4") {
                  return (
                    <h4
                      key={i}
                      className="font-heading mt-6 mb-2 text-[length:var(--text-h4)] font-semibold text-[var(--color-text-primary)] first:mt-0"
                    >
                      {b.text}
                    </h4>
                  );
                }
                if (b.type === "p") {
                  return (
                    <p
                      key={i}
                      className="max-w-[65ch] text-[length:var(--text-body)] text-[var(--color-text-secondary)]"
                    >
                      {b.text}
                    </p>
                  );
                }
                if (b.type === "list" && b.items) {
                  return (
                    <ul
                      key={i}
                      className="mt-2 list-disc space-y-1 pl-5 text-[length:var(--text-body)] text-[var(--color-text-secondary)]"
                    >
                      {b.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "callout") {
                  return (
                    <div
                      key={i}
                      className="mt-6 border-l-4 border-[var(--color-warning)] bg-[var(--color-accent-light)]/50 p-4 text-[length:var(--text-body)] text-[var(--color-text-primary)]"
                    >
                      ⚠ {b.text}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
