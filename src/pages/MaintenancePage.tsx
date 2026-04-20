import React, { FC } from 'react';
import { Link } from '../components/ui/Link';
import { Language, t } from '../data/constants';

interface MaintenancePageProps {
  language: Language;
}

const MaintenancePage: FC<MaintenancePageProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <img
            src="/logo/lynse-logo.png"
            alt="Lynse Logo"
            className="h-16 mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {t({ en: 'Under Maintenance', zh: '网页维护中', 'zh-TW': '網頁維護中', ja: 'メンテナンス中' }, language)}
        </h1>
        <p className="text-gray-600 mb-8">
          {t({
            en: 'We are currently working on this page. Please check back soon!',
            zh: '我们正在开发此页面，敬请期待！',
            'zh-TW': '我們正在開發此頁面，敬請期待！',
            ja: 'このページは現在メンテナンス中です。後ほど再度お越しください。'
          }, language)}
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-3 px-6 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            {t({ en: 'Back to Home', zh: '返回主页', 'zh-TW': '返回主頁', ja: 'ホームに戻る' }, language)}
          </Link>
          <Link
            href="/download"
            className="block w-full py-3 px-6 bg-white border border-gray-300 text-black rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            {t({ en: 'Go to Download', zh: '前往下载', 'zh-TW': '前往下載', ja: 'ダウンロードへ' }, language)}
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          {t({ en: 'Thank you for your patience!', zh: '感谢您的耐心等待！', 'zh-TW': '感謝您的耐心等待！', ja: 'お待ちいただきありがとうございます！' }, language)}
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
