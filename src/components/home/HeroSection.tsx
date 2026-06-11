import React, { useRef, useState, useEffect, FC } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Download } from 'lucide-react';
import { Link } from '../ui/Link';
import OrderButton from '../ui/OrderButton';
import FadeInUp from '../ui/FadeInUp';
import GridParticles from '../ui/GridParticles';
import type { Language } from '../../data/constants';
import { t, HERO } from '../../data/constants';

const HERO_BG_IMAGES = [
  '/images/hero-bg1.webp',
  '/images/hero-bg2.webp',
  '/images/hero-bg3.webp',
];

const BG_TRANSITION_DURATION = 1.5;

// Three stages - give stage 2 more time: 25% | 65% | 100%
const STAGE = [0.25, 0.65];

interface HeroSectionProps {
  language: Language;
  navigate?: (path: string) => void;
}

// Stage 2 copy
const STAGE2_LINE1: Record<Language, string> = {
  en: 'In the past, sound was fleeting air;',
  zh: '过去，声音是转瞬即逝的空气',
  'zh-TW': '過去，聲音是轉瞬即逝的空氣',
  ja: 'かつて音は儚い空気だった。',
};
const STAGE2_LINE2: Record<Language, string> = {
  en: 'now, it is the soil for embodied intelligence to evolve.',
  zh: '现在，它是具身智能进化的土壤',
  'zh-TW': '現在，它是具身智能進化的土壤',
  ja: '今、それは身体知能が進化する土壌である。',
};
const STAGE2_LINE3: Record<Language, string> = {
  en: 'Every recording is becoming a better future self.',
  zh: '每一次记录，都在成为未来更好的自己',
  'zh-TW': '每一次記錄，都在成為未來更好的自己',
  ja: 'すべての記録が、未来のより良い自分へとつながっていく。',
};

// Stage 3 CTA headline
const STAGE3_HEADLINE: Record<Language, string> = {
  en: 'Ready to Never Miss a Moment?',
  zh: '准备好不再错过任何时刻了吗？',
  'zh-TW': '準備好不再錯過任何時刻了嗎？',
  ja: 'すべての瞬間を記録する準備はできましたか？',
};

function getBgIndex(progress: number): number {
  if (progress < STAGE[0]) return 0;
  if (progress < STAGE[1]) return 1;
  return 2;
}

