import { FC } from 'react';
import type { Language } from '../../data/constants';
import { SPECS_GRID, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface SpecsGridProps {
  language: Language;
}

const SpecsGrid: FC<SpecsGridProps> = ({ language }) => (
  <section id="specs" className="py-32 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <FadeInUp>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
          {SECTION_TITLES.specs[language]}
        </p>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
          {language === 'en' ? 'Every Detail, Perfected' : '每个细节，精益求精'}
        </h2>
      </FadeInUp>

      <div className="space-y-12">
        {SPECS_GRID.map((group, gi) => (
          <FadeInUp key={gi} delay={gi * 0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">
                {group.category[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {group.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                    <span className="text-gray-500 text-sm">{item.label[language]}</span>
                    <span className="text-black font-semibold text-sm">{item.value[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default SpecsGrid;
