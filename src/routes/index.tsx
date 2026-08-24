import { createFileRoute, Link } from "@tanstack/react-router";
import { courses, waLink } from "../data/courses";
import { ArrowIcon, Backdrop, WaIcon, WhatsAppFab, useReveal } from "../components/site";
import "../content/site.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jhemilly Vieira Beauty — Formações de Pestanas e Lábios" },
      {
        name: "description",
        content:
          "Formações presenciais em Lisboa e Amadora: Fio a Fio & Volumes, M7 Método Sete Pilares e Bloom Lips. Turmas reduzidas, prática em modelo real e certificado.",
      },
      { property: "og:title", content: "Jhemilly Vieira Beauty — Formações de Pestanas e Lábios" },
      {
        property: "og:description",
        content:
          "Escolha a sua formação: Fio a Fio & Volumes (690€), M7 Método Sete Pilares (750€) e Bloom Lips (1.290€).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();

  return (
    <main className="jv">
      <Backdrop />
      <div className="shell">
        <header className="hero reveal">
          <img className="logo" src="/images/jv-lockup.png" alt="Jhemilly Vieira Beauty" />
          <p className="handle">@jhemillyvieira · Lisboa, Portugal</p>
          <p className="tagline">
            Formações presenciais de pestanas e micropigmentação labial. Técnica, posicionamento e
            resultado real.
          </p>
          <div className="chips">
            <span className="chip">+1000 alunas</span>
            <span className="chip">6 anos de mercado</span>
            <span className="chip">Turmas reduzidas</span>
          </div>
        </header>

        <section className="stack reveal" aria-labelledby="form-t">
          <h2 className="section-title" id="form-t">
            Formações
          </h2>
          {courses.map((c) => (
            <Link key={c.slug} to={`/${c.slug}`} className="course-card">
              <div className="cc-media">
                <span className="cc-badge">{c.badge}</span>
                <img src={c.cardImage} alt={c.short} loading="lazy" />
              </div>
              <div className="cc-body">
                <div className="cc-txt">
                  <h3>{c.title}</h3>
                  <p>{c.level}</p>
                </div>
                <div className="cc-price">
                  <b>{c.price}</b>
                  <span>Inscrição {c.deposit}</span>
                </div>
              </div>
              <div className="cc-go">
                <span>Ver a formação completa</span>
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </section>

        <section className="stack reveal">
          <h2 className="section-title">Sobre</h2>
          <div className="about">
            <img src="/images/m7-cover.jpg" alt="Jhemilly Vieira" loading="lazy" />
            <div>
              <h3>Jhemilly Vieira</h3>
              <p>
                CEO da Jhemilly Vieira Beauty e idealizadora da JV Collection, uma das marcas de
                pinças mais vendidas de Portugal. Mais de 6 anos de profissão e +1000 alunas
                formadas presencialmente.
              </p>
            </div>
          </div>
        </section>

        <section className="stack reveal">
          <h2 className="section-title">Contactos</h2>
          <a className="row" href={waLink("Olá Jhemilly, gostava de saber mais sobre as formações.")} target="_blank" rel="noopener">
            <span className="ico ico-wa">
              <WaIcon />
            </span>
            <span className="row-txt">
              <b>WhatsApp</b>
              <small>Falar direto com a Jhemilly</small>
            </span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a className="row" href="https://www.instagram.com/jhemillyvieira/" target="_blank" rel="noopener">
            <span className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .49 1.5.94.45.45.72.9.94 1.5.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.6-.49 1-.94 1.5-.45.45-.9.72-1.5.94-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a4.1 4.1 0 0 1-1.5-.94 4.1 4.1 0 0 1-.94-1.5c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.49-1 .94-1.5.45-.45.9-.72 1.5-.94.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.5-2.6a1.45 1.45 0 1 1-2.9 0 1.45 1.45 0 0 1 2.9 0Z" />
              </svg>
            </span>
            <span className="row-txt">
              <b>Instagram</b>
              <small>@jhemillyvieira</small>
            </span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a className="row" href="https://maps.google.com/?q=Praceta+Not%C3%ADcias+da+Amadora+5B+Amadora" target="_blank" rel="noopener">
            <span className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C7.9 2 4.6 5.3 4.6 9.4 4.6 15 12 22 12 22s7.4-7 7.4-12.6C19.4 5.3 16.1 2 12 2Zm0 10a2.6 2.6 0 1 1 0-5.2A2.6 2.6 0 0 1 12 12Z" />
              </svg>
            </span>
            <span className="row-txt">
              <b>Academia</b>
              <small>Praceta Notícias da Amadora 5B, Amadora</small>
            </span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a className="row" href="tel:+351938434595">
            <span className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 3h3l1.6 4-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 4 1.6v3c0 1-.8 1.8-1.8 1.6C10.6 18.6 5.4 13.4 5 5.8 4.9 4.8 5.6 3 6.6 3Z" />
              </svg>
            </span>
            <span className="row-txt">
              <b>+351 938 434 595</b>
              <small>Ligar agora</small>
            </span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </section>

        <footer className="foot">
          <p>© 2026 Jhemilly Vieira Beauty · Lisboa, Portugal</p>
        </footer>
      </div>

      <WhatsAppFab message="Olá Jhemilly, gostava de saber mais sobre as formações." />
    </main>
  );
}
