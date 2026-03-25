import Image from "next/image";
import Link from "next/link";
import { LOGO_IMAGE_URL } from "@/lib/constants";

type LogoProps = {
  /** Footer sits on dark navy — light pad so the mark stays readable */
  variant?: "header" | "footer";
};

export function Logo({ variant = "header" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={
        isFooter
          ? "relative mb-4 block h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/95 p-0.5 ring-1 ring-white/15"
          : "relative block h-14 w-14 shrink-0 overflow-hidden rounded-full sm:h-16 sm:w-16"
      }
      aria-label="Kalyan Dental home"
    >
      <Image
        src={LOGO_IMAGE_URL}
        alt="Kalyan Dental"
        fill
        className="object-contain object-center"
        sizes="(max-width: 640px) 56px, 64px"
        priority={variant === "header"}
      />
    </Link>
  );
}
