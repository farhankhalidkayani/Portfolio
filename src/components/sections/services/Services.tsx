import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../../../data/content';
import Eyebrow from '../../ui/Eyebrow';
import WordReveal from '../../ui/WordReveal';
import MagneticButton from '../../ui/MagneticButton';
import ServiceVisual from './ServiceVisual';
import { ease } from '../../../lib/motion';

function Card({ s, i }: { s: (typeof services)[number]; i: number }) {
  const [on, setOn] = useState(false);
  return (
    <motion.article
      tabIndex={0}
      onHoverStart={() => setOn(true)} onHoverEnd={() => setOn(false)}
      onFocus={() => setOn(true)} onBlur={() => setOn(false)}
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.3, delay: i * 0.04, ease }}
      className={`flex flex-col bg-white p-7 transition-colors duration-200 hover:bg-paper focus-visible:bg-paper md:p-9 ${i === 0 ? 'lg:col-span-2' : ''}`}
    >
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className={`size-1.5 rounded-full transition-all duration-200 ${on ? 'scale-[1.4] bg-accent' : 'bg-ink/30'}`} />{s.number}
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] md:text-2xl">{s.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{s.description}</p>
      {s.tools.length > 0 && <p className="mt-3 text-[13px] font-medium text-accent">{s.tools.join(' · ')}</p>}
      <div className="my-8"><ServiceVisual kind={s.visual} active={on} /></div>
      <ul className="mt-auto space-y-2 border-t border-line pt-5 text-sm text-muted">
        {s.capabilities.slice(0, 4).map((c) => (
          <li key={c} className="flex items-center gap-3"><span className="h-px w-2 bg-ink/30" />{c}</li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-line bg-white py-24 md:py-32">
      <div className="fx-corner absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-6">Services</Eyebrow>
            <h2 className="text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.045em]"><WordReveal text="What I Can Build For You" /></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">Five disciplines that usually require five different people — run as one connected practice.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <Card key={s.id} s={s} i={i} />)}
        </div>
        <div className="mt-12 text-center"><MagneticButton to="/services" variant="outline" arrow>Explore services in detail</MagneticButton></div>
      </div>
    </section>
  );
}
