"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavbarScrolled } from "@/hooks/useNavbarScrolled";
import { Logo } from "@/components/layout/Logo";

const navBase =
  "relative pb-1 text-sm font-semibold transition-colors duration-[var(--transition-fast)]";

export function Header() {
  const pathname = usePathname();
  const scrolled = useNavbarScrolled();
  const [open, setOpen] = useState(false);

  const isClinic = pathname === "/" || pathname === "/clinic";
  const isAwareness = pathname === "/awareness";
  const wordmarkColorClass = "text-[var(--color-primary)]";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerBg = scrolled
    ? "border-b border-[var(--color-border)] bg-white/92 shadow-sm backdrop-blur-[20px]"
    : "border-b border-transparent bg-transparent";

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[1003] flex h-16 items-center transition-[background,box-shadow,border-color] duration-[var(--transition-base)] md:h-[72px] ${headerBg}`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-[10px]">
            <Logo />
            <span
              className={`text-[15px] font-bold uppercase tracking-[0.12em] ${wordmarkColorClass}`}
              aria-label="Kalyan Dental"
            >
              KALYAN DENTAL
            </span>
          </div>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Primary"
          >
            <Link
              href="/clinic"
              className={`${navBase} ${
                isClinic
                  ? "text-[var(--color-primary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-100 after:bg-[var(--color-accent)] after:transition-transform after:duration-300"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
              }`}
            >
              Kalyan Dental
            </Link>
            <Link
              href="/awareness"
              className={`${navBase} ${
                isAwareness
                  ? "text-[var(--color-primary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[var(--color-accent)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
              }`}
            >
              Dental Awareness Hub
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#appointment"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-cta)] px-5 text-sm font-semibold text-white transition-transform duration-[var(--transition-base)] hover:scale-[1.02] hover:bg-[var(--color-cta-hover)]"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[var(--radius-md)] text-[var(--color-primary)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[1002] flex flex-col bg-[rgba(11,31,46,0.95)] px-6 pb-10 pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile primary">
            <Link
              href="/clinic"
              className="text-2xl font-semibold text-[var(--color-text-inverse)] opacity-0"
              style={{
                animation: "fadeUpStagger 0.45s ease 0ms forwards",
              }}
              onClick={() => setOpen(false)}
            >
              Kalyan Dental
            </Link>
            <Link
              href="/awareness"
              className="text-2xl font-semibold text-[var(--color-text-inverse)] opacity-0"
              style={{
                animation: "fadeUpStagger 0.45s ease 80ms forwards",
              }}
              onClick={() => setOpen(false)}
            >
              Dental Awareness Hub
            </Link>
            <Link
              href="/#appointment"
              className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-cta)] px-6 text-base font-semibold text-white opacity-0"
              style={{
                animation: "fadeUpStagger 0.45s ease 160ms forwards",
              }}
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
