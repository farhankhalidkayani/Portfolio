import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contact } from '../../../data/content';
import MagneticButton from '../../ui/MagneticButton';

type Values = { name: string; email: string; topic: string; message: string };
const empty: Values = { name: '', email: '', topic: contact.topics[0], message: '' };

function validate(v: Values): Partial<Record<keyof Values, string>> {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) e.name = 'Please add your name.';
  if (!v.email.trim()) e.email = 'Please add an email address.';
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'That email address looks incomplete.';
  if (v.message.trim().length < 20) e.message = 'A sentence or two about the problem helps (20+ characters).';
  return e;
}

const field = 'w-full rounded-xl border bg-white px-4 py-3 text-[15px] outline-hidden transition-colors focus:border-accent';
const label = 'mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted';

export default function ContactForm() {
  const [v, setV] = useState(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const errors = validate(v);

  const input = (k: keyof Values) => ({
    id: k, name: k, value: v[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setV({ ...v, [k]: e.target.value }),
    onBlur: () => setTouched({ ...touched, [k]: true }),
    className: `${field} ${touched[k] && errors[k] ? 'border-red-400' : 'border-line'}`,
  });
  const err = (k: keyof Values) => (
    <AnimatePresence>
      {touched[k] && errors[k] && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-1.5 text-xs text-red-500">{errors[k]}</motion.p>}
    </AnimatePresence>
  );

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length) return;
    setState('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: v.name, email: v.email, subject: v.topic, message: v.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setState('sent');
    } catch {
      setState('failed');
    }
  };

  return (
    <div className="rounded-3xl border border-line bg-white p-6 md:p-8">
      <AnimatePresence mode="wait">
        {state === 'sent' ? (
          <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent"><Check size={22} /></span>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">Message sent, {v.name.trim().split(' ')[0]}.</h3>
            <p className="mt-2 text-sm text-muted">Thanks for reaching out. I'll reply by email.</p>
            <div className="mt-8"><MagneticButton variant="outline" onClick={() => { setV(empty); setTouched({}); setState('idle'); }}>Send another message</MagneticButton></div>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="name" className={label}>Name</label><input {...input('name')} autoComplete="name" />{err('name')}</div>
              <div><label htmlFor="email" className={label}>Email</label><input {...input('email')} type="email" autoComplete="email" />{err('email')}</div>
            </div>
            <div>
              <label htmlFor="topic" className={label}>Topic</label>
              <select {...input('topic')}>{contact.topics.map((t) => <option key={t}>{t}</option>)}</select>
            </div>
            <div>
              <label htmlFor="message" className={label}>What's on your mind?</label>
              <textarea {...input('message')} rows={5} />{err('message')}
            </div>
            {state === 'failed' && <p className="text-sm text-red-500">Something went wrong. Please email me directly instead.</p>}
            <MagneticButton type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? <><Loader2 size={16} className="animate-spin" />Sending</> : 'Send message'}
            </MagneticButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
