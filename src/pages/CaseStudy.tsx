import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { closing, projects } from '../data/content';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Eyebrow from '../components/ui/Eyebrow';
import WordReveal from '../components/ui/WordReveal';
import Reveal from '../components/ui/Reveal';
import ParallaxMedia from '../components/ui/ParallaxMedia';
import CtaBand from '../components/ui/CtaBand';
import MagneticButton from '../components/ui/MagneticButton';
import { Glow, Grid } from '../components/ui/BackgroundFx';

export default function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  useDocumentTitle(p?.name);
  if (!p) return <Navigate to="/work" replace />;
  const next = projects.find((x) => x.slug === p.next)!;
  const shell = 'mx-auto max-w-[84rem] px-6 md:px-10';

  return (
    <>
      <section className="relative overflow-hidden bg-paper pb-12 pt-32 md:pt-44">
        <Grid /><Glow className="-left-32 top-0 size-[480px]" />
        <div className={`relative ${shell}`}>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"><ArrowLeft size={16} />All case studies</Link>
          <div className="mt-8 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-accent-soft px-3 py-1 font-medium text-accent">{p.tag}</span><span className="text-muted">{p.year}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,6.4vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.045em]"><WordReveal text={p.title} /></h1>
          <Reveal className="mt-6"><p className="max-w-2xl text-lg leading-relaxed text-muted md:leading-7">{p.summary}</p></Reveal>
          {p.live && <Reveal className="mt-8"><MagneticButton href={p.live} variant="outline" arrow>Visit {p.name}</MagneticButton></Reveal>}
        </div>
      </section>

      <section className="bg-paper pb-16"><div className={shell}><ParallaxMedia src={p.heroImage} alt={p.name} drift={30} className="aspect-video" /></div></section>

      <section className="border-y border-line bg-white">
        <dl className={`grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4 ${shell}`}>
          {[['Client', p.client], ['Role', p.role], ['Timeline', p.timeline], ['Year', p.year]].map(([k, v]) => (
            <div key={k}><dt className="text-[11px] uppercase tracking-[0.2em] text-muted">{k}</dt><dd className="mt-1 text-sm">{v}</dd></div>
          ))}
        </dl>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className={`grid gap-8 md:grid-cols-[0.5fr_1fr] ${shell}`}>
          <Eyebrow>The challenge</Eyebrow>
          <Reveal><p className="max-w-2xl text-2xl leading-8">{p.challenge}</p></Reveal>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-28">
        <div className={`grid grid-cols-2 gap-10 md:grid-cols-4 ${shell}`}>
          {p.metrics.map((m) => (
            <Reveal key={m.label}>
              <p className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-none tracking-[-0.045em]">{m.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-paper/50">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className={`space-y-28 ${shell}`}>
          {p.chapters.map((c, i) => (
            <div key={c.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal className={i === 1 ? 'md:order-2' : ''}>
                <p className="text-sm text-accent">0{i + 1}</p>
                <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.3rem)] font-semibold leading-tight tracking-[-0.045em]">{c.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">{c.text}</p>
              </Reveal>
              <ParallaxMedia src={c.image} alt={c.title} drift={20} className="aspect-[4/3]" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-sand py-16">
        <Link to={`/work/${next.slug}`} data-cursor="view" className={`group flex items-center justify-between gap-6 ${shell}`}>
          <div>
            <Eyebrow>Next case study</Eyebrow>
            <p className="mt-3 font-display text-[clamp(2rem,5vw,4rem)] font-semibold tracking-[-0.045em] transition-colors group-hover:text-accent">{next.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{next.category}</p>
          </div>
          <span className="flex size-14 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white"><ArrowRight size={20} /></span>
        </Link>
      </section>
      <CtaBand {...closing.case} />
    </>
  );
}
