import React from 'react';
import DownloadButtons from './DownloadButtons';

const DownloadPage: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row">
        {/* 左侧：下载按钮 */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {language === 'en' ? 'Download Spark Note App' : '下载 灵光记 应用'}
          </h1>
          <p className="text-gray-600 mb-8 text-center text-base md:text-lg">
            {language === 'en'
              ? 'Choose your platform and start using Lynse now!'
              : '选择适合您的平台，立即体验 Lynse 灵光记！'}
          </p>
          <DownloadButtons language={language} />
        </div>
        {/* 右侧：产品大图 */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <img
            src="/images/product-showcase.png"
            alt="Lynse Product Showcase"
            className="w-full max-w-[230px] md:max-w-[576px] transition-all duration-500 transform hover:scale-105"
            style={{
              filter: 'drop-shadow(0 25px 25px rgba(26, 109, 255, 0.2))',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;