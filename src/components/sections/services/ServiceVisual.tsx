import { motion } from 'framer-motion';
import type { VisualKey } from '../../../data/content';
import { ease } from '../../../lib/motion';

const bar = 'rounded-full bg-ink/10';
const t = { duration: 0.3, ease };

function Network({ active }: { active: boolean }) {
  const nodes = [[10, 20], [30, 60], [50, 40], [70, 14], [88, 56], [66, 70]];
  return (
    <svg viewBox="0 0 100 80" className="h-full w-full">
      {nodes.map(([x, y], i) => i !== 2 && (
        <motion.line key={i} x1={50} y1={40} x2={x} y2={y} stroke="currentColor" strokeWidth="0.6" className="text-ink/15"
          animate={{ pathLength: active ? 1 : 0.55, stroke: active ? 'var(--accent)' : undefined }} transition={t} />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r={i === 2 ? 5 : 3.2} className={i === 2 ? 'fill-accent' : 'fill-ink/20'}
          animate={{ scale: active ? [1, 1.25, 1] : 1 }} style={{ transformOrigin: `${x}px ${y}px` }}
          transition={{ duration: 1.4, repeat: active ? Infinity : 0, delay: i * 0.12 }} />
      ))}
    </svg>
  );
}

function Board({ active }: { active: boolean }) {
  return (
    <div className="grid h-full grid-cols-3 gap-2">
      {[0, 1, 2].map((c) => (
        <div key={c} className="relative space-y-1.5 rounded-md bg-ink/[0.04] p-1.5">
          {[0, 1].map((r) => <div key={r} className="h-3 rounded bg-ink/10" />)}
          {c === 0 && (
            <motion.div className="absolute left-1.5 right-1.5 top-1.5 h-3 rounded bg-accent"
              animate={{ x: active ? ['0%', '112%', '224%', '0%'] : '0%' }}
              transition={{ duration: 3.6, repeat: active ? Infinity : 0, ease: 'easeInOut' }} />
          )}
        </div>
      ))}
    </div>
  );
}

function Wireframe({ active }: { active: boolean }) {
  const c = active ? 'var(--accent)' : undefined;
  return (
    <div className="flex h-full gap-2">
      <div className="w-1/5 space-y-1.5 pt-1">{[0, 1, 2].map((i) => <motion.div key={i} className={`h-1.5 ${bar}`} animate={{ backgroundColor: c, x: active ? 2 : 0 }} transition={t} />)}</div>
      <div className="flex flex-1 flex-col gap-2">
        <motion.div className="h-6 rounded-md bg-ink/10" animate={{ backgroundColor: c, y: active ? -1 : 0 }} transition={t} />
        <div className="flex flex-1 gap-2">
          <div className="flex-1 rounded-md bg-ink/[0.06]" /><div className="flex-1 rounded-md bg-ink/[0.06]" />
          <motion.div className="mt-auto h-3 w-8 rounded-full bg-ink/20" animate={{ backgroundColor: c }} transition={t} />
        </div>
      </div>
    </div>
  );
}

function Code({ active }: { active: boolean }) {
  const widths = ['70%', '45%', '85%', '55%', '65%'];
  return (
    <div className="relative h-full">
      <motion.div className="space-y-1.5" animate={{ opacity: active ? 0 : 1 }} transition={t}>
        {widths.map((w, i) => (
          <div key={i} className="flex items-center gap-2 font-mono text-[8px] leading-none text-muted">
            {i + 1}<div className={`h-1.5 ${bar}`} style={{ width: w }} />
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0 flex flex-col gap-1.5 rounded-md border border-line bg-white p-2" animate={{ opacity: active ? 1 : 0 }} transition={t}>
        <div className="h-2 w-1/3 rounded-full bg-accent" /><div className="h-full rounded bg-ink/[0.06]" />
      </motion.div>
    </div>
  );
}

function Bars({ active }: { active: boolean }) {
  const h = [30, 42, 38, 58, 70, 88];
  return (
    <div className="relative flex h-full items-end gap-2">
      {h.map((v, i) => (
        <motion.div key={i} className={`flex-1 rounded-t ${i === 5 ? 'bg-accent' : 'bg-ink/15'}`}
          animate={{ height: `${active ? v : v * 0.45}%` }} transition={{ ...t, delay: i * 0.03 }} />
      ))}
      <svg viewBox="0 0 100 80" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <motion.path d="M4 70 C 25 60, 40 55, 55 38 S 85 12, 96 8" fill="none" stroke="var(--accent)" strokeWidth="1.2"
          animate={{ pathLength: active ? 1 : 0 }} transition={{ duration: 0.6, ease }} />
      </svg>
    </div>
  );
}

const map = { network: Network, board: Board, wireframe: Wireframe, code: Code, bars: Bars };

export default function ServiceVisual({ kind, active }: { kind: VisualKey; active: boolean }) {
  const V = map[kind];
  return <div className="h-20" aria-hidden><V active={active} /></div>;
}
