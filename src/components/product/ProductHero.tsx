import { FC } from 'react';
import { ArrowDown } from 'lucide-react';
import type { Language } from '../../data/constants';
import { PRODUCT_PAGE } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';
import OrderButton from '../ui/OrderButton';
import { Link } from '../ui/Link';

interface ProductHeroProps {
  language: Language;
}

const ProductHero: FC<ProductHeroProps> = ({ language }) => (
  <section className="min-h-screen flex items-center pt-24 pb-16">
    <div className="max-w-6xl mx-auto px-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              {PRODUCT_PAGE.hero.badge[language]}
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6">
              {PRODUCT_PAGE.hero.name}
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-md">
              {PRODUCT_PAGE.hero.tagline[language]}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <OrderButton language={language} variant="dark" />
              <Link
                href="#specs"
                className="h-[52px] px-8 border border-gray-300 text-black rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 flex items-center justify-center whitespace-nowrap min-w-[140px]"
              >
                {PRODUCT_PAGE.hero.ctaLearn[language]}
              </Link>
            </div>
          </FadeInUp>
        </div>
        <FadeInUp delay={0.2}>
          <div className="relative">
            <img
              src="/images/product-showcase.jpg"
              alt="SparkCard Product"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </FadeInUp>
      </div>
      <FadeInUp delay={0.3}>
        <div className="flex justify-center mt-16">
          <a href="#use-cases" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default ProductHero;
