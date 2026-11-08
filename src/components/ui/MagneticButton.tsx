import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const variants = {
  solid: 'bg-ink text-paper border-ink hover:bg-accent hover:border-accent',
  outline: 'bg-transparent text-ink border-line hover:border-ink hover:bg-white',
  ghost: 'bg-transparent text-paper border-line-dark hover:bg-white/10',
};

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: keyof typeof variants;
  small?: boolean;
  arrow?: boolean;
  strength?: number;
  className?: string;
  disabled?: boolean;
};

export default function MagneticButton({ children, to, href, variant = 'solid', small, arrow, strength, className = '', ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const max = strength ?? (small ? 6 : 10);
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 22, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 22, mass: 0.4 });

  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    x.set(dx * max);
    y.set(dy * max);
  };
  const reset = () => { x.set(0); y.set(0); };

  const cls = `group inline-flex items-center gap-2 rounded-full border font-medium tracking-[-0.025em] transition-colors duration-200 disabled:opacity-60 ${
    small ? 'px-5 py-2.5 text-[13px] leading-5' : 'px-6 py-3 text-sm leading-5'
  } ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />}
    </>
  );

  return (
    <motion.div ref={ref} style={{ x, y }} onPointerMove={move} onPointerLeave={reset} className="inline-block" data-cursor="hover">
      {to ? <Link to={to} className={cls}>{inner}</Link>
        : href ? <a href={href} className={cls} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
        : <button className={cls} type="button" {...rest}>{inner}</button>}
    </motion.div>
  );
}
