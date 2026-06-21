import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { education } from "../../data/education";
import icon from "../../assets/educacao.png";
import "../../assets/ed.css";

export function Formacao() {
  return (
    <section id="formacao" className="py-24 bg-[var(--color-surface)]/40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="FORMAÇÃO" />
        <h2 className="font-[var(--font-display)] font-bold text-3xl mb-12 text-[var(--color-text-primary)]">
          De onde venho, para onde vou
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col gap-5"
        >
          {education.map((e) => {
            const cursando = e.status === "cursando";
            return (
              <motion.li
                key={e.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex gap-6 items-start bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors p-5 border-l-2 ${
                  cursando ? "!border-l-[var(--color-accent)]" : "!border-l-[var(--color-border)]"
                }`}
              >
                <div className="text-2xl"><img className="edIcon" src={icon}/></div>
                
                <div className="flex-1">
                  <span
                    className={`inline-block font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                      cursando
                        ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/30"
                        : "bg-green-900/20 text-green-400 border-green-700/30"
                    }`}
                  >
                    {e.status}
                  </span>
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] text-base mt-2">
                    {e.title}
                  </h3>
                  <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-sm mt-1">
                    {e.institution} · {e.location}
                  </p>
                  <p className="font-mono text-[var(--color-text-secondary)] text-xs mt-2 opacity-70">{e.period}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
