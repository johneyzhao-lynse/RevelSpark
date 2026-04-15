import React, { useRef, useEffect, useCallback } from 'react';

// ─── Shape definitions: AI recording pen themes ────────────────────────────
// Points are normalised roughly to [-1, 1] and scaled at render time.

/**
 * Shape 1: Sound waveform — a sine wave flowing horizontally,
 * evoking the core "recording" function of the AI pen.
 */
function waveformPoints(n: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / (n - 1)) * 2 - 1; // -1 → 1 horizontal
    // multiple sine harmonics for a rich waveform look
    const y =
      0.35 * Math.sin(t * Math.PI * 2.5) +
      0.15 * Math.sin(t * Math.PI * 5) +
      0.08 * Math.cos(t * Math.PI * 7);
    pts.push([t, y]);
  }
  return pts;
}

/**
 * Shape 2: Audio spectrum bars — vertical bars of varying height,
 * like a frequency visualiser / equaliser.
 */
function spectrumPoints(n: number): [number, number][] {
  const pts: [number, number][] = [];
  const bars = 14;
  const perBar = Math.floor(n / bars);
  // Pre-compute bar heights with a bell-curve envelope
  const barHeights: number[] = [];
  for (let b = 0; b < bars; b++) {
    const center = (b - bars / 2) / (bars / 2);
    const envelope = Math.exp(-center * center * 1.5);
    barHeights.push(0.15 + envelope * 0.65);
  }
  for (let b = 0; b < bars; b++) {
    const x = ((b / (bars - 1)) * 2 - 1) * 0.85;
    const h = barHeights[b];
    for (let j = 0; j < perBar; j++) {
      const yPos = ((j / (perBar - 1)) * 2 - 1) * h;
      pts.push([x, yPos]);
    }
  }
  // fill remaining
  while (pts.length < n) {
    pts.push([(Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.2]);
  }
  return pts;
}

/**
 * Shape 3: Neural network — layered nodes with slight randomisation,
 * representing AI transcription / intelligence.
 */
function neuralNetPoints(n: number): [number, number][] {
  const pts: [number, number][] = [];
  const layers = 5;
  const perLayer = Math.floor(n / layers);
  for (let l = 0; l < layers; l++) {
    const x = ((l / (layers - 1)) * 2 - 1) * 0.8;
    const nodesInLayer = perLayer + (l === 2 ? 4 : 0); // more nodes in middle
    for (let j = 0; j < Math.min(nodesInLayer, n - pts.length); j++) {
      const y = ((j / (nodesInLayer - 1)) * 2 - 1) * 0.7;
      pts.push([
        x + (Math.random() - 0.5) * 0.08,
        y + (Math.random() - 0.5) * 0.08,
      ]);
    }
  }
  while (pts.length < n) {
    pts.push([(Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5]);
  }
  return pts;
}

/**
 * Shape 4: Radial pulse — concentric expanding rings,
 * like sound radiating outward from the recording device.
 */
function radiatingPulsePoints(n: number): [number, number][] {
  const pts: [number, number][] = [];
  const rings = 4;
  const perRing = Math.floor(n / rings);
  for (let r = 0; r < rings; r++) {
    const radius = 0.2 + (r / (rings - 1)) * 0.7;
    for (let j = 0; j < perRing; j++) {
      const angle = (j / perRing) * Math.PI * 2 + r * 0.3;
      pts.push([
        radius * Math.cos(angle),
        radius * Math.sin(angle) * 0.55, // flatten vertically for "wave" feel
      ]);
    }
  }
  while (pts.length < n) {
    const a = Math.random() * Math.PI * 2;
    const rd = 0.1 + Math.random() * 0.3;
    pts.push([rd * Math.cos(a), rd * Math.sin(a) * 0.55]);
  }
  return pts;
}

// ─── Shapes catalogue ──────────────────────────────────────────────────────
const SHAPE_BUILDERS = [waveformPoints, spectrumPoints, neuralNetPoints, radiatingPulsePoints];

// ─── Color palette: blue-teal AI accent + warm grays ───────────────────────
const PALETTE = [
  { r: 0, g: 117, b: 222 },   // Notion Blue — primary AI accent
  { r: 42, g: 157, b: 153 },  // Teal — secondary tech accent
  { r: 80, g: 140, b: 210 },  // Lighter blue — sound/voice feel
  { r: 140, g: 138, b: 134 }, // Warm Gray — subtle fill particles
];

// ─── Particle type ──────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  tx: number;
  ty: number;
  ox: number;
  oy: number;
  phase: number;
  speed: number;
  size: number;
  color: { r: number; g: number; b: number };
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ParticleFieldProps {
  className?: string;
}

const PARTICLE_COUNT = 150;
const CONNECTION_DIST = 100;
const MORPH_INTERVAL = 6000;
const LERP_SPEED = 0.018;

// Position: upper-left quadrant offset
const CENTER_X_RATIO = 0.30;
const CENTER_Y_RATIO = 0.40;

const ParticleField: React.FC<ParticleFieldProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const shapeIdxRef = useRef(0);
  const lastMorphRef = useRef(0);
  const dprRef = useRef(1);

  // ── Initialise particles ────────────────────────────────────────────────
  const initParticles = useCallback((w: number, h: number) => {
    const scale = Math.min(w, h) * 0.34;
    const cx = w * CENTER_X_RATIO;
    const cy = h * CENTER_Y_RATIO;
    const shapePts = SHAPE_BUILDERS[0](PARTICLE_COUNT);

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const [sx, sy] = shapePts[i] || [0, 0];
      const col = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      particles.push({
        x: cx + (Math.random() - 0.5) * w * 0.6,
        y: cy + (Math.random() - 0.5) * h * 0.6,
        tx: cx + sx * scale,
        ty: cy + sy * scale,
        ox: (Math.random() - 0.5) * 20,
        oy: (Math.random() - 0.5) * 20,
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
        size: 1.8 + Math.random() * 1.7,
        color: col,
        alpha: 0.35 + Math.random() * 0.35,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;
  }, []);

  // ── Assign new shape targets ────────────────────────────────────────────
  const morphToShape = useCallback((idx: number, w: number, h: number) => {
    const scale = Math.min(w, h) * 0.34;
    const cx = w * CENTER_X_RATIO;
    const cy = h * CENTER_Y_RATIO;
    const shapePts = SHAPE_BUILDERS[idx % SHAPE_BUILDERS.length](PARTICLE_COUNT);

    particlesRef.current.forEach((p, i) => {
      const [sx, sy] = shapePts[i] || [0, 0];
      p.tx = cx + sx * scale;
      p.ty = cy + sy * scale;
      p.ox = (Math.random() - 0.5) * 20;
      p.oy = (Math.random() - 0.5) * 20;
    });
  }, []);

  // ── Main animation loop ────────────────────────────────────────────────
  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = dprRef.current;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    // Auto-morph
    if (time - lastMorphRef.current > MORPH_INTERVAL) {
      lastMorphRef.current = time;
      shapeIdxRef.current = (shapeIdxRef.current + 1) % SHAPE_BUILDERS.length;
      morphToShape(shapeIdxRef.current, w, h);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const particles = particlesRef.current;

    // Update positions
    for (const p of particles) {
      p.phase += p.speed * 0.01;
      p.pulsePhase += p.pulseSpeed;

      const floatX = p.tx + Math.sin(p.phase) * p.ox;
      const floatY = p.ty + Math.cos(p.phase * 0.7) * p.oy;

      p.x += (floatX - p.x) * LERP_SPEED;
      p.y += (floatY - p.y) * LERP_SPEED;

      // Mouse repulsion
      const dx = p.x - mx;
      const dy = p.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        const force = (110 - dist) / 110;
        p.x += (dx / dist) * force * 5;
        p.y += (dy / dist) * force * 5;
      }
    }

    // Draw connections
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.18;
          const c = particles[i].color;
          ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      const pulse = 0.7 + 0.3 * Math.sin(p.pulsePhase);
      const radius = p.size * pulse;
      const alpha = p.alpha * pulse;
      const { r, g, b } = p.color;

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.1})`;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.fill();
    }

    ctx.restore();
    animRef.current = requestAnimationFrame(animate);
  }, [morphToShape]);

  // ── Setup & teardown ────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      if (particlesRef.current.length === 0) {
        initParticles(rect.width, rect.height);
      } else {
        morphToShape(shapeIdxRef.current, rect.width, rect.height);
      }
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    lastMorphRef.current = performance.now();
    animRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate, initParticles, morphToShape]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default ParticleField;
