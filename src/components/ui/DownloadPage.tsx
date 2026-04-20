import React from 'react';
import { Truck, RotateCcw, Shield, Clock } from 'lucide-react';
import type { Language } from '../../data/constants';
import { t } from '../../data/constants';
import DownloadButtons from './DownloadButtons';

interface DownloadPageProps {
  language: Language;
}

const _pageTitle: Record<Language, string> = {
  en: 'Download Lynse App',
  zh: '下载灵光记 App',
  'zh-TW': '下載靈光記 App',
  ja: 'Lynse アプリをダウンロード',
};

const _pageDesc: Record<Language, string> = {
  en: 'Get started with your AI-powered recording companion',
  zh: '开始你的 AI 录音之旅',
  'zh-TW': '開始你的 AI 錄音之旅',
  ja: 'AI搭載の録音コンパニオンを始めましょう',
};

const _appTitle: Record<Language, string> = {
  en: 'Lynse App',
  zh: '灵光记 App',
  'zh-TW': '靈光記 App',
  ja: 'Lynse アプリ',
};

const _appDesc: Record<Language, string> = {
  en: 'Powered by the latest AI model, Lynse delivers highly accurate, time-stamped transcriptions of your recordings — ensuring every word is captured with precision.',
  zh: '灵光记不仅是一款录音工具，更是你的自我进化智能体。它持续学习你的习惯，越用越懂你，让每一次记录都成为效率的跃升。',
  'zh-TW': '靈光記不僅是一款錄音工具，更是你的自我進化智能體。它持續學習你的習慣，越用越懂你，讓每一次記錄都成為效率的躍升。',
  ja: '最新のAIモデルを搭載し、高精度なタイムスタンプ付き文字起こしを提供。一言一言を正確にキャプチャします。',
};

const _guarantees = [
  {
    icon: Truck,
    title: { en: 'Fast Shipping', zh: '快速发货', 'zh-TW': '快速發貨', ja: '迅速発送' } as Record<Language, string>,
    desc: { en: 'Ship out within 1-2 business days', zh: '1-2 个工作日内发货', 'zh-TW': '1-2 個工作日內發貨', ja: '1-2営業日以内に発送' } as Record<Language, string>,
  },
  {
    icon: RotateCcw,
    title: { en: '7-Day Free Return', zh: '7 天无理由退换', 'zh-TW': '7 天無理由退換', ja: '7日間無料返品' } as Record<Language, string>,
    desc: { en: 'No reason needed. Free return within 7 days.', zh: '7 天内无理由退换，放心购买。', 'zh-TW': '7 天內無理由退換，放心購買。', ja: '理由不要。7日間無料返品可能。' } as Record<Language, string>,
  },
  {
    icon: Shield,
    title: { en: 'One-Year Warranty', zh: '一年保修', 'zh-TW': '一年保固', ja: '1年保証' } as Record<Language, string>,
    desc: { en: 'Warranty period subject to local laws', zh: '保修期以当地法律为准', 'zh-TW': '保固期以當地法律為準', ja: '保証期間は現地の法律に準拠' } as Record<Language, string>,
  },
  {
    icon: Clock,
    title: { en: 'Lifetime Customer Support', zh: '终身客户支持', 'zh-TW': '終身客戶支援', ja: 'ライフタイムカスタマーサポート' } as Record<Language, string>,
    desc: { en: 'Quick support within 24 hours on working days', zh: '工作日 24 小时内快速响应', 'zh-TW': '工作日 24 小時內快速回應', ja: '営業日24時間以内の迅速なサポート' } as Record<Language, string>,
  },
];

const DownloadPage: React.FC<DownloadPageProps> = ({ language }) => {
  return (
    <div className="bg-white pt-20 md:pt-24">
      {/* Page Title */}
      <section className="pt-6 md:pt-8 pb-6 md:pb-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {t(_pageTitle, language)}
          </h2>
          <p className="mt-3 md:mt-4 text-gray-500 text-base md:text-lg">
            {t(_pageDesc, language)}
          </p>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Text + Download Buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
              {t(_appTitle, language)}
            </h2>
            <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base leading-relaxed max-w-md text-center md:text-left">
              {t(_appDesc, language)}
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
            {_guarantees.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-900">{t(item.title, language)}</p>
                    <p className="text-[11px] md:text-xs text-gray-500 mt-0.5 leading-relaxed">{t(item.desc, language)}</p>
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
