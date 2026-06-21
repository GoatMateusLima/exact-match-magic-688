import { motion } from "framer-motion";
import { Github, Linkedin, Youtube } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import cvAsset from "../../assets/CV_Mateus_Lima_Bispo.pdf";

export function Contact() {
  const items = [
    { href: "https://github.com/GoatMateusLima", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/mateus-lima-bispo-b14a222a8", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.youtube.com/@mateuslimabispo", icon: Youtube, label: "YouTube" },
  ];

  return (
    <section id="contato" className="py-32 bg-[var(--color-surface)]/30">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-2xl mx-auto px-6 text-center"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <SectionLabel label="CONTATO" className="!mb-4 flex justify-center" />
        </motion.div>

        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="font-[var(--font-display)] font-extrabold text-4xl text-[var(--color-text-primary)] mb-4"
        >
          Vamos trabalhar juntos?
        </motion.h2>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-base mb-12 max-w-md mx-auto"
        >
          Estou disponível para estágio em back-end, full stack ou qualquer oportunidade onde eu possa crescer como
          engenheiro.
        </motion.p>

        <motion.a
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={cvAsset}
          download="CV_Mateus_Lima_Bispo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--color-accent)] text-white font-[var(--font-display)] font-bold text-sm px-10 py-4 rounded shadow-[0_10px_40px_-10px_rgba(224,92,42,0.5)] hover:bg-[var(--color-accent)]/90 transition-colors"
        >
          DOWNLOAD CURRÍCULO ↓
        </motion.a>

        <div className="mt-12 mb-8 h-px bg-[var(--color-border)] opacity-40" />

        <motion.a
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          href="mailto:mateuslimabispo15@gmail.com"
          className="font-mono text-[var(--color-text-secondary)] text-sm mb-8 inline-block hover:text-[var(--color-accent)] transition-colors"
        >
          mateuslimabispo15@gmail.com
        </motion.a>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="flex gap-6 justify-center mt-8"
        >
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <a
                key={it.label}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={it.label}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:scale-110 transition-all"
              >
                <Icon size={28} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
