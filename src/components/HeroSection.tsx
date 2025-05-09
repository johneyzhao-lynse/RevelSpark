import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './ui/Link';

interface HeroSectionProps {
  language: 'en' | 'zh';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {language === 'en' ? (
                <>
                  <span className="block">Record, Transcribe,</span>
                  <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Transform
                  </span>
                </>
              ) : (
                <>
                  <span className="block">记录，转写，</span>
                  <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    转变
                  </span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0">
              {language === 'en'
                ? 'The Lynse AI recording card transforms how you capture and process audio with state-of-the-art AI transcription technology.'
                : 'Lynse AI 录音卡通过尖端的 AI 转录技术，彻底改变了您捕捉和处理音频的方式。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#buy"
                className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                {language === 'en' ? 'Pre-order Now' : '立即预购'}
              </Link>
              <Link
                href="#features"
                className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-medium text-base hover:bg-white/10 transition-all"
              >
                {language === 'en' ? 'Learn More' : '了解更多'}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0">
            {/* Product Image */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full pb-[100%] relative">
                <div className="absolute inset-0 rounded-2xl bg-blue-700/30 backdrop-blur-sm p-6 flex items-center justify-center transform rotate-3 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-inner">
                    <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
                      <div className="w-16 h-1 bg-blue-200 rounded-full mb-6"></div>
                      <div className="w-16 h-16 bg-blue-600 rounded-full mb-4 flex items-center justify-center">
                        <div className="w-5 h-5 bg-white rounded-sm"></div>
                      </div>
                      <div className="w-3/4 h-1 bg-blue-200 rounded-full"></div>
                      <div className="w-1/2 h-1 bg-blue-200 rounded-full mt-2"></div>
                      <div className="w-2/3 h-1 bg-blue-200 rounded-full mt-2"></div>
                      <div className="absolute bottom-8 right-8 w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Label */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                lynse
              </span>
              <span className="ml-1 text-xs text-gray-500">记易</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">
            {language === 'en' ? 'Scroll to explore' : '向下滚动探索'}
          </span>
          <ChevronDown className="animate-bounce" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;