type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function SectionEyebrow({
  children,
  className = "",
  dark = false,
}: SectionEyebrowProps) {
  return (
    <p
      className={`mb-4 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.1em] ${
        dark ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
