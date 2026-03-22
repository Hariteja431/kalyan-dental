"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { awarenessFaq } from "@/lib/awareness-faq";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[var(--color-bg-primary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <h2 className="font-heading mb-10 text-center text-[length:var(--text-h1)] font-bold text-[var(--color-text-primary)]">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <div className="space-y-3">
          {awarenessFaq.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <Reveal key={item.q} staggerIndex={i % 5}>
                <div
                  className={`overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-colors ${
                    isOpen ? "border-l-4 border-l-[var(--color-accent)]" : ""
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full min-h-[52px] items-center justify-between gap-4 px-5 py-4 text-left text-[length:var(--text-body)] font-semibold text-[var(--color-text-primary)]"
                  >
                    {item.q}
                    {isOpen ? (
                      <X className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                    )}
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="border-t border-[var(--color-divider)] px-5 pb-5 pt-3 text-[length:var(--text-body)] leading-relaxed text-[var(--color-text-secondary)]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
