import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SOBRE", href: "#sobre" },
  { label: "FORMAÇÃO", href: "#formacao" },
  { label: "SKILLS", href: "#skills" },
];
const linksRight = [
  { label: "PROJETOS", href: "#projetos" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTATO", href: "#contato" },
];
const allLinks = [...links, ...linksRight];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = allLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) => {
    const id = href.slice(1);
    const isActive = active === id;
    return `relative font-[var(--font-display)] font-medium text-sm uppercase tracking-wider transition-colors duration-150 ${
      isActive ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-[var(--color-accent)] after:transition-transform after:duration-200 after:origin-left ${
      isActive ? "after:scale-x-100 after:w-full" : "after:scale-x-0 after:w-full"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between md:justify-center">
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </a>
          ))}
          <span aria-hidden className="text-[var(--color-accent)] text-base animate-spin-slow inline-block">
            ✦
          </span>
          {linksRight.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#inicio" className="md:hidden font-[var(--font-display)] font-bold text-[var(--color-text-primary)] text-sm tracking-wider">
          MLB <span className="text-[var(--color-accent)] animate-spin-slow inline-block">✦</span>
        </a>
        <button
          aria-label="Abrir menu"
          className="md:hidden text-[var(--color-text-primary)]"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 right-0 z-50 h-full w-72 bg-[var(--color-surface)] border-l border-[var(--color-border)] p-6 md:hidden">
            <div className="flex justify-end">
              <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="text-[var(--color-text-primary)]">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 mt-6">
              {allLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-[var(--font-display)] font-medium text-sm uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
