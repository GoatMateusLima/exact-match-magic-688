export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: "Back-End" | "Full Stack";
  githubUrl?: string | null;
  demoUrl?: string | null;
  featured?: boolean;
  period: string;
};

export const projects: Project[] = [
  {
    id: "apipromu",
    title: "APIpromu",
    description:
      "API REST de ofertas da Amazon que gera descrições automáticas via Groq (LLM) e envia para canal no Telegram via scheduler. Produtos persistidos por 24h no PostgreSQL com controle de duplicatas. Deployado no Railway com Docker.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Maven", "Groq", "Telegram API", "Railway"],
    category: "Back-End",
    githubUrl: "https://github.com/GoatMateusLima",
    demoUrl: null,
    featured: true,
    period: "Abr/2026",
  },
  {
    id: "upjobs",
    title: "UpJobs",
    description:
      "Plataforma de transição de carreira desenvolvida em equipe no programa Transforme-se (Serasa Experian / Gerando Falcões). Responsável pelas telas de home, perfil e chatbot, modelagem de banco e integração com JSearch API e IA via Groq.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Groq", "JSearch API", "Netlify"],
    category: "Full Stack",
    githubUrl: "https://github.com/GoatMateusLima",
    demoUrl: null,
    featured: false,
    period: "Jan/2026 – Abr/2026",
  },
  {
    id: "aumigos",
    title: "Aumigos",
    description:
      "Plataforma que reúne ONGs de animais para adoção. TCC solo na ETEC Paulino Botelho. Backend Node.js com autenticação JWT, PostgreSQL no Supabase, validação de CNPJ via API Brasil e integração com WhatsApp.",
    stack: ["Node.js", "Express", "PostgreSQL", "Supabase", "JWT", "API Brasil", "Render"],
    category: "Back-End",
    githubUrl: "https://github.com/GoatMateusLima",
    demoUrl: null,
    featured: false,
    period: "Jan/2025 – Dez/2025",
  },
];
