import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

type Props = { src?: string; alt?: string; drift?: number; className?: string; contain?: boolean };

// Rounded frame whose image drifts against the scroll. No src → empty placeholder.
export default function ParallaxMedia({ src, alt = '', drift = 26, className = '', contain }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [drift, -drift]), { stiffness: 110, damping: 26 });
  return (
    <div ref={ref} className={`relative overflow-hidden rounded-3xl border border-line bg-frame ${className}`}>
      {src && (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y, scale: 1.1 }}
          className={`absolute inset-0 h-full w-full ${contain ? 'object-contain' : 'object-cover'}`}
        />
      )}
    </div>
  );
}
