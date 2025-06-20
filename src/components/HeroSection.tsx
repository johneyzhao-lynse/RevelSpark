import React, { FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './ui/Link';

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
              <span className="block bg-gradient-to-r from-logo-blue to-logo-cyan bg-clip-text text-transparent">
                {language === 'en' ? 'Record, Transcribe, Transform' : '记录，转写，转变'}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-10 max-w-xl mx-auto lg:mx-0">
              {language === 'en'
                ? 'Lynse AI recording card: effortless audio capture & AI transcription.'
                : 'Lynse AI 录音卡：轻松录音，AI 智能转写。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#buy"
                className="px-10 py-4 bg-gradient-to-r from-logo-blue to-logo-cyan text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
              >
                {language === 'en' ? 'Pre-order Now' : '立即预购'}
              </Link>
              <Link
                href="#features"
                className="px-10 py-4 border-2 border-logo-blue text-logo-blue rounded-full font-bold text-lg bg-white/80 hover:bg-lightblue transition-all"
              >
                {language === 'en' ? 'Learn More' : '了解更多'}
              </Link>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            {/* Product Image Card */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full pb-[100%] relative">
                <div className="absolute inset-0 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl flex items-center justify-center p-8 border border-paleblue">
                  <div className="w-full h-full bg-gradient-to-tr from-logo-blue/10 to-logo-cyan/10 rounded-2xl flex items-center justify-center shadow-inner">
                    <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-1 bg-logo-blue/20 rounded-full mb-6"></div>
                      <div className="w-16 h-16 bg-logo-blue rounded-full mb-4 flex items-center justify-center">
                        <div className="w-5 h-5 bg-white rounded-sm"></div>
                      </div>
                      <div className="w-3/4 h-1 bg-logo-blue/20 rounded-full"></div>
                      <div className="w-1/2 h-1 bg-logo-blue/20 rounded-full mt-2"></div>
                      <div className="w-2/3 h-1 bg-logo-blue/20 rounded-full mt-2"></div>
                      <div className="absolute bottom-8 right-8 w-6 h-6 bg-logo-cyan/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Label */}
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur px-8 py-4 rounded-full shadow-lg border border-paleblue">
              <span className="font-extrabold bg-gradient-to-r from-logo-blue to-logo-cyan bg-clip-text text-transparent text-2xl tracking-tight">
                lynse
              </span>
              <span className="ml-2 text-base text-logo-blue font-medium">记易</span>
            </div>
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