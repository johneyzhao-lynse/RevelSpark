import { FC } from 'react';
import type { Language } from '../../data/constants';
import { t } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';

interface ValuePropStripProps {
  language: Language;
}

const VALUE_STEPS = [
  {
    number: '01',
    title: { en: 'Memory', zh: '记忆', 'zh-TW': '記憶', ja: '記憶' },
    subtitle: { en: 'Record Everything', zh: '记录一切', 'zh-TW': '記錄一切', ja: 'すべてを記録' },
    description: {
      en: 'One-tap recording captures every moment with crystal clarity',
      zh: '一键录音，清晰捕捉每个重要时刻',
      'zh-TW': '一鍵錄音，清晰捕捉每個重要時刻',
      ja: 'ワンタップで録音し、すべての瞬間をクリアにキャプチャ',
    },
    image: '/images/features/stt.webp',
  },
  {
    number: '02',
    title: { en: 'Thinking', zh: '思考', 'zh-TW': '思考', ja: '思考' },
    subtitle: { en: 'AI Transcription', zh: 'AI 转写', 'zh-TW': 'AI 轉寫', ja: 'AI文字起こし' },
    description: {
      en: 'Real-time transcription in 120+ languages with speaker identification',
      zh: '支持 120+ 种语言的实时转写，自动识别说话人',
      'zh-TW': '支援 120+ 種語言的即時轉寫，自動識別說話人',
      ja: '120+言語のリアルタイム文字起こしと話者識別',
    },
    image: '/images/features/stt-demo.webp',
  },
  {
    number: '03',
    title: { en: 'AI', zh: 'AI', 'zh-TW': 'AI', ja: 'AI' },
    subtitle: { en: 'Evolve & Summarize', zh: '进化与总结', 'zh-TW': '進化與總結', ja: '進化と要約' },
    description: {
      en: 'Self-evolving agent that learns and grows with every use',
      zh: '自我进化的智能体，越用越懂你',
      'zh-TW': '自我進化的智能體，越用越懂你',
      ja: '使うほどに学習・成長する自己進化エージェント',
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
            {t({ en: 'How It Works', zh: '工作原理', 'zh-TW': '工作原理', ja: '仕組み' }, language)}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            {t({ en: 'From Memory to Intelligence', zh: '从记忆到智能', 'zh-TW': '從記憶到智能', ja: '記憶からインテリジェンスへ' }, language)}
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
            {t({ en: 'Your self-evolving AI agent awaits', zh: '你的自我进化智能体已就绪', 'zh-TW': '你的自我進化智能體已就緒', ja: '自己進化するAIエージェントがお待ちしています' }, language)}
          </p>
        </div>
      </FadeInUp>
    </div>
  </section>
);

export default ValuePropStrip;
