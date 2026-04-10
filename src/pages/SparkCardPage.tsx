import { FC } from 'react';
import type { Language } from '../data/constants';
import ProductHero from '../components/product/ProductHero';
import AppPreview from '../components/home/AppPreview';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import SpecsGrid from '../components/product/SpecsGrid';
import UseCaseDeepDive from '../components/product/UseCaseDeepDive';
import FAQAccordion from '../components/product/FAQAccordion';
import FloatingBuyButton from '../components/product/FloatingBuyButton';

interface SparkCardPageProps {
  language: Language;
}

const SparkCardPage: FC<SparkCardPageProps> = ({ language }) => (
  <>
    <ProductHero language={language} />
    <AppPreview language={language} />
    <SpecsGrid language={language} />
    <UseCaseDeepDive language={language} />
    <TestimonialCarousel language={language} />
    <FAQAccordion language={language} />
    <FloatingBuyButton language={language} />
  </>
);

export default SparkCardPage;
