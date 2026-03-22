import { Clock, MapPin, Smile, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const reasons = [
  {
    title: "Specialist for Every Need",
    body: "Each of our four doctors specializes in a distinct area — so you always see the right expert.",
    Icon: Stethoscope,
  },
  {
    title: "Minimal Waiting Times",
    body: "We respect your time. Our appointments are structured to keep delays minimal.",
    Icon: Clock,
  },
  {
    title: "Conveniently Located",
    body: "Easily accessible near Canara Bank, Tilak Road, Rajamahendravaram.",
    Icon: MapPin,
  },
  {
    title: "Care for All Ages",
    body: "From toddlers to seniors, our team is trained and experienced with every age group.",
    Icon: Smile,
  },
] as const;

export function WhyChoose() {
  return (
    <section className="bg-[var(--color-bg-dark)] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <SectionEyebrow className="text-center text-[var(--color-accent)]">
              Why Us
            </SectionEyebrow>
            <h2 className="font-heading text-[length:var(--text-h1)] font-bold leading-[1.1] text-white">
              The Kalyan Dental Difference
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map(({ title, body, Icon }, i) => (
            <Reveal key={title} staggerIndex={i}>
              <article className="h-full rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <Icon
                  className="mb-4 h-12 w-12 text-[var(--color-accent)]"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <h3 className="font-heading mb-2 text-[length:var(--text-h3)] font-semibold text-white">
                  {title}
                </h3>
                <p className="text-[length:var(--text-body-sm)] leading-relaxed text-white/70">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
