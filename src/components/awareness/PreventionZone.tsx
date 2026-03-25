import {
  Baby,
  Candy,
  Cigarette,
  Droplets,
  Moon,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { InfographicPlaceholder } from "@/components/ui/InfographicPlaceholder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const dailyHabits = [
  {
    emoji: "🪥",
    title: "Brush Twice, 2 Minutes Each Time",
    body: "Use a soft-bristled brush and fluoride toothpaste. Hold your brush at a 45° angle to the gumline. Brush all surfaces — outer, inner, and chewing.",
    tag: "Daily Habit",
    imageSrc: "/api/daily-habits-images/brushing%20image.png",
    imageAlt: "Daily habit infographic showing proper brushing technique",
  },
  {
    emoji: "🧵",
    title: "Floss Once a Day — No Excuses",
    body: "Flossing removes plaque and food from places your brush can't reach. It prevents gum disease and cavities between teeth. 15–18 inches of floss is all you need.",
    tag: "Daily Habit",
    imageSrc: "/api/daily-habits-images/flossing.png",
    imageAlt: "Daily habit infographic showing correct flossing steps",
  },
  {
    emoji: "💧",
    title: "Water Is Your Teeth's Best Friend",
    body: "Drinking water washes away food particles, dilutes acids, and helps maintain saliva production — your mouth's natural defense system.",
    tag: "Daily Habit",
    imageSrc: "/api/daily-habits-images/taking%20water.png",
    imageAlt: "Daily habit infographic about hydration and oral health",
  },
  {
    emoji: "🍎",
    title: "What You Eat Affects Your Teeth",
    body: "Foods high in sugar feed cavity-causing bacteria. Limit sugary snacks and acidic drinks. Calcium-rich foods (dairy, leafy greens, almonds) strengthen enamel naturally.",
    tag: "Nutrition",
    imageSrc: "/api/daily-habits-images/food%20habits.png",
    imageAlt: "Daily habit infographic about healthy food choices for teeth",
  },
] as const;

const protectionTips = [
  { Icon: Droplets, title: "Use Fluoride Toothpaste", body: "Fluoride rebuilds weakened enamel and prevents decay." },
  { Icon: Cigarette, title: "Avoid Tobacco", body: "Smoking is a leading cause of gum disease, oral cancer, and tooth loss." },
  { Icon: Shield, title: "Wear a Mouthguard", body: "If you play contact sports, a custom mouthguard protects teeth from trauma." },
  { Icon: Candy, title: "Limit Sugary Beverages", body: "Soda, juice, and sports drinks are highly acidic and coat teeth in sugar." },
  { Icon: Baby, title: "Start Early with Children", body: "Begin cleaning your baby's gums even before teeth appear." },
  { Icon: Moon, title: "Address Teeth Grinding", body: "Bruxism (grinding) wears down enamel — a dentist can provide a night guard." },
] as const;

export function PreventionZone() {
  return (
    <div id="prevention" className="scroll-mt-24">
      <section className="bg-[var(--color-bg-primary)] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="mb-12 text-center">
              <SectionEyebrow className="text-center">For a Healthy Mouth</SectionEyebrow>
              <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold text-[var(--color-text-primary)]">
                Prevention Is Always Better
              </h2>
              <p className="mx-auto max-w-2xl text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
                The best dental treatment is the one you never need. These habits
                can prevent 80% of all dental problems.
              </p>
            </div>
          </Reveal>

          <h3 className="font-heading mb-8 text-center text-[length:var(--text-h2)] font-bold text-[var(--color-primary)]">
            Daily Habits
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dailyHabits.map((c, i) => (
              <Reveal key={c.title} staggerIndex={i}>
                <article className="flex h-full flex-col rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] p-6 shadow-[var(--shadow-sm)]">
                  <span className="text-3xl" aria-hidden>
                    {c.emoji}
                  </span>
                  <span className="mt-2 inline-block w-fit rounded-full bg-[var(--color-accent-light)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                    {c.tag}
                  </span>
                  <h4 className="font-heading mt-3 text-[length:var(--text-h3)] font-semibold text-[var(--color-text-primary)]">
                    {c.title}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {c.body}
                  </p>
                  <div className="relative mt-4 aspect-[3/2] w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-2">
                    <Image
                      src={c.imageSrc}
                      alt={c.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-accent-light)] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 md:px-6">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <InfographicPlaceholder
                width={400}
                height={300}
                label='Infographic: What happens during a dental check-up'
                imageSrc="/api/prevention-infographics/visit%20doctor%20every%206%20months.png"
                imageAlt="Infographic: Visit your dentist every 6 months"
                className="order-2 w-full lg:order-1"
              />
              <div className="order-1 lg:order-2">
                <span className="mb-2 inline-block rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Evidence-Based
                </span>
                <h3 className="font-heading mb-4 text-[length:var(--text-h2)] font-bold text-[var(--color-text-primary)]">
                  Visit Your Dentist Every 6 Months
                </h3>
                <p className="max-w-[65ch] text-[length:var(--text-body)] text-[var(--color-text-secondary)]">
                  Regular dental check-ups catch problems early — before they
                  become painful and expensive. A professional cleaning removes
                  tartar (hardened plaque) that no amount of home brushing can
                  remove. Early-stage cavities found during check-ups can be
                  treated with a simple filling — avoiding root canals or
                  extractions later.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal staggerIndex={2}>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-2 inline-block rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Preventive Care
                </span>
                <h3 className="font-heading mb-4 text-[length:var(--text-h2)] font-bold text-[var(--color-text-primary)]">
                  Dental X-Rays: Not Just for Problems
                </h3>
                <p className="max-w-[65ch] text-[length:var(--text-body)] text-[var(--color-text-secondary)]">
                  Digital X-rays allow dentists to see problems between teeth,
                  below the gumline, and in the jawbone — invisible to the naked
                  eye. Modern digital X-rays use significantly less radiation than
                  traditional methods. Your dentist will recommend X-rays based
                  on your personal risk factors.
                </p>
              </div>
              <InfographicPlaceholder
                width={400}
                height={300}
                label='Infographic: What dental X-rays reveal'
                imageSrc="/api/prevention-infographics/Dental%20xray.png"
                imageAlt="Infographic: Dental X-rays reveal hidden issues"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-bg-primary)] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h3 className="font-heading mb-10 text-center text-[length:var(--text-h2)] font-bold text-[var(--color-primary)]">
            Protection Tips
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {protectionTips.map(({ Icon, title, body }, i) => (
              <Reveal key={title} staggerIndex={i}>
                <article className="flex gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 shadow-[var(--shadow-sm)]">
                  <Icon
                    className="mt-0.5 h-10 w-10 shrink-0 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h4 className="font-heading text-[length:var(--text-h4)] font-semibold text-[var(--color-text-primary)]">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                      {body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
