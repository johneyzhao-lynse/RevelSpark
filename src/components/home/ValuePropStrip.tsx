import { FC } from 'react';
import type { Language } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface ValuePropStripProps {
  language: Language;
}

const VALUE_STEPS = [
  {
    number: '01',
    title: { en: 'Memory', zh: '记忆' },
    subtitle: { en: 'Record Everything', zh: '记录一切' },
    description: {
      en: 'One-tap recording captures every moment with crystal clarity',
      zh: '一键录音，清晰捕捉每个重要时刻',
    },
    image: '/images/features/stt.webp',
  },
  {
    number: '02',
    title: { en: 'Thinking', zh: '思考' },
    subtitle: { en: 'AI Transcription', zh: 'AI 转写' },
    description: {
      en: 'Real-time transcription in 120+ languages with speaker identification',
      zh: '支持 120+ 种语言的实时转写，自动识别说话人',
    },
    image: '/images/features/stt-demo.webp',
  },
  {
    number: '03',
    title: { en: 'AI', zh: 'AI' },
    subtitle: { en: 'Evolve & Summarize', zh: '进化与总结' },
    description: {
      en: 'Self-evolving agent that learns and grows with every use',
      zh: '自我进化的智能体，越用越懂你',
    },
    image: '/images/features/summary-demo.webp',
  },
];

const ValuePropStrip: FC<ValuePropStripProps> = ({ language }) => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <FadeInUp>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
            {language === 'en' ? 'How It Works' : '工作原理'}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            {language === 'en' 
              ? 'From Memory to Intelligence' 
              : '从记忆到智能'}
          </h2>
        </div>
      </FadeInUp>

      {/* Value Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {VALUE_STEPS.map((step, i) => (
          <FadeInUp key={i} delay={i * 0.15}>
            <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={step.image}
                  alt={step.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    {step.subtitle[language]}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {step.title[language]}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                  {step.description[language]}
                </p>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>

      {/* Bottom CTA */}
      <FadeInUp delay={0.5}>
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            {language === 'en' 
              ? 'Your self-evolving AI agent awaits' 
              : '你的自我进化智能体已就绪'}
          </p>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default ValuePropStrip;
