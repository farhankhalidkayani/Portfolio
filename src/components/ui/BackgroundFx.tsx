const fill = 'absolute inset-0 pointer-events-none';

export const Grid = () => <div className={`${fill} fx-grid`} />;
export const Grain = () => <div className={`${fill} fx-grain`} />;
export const Glow = ({ className = '', mist }: { className?: string; mist?: boolean }) => (
  <div className={`absolute pointer-events-none rounded-full blur-[140px] ${mist ? 'bg-mist' : 'bg-accent-soft'} ${className}`} />
);

// Deterministic positions so renders stay stable.
export function Particles({ count }: { count: number }) {
  return (
    <div className={`${fill} overflow-hidden`}>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${(i * 37 + 11) % 97}%`,
            top: `${(i * 53 + 17) % 91}%`,
            width: 2 + (i % 2),
            height: 2 + (i % 2),
            opacity: 0,
            animation: `drift ${14 + ((i * 5) % 17)}s ease-in-out ${-i * 2.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
