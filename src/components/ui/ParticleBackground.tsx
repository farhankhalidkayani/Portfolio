import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { useTheme } from "next-themes";

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setMounted(true);

    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (_container: Container | undefined) => {
      // You can add any logic that needs to run once particles are loaded
    },
    []
  );

  if (!mounted || !init) return null;

  const isDarkMode = theme === "dark";

  return (
    <Particles
      className={`absolute inset-0 z-0 ${className || ""}`}
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: isDarkMode ? "#a5b4fc" : "#6366f1",
          },
          links: {
            color: isDarkMode ? "#a5b4fc" : "#6366f1",
            distance: 150,
            enable: true,
            opacity: isDarkMode ? 0.3 : 0.2,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 40,
          },
          opacity: {
            value: isDarkMode ? 0.4 : 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
