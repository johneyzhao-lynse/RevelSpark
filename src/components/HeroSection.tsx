import React, { FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './ui/Link';
import DownloadButtons from './ui/DownloadButtons';
import BrandName from './ui/BrandName';

interface HeroSectionProps {
  language: 'en' | 'zh';
}

const HeroSection: FC<HeroSectionProps> = ({ language }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-lightblue via-paleblue to-white"
    >
      {/* Background Gradient & Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-logo-blue rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-logo-cyan rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-lightblue rounded-full filter blur-2xl opacity-40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-24 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              <span className="block">
                <span className="bg-gradient-to-r from-logo-blue to-logo-cyan bg-clip-text text-transparent">
                  {language === 'en'
                    ? 'Record, Transcribe, Summarize'
                    : '记录, 转写, 总结'}
                </span>
                <br />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-10 max-w-xl mx-auto lg:mx-0">
              {language === 'en'
                ? <><BrandName size="xl">Lynse</BrandName> AI recording card: effortless audio capture & AI transcription.</>
                : <><BrandName size="xl">Lynse</BrandName> AI 闪记卡：轻松录音，AI 智能转写。</>}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#buy"
                className="px-10 py-2 bg-gradient-to-r from-logo-blue to-logo-cyan text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
              >
                {language === 'en' ? 'Pre-order Now' : '立即预购'}
              </Link>
              <Link
                href="#features"
                className="px-10 py-2 border-2 border-logo-blue text-logo-blue rounded-full font-bold text-lg bg-white/80 hover:bg-lightblue transition-all"
              >
                {language === 'en' ? 'Learn More' : '了解更多'}
              </Link>
            </div>
            <div className="mt-8 border-t border-primary/20 pt-6 flex justify-center lg:justify-start">
              <DownloadButtons />
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 flex items-center justify-center p-4">
            {/* Product Image */}
            <img
              src="/images/product-showcase.png"
              alt="Lynse AI flash card"
              className="w-full max-w-md lg:max-w-lg object-contain transition-all duration-500 transform hover:scale-105"
              style={{
                filter: 'drop-shadow(0 25px 25px rgba(26, 109, 255, 0.2))',
              }}
            />
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-logo-blue flex flex-col items-center">
          <span className="text-base mb-2 opacity-80">
            {language === 'en' ? 'Scroll to explore' : '向下滚动探索'}
          </span>
          <ChevronDown className="animate-bounce" size={28} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;