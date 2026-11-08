import { useState } from 'react';
import { motion } from 'framer-motion';
import { closing, process, services } from '../data/content';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { ease } from '../lib/motion';
import PageHeader from '../components/layout/PageHeader';
import MagneticButton from '../components/ui/MagneticButton';
import CtaBand from '../components/ui/CtaBand';
import Reveal from '../components/ui/Reveal';
import ServiceVisual from '../components/sections/services/ServiceVisual';

function Row({ s }: { s: (typeof services)[number] }) {
  const [on, setOn] = useState(false);
  return (
    <motion.article id={s.id} onHoverStart={() => setOn(true)} onHoverEnd={() => setOn(false)}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.3, ease }}
      className="grid gap-10 border-t border-line py-16 first:border-t-0 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-24">
      <div>
        <p className="font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-none tracking-[-0.045em] text-ink/10">{s.number}</p>
        <h2 className="mt-4 text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold leading-tight tracking-[-0.045em]">{s.title}</h2>
        {s.tools.length > 0 && <p className="mt-4 text-[13px] font-medium text-accent">{s.tools.join(' · ')}</p>}
      </div>
      <div>
        <p className="max-w-xl text-lg leading-relaxed md:leading-7">{s.description}</p>
        <div className="mt-10 rounded-2xl bg-paper p-6"><ServiceVisual kind={s.visual} active={on} /></div>
        <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
          {s.capabilities.map((c, i) => (
            <motion.li key={c} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03, ease }}
              className="flex items-center gap-3 border-b border-line py-3 text-sm text-muted">
              <span className="size-1 rounded-full bg-accent" />{c}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Services() {
  useDocumentTitle('Services');
  return (
    <>
      <PageHeader label="Services" title="Five Disciplines, One Person, One Roadmap."
        text="Most projects stall in the gaps between backend, cloud, data and AI. Running them as one practice removes the hand-offs.">
        <MagneticButton to="/contact" arrow>Start a Conversation</MagneticButton>
        <MagneticButton to="/work" variant="outline">See the work</MagneticButton>
      </PageHeader>
      <section className="bg-white"><div className="mx-auto max-w-[84rem] px-6 md:px-10">{services.map((s) => <Row key={s.id} s={s} />)}</div></section>
      <section className="border-t border-line bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-[84rem] px-6 md:px-10">
          <h2 className="max-w-xl text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-[-0.045em]">However we start, the engagement runs the same way.</h2>
          <Reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
            {process.map((p, i) => (
              <div key={p.title} className="bg-sand p-7 transition-colors hover:bg-white">
                <p className="text-sm text-accent">0{i + 1}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.035em]">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <CtaBand {...closing.home} />
    </>
  );
}
