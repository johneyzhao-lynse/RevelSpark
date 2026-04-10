import { FC } from 'react';
import { Check, Download } from 'lucide-react';
import type { Language } from '../../data/constants';
import { APP_FEATURES, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';
import { Link } from '../ui/Link';

interface AppPreviewProps {
  language: Language;
}

const AppPreview: FC<AppPreviewProps> = ({ language }) => (
  <section className="py-32">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Phone mockup */}
        <FadeInUp>
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <img
                    src="/images/app-show.png"
                    alt="SparkCard App"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Feature bullets */}
        <div>
          <FadeInUp>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
              {SECTION_TITLES.appPreview[language]}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-8">
              {language === 'en' ? 'Your recordings, perfectly organized' : '您的录音，井然有序'}
            </h2>
          </FadeInUp>

          <div className="space-y-4 mb-10">
            {APP_FEATURES.map((feature, i) => (
              <FadeInUp key={i} delay={0.15 + i * 0.05}>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-gray-600">{feature[language]}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.4}>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 h-[52px] px-8 bg-black text-white rounded-full font-bold text-base hover:bg-gray-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>{language === 'en' ? 'Download App' : '下载应用'}</span>
            </Link>
          </FadeInUp>
        </div>
      </div>
    </div>
  </section>
);

export default AppPreview;
