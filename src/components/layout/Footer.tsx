export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-2 text-center md:flex-row md:justify-between md:items-center md:text-left">
        <p className="font-mono text-xs text-[var(--color-text-secondary)]">© 2025 Mateus Lima Bispo</p>
        <p className="font-mono text-xs text-[var(--color-text-secondary)]">
          Desenvolvido com React · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
