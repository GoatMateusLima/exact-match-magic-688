export function SkillBadge({ name }: { name: string; category?: string }) {
  return (
    <span className="inline-flex items-center bg-[var(--color-accent-dim)] text-[var(--color-accent)] font-mono text-xs px-3 py-1 rounded border border-[var(--color-accent)]/20 hover:border-[var(--color-accent)]/60 transition-colors duration-150">
      {name}
    </span>
  );
}
