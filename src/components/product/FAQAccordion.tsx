import { FC, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Language } from '../../data/constants';
import { t, FAQ_ITEMS, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface FAQAccordionProps {
  language: Language;
}

const _heading: Record<Language, string> = {
  en: 'Got Questions?',
  zh: '有疑问？',
  'zh-TW': '有疑問？',
  ja: 'ご質問がありますか？',
};

const FAQAccordion: FC<FAQAccordionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeInUp>
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
            {SECTION_TITLES.faq[language]}
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
            {t(_heading, language)}
          </h2>
        </FadeInUp>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FadeInUp key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black text-sm pr-4">{item.question[language]}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                      {item.answer[language]}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
