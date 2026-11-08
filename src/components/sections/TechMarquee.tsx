import { tools } from '../../data/content';
import { Grain } from '../ui/BackgroundFx';

function Row({ reverse, dim }: { reverse?: boolean; dim?: boolean }) {
  const items = reverse ? [...tools].reverse() : tools;
  return (
    <div className="group flex overflow-hidden">
      <div className={`flex shrink-0 items-center group-hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((t, i) => (
          <span key={i} className={`flex items-center whitespace-nowrap text-sm uppercase tracking-[0.18em] md:text-base ${dim ? 'text-paper/35' : 'text-paper/65'}`}>
            <span className="px-5">{t}</span><span className="size-1 rounded-full bg-paper/30" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Tools" className="relative space-y-5 overflow-hidden bg-ink py-12 md:py-16">
      <div className="fx-vlines-dark absolute inset-0 pointer-events-none" /><Grain />
      <Row /><Row reverse dim />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink to-transparent" />
    </section>
  );
}
