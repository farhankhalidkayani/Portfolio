import { motion } from 'framer-motion';
import { philosophy } from '../../data/content';
import { ease } from '../../lib/motion';
import { Grain } from '../ui/BackgroundFx';
import WordReveal from '../ui/WordReveal';

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-36">
      <div className="fx-vlines-dark absolute inset-0 pointer-events-none" /><Grain />
      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/45">{philosophy.label}</p>
        <h2 className="mt-6 max-w-4xl text-[clamp(2rem,5.2vw,4.3rem)] font-semibold leading-none tracking-[-0.045em]"><WordReveal text={philosophy.heading} /></h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line-dark md:grid-cols-3">
          {philosophy.principles.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08, ease }} className="bg-ink p-10 transition-colors hover:bg-ink-soft">
              <p className="text-sm text-accent">0{i + 1}</p>
              <h3 className="mt-6 text-[28px] font-semibold tracking-[-0.035em]">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/55">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
