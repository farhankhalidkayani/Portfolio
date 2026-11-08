import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Mode = 'default' | 'hover' | 'view';
const size = { default: 10, hover: 40, view: 76 };

export default function CustomCursor() {
  const [on, setOn] = useState(false);
  const [mode, setMode] = useState<Mode>('default');
  const x = useSpring(useMotionValue(-100), { stiffness: 700, damping: 40, mass: 0.25 });
  const y = useSpring(useMotionValue(-100), { stiffness: 700, damping: 40, mass: 0.25 });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const sync = () => { setOn(mq.matches); document.documentElement.classList.toggle('has-cursor', mq.matches); };
    sync();
    mq.addEventListener('change', sync);
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const m = (e.target as Element | null)?.closest?.('[data-cursor]')?.getAttribute('data-cursor');
      setMode(m === 'hover' || m === 'view' ? m : 'default');
    };
    window.addEventListener('pointermove', move);
    return () => { mq.removeEventListener('change', sync); window.removeEventListener('pointermove', move); document.documentElement.classList.remove('has-cursor'); };
  }, [x, y]);

  if (!on) return null;
  const s = size[mode];
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-accent text-[10px] font-medium uppercase tracking-widest text-accent"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: s, height: s, backgroundColor: mode === 'default' ? 'var(--accent)' : 'rgba(91,61,245,0)', backdropFilter: mode === 'view' ? 'blur(2px)' : 'blur(0px)' }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
    >
      {mode === 'view' && 'View'}
    </motion.div>
  );
}
