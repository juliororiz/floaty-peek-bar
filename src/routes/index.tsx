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
    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
    const header = document.getElementById("header");
    const dock = document.getElementById("dock");
    const pill = document.getElementById("dockPill");
    const dockLinks = [...document.querySelectorAll<HTMLAnchorElement>(".dock-link")];
    const reveals = [...document.querySelectorAll(".reveal")];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.14 },
    );
    reveals.forEach((el) => io.observe(el));

    const about = document.querySelector<HTMLElement>(".about-cinematic");
    const heroImg = document.querySelector<HTMLElement>(".hero-media img");
    const courseImgs = [...document.querySelectorAll<HTMLElement>(".course-media img")];
    const methodImg = document.querySelector<HTMLElement>(".method-bg img");
    const sections = dockLinks
      .map((l) => l.dataset["sec"])
      .map((id) => (id === "top" ? document.getElementById("top") : document.getElementById(id!)));

    let lastY = window.scrollY;

    const movePill = (el: Element | null) => {
      if (!pill || !(el instanceof HTMLElement) || !dock) return;
      if (!el.offsetParent) return;
      pill.style.width = `${el.offsetWidth}px`;
      pill.style.transform = `translateX(${el.offsetLeft}px)`;
      pill.style.opacity = "1";
    };

    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle("stuck", y > 24);

      lastY = y;

      let activeIndex = 0;
      sections.forEach((sec, i) => {
        if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.35) activeIndex = i;
      });
      dockLinks.forEach((l, i) => l.classList.toggle("is-active", i === activeIndex));
      movePill(dockLinks[activeIndex]);

      heroImg?.style.setProperty("--heroY", `${clamp(y * 0.1, 0, 55)}px`);
      courseImgs.forEach((img) => {
        const r = (img.closest(".course") as HTMLElement).getBoundingClientRect();
        const p = clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1);
        img.style.setProperty("--courseY", `${(p - 0.5) * -34}px`);
      });
      if (methodImg) {
        const r = (methodImg.closest(".method") as HTMLElement).getBoundingClientRect();
        const p = clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1);
        methodImg.style.setProperty("--methodY", `${(p - 0.5) * -60}px`);
      }
      if (about) {
        const r = about.getBoundingClientRect();
        const p = clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1);
        about.style.setProperty("--videoY", `${(p - 0.5) * -80}px`);
        about.style.setProperty("--vidBright", (0.31 + p * 0.18).toFixed(2));
        about.style.setProperty("--vidSat", (0.55 + p * 0.48).toFixed(2));
        about.style.setProperty("--vidSepia", (0.25 - p * 0.18).toFixed(2));
        about.style.setProperty("--vidScale", (1.13 - p * 0.05).toFixed(3));
      }
    };

    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    addEventListener("scroll", handler, { passive: true });
    onScroll();

    const tap = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      dockLinks.forEach((l) => l.classList.toggle("is-active", l === el));
      movePill(el);
    };
    dockLinks.forEach((l) => l.addEventListener("click", tap));
    const onResize = () => movePill(document.querySelector(".dock-link.is-active"));
    addEventListener("resize", onResize);

    return () => {
      removeEventListener("scroll", handler);
      removeEventListener("resize", onResize);
      dockLinks.forEach((l) => l.removeEventListener("click", tap));
      io.disconnect();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}
