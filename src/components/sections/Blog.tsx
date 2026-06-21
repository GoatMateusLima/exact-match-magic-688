import { Youtube } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

const posts = [
  { title: "Como construí minha primeira API com Spring Boot",
    link: "",
  },
  { title: "Minha jornada no programa Transforme-se",
    link: ""
   },
];

const canal = [
  {
    title: "Um dia na VIDA de um PROGRAMADOR e UNIVERSITÁRIO | Vlog",
    link: "https://youtu.be/_gHYcxYZYLI?si=NXbxoOjXjBdihHIF"
  },
  {
    title: "ATS: O Erro que Faz Seu Currículo Ser Ignorado",
    link: "https://youtu.be/sGUks3_xpCE?si=pJFddAi16eMGEdZr"
  },
  {
    title: "",
    link: ""
  },

]

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="CONTEÚDO" />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] text-xl mb-6">
              Canal no YouTube
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              Compartilho minha jornada como dev, dicas de Java e Spring Boot.
            </p>
            <div className="aspect-video bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] flex flex-col items-center justify-center gap-3">
              <Youtube size={48} className="text-red-500" />
              <p className="text-[var(--color-text-secondary)] text-sm font-mono">Em breve</p>
            </div>
            <a
              href="https://www.youtube.com/@mateuslimabispo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--color-accent)] mt-4 inline-block hover:underline"
            >
              Acessar canal ↗
            </a>
          </div>

          <div>
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] text-xl mb-6">
              Posts recentes
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">O cara do JAVA no LinkedIn.</p>
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <div className="aspect-video bg-[var(--color-surface-hover)] rounded mb-3" />
                  <p className="font-[var(--font-body)] text-[var(--color-text-primary)] text-sm font-medium">
                    {post.title}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/mateus-lima-bispo-b14a222a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[var(--color-accent)] mt-2 inline-block hover:underline"
                  >
                    Ver no LinkedIn ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
