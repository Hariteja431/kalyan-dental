"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { clinicGalleryImages } from "@/lib/clinic-gallery";
import { Reveal } from "@/components/ui/Reveal";

type LightboxState = {
  open: boolean;
  index: number;
};

function useReveal(index: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible, index };
}

function GalleryItem({
  index,
  className,
  onOpen,
}: {
  index: number;
  className: string;
  onOpen: (index: number) => void;
}) {
  const img = clinicGalleryImages[index];
  const { ref, visible } = useReveal(index);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{
        transitionDelay: visible
          ? `calc(${index} * var(--gallery-stagger-delay))`
          : undefined,
      }}
    >
      <button
        type="button"
        className="group relative block h-full min-h-[44px] w-full overflow-hidden rounded-[var(--radius-md)] focus-visible:outline-none lg:rounded-[var(--radius-lg)]"
        onClick={() => onOpen(index)}
        aria-label={`Open ${img.name} in gallery lightbox`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          loading="lazy"
          sizes="(max-width: 639px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[var(--transition-slow)] ease-[var(--ease-out)] lg:group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(11,76,108,0)] transition-colors duration-[var(--transition-base)] lg:group-hover:bg-[rgba(11,76,108,0.45)]" />
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-[var(--transition-base)] lg:flex lg:group-hover:opacity-100">
          <ZoomIn className="h-7 w-7 text-white" aria-hidden />
        </div>
      </button>
    </div>
  );
}

