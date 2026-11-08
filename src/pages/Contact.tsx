import { Briefcase, Layers, Mail } from 'lucide-react';
import { contact } from '../data/content';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/sections/contact/ContactForm';

const icons = { mail: Mail, briefcase: Briefcase, layers: Layers };

export default function Contact() {
  useDocumentTitle('Contact');
  return (
    <>
      <PageHeader label="Contact" title={contact.title} text={contact.intro} />
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="space-y-8">
            <div className="rounded-2xl border border-line bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex size-2"><span className="absolute inset-0 rounded-full bg-accent" style={{ animation: 'ring 2.4s ease-out infinite' }} /><span className="relative size-2 rounded-full bg-accent" /></span>
                <p className="text-sm font-medium">{contact.availability}</p>
              </div>
              <p className="mt-2 text-sm text-muted">{contact.availabilityNote}</p>
            </div>
            <ul className="space-y-4 text-sm">
              {contact.facts.map((f) => {
                const I = icons[f.icon as keyof typeof icons];
                return <li key={f.text} className="flex items-center gap-3"><I size={16} className="text-accent" />{f.text}</li>;
              })}
            </ul>
            <div className="border-t border-line pt-8">
              <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-muted">Common questions</p>
              <dl className="space-y-6">
                {contact.faqs.map((f) => (
                  <div key={f.q}><dt className="text-[15px] font-medium">{f.q}</dt><dd className="mt-1 max-w-md text-sm text-muted">{f.a}</dd></div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