const HeroSection: FC<HeroSectionProps> = ({ language, navigate }) => {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Stage 1 → fade out
  const s1Opacity = useTransform(scrollYProgress, [0, STAGE[0] - 0.05, STAGE[0]], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, STAGE[0]], [0, -40]);

  // Stage 2 → line-by-line slide up (no fade out)
  const s2Opacity = useTransform(scrollYProgress, [STAGE[0] - 0.05, STAGE[0] + 0.05, STAGE[1] - 0.05, STAGE[1]], [0, 1, 1, 0]);
  const s2Line1Opacity = useTransform(scrollYProgress, [STAGE[0], STAGE[0] + 0.10], [0, 1]);
  const s2Line1Y = useTransform(scrollYProgress, [STAGE[0], STAGE[0] + 0.10], [50, 0]);
  const s2Line2Opacity = useTransform(scrollYProgress, [STAGE[0] + 0.06, STAGE[0] + 0.16], [0, 1]);
  const s2Line2Y = useTransform(scrollYProgress, [STAGE[0] + 0.06, STAGE[0] + 0.16], [50, 0]);
  const s2Line3Opacity = useTransform(scrollYProgress, [STAGE[0] + 0.12, STAGE[0] + 0.22], [0, 1]);
  const s2Line3Y = useTransform(scrollYProgress, [STAGE[0] + 0.12, STAGE[0] + 0.22], [50, 0]);

  // Stage 3 → fade in
  const s3Opacity = useTransform(scrollYProgress, [STAGE[1] - 0.05, STAGE[1] + 0.05], [0, 1]);
  const s3Y = useTransform(scrollYProgress, [STAGE[1] - 0.05, STAGE[1] + 0.05], [40, 0]);

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Switch background based on scroll position
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = getBgIndex(latest);
    setBgIndex(prev => next !== prev ? next : prev);
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);

    const resizeMq = window.matchMedia('(max-width: 767px)');
    setIsMobile(resizeMq.matches);
    const resizeHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    resizeMq.addEventListener('change', resizeHandler);

    return () => {
      mq.removeEventListener('change', handler);
      resizeMq.removeEventListener('change', resizeHandler);
    };
  }, []);

  const bgVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.97 },
  };

  const bgIndicators = (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {HERO_BG_IMAGES.map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-500 ${
            i === bgIndex ? 'bg-[#5E6AD2] w-6' : 'bg-black/30 w-2'
          }`}
        />
      ))}
    </div>
  );

  // ── Mobile / reduced motion ──
  if (prefersReduced || isMobile) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <img src={HERO_BG_IMAGES[0]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-50/70" />
          <GridParticles className="absolute inset-0 w-full h-full" spacing={24} dotSize={1} lightColor="160, 140, 230" />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10 pt-24 pb-12 w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            <FadeInUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-semibold tracking-wide">{HERO.badge[language]}</span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
                {HERO.headline[language]}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <p className="text-lg md:text-2xl font-medium text-gray-600 max-w-lg">
                {HERO.tagline[language]}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch w-full max-w-sm">
                <OrderButton language={language} variant="dark" />
                <Link
                  href="/download"
                  navigate={navigate}
                  className="h-[48px] px-6 border border-gray-300 text-gray-900 rounded-full font-bold text-sm bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                >
                  <Download className="mr-2 w-4 h-4" />
                  <span>{HERO.ctaDownload[language]}</span>
                </Link>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {HERO.trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    {badge[language]}
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    );
  }

  // ── Desktop scroll-driven hero ──
  return (
    <div ref={containerRef} className="relative" style={{ height: '350vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={bgIndex}
              src={HERO_BG_IMAGES[bgIndex]}
              alt=""
              variants={bgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: BG_TRANSITION_DURATION, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/20" />
        </div>

        {/* Grid particles */}
        <GridParticles className="absolute inset-0 z-[1]" spacing={28} dotSize={1.2} lightColor="94, 106, 210" />

        {/* Stage 1: Hero headline + CTA */}
        <motion.div
          className="absolute inset-0 flex items-center z-[2]"
          style={{ opacity: s1Opacity, y: s1Y }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-xl space-y-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">{HERO.badge[language]}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
                {HERO.headline[language]}
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-600">
                {HERO.tagline[language]}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                <OrderButton language={language} variant="dark" />
                <Link
                  href="/download"
                  navigate={navigate}
                  className="h-[52px] px-8 border border-gray-300 text-black rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center justify-center whitespace-nowrap min-w-[140px]"
                >
                  <Download className="mr-2 w-5 h-5" />
                  <span>{HERO.ctaDownload[language]}</span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {HERO.trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                    {badge[language]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stage 2: Sound & inspiration copy — line-by-line reveal */}
        <motion.div
          className="absolute inset-0 flex items-center z-[2]"
          style={{ opacity: s2Opacity }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className="space-y-6">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-black"
                style={{ opacity: s2Line1Opacity, y: s2Line1Y }}
              >
                {STAGE2_LINE1[language]}
              </motion.h2>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-black"
                style={{ opacity: s2Line2Opacity, y: s2Line2Y }}
              >
                {STAGE2_LINE2[language]}
              </motion.h2>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-[#5E6AD2]"
                style={{ opacity: s2Line3Opacity, y: s2Line3Y }}
              >
                {STAGE2_LINE3[language]}
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* Stage 3: Final CTA */}
        <motion.div
          className="absolute inset-0 flex items-center z-[2]"
          style={{ opacity: s3Opacity, y: s3Y }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-xl space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight text-black">
                {STAGE3_HEADLINE[language]}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <OrderButton language={language} variant="dark" />
                <Link
                  href="/download"
                  navigate={navigate}
                  className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border-2 border-[#5E6AD2] text-[#5E6AD2] font-semibold text-lg hover:bg-[#5E6AD2] hover:text-white transition-colors duration-300"
                >
                  {HERO.ctaDownload[language]}
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                {HERO.trustBadges.map((badge, i) => (
                  <React.Fragment key={i}>
                    <span>{badge[language]}</span>
                    {i < HERO.trustBadges.length - 1 && (
                      <span className="w-1 h-1 rounded-full bg-[#5E6AD2]/40" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background indicators */}
        {bgIndicators}

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center z-20"
          initial={{ opacity: 1 }}
          style={{ opacity: scrollHintOpacity }}
        >
          <span className="text-sm mb-2">{t({ en: 'Scroll to explore', zh: '向下滚动探索', 'zh-TW': '向下滾動探索', ja: 'スクロールして探索' }, language)}</span>
          <ChevronDown className="animate-bounce" size={24} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
