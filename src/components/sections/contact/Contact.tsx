import { contact, person } from '../../../data/content';
import Eyebrow from '../../ui/Eyebrow';
import WordReveal from '../../ui/WordReveal';
import Reveal from '../../ui/Reveal';
import { Glow, Grain, Grid, Particles } from '../../ui/BackgroundFx';
import { Mail } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-paper py-24 md:py-32">
      <Grid /><Grain /><Particles count={10} />
      <Glow className="left-1/2 -top-40 size-[900px] -translate-x-1/2" />
      <div className="relative mx-auto grid max-w-[84rem] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow className="mb-6">{contact.label}</Eyebrow>
          <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]"><WordReveal text={contact.heading} /></h2>
          <Reveal className="mt-6"><p className="max-w-lg text-lg leading-relaxed text-muted">{contact.intro}</p></Reveal>
          <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted">Direct</p>
              <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 text-sm hover:text-accent"><Mail size={16} className="text-accent" />{person.email}</a>
            </div>
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted">Elsewhere</p>
              <ul className="space-y-1 text-sm">{person.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent">{s.label} ↗</a></li>)}</ul>
            </div>
          </div>
        </div>
        <Reveal><ContactForm /></Reveal>
      </div>
    </section>
  );
}
