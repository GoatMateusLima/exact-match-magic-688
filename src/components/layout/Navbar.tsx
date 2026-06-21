import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import star from "../../assets/vecteezy_four-pointed-star-shape_59879953.png";

const leftLinks = [
  { label: "SOBRE",    href: "#sobre"    },
  { label: "FORMAÇÃO", href: "#formacao" },
  { label: "SKILLS",   href: "#skills"   },
];

const rightLinks = [
  { label: "PROJETOS", href: "#projetos" },
  { label: "BLOG",     href: "#blog"     },
  { label: "CONTATO",  href: "#contato"  },
];

const mobileLinks = [...leftLinks, ...rightLinks];

function Star({ size = 18 }: { size?: number }) {
  return (
    <img
      src={star}
      alt=""
      aria-hidden
      className="inline-block animate-[spin_10s_linear_infinite]"
      width={size}
      height={size}
      style={{ filter: "brightness(0) saturate(1) invert(1) sepia(80%) saturate(600%) hue-rotate(340deg)" }}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (glowRef.current) {
        glowRef.current.style.setProperty("--gx", x + "px");
        glowRef.current.style.setProperty("--gy", y + "px");
        glowRef.current.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    nav.addEventListener("mousemove", onMouseMove);
    nav.addEventListener("mouseleave", onMouseLeave);
    return () => {
      nav.removeEventListener("mousemove", onMouseMove);
      nav.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const linkClass =
    "font-mono text-xs uppercase tracking-widest text-[#7a7672] hover:text-[#f0ece4] transition-colors duration-150";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        ref={navRef}
        className={`relative h-14 w-full max-w-2xl flex items-center justify-center px-6 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-[#161616]/80 backdrop-blur-md"
            : "bg-[#0c0c0c]/40 backdrop-blur-sm"
        }`}
        style={{ border: "1px solid rgba(224, 92, 42, 0.25)" }}
      >
        {/* Glow seguindo o mouse */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
          style={{
            opacity: 0,
            background:
              "radial-gradient(120px circle at var(--gx, 50%) var(--gy, 50%), rgba(224,92,42,0.18), transparent 70%)",
          }}
        />

        {/* Borda glow estático */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "0 0 0 1px rgba(224,92,42,0.2), inset 0 0 20px rgba(224,92,42,0.03)",
          }}
        />

        {/* Links desktop */}
        <span className="block md:hidden flex items-center">
            <Star />
        </span>
        <nav className="relative z-10 hidden md:flex items-center gap-6">
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

        {/* Hamburger mobile */}
        
        <button
          aria-label="Abrir menu"
          className="relative z-10 md:hidden text-[#f0ece4] ml-auto"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <>
        
          <div
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 right-0 z-50 h-full w-72 bg-[#161616] border-l border-[#272727] p-6 md:hidden">
            <span className="md-hidden flex items-center" aria-hidden>
            <Star />
          </span>
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