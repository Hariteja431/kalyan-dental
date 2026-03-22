/** PRD §11.7 — Infographic placeholder styling */

type InfographicPlaceholderProps = {
  width?: number;
  height?: number;
  label: string;
  className?: string;
};

export function InfographicPlaceholder({
  width,
  height,
  label,
  className = "",
}: InfographicPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-[#CBD5E1] bg-[#F1F5F9] p-4 text-center text-sm leading-snug text-[var(--color-text-muted)] ${className}`}
      style={{
        borderRadius: "12px",
        minHeight: height,
        minWidth: width,
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}
