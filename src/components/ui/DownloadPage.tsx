import React from 'react';
import { Truck, RotateCcw, Shield, Clock } from 'lucide-react';
import DownloadButtons from './DownloadButtons';

const DownloadPage: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const isEn = language === 'en';

  const guarantees = [
    {
      icon: Truck,
      title: isEn ? 'Fast Shipping' : '快速发货',
      desc: isEn ? 'Ship out within 1-2 business days' : '1-2 个工作日内发货',
    },
    {
      icon: RotateCcw,
      title: isEn ? '7-Day Free Return' : '7 天无理由退换',
      desc: isEn ? 'No reason needed. Free return within 7 days.' : '7 天内无理由退换，放心购买。',
    },
    {
      icon: Shield,
      title: isEn ? 'One-Year Warranty' : '一年保修',
      desc: isEn ? 'Warranty period subject to local laws' : '保修期以当地法律为准',
    },
    {
      icon: Clock,
      title: isEn ? 'Lifetime Customer Support' : '终身客户支持',
      desc: isEn ? 'Quick support within 24 hours on working days' : '工作日 24 小时内快速响应',
    },
  ];

  return (
    <div className="bg-white pt-20 md:pt-24">
      {/* Page Title */}
      <section className="pt-6 md:pt-8 pb-6 md:pb-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {isEn ? 'Download Lynse App' : '下载灵光记 App'}
          </h2>
          <p className="mt-3 md:mt-4 text-gray-500 text-base md:text-lg">
            {isEn ? 'Get started with your AI-powered recording companion' : '开始你的 AI 录音之旅'}
          </p>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Text + Download Buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
              {isEn ? 'Lynse App' : '灵光记 App'}
            </h2>
            <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base leading-relaxed max-w-md text-center md:text-left">
              {isEn
                ? 'Powered by the latest AI model, Lynse delivers highly accurate, time-stamped transcriptions of your recordings — ensuring every word is captured with precision.'
                : '灵光记不仅是一款录音工具，更是你的自我进化智能体。它持续学习你的习惯，越用越懂你，让每一次记录都成为效率的跃升。'}
            </p>
            <DownloadButtons language={language} />
          </div>

          {/* Right: Phone Mockup */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/images/app-show.png"
              alt="Lynse App"
              className="w-full max-w-[280px] md:max-w-[400px] object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))' }}
            />
          </div>
        </div>
      </section>

      {/* Service Guarantee Strip */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {guarantees.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-[11px] md:text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
