import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav, person } from '../../data/content';
import MagneticButton from '../ui/MagneticButton';
import { ease } from '../../lib/motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [pathname, hash]);

  const current = (to: string) => (to.includes('#') ? false : pathname === to || (to !== '/' && pathname.startsWith(to)));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-paper/70 backdrop-blur-3xl' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[84rem] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-base font-semibold tracking-[-0.035em]" data-cursor="hover">{person.name}</Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} data-cursor="hover" className={`group relative text-sm transition-colors hover:text-ink ${current(n.to) ? 'text-ink' : 'text-muted'}`}>
              {n.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${current(n.to) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><MagneticButton small to="/contact">Let's Talk</MagneticButton></div>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex size-10 items-center justify-center rounded-full border border-line lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent" />
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
            className="flex flex-col gap-1 border-t border-line px-6 pb-8 pt-4 lg:hidden"
          >
            {nav.map((n) => (
              <Link key={n.label} to={n.to} className="py-2 font-display text-3xl font-semibold tracking-[-0.045em]">{n.label}</Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
