import { FC } from 'react';
import { Check } from 'lucide-react';
import type { Language } from '../../data/constants';
import { PRODUCT_USE_CASES, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface UseCaseDeepDiveProps {
  language: Language;
}

const UseCaseDeepDive: FC<UseCaseDeepDiveProps> = ({ language }) => (
  <section id="use-cases" className="py-32">
    <div className="max-w-6xl mx-auto px-6">
      <FadeInUp>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
          {SECTION_TITLES.useCaseDeep[language]}
        </p>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
          {language === 'en' ? 'Designed for How You Work' : '为你的工作方式而设计'}
        </h2>
      </FadeInUp>

      <div className="space-y-24">
        {PRODUCT_USE_CASES.map((useCase, i) => (
          <FadeInUp key={i} delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight mb-4">
                  {useCase.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {useCase.description[language]}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-black mr-3 flex-shrink-0" />
                      {feature[language]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gray-100 rounded-2xl aspect-video flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-gray-400 text-sm">
                  {language === 'en' ? `${useCase.title.en} Preview` : `${useCase.title.zh} 预览`}
                </span>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default UseCaseDeepDive;
