import { Link } from 'react-router-dom';
import { nav, person } from '../../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[84rem] px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold tracking-[-0.035em]">{person.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{person.tagline}</p>
            <a href={`mailto:${person.email}`} className="mt-4 inline-block text-sm hover:text-accent">{person.email}</a>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">Pages</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => <li key={n.label}><Link to={n.to} className="hover:text-accent">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {person.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="group hover:text-accent">
                    {s.label} <span className="inline-block transition-transform group-hover:-translate-y-px group-hover:translate-x-px">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-line pt-6 text-xs text-muted">
          <p>© {new Date().getFullYear()} {person.name}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full border border-line px-4 py-2 text-ink transition-colors hover:border-ink hover:bg-white"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
