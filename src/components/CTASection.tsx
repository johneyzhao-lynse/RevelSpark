import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import BrandName from './ui/BrandName';

interface CTASectionProps {
  language: 'en' | 'zh';
}

const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  return (
    <section id="buy" className="py-24 bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-12 left-12 w-64 h-64 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500 text-sm font-medium mb-6">
              {language === 'en' ? 'Limited Time Offer' : '限时优惠'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {language === 'en'
                ? 'Transform Your Recording Experience Today'
        : <span className="text-[#D9ba84]">今天就改变您的录音体验</span>}
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              {language === 'en'
                ? 'Be among the first to experience the future of audio recording and transcription with early bird pricing and exclusive benefits.'
                : '成为最先体验音频录制和转写未来的人之一，享受早鸟价格和独家优惠。'}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Free premium DitNote app subscription (1 year)' : '免费谛听记高级版订阅（1年）'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Extended 3-year warranty' : '延长3年保修'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Priority access to future firmware updates' : '优先获取未来固件更新'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Exclusive protective case included' : '含专属保护套'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-center"
              >
                {language === 'en' ? 'Pre-order Now' : '立即预购'}
              </a>
              <div className="flex items-center justify-center sm:justify-start">
                <ShieldCheck className="mr-2 text-cyan-300" size={20} />
                <span className="text-sm">
                  {language === 'en' ? '30-day money-back guarantee' : '30天退款保证'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? <><BrandName size="lg">Lynse</BrandName> Pro</> : <><BrandName size="lg">Lynse</BrandName> <span className="text-[#D9BA84]">专业版</span></>}
                </h3>
                <span className="text-lg font-medium px-3 py-1 bg-blue-500 rounded-full text-white">
                  {language === 'en' ? 'Best Value' : '最佳价值'}
                </span>
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-lg line-through ml-2 opacity-70">$199</span>
                <span className="ml-2 text-cyan-300 font-medium">
                  {language === 'en' ? 'Save $50' : '节省$50'}
                </span>
              </div>
              <p className="text-blue-100 mb-6">
                {language === 'en'
                  ? 'Complete recording solution with premium features and extended storage.'
                  : '完整的录音解决方案，具有高级功能和扩展存储。'}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? <><BrandName>Lynse</BrandName> AI Recording Card (32GB)</> : <><BrandName>Lynse</BrandName> AI 闪记卡（32GB）</>}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Premium Leather Protective Case' : '高级皮革保护套'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? '1-Year Premium Cloud Storage (100GB)' : '1年高级云存储（100GB）'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Unlimited Transcription Minutes' : '无限转录分钟数'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Advanced Analytics & Summaries' : '高级分析和摘要'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-cyan-300 mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Priority Customer Support' : '优先客户支持'}
                </span>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-3 bg-white text-blue-900 rounded-full font-medium text-base text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              {language === 'en' ? 'Pre-order Pro Package' : '预购专业套餐'}
            </a>

            <p className="text-center text-sm mt-4 text-blue-100">
              {language === 'en'
                ? 'Ships worldwide • Estimated delivery: October 2025'
                : '全球发货 • 预计送达时间：2025年10月'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;