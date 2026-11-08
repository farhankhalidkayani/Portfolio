import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '../../lib/motion';

export default function Reveal({ children, className, y, delay }: { children: ReactNode; className?: string; y?: number; delay?: number }) {
  return <motion.div className={className} {...fadeUp(y, delay)}>{children}</motion.div>;
}
