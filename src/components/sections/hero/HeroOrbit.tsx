import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { hero } from '../../../data/content';

const rings = [{ s: 0.98, d: 70, dir: 1 }, { s: 0.76, d: 96, dir: -1 }, { s: 0.54, d: 122, dir: 1 }];
const chipPos = [['4%', '18%', 26], ['78%', '8%', 18], ['88%', '48%', 22], ['64%', '86%', 14], ['6%', '72%', 20]] as const;

function Chip({ label, i, px, py }: { label: string; i: number; px: MotionValue<number>; py: MotionValue<number> }) {
  const [l, t, depth] = chipPos[i];
  const x = useTransform(px, [-1, 1], [-depth, depth]);
  const y = useTransform(py, [-1, 1], [-depth, depth]);
  return (
    <motion.div className="absolute" style={{ left: l, top: t, x, y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.08 }}>
      <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-xl border border-line bg-white px-3.5 py-2 text-xs font-medium tracking-widest shadow-[0_14px_36px_-24px_rgba(11,11,12,0.4)]">
        {label}
      </motion.div>
    </motion.div>
  );
}

export default function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0), py = useMotionValue(0);
  const spring = { stiffness: 90, damping: 20, mass: 0.6 };
  const rx = useSpring(useTransform(py, [-1, 1], [7, -7]), spring);
  const ry = useSpring(useTransform(px, [-1, 1], [-9, 9]), spring);
  const cx = useTransform(px, [-1, 1], [-14, 14]);
  const cy = useTransform(py, [-1, 1], [-14, 14]);

  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <div style={{ perspective: 1200 }} onPointerMove={move} onPointerLeave={() => { px.set(0); py.set(0); }}>
      <motion.div ref={ref} style={{ rotateX: rx, rotateY: ry }} className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden>
        {rings.map((r, i) => (
          <motion.div key={i} className="absolute inset-0 m-auto aspect-square rounded-full border border-line"
            style={{ width: `${r.s * 100}%` }} animate={{ rotate: 360 * r.dir }} transition={{ duration: r.d, repeat: Infinity, ease: 'linear' }}>
            {i === 0 && [0, 1, 2, 3, 4].map((k) => (
              <span key={k} className="absolute inset-0" style={{ transform: `rotate(${k * 72}deg)` }}>
                <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
              </span>
            ))}
          </motion.div>
        ))}
        <motion.div style={{ x: cx, y: cy }} className="absolute left-[27%] top-[27%] flex w-[46%] flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-[0_24px_60px_-32px_rgba(11,11,12,0.35)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">System</p>
          {[0, 1, 2, 3].map((i) => (
            <motion.div key={i} className="h-1.5 origin-left rounded-full bg-ink/15" animate={{ scaleX: [0.2, 1, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }} />
          ))}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 7 }, (_, i) => (
              <motion.span key={i} className="aspect-square rounded-sm bg-ink/10" animate={{ backgroundColor: ['rgba(11,11,12,0.1)', 'rgb(91 61 245 / 0.35)', 'rgba(11,11,12,0.1)'] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }} />
            ))}
          </div>
        </motion.div>
        {hero.chips.map((c, i) => <Chip key={c} label={c} i={i} px={px} py={py} />)}
      </motion.div>
    </div>
  );
}
