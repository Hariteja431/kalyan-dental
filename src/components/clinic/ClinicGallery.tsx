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
  onOpen,
}: {
  index: number;
  onOpen: (index: number) => void;
}) {
  const img = clinicGalleryImages[index];
  const { ref, visible } = useReveal(index);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} mb-4 break-inside-avoid`}
      style={{
        transitionDelay: visible
          ? `calc((${index} % 6) * var(--gallery-stagger-delay))`
          : undefined,
      }}
    >
      <button
        type="button"
        className="group relative block w-full overflow-hidden rounded-[var(--radius-md)] focus-visible:outline-none lg:rounded-[var(--radius-lg)] bg-[var(--color-border)] shadow-sm hover:shadow-lg transition-all duration-[var(--transition-slow)]"
        onClick={() => onOpen(index)}
        aria-label={`Open ${img.name} in gallery lightbox`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={800}
          height={600}
          sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-auto object-cover transition-transform duration-[var(--transition-slow)] ease-[var(--ease-out)] lg:group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] opacity-0 transition-opacity duration-[var(--transition-base)] lg:group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center opacity-0 transition-opacity duration-[var(--transition-base)] lg:flex lg:group-hover:opacity-100">
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-md">
            <ZoomIn className="h-6 w-6 text-white" aria-hidden />
          </div>
        </div>
      </button>
    </div>
  );
}

import { createPortal } from "react-dom";

function Lightbox({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const current = clinicGalleryImages[state.index];

  useEffect(() => {
    if (!state.open) {
      document.body.style.overflow = "";
      return;
    }
    
    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [state.open, onClose, onPrev, onNext]);

  if (!state.open) return null;

  const content = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Clinic gallery lightbox"
      onClick={onClose}
    >
      <div 
        className="relative flex w-[95vw] sm:w-[90vw] max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-300 ease-out" 
        onClick={(e) => e.stopPropagation()}
        style={{ height: "85vh", maxHeight: "900px" }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 sm:px-6">
          <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
            Image {state.index + 1} of {clinicGalleryImages.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-gray-200"
            aria-label="Close gallery"
          >
            Close <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body / Image */}
        <div 
          className="relative flex w-full flex-1 items-center justify-center bg-[#f8fafc] p-2 sm:p-4 overflow-hidden"
          onTouchStart={(e) => {
            setTouchStart({
              x: e.changedTouches[0].clientX,
              y: e.changedTouches[0].clientY,
            });
          }}
          onTouchEnd={(e) => {
            if (!touchStart) return;
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = touchStart.x - endX;
            const diffY = touchStart.y - endY;

            if (diffY < -80 && Math.abs(diffY) > Math.abs(diffX)) {
              onClose();
            } else if (Math.abs(diffX) > 50) {
              if (diffX > 0) onNext();
              else onPrev();
            }
            setTouchStart(null);
          }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain p-2"
            sizes="100vw"
            priority
          />

          {/* Navigation Controls inside the box */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--color-text-primary)] shadow-md transition hover:bg-gray-100 hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--color-text-primary)] shadow-md transition hover:bg-gray-100 hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(content, document.body) : null;
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

        {/* Masonry Layout */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-3">
          {clinicGalleryImages.map((_, i) => (
            <GalleryItem
              key={i}
              index={i}
              onOpen={(index) => setLightbox({ open: true, index })}
            />
          ))}
        </div>

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
      />
    </section>
  );
}
