import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const filters = ["TODOS", "BACK-END", "FULL STACK"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("TODOS");

  const filtered = useMemo(() => {
    if (filter === "TODOS") return projects;
    if (filter === "BACK-END") return projects.filter((p) => p.category === "Back-End");
    return projects.filter((p) => p.category === "Full Stack");
  }, [filter]);

  return (
    <section id="projetos" className="py-24 bg-[var(--color-surface)]/20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="PROJETOS" />
        <h2 className="font-[var(--font-display)] font-bold text-3xl mb-4 text-[var(--color-text-primary)]">
          O que eu construí
        </h2>
        <p className="text-[var(--color-text-secondary)] text-base mb-10">
          Sistemas em produção, não só repositórios.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs px-4 py-2 rounded border transition-colors ${
                  active
                    ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text-primary)]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <div key={p.id} className={p.featured ? "lg:col-span-2" : ""}>
                <ProjectCard project={p} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/GoatMateusLima"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            Ver todos os repositórios no GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
