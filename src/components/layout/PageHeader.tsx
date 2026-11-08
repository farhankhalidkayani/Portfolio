import type { ReactNode } from 'react';
import Eyebrow from '../ui/Eyebrow';
import WordReveal from '../ui/WordReveal';
import Reveal from '../ui/Reveal';
import { Glow, Grain, Grid, Particles } from '../ui/BackgroundFx';

export default function PageHeader({ label, title, text, children }: { label: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-36 md:pb-24 md:pt-48">
      <Grid /><Grain /><Particles count={8} />
      <Glow className="-right-24 -top-24 size-[480px]" />
      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <Eyebrow className="mb-6">{label}</Eyebrow>
        <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
          <WordReveal text={title} />
        </h1>
        {text && <Reveal className="mt-6"><p className="max-w-xl text-lg leading-relaxed text-muted md:text-lg md:leading-7">{text}</p></Reveal>}
        {children && <Reveal className="mt-8 flex flex-wrap gap-3">{children}</Reveal>}
      </div>
    </section>
  );
}
