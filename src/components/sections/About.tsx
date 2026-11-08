import { motion } from 'framer-motion';
import { about, person } from '../../data/content';
import { ease } from '../../lib/motion';
import Eyebrow from '../ui/Eyebrow';
import Reveal from '../ui/Reveal';
import WordReveal from '../ui/WordReveal';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-line bg-sand py-24 md:py-32">
      <div className="fx-dots absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-6">{about.label}</Eyebrow>
            <h2 className="max-w-md text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.045em]"><WordReveal text={about.heading} /></h2>
          </div>
          <Reveal className="space-y-5 lg:pt-16">
            <p className="text-lg leading-relaxed md:text-xl md:leading-7">{about.lead}</p>
            <p className="leading-relaxed text-muted">{about.body}</p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-5">
          <motion.div className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-accent md:block"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease }} />
          {about.steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06, ease }} className="relative">
              <span className="relative flex size-[22px] items-center justify-center rounded-full border border-accent bg-sand">
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
              <h3 className="mt-5 font-sans text-sm font-medium uppercase tracking-[0.2em]">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col gap-8 rounded-3xl border border-line bg-white p-10 md:flex-row md:items-center md:justify-between">
          <div className="group flex items-center gap-5" data-cursor="hover">
            <div className="size-24 shrink-0 overflow-hidden rounded-2xl border border-line bg-frame">
              {person.portrait && <img src={person.portrait} alt={person.name} className="h-full w-full object-cover grayscale transition duration-300 group-hover:scale-[1.03] group-hover:grayscale-0" />}
            </div>
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.035em]">{person.name}</p>
              <p className="mt-1 text-sm text-muted">{person.tagline}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {about.roles.map((r) => <li key={r} className="rounded-full border border-line px-4 py-2 text-[13px]">{r}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
