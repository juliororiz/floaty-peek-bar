import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "../content/landing.css";
import landingHtml from "../content/landing.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jhemilly Vieira Beauty — Formação Premium em Lisboa" },
      {
        name: "description",
        content:
          "Formações premium presenciais de sobrancelhas e pestanas em Lisboa com Jhemilly Vieira. Turmas reduzidas e prática em modelo real.",
      },
      { property: "og:title", content: "Jhemilly Vieira Beauty — Formação Premium em Lisboa" },
      {
        property: "og:description",
        content:
          "Formações presenciais de sobrancelhas e pestanas em Lisboa: técnica, posicionamento e acompanhamento pós-formação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const cards = [...document.querySelectorAll<HTMLDetailsElement>("details.card")];
    const onToggle = (e: Event) => {
      const el = e.currentTarget as HTMLDetailsElement;
      if (el.open) cards.forEach((c) => c !== el && (c.open = false));
    };
    cards.forEach((c) => c.addEventListener("toggle", onToggle));

    return () => {
      io.disconnect();
      cards.forEach((c) => c.removeEventListener("toggle", onToggle));
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}

