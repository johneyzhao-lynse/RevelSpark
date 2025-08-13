import React, { useState } from 'react';

interface DownloadButtonsProps {
  className?: string;
  language: 'en' | 'zh';
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ className, language }) => {
  const appStore = {
    title: language === 'en' ? 'Download on the App Store' : '在 App Store 上下载',
    alt: language === 'en' ? 'Download on the App Store' : '在 App Store 上下载',
  };

  const googlePlay = {
    title: language === 'en' ? 'Get it on Google Play' : '在 Google Play 上获取',
    alt: language === 'en' ? 'Get it on Google Play' : '在 Google Play 上获取',
  };

  const apk = {
    title: language === 'en' ? 'Download APK (Android)' : '下载安卓 APK',
    alt: language === 'en' ? 'Download APK (Android)' : '下载安卓 APK',
  };

  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <div 
        className="relative"
        onMouseEnter={() => setShowQRCode(true)}
        onMouseLeave={() => setShowQRCode(false)}
      >
        <a 
          href="https://apps.apple.com/cn/app/%E8%B0%9B%E5%90%AC%E8%AE%B0/id6746397383" 
          className="transform transition-transform hover:scale-105" 
          title={appStore.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/download/app-store-badge.png" alt={appStore.alt} className="h-8 w-auto" />
        </a>
        {showQRCode && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/30 backdrop-blur-lg p-6 rounded-lg shadow-lg z-10 animate-fadeIn" style={{display: 'block', maxWidth: 'none', minWidth: '150px'}}>
            <img 
              src="/images/download/ditnote-applestroe.png" 
              alt="App Store QR Code" 
              className="w-[150px] h-auto block"
            />
          </div>
        )}
      </div>
      <a href="#" className="transform transition-transform hover:scale-105" title={googlePlay.title}>
        <img src="/images/download/google-play-badge.png" alt={googlePlay.alt} className="h-8 w-auto" />
      </a>
      <a href="/app/ditnonte.apk" className="transform transition-transform hover:scale-105" title={apk.title} download>
        <img src="/images/download/android-apk-badge.png" alt={apk.alt} className="h-8 w-auto" />
      </a>
    </div>
  );
};

export default DownloadButtons;