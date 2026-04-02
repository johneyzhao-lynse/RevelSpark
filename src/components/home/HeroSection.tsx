import { FC } from 'react';
import { Sparkles, ChevronDown, Download } from 'lucide-react';
import type { Language } from '../../data/constants';
import { HERO } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';
import OrderButton from '../ui/OrderButton';
import { Link } from '../ui/Link';

interface HeroSectionProps {
  language: Language;
}

const HeroSection: FC<HeroSectionProps> = ({ language }) => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
    {/* Subtle background gradients */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-gray-50/30 via-gray-100/20 to-transparent rounded-full blur-3xl" />
    </div>

    <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 pt-24 pb-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-10">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold tracking-wide">{HERO.badge[language]}</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
              {HERO.headline[language]}
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              {HERO.tagline[language]}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch">
              <OrderButton language={language} variant="dark" />
              <Link
                href="/download"
                className="h-[52px] px-8 border border-gray-300 text-gray-900 rounded-full font-bold text-base bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center whitespace-nowrap min-w-[140px]"
              >
                <Download className="mr-2 w-5 h-5" />
                <span>{HERO.ctaDownload[language]}</span>
              </Link>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {HERO.trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  {badge[language]}
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* Right Content — Product Image */}
        <FadeInUp delay={0.2}>
          <div className="relative flex items-center justify-center p-8">
            <img
              src="/images/product-showcase.jpg"
              alt="SparkCard"
              className="w-full max-w-[580px] lg:max-w-[680px] object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))' }}
            />
          </div>
        </FadeInUp>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center">
        <span className="text-sm mb-2">{language === 'en' ? 'Scroll to explore' : '向下滚动探索'}</span>
        <ChevronDown className="animate-bounce" size={24} />
      </div>
    </div>
  </section>
);

export default HeroSection;
