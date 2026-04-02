import { FC } from 'react';
import { Mic, FileText, Sparkles, ChevronRight } from 'lucide-react';
import type { Language } from '../../data/constants';
import { VALUE_PROPS, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

const ICON_MAP: Record<string, FC<{ className?: string }>> = {
  Mic,
  FileText,
  Sparkles,
};

interface ValuePropStripProps {
  language: Language;
}

const ValuePropStrip: FC<ValuePropStripProps> = ({ language }) => (
  <section className="bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto px-6">
      <FadeInUp>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-12">
          {SECTION_TITLES.valueProps[language]}
        </p>
      </FadeInUp>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
        {VALUE_PROPS.map((step, i) => {
          const Icon = ICON_MAP[step.icon];
          return (
            <div key={i} className="flex items-center gap-8 lg:gap-6">
              <FadeInUp delay={i * 0.1}>
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-1">{step.title[language]}</h3>
                  <p className="text-sm text-gray-500">{step.description[language]}</p>
                </div>
              </FadeInUp>
              {i < VALUE_PROPS.length - 1 && (
                <ChevronRight className="w-5 h-5 text-gray-300 hidden lg:block flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValuePropStrip;
