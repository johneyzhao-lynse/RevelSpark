import { FC } from 'react';
import { Download } from 'lucide-react';
import type { Language } from '../../data/constants';
import { PREORDER_CTA } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';
import OrderButton from '../ui/OrderButton';
import { Link } from '../ui/Link';

interface PreorderCTAProps {
  language: Language;
}

const PreorderCTA: FC<PreorderCTAProps> = ({ language }) => (
  <section className="bg-black text-white py-32">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <FadeInUp>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          {PREORDER_CTA.headline[language]}
        </h2>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          {PREORDER_CTA.subtext[language]}
        </p>
      </FadeInUp>
      <FadeInUp delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <OrderButton language={language} variant="light" />
          <Link
            href="/download"
            className="h-[52px] px-8 border border-white/30 text-white rounded-full font-bold text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center whitespace-nowrap min-w-[140px]"
          >
            <Download className="mr-2 w-5 h-5" />
            <span>{PREORDER_CTA.ctaDownload[language]}</span>
          </Link>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default PreorderCTA;
