import { useEffect, useRef, FC } from 'react';

interface GridParticlesProps {
  className?: string;
  spacing?: number;
  dotSize?: number;
  lightColor?: string;
}

interface Dot {
  x: number;
  y: number;
}

interface SweepLight {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  seed: number;
  wobblePhase: number;
  wobbleAmp: number;
}

const GridParticles: FC<GridParticlesProps> = ({
  className = '',
  spacing = 28,
  dotSize = 1.2,
  lightColor = '160, 140, 230',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const dotsRef = useRef<Dot[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
    };

    const initDots = () => {
      const { w, h } = sizeRef.current;
      const cols = Math.floor(w / spacing) + 1;
      const rows = Math.floor(h / spacing) + 1;
      const offsetX = (w - (cols - 1) * spacing) / 2;
      const offsetY = (h - (rows - 1) * spacing) / 2;
      const dots: Dot[] = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({ x: offsetX + i * spacing, y: offsetY + j * spacing });
        }
      }
      dotsRef.current = dots;
    };

    // Create sweep lights — each has a direction and speed
    const createLights = (w: number, h: number): SweepLight[] => {
      const configs = [
        { speed: 1.8, radius: 200, wobbleAmp: 0.4 },  // fast sweep
        { speed: 1.2, radius: 260, wobbleAmp: 0.3 },   // medium
        { speed: 0.7, radius: 300, wobbleAmp: 0.25 },   // slow drift
        { speed: 2.2, radius: 170, wobbleAmp: 0.35 },  // fast streak
      ];
      return configs.map((cfg, i) => {
        const angle = Math.PI * 0.3 + Math.random() * Math.PI * 1.4;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * cfg.speed,
          vy: Math.sin(angle) * cfg.speed,
          radius: cfg.radius,
          seed: i * 73.1 + 11,
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleAmp: cfg.wobbleAmp,
        };
      });
    };

    let lightsRef = createLights(1, 1);
    let time = 0;

    const draw = () => {
      const { w, h } = sizeRef.current;
      if (w === 0 || h === 0) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      time += 0.02;

      // Update light positions — sweep across page with wobble
      for (const light of lightsRef) {
        // Wobble perpendicular to travel direction
        const wobble = Math.sin(time * 1.5 + light.wobblePhase) * light.wobbleAmp;
        const perpX = -light.vy;
        const perpY = light.vx;
        const len = Math.sqrt(perpX * perpX + perpY * perpY) || 1;

        light.x += light.vx + (perpX / len) * wobble;
        light.y += light.vy + (perpY / len) * wobble;

        // Wrap around with margin so lights re-enter smoothly
        const margin = light.radius * 1.2;
        if (light.x < -margin) light.x = w + margin * 0.5;
        if (light.x > w + margin) light.x = -margin * 0.5;
        if (light.y < -margin) light.y = h + margin * 0.5;
        if (light.y > h + margin) light.y = -margin * 0.5;
      }

      // Draw dots
      for (const dot of dotsRef.current) {
        let field = 0;

        for (const light of lightsRef) {
          const dx = dot.x - light.x;
          const dy = dot.y - light.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < light.radius) {
            // Elongate in direction of motion (searchlight streak)
            const dotAngle = Math.atan2(dy, dx);
            const moveAngle = Math.atan2(light.vy, light.vx);
            const angleDiff = Math.abs(dotAngle - moveAngle);
            // Stretch factor: aligned with motion = larger area
            const stretch = 1 + 0.3 * Math.cos(angleDiff) * Math.cos(angleDiff);

            const effectiveDist = dist / stretch;
            const effectiveRadius = light.radius;

            if (effectiveDist < effectiveRadius) {
              const t = 1 - effectiveDist / effectiveRadius;
              // Sharp falloff for searchlight feel — bright core, quick fade
              const smooth = t * t * t;
              field += smooth;
            }
          }
        }

        if (field > 0.01) {
          const alpha = Math.min(0.55, field * 0.6);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${lightColor}, ${alpha})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    initDots();
    lightsRef = createLights(sizeRef.current.w, sizeRef.current.h);
    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      initDots();
      lightsRef = createLights(sizeRef.current.w, sizeRef.current.h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [spacing, dotSize, lightColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default GridParticles;
