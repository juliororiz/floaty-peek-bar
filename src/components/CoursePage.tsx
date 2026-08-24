import { Link } from "@tanstack/react-router";
import { RULES, waLink, type Course } from "../data/courses";
import { Backdrop, WaIcon, WhatsAppFab, useReveal } from "./site";
import "../content/site.css";

export function CoursePage({ course }: { course: Course }) {
  useReveal();
  const msg = `Olá Jhemilly, quero informações sobre a formação ${course.short}.`;

  return (
    <main className="jv">
      <Backdrop />
      <div className="shell">
        <div className="topbar">
          <Link to="/" className="back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            Voltar
          </Link>
          <img src="/images/jv-monogram.png" alt="Jhemilly Vieira Beauty" />
        </div>

        <header className="cover reveal">
          <img src={course.cover} alt={`Formação ${course.short}`} />
          <div className="cover-veil" />
          <div className="cover-in">
            <p className="eyebrow">{course.badge} · {course.level}</p>
            <h1 className="display">
              {course.title}
              <em>{course.titleEm}</em>
            </h1>
            <p>{course.intro}</p>
            <div className="cover-facts">
              {course.facts.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </header>

        {course.highlights && (
          <section className="block reveal">
            <div className="grid2">
              {course.highlights.map((h) => (
                <div className="tile" key={h.title}>
                  <b>{h.title}</b>
                  <span>{h.sub}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="block reveal">
          <h2 className="display">
            <small>Conteúdo</small>
            {course.delivers.title}
          </h2>
          <ul className="checks">
            {course.delivers.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="block reveal">
          <h2 className="display">
            <small>Cronograma</small>
            {course.days.length} dias de formação
          </h2>
          <div className="days">
            {course.days.map((d) => (
              <article className="day" data-n={d.n} key={d.n}>
                <h4>{d.title}</h4>
                <ul>
                  {d.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="block reveal">
          <h2 className="display">
            <small>Galeria</small>
            Resultados & bastidores
          </h2>
          <div className="gallery">
            {course.gallery.map((g) => (
              <figure key={g.src} className={g.wide ? "wide" : undefined}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="block reveal">
          <h2 className="display">
            <small>Incluído</small>
            {course.kit.title}
          </h2>
          {course.kit.note && <p className="lead">{course.kit.note}</p>}
          <div className="kit">
            {course.kit.items.map((i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </section>

        {course.bonus && (
          <section className="block reveal">
            <h2 className="display">
              <small>Bónus</small>
              Além do treinamento
            </h2>
            <ul className="checks">
              {course.bonus.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        )}

        {course.info && (
          <section className="block reveal">
            <h2 className="display">
              <small>Informações</small>
              Antes de começar
            </h2>
            <ul className="checks">
              {course.info.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="block reveal">
          <div className="invest">
            <p className="eyebrow">Investimento</p>
            <p className="value">{course.price}</p>
            <p className="vat">{course.priceNote}</p>
            <div className="split">
              <div>
                <b>{course.deposit}</b>
                <span>Inscrição</span>
              </div>
              <div>
                <b>MB WAY</b>
                <span>Cartão · Klarna</span>
              </div>
            </div>
            <a className="btn" href={waLink(msg)} target="_blank" rel="noopener">
              <WaIcon />
              Garantir a minha vaga
            </a>
          </div>
        </section>

        <section className="block reveal">
          <h2 className="display">
            <small>Regras</small>
            Inscrição e cancelamento
          </h2>
          <div className="rules">
            <ol>
              {RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </div>
        </section>

        <footer className="foot">
          <Link className="btn btn-ghost" to="/">
            Ver todas as formações
          </Link>
          <p style={{ marginTop: 18 }}>© 2026 Jhemilly Vieira Beauty · Lisboa, Portugal</p>
        </footer>
      </div>

      <WhatsAppFab message={msg} />
    </main>
  );
}
