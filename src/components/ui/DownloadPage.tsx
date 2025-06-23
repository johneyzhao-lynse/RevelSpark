import React from 'react';
import DownloadButtons from './DownloadButtons';

const DownloadPage: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* 左侧：下载按钮 */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {language === 'en' ? 'Download Lynse App' : '下载 Lynse 应用'}
          </h1>
          <p className="text-gray-600 mb-8 text-center text-base md:text-lg">
            {language === 'en'
              ? 'Choose your platform and start using Lynse now!'
              : '选择适合您的平台，立即体验 Lynse 智能闪记卡！'}
          </p>
          <DownloadButtons language={language} />
        </div>
        {/* 右侧：产品大图 */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <img
            src="/images/product-showcase.png"
            alt="Lynse Product Showcase"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage; 