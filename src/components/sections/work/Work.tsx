import { projects } from '../../../data/content';
import Eyebrow from '../../ui/Eyebrow';
import WordReveal from '../../ui/WordReveal';
import MagneticButton from '../../ui/MagneticButton';
import { Glow } from '../../ui/BackgroundFx';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-line bg-paper py-24 md:py-32">
      <Glow className="-left-40 top-1/3 size-[420px]" />
      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-6">Selected Work</Eyebrow>
            <h2 className="text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.045em]"><WordReveal text="Systems Built to Run, Not Just Ship" /></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">Production platforms and the numbers behind them.</p>
        </div>
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
        </div>
        <div className="mt-16 text-center"><MagneticButton to="/work" variant="outline" arrow>All case studies</MagneticButton></div>
      </div>
    </section>
  );
}
