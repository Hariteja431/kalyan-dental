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
          ? "relative mb-4 block h-14 w-48 shrink-0 overflow-hidden"
          : "relative block h-14 w-48 shrink-0 overflow-hidden sm:h-16 sm:w-56"
      }
      aria-label="Kalyan Dental home"
    >
      <Image
        src={LOGO_IMAGE_URL}
        alt="Kalyan Dental Hospitals Logo"
        fill
        className={`object-contain ${isFooter ? "object-center md:object-left" : "object-left"}`}
        sizes="(max-width: 640px) 192px, 224px"
        priority={variant === "header"}
      />
    </Link>
  );
}
