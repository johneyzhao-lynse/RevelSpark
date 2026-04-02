import { FC } from 'react';
import type { Language } from '../../data/constants';
import { PRODUCT_SPECS, SECTION_TITLES } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface ProductShowcaseProps {
  language: Language;
}

const ProductShowcase: FC<ProductShowcaseProps> = ({ language }) => (
  <section className="py-32">
    <div className="max-w-6xl mx-auto px-6">
      <FadeInUp>
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
          {SECTION_TITLES.showcase[language]}
        </p>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
          {language === 'en' ? 'Every detail, designed to perform' : '每个细节，为性能而生'}
        </h2>
      </FadeInUp>

      {/* Full-width product image */}
      <FadeInUp delay={0.15}>
        <div className="relative rounded-3xl overflow-hidden bg-gray-50 mb-16">
          <img
            src="/images/product-showcase.jpg"
            alt="SparkCard Detail"
            className="w-full max-w-3xl mx-auto object-contain py-12 px-8"
          />
        </div>
      </FadeInUp>

      {/* Specs grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {PRODUCT_SPECS.map((spec, i) => (
          <FadeInUp key={i} delay={i * 0.1}>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">
                {spec.label[language]}
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-black">{spec.value[language]}</p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
