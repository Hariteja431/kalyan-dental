import Image from "next/image";
import { Heart, Lightbulb, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const values = [
  {
    title: "Patient-Centered Care",
    body: "Your comfort and confidence come before everything else.",
    Icon: Heart,
  },
  {
    title: "Hygiene & Safety First",
    body: "Sterilization protocols that meet the highest standards.",
    Icon: Shield,
  },
  {
    title: "Modern Equipment",
    body: "Up-to-date technology for precise, painless treatment.",
    Icon: Lightbulb,
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-secondary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionEyebrow>About Us</SectionEyebrow>
            <h2 className="font-heading mb-6 max-w-xl text-[length:var(--text-h1)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
              A Practice Built on Care and Commitment
            </h2>
            <div className="max-w-[65ch] space-y-4 text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
              <p>
                At Kalyan Dental, we believe every smile tells a story. Located
                in the heart of Rajamahendravaram, our clinic has been a trusted
                destination for families seeking genuine, patient-first dental
                care.
              </p>
              <p>
                Our team of four dedicated dental specialists brings together
                experience across general dentistry, cosmetic care, orthodontics,
                and pediatric dentistry — ensuring that every member of your
                family receives the right care from the right hands.
              </p>
              <p>
                We invest in modern equipment and stay current with the latest
                dental techniques, so you receive care that is both comfortable
                and clinically precise.
              </p>
            </div>
          </Reveal>

          <Reveal staggerIndex={2}>
            <div className="relative mx-auto max-w-lg lg:ml-auto">
              <div className="absolute -left-3 top-8 bottom-8 w-1 rounded-full bg-[var(--color-accent)] md:-left-4" />
              <div className="relative pl-4 md:pl-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80"
                    alt="Welcoming dental clinic reception area"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-2 w-[55%] overflow-hidden rounded-[var(--radius-lg)] border-4 border-[var(--color-bg-secondary)] shadow-[var(--shadow-md)] md:-right-6">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=450&fit=crop&q=80"
                      alt="Dentist consulting with a patient"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 280px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {values.map(({ title, body, Icon }, i) => (
            <Reveal key={title} staggerIndex={i}>
              <article className="h-full rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 shadow-[var(--shadow-md)] transition-transform duration-[var(--transition-base)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
                <Icon
                  className="mb-3 h-8 w-8 text-[var(--color-accent)]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="font-heading mb-2 text-[length:var(--text-h3)] font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
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
