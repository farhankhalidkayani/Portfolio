import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { hero } from '../../../data/content';
import { ease } from '../../../lib/motion';
import MagneticButton from '../../ui/MagneticButton';
import { Glow, Grain, Grid, Particles } from '../../ui/BackgroundFx';
import HeroOrbit from './HeroOrbit';

const intro = (delay: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay, ease } });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const orbitY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -140]), { stiffness: 120, damping: 30 });
  const orbitOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper pb-24 pt-32 md:pt-40">
      <Grid /><Grain /><Particles count={14} />
      <Glow className="-right-24 -top-24 size-[520px]" />
      <Glow mist className="-bottom-24 -left-24 size-[380px]" />
      <div className="relative mx-auto grid max-w-[84rem] items-center gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p {...intro(0.15)} className="text-[11px] font-medium uppercase tracking-[0.34em] text-muted">
            {hero.label.split('×').map((w, i, a) => (
              <span key={i}>{w.trim()}{i < a.length - 1 && <span className="mx-2 text-accent">×</span>}</span>
            ))}
          </motion.p>
          <h1 className="mt-8 text-[clamp(2.6rem,6.4vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <motion.span {...intro(0.25)} style={{ y: y1 }} className="block">{hero.line1}</motion.span>
            <motion.span {...intro(0.4)} style={{ y: y2 }} className="block text-muted">{hero.line2}</motion.span>
          </h1>
          <motion.p {...intro(0.6)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl md:leading-7">{hero.paragraph}</motion.p>
          <motion.div {...intro(0.7)} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton to="/work" arrow>View My Work</MagneticButton>
            <MagneticButton to="/contact" variant="outline">Let's Talk</MagneticButton>
          </motion.div>
          <motion.p {...intro(0.85)} className="mt-8 flex items-center gap-3 text-sm text-muted">
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-accent" style={{ animation: 'ring 2.4s ease-out infinite' }} />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            {hero.status}
          </motion.p>
        </div>
        <motion.div style={{ y: orbitY, opacity: orbitOpacity }}><HeroOrbit /></motion.div>
      </div>
      <div className="relative mx-auto mt-16 hidden max-w-[84rem] items-center gap-4 px-10 md:flex">
        <span className="text-[11px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 top-0 h-4 bg-accent" style={{ animation: 'scrolldot 2.2s linear infinite' }} />
        </span>
      </div>
    </section>
  );
}
