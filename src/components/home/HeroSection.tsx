import React, { useRef, useState, useEffect, FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Download } from 'lucide-react';
import { Link } from '../ui/Link';
import OrderButton from '../ui/OrderButton';
import FadeInUp from '../ui/FadeInUp';
import ScrollText from '../ui/ScrollText';
import ParticleField from './ParticleField';
import type { Language } from '../../data/constants';
import { HERO } from '../../data/constants';

interface HeroSectionProps {
  language: Language;
}

const scrollPhrasesEN = ['Memory.', 'Thinking.', 'AI.'];
const scrollPhrasesZH = ['记忆 ·', '思考 ·', 'AI'];

const POSTER_GRADIENTS = [
  'from-gray-50 via-gray-100 to-gray-50',
  'from-blue-50 via-gray-100 to-gray-50',
  'from-purple-50 via-gray-100 to-gray-50',
  'from-emerald-50 via-gray-100 to-gray-50',
];

const HeroSection: FC<HeroSectionProps> = ({ language }) => {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const bg1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const bg2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);
  const bg3Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [0, 1, 0]);
  const bg4Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.85], [0, 1, 1]);

  const layer1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const layer1Y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const layer2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
  const layer2Scale = useTransform(scrollYProgress, [0.2, 0.35], [0.95, 1]);

  const layer3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const layer3ContainerY = useTransform(scrollYProgress, [0.45, 0.55, 0.75], [80, 0, -50]);

  const layer4Opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const layer4Y = useTransform(scrollYProgress, [0.75, 0.9], [30, 0]);

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

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

  const scrollPhrases = language === 'en' ? scrollPhrasesEN : scrollPhrasesZH;

  // Mobile / reduced motion: simplified Hero
  if (prefersReduced || isMobile) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
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

            <FadeInUp delay={0.4}>
              <div className="relative flex items-center justify-center mt-4 w-full">
                <img
                  src="/images/product-showcase.jpg"
                  alt="SparkCard"
                  className="w-full max-w-[340px] md:max-w-[580px] object-contain rounded-2xl md:rounded-3xl"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))' }}
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: '350vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gray-50/60 z-0" />

        {/* Particle animation - desktop only */}
        <div className="absolute inset-0 z-[1]">
          <ParticleField />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <motion.div className={`absolute inset-0 bg-gradient-to-br ${POSTER_GRADIENTS[0]}`} style={{ opacity: bg1Opacity }} />
          <motion.div className={`absolute inset-0 bg-gradient-to-br ${POSTER_GRADIENTS[1]}`} style={{ opacity: bg2Opacity }} />
          <motion.div className={`absolute inset-0 bg-gradient-to-br ${POSTER_GRADIENTS[2]}`} style={{ opacity: bg3Opacity }} />
          <motion.div className={`absolute inset-0 bg-gradient-to-br ${POSTER_GRADIENTS[3]}`} style={{ opacity: bg4Opacity }} />
        </div>

        {/* Layer 1: Hero Statement + Product Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[2]"
          style={{ opacity: layer1Opacity, y: layer1Y }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left space-y-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/10 text-black border border-black/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold tracking-wide">{HERO.badge[language]}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
                  {HERO.headline[language]}
                </h1>

                <p className="text-xl md:text-2xl font-medium text-gray-600">
                  {HERO.tagline[language]}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch">
                  <OrderButton language={language} variant="dark" />
                  <Link
                    href="/download"
                    className="h-[52px] px-8 border border-gray-300 text-black rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center justify-center whitespace-nowrap min-w-[140px]"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    <span>{HERO.ctaDownload[language]}</span>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  {HERO.trustBadges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      {badge[language]}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center p-8">
                <img
                  src="/images/product-showcase.jpg"
                  alt="SparkCard"
                  className="w-full max-w-[580px] lg:max-w-[680px] object-contain rounded-3xl"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Layer 2: Parallax Product Showcase */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[2]"
          style={{ opacity: layer2Opacity, scale: layer2Scale }}
          aria-hidden="true"
        >
          <div className="relative">
            <img
              src="/images/product-showcase.jpg"
              alt="SparkCard"
              className="w-full max-w-2xl mx-auto rounded-3xl"
              style={{ filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4))' }}
            />
          </div>
        </motion.div>

        {/* Layer 3: Character-by-Character Text Reveal */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-[2]"
          style={{ opacity: layer3Opacity, y: layer3ContainerY }}
        >
          <div className="text-center space-y-4">
            {scrollPhrases.map((phrase, i) => (
              <div key={i} className="overflow-hidden py-2">
                <ScrollText
                  text={phrase}
                  className="text-4xl md:text-[52px] font-light text-black tracking-tight"
                  containerClassName="min-h-[4rem]"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Layer 4: Final CTA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-[2]"
          style={{ opacity: layer4Opacity, y: layer4Y }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8">
              {language === 'en' ? 'Ready to Never Miss a Moment?' : '准备好不再错过任何时刻了吗？'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OrderButton language={language} variant="dark" />
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition-colors duration-300"
              >
                {HERO.ctaDownload[language]}
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-gray-500">
              {HERO.trustBadges.map((badge, i) => (
                <React.Fragment key={i}>
                  <span>{badge[language]}</span>
                  {i < HERO.trustBadges.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center z-20"
          initial={{ opacity: 1 }}
          style={{ opacity: scrollHintOpacity }}
        >
          <span className="text-sm mb-2">{language === 'en' ? 'Scroll to explore' : '向下滚动探索'}</span>
          <ChevronDown className="animate-bounce" size={24} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
