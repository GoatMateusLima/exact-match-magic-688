import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import starAsset from "@/assets/star.png.asset.json";

const leftLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SOBRE", href: "#sobre" },
  { label: "FORMAÇÃO", href: "#formacao" },
];

const rightLinks = [
  { label: "SKILLS", href: "#skills" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTATO", href: "#contato" },
];

const mobileLinks = [...leftLinks, ...rightLinks];

function Star({ size = 18 }: { size?: number }) {
  return (
    <img
      src={starAsset.url}
      alt=""
      aria-hidden
      className="inline-block animate-[spin_10s_linear_infinite]"
      width={size}
      height={size}
      style={{
        display: "inline-block",
        filter: "brightness(0) invert(1)",
      }}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "font-mono text-xs uppercase tracking-widest text-[#7a7672] hover:text-[#f0ece4] transition-colors";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#161616]/90 backdrop-blur-md border-b border-[#272727]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-full flex items-center justify-center md:justify-center">
        <nav className="hidden md:flex items-center gap-6">
          {leftLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
          <span className="mx-2 flex items-center" aria-hidden>
            <Star />
          </span>
          {rightLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Abrir menu"
          className="md:hidden text-[#f0ece4] ml-auto"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 right-0 z-50 h-full w-72 bg-[#161616] border-l border-[#272727] p-6 md:hidden">
            <div className="flex justify-end">
              <button
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="text-[#f0ece4]"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 mt-6">
              {mobileLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={linkClass}
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
