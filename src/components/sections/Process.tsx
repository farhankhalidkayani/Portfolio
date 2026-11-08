import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { process } from '../../data/content';
import Eyebrow from '../ui/Eyebrow';
import WordReveal from '../ui/WordReveal';

function Step({ s, i }: { s: (typeof process)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 55%'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  return (
    <div ref={ref} className="relative grid pl-8 md:grid-cols-6 md:gap-0 md:pl-0">
      <motion.span style={{ scale }} className="absolute left-0 top-3 size-2.5 -translate-x-1/2 rounded-full bg-accent md:relative md:col-span-1 md:mt-3 md:translate-x-0 md:justify-self-end md:mr-[-5px] md:z-10" />
      <motion.div style={{ opacity, x }} className="py-8 md:col-span-5 md:pl-14">
        <p className="text-xs text-accent">0{i + 1}</p>
        <h3 className="mt-2 text-[clamp(1.5rem,3vw,2.4rem)] font-semibold tracking-[-0.045em]">{s.title}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">{s.text}</p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  return (
    <section id="process" className="relative overflow-hidden border-t border-line bg-sand py-24 md:py-32">
      <div className="fx-hatch absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <Eyebrow className="mb-6">Process</Eyebrow>
        <h2 className="mb-16 text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.045em]"><WordReveal text="From Problem to Production" /></h2>
        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-line md:left-[16.666%]">
            <motion.div style={{ scaleY: fill }} className="h-full origin-top bg-accent" />
          </div>
          {process.map((s, i) => <Step key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
