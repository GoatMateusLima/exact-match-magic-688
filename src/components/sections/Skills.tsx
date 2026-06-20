import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { SkillBadge } from "../ui/SkillBadge";
import { skillGroups } from "../../data/skills";

const certificates = [
  { name: "Transforme-se — Programador de Sistemas", meta: "Serasa Experian / Gerando Falcões · 2026" },
  { name: "Técnico em Desenvolvimento de Sistemas", meta: "ETEC Paulino Botelho · 2025" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="SKILLS & CERTIFICADOS" />
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="mb-6 group/badges">
                <p className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                  {group.label}
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                >
                  {group.skills.map((s) => (
                    <motion.span
                      key={s}
                      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                    >
                      <SkillBadge name={s} />
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="md:col-span-2">
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] mb-6">
              Certificados
            </h3>
            <ul className="flex flex-col">
              {certificates.map((c, i) => (
                <li
                  key={c.name}
                  className={`flex gap-3 py-4 ${
                    i < certificates.length - 1 ? "border-b border-[var(--color-border)]" : ""
                  }`}
                >
                  <span className="text-lg">🏅</span>
                  <div>
                    <p className="font-[var(--font-body)] text-[var(--color-text-primary)] text-sm font-medium">
                      {c.name}
                    </p>
                    <p className="font-mono text-[var(--color-text-secondary)] text-xs mt-1">{c.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="https://www.linkedin.com/in/mateus-lima-bispo-b14a222a8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-mono text-xs text-[var(--color-accent)] hover:underline"
            >
              Ver todos no LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
