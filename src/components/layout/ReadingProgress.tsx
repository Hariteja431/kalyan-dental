"use client";

import { usePathname } from "next/navigation";
import { useReadingProgress } from "@/hooks/useReadingProgress";

export function ReadingProgress() {
  const pathname = usePathname();
  const progress = useReadingProgress();

  if (pathname !== "/awareness") return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[1001] h-0.5 w-full bg-[var(--color-divider)]"
      aria-hidden
    >
      <div
        className="h-full bg-[var(--color-accent)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
