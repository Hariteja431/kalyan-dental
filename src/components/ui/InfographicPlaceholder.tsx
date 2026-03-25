/** PRD §11.7 — Infographic placeholder styling */

"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type InfographicPlaceholderProps = {
  width?: number;
  height?: number;
  label: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function InfographicPlaceholder({
  width,
  height,
  label,
  className = "",
  imageSrc,
  imageAlt,
}: InfographicPlaceholderProps) {
  const showImage = Boolean(imageSrc);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const wrapperStyle = {
    borderRadius: showImage ? "var(--radius-lg)" : "12px",
    minHeight: height,
    aspectRatio: width && height ? `${width} / ${height}` : undefined,
  };

  if (!showImage) {
    return (
      <div
        className={`flex w-full max-w-full min-w-0 items-center justify-center overflow-hidden border-2 border-dashed border-[#CBD5E1] bg-[#F1F5F9] p-3 text-center text-xs leading-snug text-[var(--color-text-muted)] sm:p-4 sm:text-sm ${className}`}
        style={wrapperStyle}
        role="img"
        aria-label={label}
      >
        {label}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        className={`flex w-full max-w-full min-w-0 items-center justify-center overflow-hidden border-none bg-transparent p-0 text-left ${className}`}
        style={wrapperStyle}
        aria-label={label}
        onClick={() => setOpen(true)}
      >
        <img
          src={imageSrc}
          alt={imageAlt ?? label}
          draggable={false}
          className="h-full w-full object-contain"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[1200] bg-[rgba(11,31,46,0.96)] p-3 sm:p-4 pointer-events-none"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} image preview`}
        >
          <div className="pointer-events-auto relative mx-auto flex w-full max-w-[860px] flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 z-[50] inline-flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.12)] text-white transition-colors duration-[var(--transition-base)] hover:bg-[rgba(255,255,255,0.22)]"
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative w-full max-h-[75vh] overflow-hidden rounded-[var(--radius-lg)] border border-[rgba(255,255,255,0.12)]">
              <img
                src={imageSrc}
                alt={imageAlt ?? label}
                draggable={false}
                className="block max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
