import { Reveal } from "@/components/ui/Reveal";
import { InfographicPlaceholder } from "@/components/ui/InfographicPlaceholder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const timeline = [
  {
    age: "0–6 months",
    milestone: "No teeth yet",
    action: "Gently wipe baby's gums with a soft damp cloth after feedings",
    note: "Avoid putting baby to sleep with a milk bottle — pooled milk causes early decay",
  },
  {
    age: "6–12 months (First Tooth Eruption)",
    milestone: "First baby teeth appear (usually lower front)",
    action: "Start using a soft-bristled infant toothbrush with water",
    note: "Schedule your child's first dental visit by their 1st birthday",
  },
  {
    age: "1–3 years",
    milestone: "All 20 baby teeth appear",
    action: "Use a rice-grain sized smear of fluoride toothpaste from age 1–2; pea-sized from 3",
    note: "Make brushing fun — let them hold the brush, use songs or timers",
  },
  {
    age: "4–6 years",
    milestone: "Ready to start learning to brush alone (with supervision)",
    action: "Dental sealants recommended as baby molars come in",
    note: "First dental X-ray is typically recommended around this age",
  },
  {
    age: "6–12 years",
    milestone: "Mixed dentition — baby teeth falling out, permanent teeth coming in",
    action: "Regular 6-monthly check-ups become especially important",
    note: "Orthodontic evaluation can begin around age 7–8",
  },
  {
    age: "13+ years",
    milestone: "All permanent teeth present (except wisdom teeth)",
    action: "Full orthodontic assessment if not done already",
    note: "Wisdom teeth monitoring begins in late teens",
  },
] as const;

const concerns = [
  {
    q: "My child is 2 and still won't let me brush their teeth. What do I do?",
    a: "Make it a game, not a fight. Use a two-minute song, let them brush your teeth first, then you brush theirs. Consistency always wins — don't skip it.",
  },
  {
    q: "Are baby teeth really that important if they'll fall out anyway?",
    a: "Yes. Baby teeth hold space for permanent teeth. Early loss from decay can cause permanent teeth to erupt crooked, requiring expensive orthodontic correction later.",
  },
  {
    q: "At what age should I take my child for braces?",
    a: "A basic orthodontic check is recommended at age 7, even if treatment won't begin until 11–13. Early assessment can catch problems that are much simpler to fix early.",
  },
] as const;

export function ChildrenHealth() {
  return (
    <section
      id="children"
      className="scroll-mt-24 py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: "rgba(0, 180, 166, 0.06)" }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <SectionEyebrow className="text-center">For Parents</SectionEyebrow>
            <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold text-[var(--color-text-primary)]">
              Your Child&apos;s Dental Journey
            </h2>
            <p className="mx-auto max-w-2xl text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
              Every stage of your child&apos;s dental development matters.
              Here&apos;s what to expect and when.
            </p>
          </div>
        </Reveal>

        <div className="relative space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-[var(--color-accent)]/40 md:before:left-1/2 md:before:-translate-x-1/2">
          {timeline.map((row, i) => (
            <Reveal key={row.age} staggerIndex={i % 4}>
              <div
                className={`relative flex flex-col gap-4 pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-card)] text-xs font-bold text-[var(--color-primary)] md:left-1/2 md:-translate-x-1/2`}
                >
                  {i + 1}
                </div>
                <div className={i % 2 === 1 ? "md:order-2 md:pl-8" : "md:pr-8"}>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                    {row.age}
                  </p>
                  <h3 className="font-heading mt-1 text-[length:var(--text-h3)] font-semibold text-[var(--color-text-primary)]">
                    {row.milestone}
                  </h3>
                  <p className="mt-2 text-[length:var(--text-body)] text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">Action: </strong>
                    {row.action}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    <strong>Note: </strong>
                    {row.note}
                  </p>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""} aria-hidden />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal staggerIndex={2}>
          <InfographicPlaceholder
            width={600}
            height={300}
            label="Infographic: Children's tooth eruption chart — timeline of baby and permanent teeth"
            className="mx-auto mt-16 max-w-4xl"
          />
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl space-y-6">
          <h3 className="font-heading text-center text-[length:var(--text-h2)] font-bold text-[var(--color-primary)]">
            Common Parent Concerns
          </h3>
          {concerns.map((c, i) => (
            <Reveal key={c.q} staggerIndex={i}>
              <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[var(--shadow-sm)]">
                <h4 className="font-heading text-[length:var(--text-h4)] font-semibold text-[var(--color-text-primary)]">
                  Q: {c.q}
                </h4>
                <p className="mt-3 text-[length:var(--text-body)] text-[var(--color-text-secondary)]">
                  A: {c.a}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
