import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

export default function CtaBand({ title, cta, sand }: { title: string; cta: string; sand?: boolean }) {
  return (
    <section className={`border-t border-line py-20 md:py-24 ${sand ? 'bg-sand' : 'bg-paper'}`}>
      <Reveal className="mx-auto flex max-w-[84rem] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-10">
        <h2 className="max-w-lg text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.045em]">{title}</h2>
        <MagneticButton to="/contact" arrow>{cta}</MagneticButton>
      </Reveal>
    </section>
  );
}
