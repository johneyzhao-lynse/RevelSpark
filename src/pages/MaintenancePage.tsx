import React, { FC } from 'react';
import { Link } from '../components/ui/Link';

interface MaintenancePageProps {
  language: 'en' | 'zh';
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
          {language === 'en' ? 'Under Maintenance' : '网页维护中'}
        </h1>
        <p className="text-gray-600 mb-8">
          {language === 'en' 
            ? 'We are currently working on this page. Please check back soon!' 
            : '我们正在开发此页面，敬请期待！'}
        </p>
        <div className="space-y-3">
          <Link 
            href="/" 
            className="block w-full py-3 px-6 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            {language === 'en' ? 'Back to Home' : '返回主页'}
          </Link>
          <Link 
            href="/download" 
            className="block w-full py-3 px-6 bg-white border border-gray-300 text-black rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            {language === 'en' ? 'Go to Download' : '前往下载'}
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          {language === 'en' ? 'Thank you for your patience!' : '感谢您的耐心等待！'}
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;