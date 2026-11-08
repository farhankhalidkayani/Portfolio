import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { stats } from '../../data/content';
import { ease } from '../../lib/motion';

function Count({ to, active }: { to: number; active: boolean }) {
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!active || reduce) return setV(to);
    const c = animate(0, to, { duration: 1.1, ease: (t) => 1 - Math.pow(1 - t, 3), onUpdate: setV });
    return () => c.stop();
  }, [active, to, reduce]);
  const dec = Number.isInteger(to) ? 0 : 1;
  return <>{v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec })}</>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section className="relative overflow-hidden border-y border-line bg-mist py-20 md:py-24">
      <div className="fx-vlines absolute inset-0 pointer-events-none" />
      <div ref={ref} className="relative mx-auto grid max-w-[84rem] grid-cols-2 gap-y-12 px-6 md:grid-cols-4 md:px-10">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-4 md:px-8 ${i > 0 ? 'md:border-l md:border-line' : ''}`}>
            <p className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-none tracking-[-0.045em]">
              <Count to={s.value} active={inView} /><span className="text-accent">{s.suffix}</span>
            </p>
            <p className="mt-4 text-[13px] uppercase tracking-[0.18em] text-muted">{s.label}</p>
            <motion.div className="mt-4 h-px w-[72px] origin-left bg-accent" initial={{ scaleX: 0 }} animate={{ scaleX: inView ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease }} />
          </div>
        ))}
      </div>
    </section>
  );
}
