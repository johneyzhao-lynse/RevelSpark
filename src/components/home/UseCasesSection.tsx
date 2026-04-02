import { FC } from 'react';
import { Users, Mic, BookOpen, ArrowRight } from 'lucide-react';
import type { Language } from '../../data/constants';
import { USE_CASES, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';
import { Link } from '../ui/Link';

const ICON_MAP: Record<string, FC<{ className?: string }>> = {
  Users,
  Mic,
  BookOpen,
};

interface UseCasesSectionProps {
  language: Language;
}

const UseCasesSection: FC<UseCasesSectionProps> = ({ language }) => (
  <section id="use-cases" className="py-32 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <FadeInUp>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
          {SECTION_TITLES.useCases[language]}
        </p>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
          {language === 'en' ? 'One card. Infinite possibilities.' : '一张卡。无限可能。'}
        </h2>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {USE_CASES.map((useCase, i) => {
          const Icon = ICON_MAP[useCase.icon];
          return (
            <FadeInUp key={i} delay={i * 0.1}>
              <Link href={useCase.link}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">{useCase.title[language]}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">
                    {useCase.description[language]}
                  </p>
                  <span className="text-sm font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                    {language === 'en' ? 'Learn more' : '了解更多'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeInUp>
          );
        })}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
