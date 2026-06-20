import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { AboutMe } from "../components/sections/AboutMe";
import { Formacao } from "../components/sections/Formacao";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Blog } from "../components/sections/Blog";
import { Contact } from "../components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mateus Lima Bispo — Desenvolvedor Back-End Java" },
      {
        name: "description",
        content:
          "Portfólio de Mateus Lima Bispo, desenvolvedor Back-End Java focado em Spring Boot, PostgreSQL e Docker. Estudante de ADS na UNICEP, em busca de estágio em tech.",
      },
      { property: "og:title", content: "Mateus Lima Bispo — Desenvolvedor Back-End Java" },
      {
        property: "og:description",
        content: "APIs REST, integrações com IA e sistemas em produção. Em busca de estágio em tech.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text-primary)] min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Formacao />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
