import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../../data/content';
import { ease } from '../../../lib/motion';
import ProjectPreview from './ProjectPreview';

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], [26, -26]), { stiffness: 110, damping: 26 });
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const px = useSpring(useMotionValue(0), { stiffness: 320, damping: 30, mass: 0.4 });
  const py = useSpring(useMotionValue(0), { stiffness: 320, damping: 30, mass: 0.4 });

  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
    ry.set((nx - 0.5) * 6); rx.set((0.5 - ny) * 6);
    px.set(e.clientX - r.left); py.set(e.clientY - r.top);
  };
  const leave = () => { setHover(false); rx.set(0); ry.set(0); };

  return (
    <motion.div layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.28, ease }}
      className={index % 2 === 1 ? 'lg:mt-14' : ''}>
      <Link ref={ref} to={`/work/${p.slug}`} data-cursor="view" onPointerEnter={() => setHover(true)} onPointerMove={move} onPointerLeave={leave} className="group block" style={{ perspective: 1200 }}>
        <motion.div style={{ rotateX: rx, rotateY: ry }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-frame">
            {p.image && (
              <motion.img src={p.image} alt={p.name} loading="lazy" style={{ y: imgY }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.07]" />
            )}
            <div className="absolute inset-0 bg-ink opacity-0 transition-opacity duration-[250ms] group-hover:opacity-[0.42]" />
            <div className="absolute inset-x-6 bottom-6 h-[46%] translate-y-7 opacity-0 transition-all duration-[280ms] group-hover:translate-y-0 group-hover:opacity-100">
              <ProjectPreview kind={p.preview} />
            </div>
            <span className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-white text-ink transition-all duration-200 group-hover:-translate-y-px group-hover:translate-x-[3px] group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
            <AnimatePresence>
              {hover && (
                <motion.span style={{ x: px, y: py }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="pointer-events-none absolute left-0 top-0 z-10 ml-4 mt-4 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-widest">
                  Case Study
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-6 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-[-0.035em] md:text-2xl">{p.name}</h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted">{p.category}</span>
            </div>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{p.description}</p>
            <span className="mt-5 inline-flex items-center gap-3 text-sm font-medium">
              View Case Study<span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-8" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
