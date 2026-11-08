import type { Project } from '../../../data/content';

const b = 'rounded bg-ink/10';

// Small mini-interfaces that slide up over a project card on hover.
export default function ProjectPreview({ kind }: { kind: Project['preview'] }) {
  return (
    <div className="h-full w-full rounded-2xl border border-line bg-white/95 p-4 backdrop-blur-sm">
      {kind === 'pipeline' && (
        <div className="grid h-full grid-cols-3 gap-2">
          {[2, 1, 2].map((n, c) => (
            <div key={c} className="space-y-1.5 rounded-lg bg-ink/[0.04] p-1.5">
              {Array.from({ length: n }, (_, r) => <div key={r} className={`h-4 ${c === 1 && r === 0 ? 'bg-accent' : b}`} />)}
            </div>
          ))}
        </div>
      )}
      {kind === 'routing' && (
        <div className="space-y-2">
          {[70, 52, 84].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`size-2 rounded-full ${i === 0 ? 'bg-accent' : 'bg-ink/20'}`} /><div className={`h-2 ${b}`} style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      )}
      {kind === 'chart' && (
        <div className="flex h-full items-end gap-1.5">
          {[30, 45, 40, 62, 75, 92].map((h, i) => <div key={i} className={`flex-1 rounded-t ${i === 5 ? 'bg-accent' : 'bg-ink/15'}`} style={{ height: `${h}%` }} />)}
        </div>
      )}
      {kind === 'console' && (
        <div className="flex h-full gap-2">
          <div className="w-1/4 space-y-1.5">{[0, 1, 2].map((i) => <div key={i} className={`h-1.5 ${b}`} />)}</div>
          <div className="flex flex-1 flex-col gap-2"><div className="h-4 rounded bg-accent/80" /><div className="flex-1 rounded bg-ink/[0.05]" /></div>
        </div>
      )}
    </div>
  );
}
