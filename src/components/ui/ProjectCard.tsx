import { motion } from "framer-motion";
import { SkillBadge } from "./SkillBadge";
import type { Project } from "../../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, category, githubUrl, demoUrl, featured } = project;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`relative bg-[var(--color-surface)] rounded-lg p-6 border transition-colors duration-200 hover:bg-[var(--color-surface-hover)] ${
        featured
          ? "border-[var(--color-accent)]/60 hover:border-[var(--color-accent)]"
          : "border-[var(--color-border)] hover:border-[var(--color-accent)]/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        {featured ? (
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent-dim)] border border-[var(--color-accent)]/30 px-2 py-0.5 rounded-sm">
            ✦ Destaque
          </span>
        ) : (
          <span />
        )}
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)]">
          {category}
        </span>
      </div>

      <h3 className="font-[var(--font-display)] font-bold text-lg text-[var(--color-text-primary)]">
        {title}
      </h3>
      <p className="font-[var(--font-body)] text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((s) => (
          <SkillBadge key={s} name={s} />
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs px-3 py-1 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs px-3 py-1 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            Demo ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}
