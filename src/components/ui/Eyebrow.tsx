import type { ReactNode } from 'react';

export default function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[11px] font-medium uppercase tracking-[0.3em] text-muted ${className}`}>{children}</p>;
}
