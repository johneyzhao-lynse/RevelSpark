import { FC } from 'react';
import type { Language } from '../data/constants';
import ProductHero from '../components/product/ProductHero';
import SpecsGrid from '../components/product/SpecsGrid';
import UseCaseDeepDive from '../components/product/UseCaseDeepDive';
import FAQAccordion from '../components/product/FAQAccordion';
import PreorderCTA from '../components/home/PreorderCTA';

interface SparkCardPageProps {
  language: Language;
}

const SparkCardPage: FC<SparkCardPageProps> = ({ language }) => (
  <>
    <ProductHero language={language} />
    <SpecsGrid language={language} />
    <UseCaseDeepDive language={language} />
    <FAQAccordion language={language} />
    <PreorderCTA language={language} />
  </>
);

export default SparkCardPage;
