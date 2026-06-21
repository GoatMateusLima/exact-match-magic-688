import { SectionLabel } from "../ui/SectionLabel";
import postAppInventor from "@/assets/post-appinventor.png.asset.json";
import postTransformese from "@/assets/post-transformese.png.asset.json";
import postIhc from "@/assets/post-ihc.png.asset.json";

const posts: { title: string; link: string; image?: string }[] = [
  {
    title: "Java, desenvolvimento mobile e App Inventor",
    link: "https://www.linkedin.com/posts/mateus-lima-bispo-b14a222a8_java-desenvolvimentomobile-appinventor-activity-7473198019186900992-aGPf",
    image: postAppInventor.url,
  },
  {
    title: "Transforme-se | Serasa Experian",
    link: "https://www.linkedin.com/posts/mateus-lima-bispo-b14a222a8_transformese-serasa-serasaexperian-activity-7463601523940384769-HUsX",
    image: postTransformese.url,
  },
  {
    title: "IHC e jornada como desenvolvedor full-stack",
    link: "https://www.linkedin.com/posts/mateus-lima-bispo-b14a222a8_ihc-desenvolvedor-fullstack-activity-7460415901130141696-i2k9",
    image: postIhc.url,
  },
];

const canal = [
  {
    title: "Um dia na VIDA de um PROGRAMADOR e UNIVERSITÁRIO | Vlog",
    link: "https://youtu.be/_gHYcxYZYLI",
    id: "_gHYcxYZYLI",
  },
  {
    title: "ATS: O Erro que Faz Seu Currículo Ser Ignorado",
    link: "https://youtu.be/sGUks3_xpCE",
    id: "sGUks3_xpCE",
  },
  {
    title: "Vídeo do canal",
    link: "https://youtu.be/hS6R4hNGdGo",
    id: "hS6R4hNGdGo",
  },
  {
    title: "Vídeo do canal",
    link: "https://youtu.be/itI7D5fLHos",
    id: "itI7D5fLHos",
  },
  {
    title: "Vídeo do canal",
    link: "https://youtu.be/U7MXfkjiCBM",
    id: "U7MXfkjiCBM",
  },
  {
    title: "Vídeo do canal",
    link: "https://youtu.be/5js9T8GYq5c",
    id: "5js9T8GYq5c",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel label="CONTEÚDO" />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] text-xl mb-2">
              Canal no YouTube
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-4">
              Compartilho minha jornada como dev, dicas de Java e Spring Boot.
            </p>
            <div className="h-[480px] overflow-y-auto pr-2 flex flex-col gap-4 custom-scroll">
              {canal.map((v) => (
                <a
                  key={v.id}
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="font-[var(--font-body)] text-[var(--color-text-primary)] text-sm font-medium p-3">
                    {v.title}
                  </p>
                </a>
              ))}
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
            <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] text-xl mb-2">
              Posts recentes
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-4">
              O cara do JAVA no LinkedIn.
            </p>
            <div className="h-[480px] overflow-y-auto pr-2 flex flex-col gap-4 custom-scroll">
              {posts.map((post) => (
                <a
                  key={post.title}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-video w-full object-cover rounded mb-3"
                    />
                  ) : (
                    <div className="aspect-video bg-[var(--color-surface-hover)] rounded mb-3 flex items-center justify-center text-[var(--color-text-secondary)] text-xs font-mono">
                      sem imagem
                    </div>
                  )}
                  <p className="font-[var(--font-body)] text-[var(--color-text-primary)] text-sm font-medium">
                    {post.title}
                  </p>
                  <span className="font-mono text-[11px] text-[var(--color-accent)] mt-2 inline-block hover:underline">
                    Ver no LinkedIn ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
