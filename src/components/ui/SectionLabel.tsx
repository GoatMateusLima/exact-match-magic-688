export function SectionLabel({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`font-mono text-xs text-[var(--color-accent)] font-semibold tracking-[0.2em] uppercase mb-4 ${className}`}
    >
      // {label}
    </div>
  );
}
