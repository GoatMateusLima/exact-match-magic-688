import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SpotlightBg } from "../ui/SpotlightBg";
import { TerminalText } from "../ui/TerminalText";

const stats = [
  { value: "3", label: "projetos deployados" },
  { value: "2+", label: "anos codando" },
  { value: "ADS", label: "UNICEP · 2028" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <SpotlightBg />
      {/* grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #27272730 1px, transparent 1px), linear-gradient(to bottom, #27272730 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[var(--color-accent)] tracking-[0.25em] uppercase mb-6"
          >
            // São Carlos, SP · Disponível para estágio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-display)] font-extrabold uppercase leading-none mb-2"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            <span className="block text-[var(--color-text-primary)]">MATEUS LIMA</span>
            <span className="block text-[var(--color-accent)]">BISPO</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 mb-8 text-base sm:text-lg"
          >
            <TerminalText
              texts={[
                "Desenvolvedor Back-End Java_",
                "Spring Boot · PostgreSQL · Docker_",
                "Em busca de estágio em tech_",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-base leading-relaxed mb-10 max-w-lg"
          >
            Construo APIs REST, integro serviços de IA e entrego sistemas que funcionam em produção.
            Estudante de ADS na UNICEP,<br/> ex-Transforme-se.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-x-8 gap-y-4 mb-10"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col ${i > 0 ? "sm:border-l sm:border-[var(--color-border)] sm:pl-8" : ""}`}
              >
                <span className="font-[var(--font-display)] font-bold text-[var(--color-text-primary)] text-2xl">
                  {s.value}
                </span>
                <span className="font-mono text-[11px] text-[var(--color-text-secondary)] uppercase tracking-wider mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projetos"
              className="bg-[var(--color-accent)] text-white font-[var(--font-display)] font-semibold text-sm px-6 py-3 rounded shadow-[0_8px_30px_-10px_rgba(224,92,42,0.6)] hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              VER PROJETOS →
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] text-[var(--color-text-secondary)] font-[var(--font-display)] font-medium text-sm px-6 py-3 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              DOWNLOAD CV
            </motion.a>
            
          </motion.div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para Sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
      >
        <ChevronDown className="animate-bounce-soft" />
      </a>
    </section>
  );
}
