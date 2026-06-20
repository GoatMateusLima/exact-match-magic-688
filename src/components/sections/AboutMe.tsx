import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { useScrollReveal } from "../../hooks/useScrollReveal";


export function AboutMe() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="py-24">
      <div ref={ref} className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-[var(--color-accent)]" style={{ boxShadow: "0 0 40px rgba(224,92,42,0.2)" }}>
            <img
              src="/profile.jpg"
              alt="Mateus Lima Bispo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-mono text-xs text-[var(--color-text-secondary)] text-center mt-4 w-full">
            📍 São Carlos, SP
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="md:col-span-2"
        >
          <SectionLabel label="SOBRE MIM" />
          <p className="text-[var(--color-text-primary)] font-medium text-lg mb-4">
            Sou desenvolvedor Back-End com foco em Java e Spring Boot, estudante de Análise e Desenvolvimento de
            Sistemas na UNICEP.
          </p>
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-4">
            Tenho experiência prática construindo APIs REST, integrações com serviços de IA (Groq), bots no Telegram e
            sistemas com PostgreSQL e Docker — tudo deployado em produção.
          </p>
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8">
            Compartilho minha jornada no LinkedIn como "O cara do JAVA" e no YouTube. Busco um estágio onde eu possa
            crescer, contribuir e aprender com times que constroem sistemas escaláveis.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/mateus-lima-bispo-b14a222a8"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm px-4 py-2 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/GoatMateusLima"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm px-4 py-2 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