function MobileLayout({ onOpen }: { onOpen: (index: number) => void }) {
  const mobileClasses = [
    "row-span-2", // Pattern A: tall left
    "row-span-1",
    "row-span-1",
    "row-span-1", // Pattern C: side-by-side squares
    "row-span-1",
    "col-span-2 row-span-1", // Pattern B: full-width break in the middle
    "row-span-2", // Pattern A: tall left again
    "row-span-1",
    "row-span-1",
    "row-span-1", // Pattern C: ending pair
    "row-span-1",
  ];

  return (
    <div className="grid auto-rows-[108px] grid-cols-2 grid-flow-dense gap-2 sm:hidden">
      {clinicGalleryImages.map((_, i) => (
        <GalleryItem
          key={i}
          index={i}
          className={mobileClasses[i]}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

function TabletLayout({ onOpen }: { onOpen: (index: number) => void }) {
  const classes = Array(clinicGalleryImages.length).fill("aspect-[4/5]");

  return (
    <div className="hidden grid-cols-2 gap-2.5 sm:grid lg:hidden">
      {clinicGalleryImages.map((_, i) => (
        <GalleryItem key={i} index={i} className={classes[i]} onOpen={onOpen} />
      ))}
    </div>
  );
}

function DesktopLayout({ onOpen }: { onOpen: (index: number) => void }) {
  const classes = Array(clinicGalleryImages.length).fill("aspect-[4/5]");

  return (
    <div className="hidden grid-cols-3 gap-3 lg:grid lg:grid-flow-dense">
      {clinicGalleryImages.map((_, i) => (
        <GalleryItem key={i} index={i} className={classes[i]} onOpen={onOpen} />
      ))}
    </div>
  );
}

function Lightbox({
  state,
  onClose,
  onPrev,
  onNext,
  onGo,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGo: (index: number) => void;
}) {
  const startX = useRef<number | null>(null);
  const current = clinicGalleryImages[state.index];

  useEffect(() => {
    if (!state.open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.open, onClose, onPrev, onNext]);

  useEffect(() => {
    if (!state.open) return;
    // Keep background interactive (popup is pointer-events-none outside the modal)
    return;
  }, [state.open]);

  if (!state.open) return null;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-[rgba(11,31,46,0.96)] p-4 pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-label="Clinic gallery lightbox"
    >
      <div className="pointer-events-auto relative flex w-full max-w-[1100px] flex-col items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.12)] text-white transition-colors duration-[var(--transition-base)] hover:bg-[rgba(255,255,255,0.22)]"
          aria-label="Close gallery"
        >
          <X className="h-6 w-6" />
        </button>

        <div
          className="relative h-[70vh] w-full max-w-[1000px] animate-[fadeUp_300ms_ease] sm:h-[75vh]"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => {
            startX.current = e.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const endX = e.changedTouches[0]?.clientX ?? null;
            if (startX.current == null || endX == null) return;
            const diff = startX.current - endX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) onNext();
              else onPrev();
            }
            startX.current = null;
          }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="rounded-[var(--radius-lg)] object-contain"
            sizes="92vw"
            priority
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute bottom-10 left-4 inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.12)] text-white transition-colors duration-[var(--transition-base)] hover:bg-[rgba(255,255,255,0.22)] lg:bottom-auto lg:left-6 lg:top-1/2 lg:-translate-y-1/2"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute bottom-10 right-4 inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.12)] text-white transition-colors duration-[var(--transition-base)] hover:bg-[rgba(255,255,255,0.22)] lg:bottom-auto lg:right-6 lg:top-1/2 lg:-translate-y-1/2"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="pointer-events-none absolute bottom-10 flex flex-col items-center gap-2">
          <p className="text-sm text-white">
            {state.index + 1} / {clinicGalleryImages.length}
          </p>
          <div className="pointer-events-auto flex items-center gap-2">
            {clinicGalleryImages.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onGo(i);
                }}
                className={`rounded-full transition-all duration-[var(--transition-fast)] ${
                  i === state.index
                    ? "h-2 w-2 bg-[var(--color-accent)]"
                    : "h-1.5 w-1.5 bg-[rgba(255,255,255,0.3)]"
                }`}
                aria-label={`Open image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClinicGallery() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    open: false,
    index: 0,
  });

  const handlers = useMemo(
    () => ({
      onClose: () => setLightbox((s) => ({ ...s, open: false })),
      onPrev: () =>
        setLightbox((s) => ({
          ...s,
          index: (s.index - 1 + clinicGalleryImages.length) % clinicGalleryImages.length,
        })),
      onNext: () =>
        setLightbox((s) => ({
          ...s,
          index: (s.index + 1) % clinicGalleryImages.length,
        })),
      onGo: (index: number) => setLightbox((s) => ({ ...s, index })),
    }),
    [],
  );

  return (
    <section
      id="clinic-gallery"
      className="bg-[var(--color-bg-secondary)] py-12 sm:py-[60px] lg:py-20"
      style={
        {
          "--gallery-stagger-delay": "80ms",
        } as CSSProperties
      }
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mb-12 text-center">
          <SectionEyebrow className="text-center">A Closer Look</SectionEyebrow>
          <h2 className="font-heading mb-4 text-[length:var(--text-h1)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
            Step Inside Kalyan Dental
          </h2>
          <p className="mx-auto max-w-[600px] text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)]">
            Modern infrastructure, a calm environment, and a team that genuinely
            cares — see for yourself.
          </p>
        </Reveal>

        <MobileLayout
          onOpen={(index) => setLightbox({ open: true, index })}
        />
        <TabletLayout
          onOpen={(index) => setLightbox({ open: true, index })}
        />
        <DesktopLayout
          onOpen={(index) => setLightbox({ open: true, index })}
        />

        <p className="mt-10 text-center text-[length:var(--text-body)] text-[var(--color-text-secondary)]">
          Want to visit us in person?{" "}
          <Link
            href="/#appointment"
            className="font-medium text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-primary)]"
          >
            Book an Appointment →
          </Link>
        </p>
      </div>

      <Lightbox
        state={lightbox}
        onClose={handlers.onClose}
        onPrev={handlers.onPrev}
        onNext={handlers.onNext}
        onGo={handlers.onGo}
      />
    </section>
  );
}
