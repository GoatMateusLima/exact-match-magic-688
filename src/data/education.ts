export type Education = {
  icon: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  status: "cursando" | "concluído";
};

export const education: Education[] = [
  {
    icon: "🎓",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UNICEP – Centro Universitário Central Paulista",
    location: "São Carlos, SP",
    period: "Jan/2026 – Jul/2028",
    status: "cursando",
  },
  {
    icon: "🚀",
    title: "Transforme-se — Programador de Sistemas",
    institution: "Serasa Experian · Gerando Falcões · Senac",
    location: "Programa online",
    period: "Set/2025 – Abr/2026",
    status: "concluído",
  },
  {
    icon: "📜",
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "ETEC Paulino Botelho – Centro Paula Souza",
    location: "São Carlos, SP",
    period: "Jan/2024 – Dez/2025",
    status: "concluído",
  },
];
