import { FC } from 'react';
import { Quote } from 'lucide-react';
import type { Language } from '../../data/constants';
import { t, TESTIMONIALS, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface TrustSectionProps {
  language: Language;
}

const TrustSection: FC<TrustSectionProps> = ({ language }) => (
  <section className="py-32 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <FadeInUp>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
          {SECTION_TITLES.trust[language]}
        </p>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
          {t({ en: 'Loved by professionals worldwide', zh: '全球专业人士的信赖之选', 'zh-TW': '全球專業人士的信賴之選', ja: '世界中のプロフェッショナルに愛されて' }, language)}
        </h2>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
          <FadeInUp key={i} delay={i * 0.1}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
              <Quote className="w-8 h-8 text-gray-200 mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                {testimonial.quote[language]}
              </p>
              <div>
                <p className="font-semibold text-black text-sm">{testimonial.name[language]}</p>
                <p className="text-xs text-gray-400 mt-1">{testimonial.role[language]}</p>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
