export const ease = [0.23, 1, 0.32, 1] as const;
export const fadeUp = (y = 24, delay = 0, duration = 0.3) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration, delay, ease },
});
