import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { doctors } from "@/lib/doctors";

export function Doctors() {
  return (
    <section
      id="doctors"
      className="bg-[var(--color-bg-primary)] py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <Reveal>
          <SectionEyebrow className="text-center">Our Team</SectionEyebrow>
          <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
            Meet the Doctors
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
            Three expert specialists — one commitment to your oral health.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, i) => (
            <Reveal key={doc.id} staggerIndex={i}>
              <article className="group flex h-full flex-col items-center rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 text-center shadow-[var(--shadow-sm)] transition-all duration-[var(--transition-base)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]">
                <div className="relative mb-6 h-[260px] w-full overflow-hidden rounded-xl border-b-4 border-[var(--color-accent)] bg-white/5">
                  <Image
                    src={doc.imageSrc}
                    alt={doc.imageAlt}
                    fill
                    className="object-contain p-2 transition-transform duration-[var(--transition-slow)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-[length:var(--text-h3)] font-semibold text-[var(--color-text-primary)]">
                  {doc.name}
                </h3>
                <p className="mt-1 text-[length:var(--text-body)] text-[var(--color-accent)]">
                  {doc.designation}
                </p>
                <p className="mt-2 text-[length:var(--text-body-sm)] text-[var(--color-text-muted)]">
                  {doc.qualification}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
