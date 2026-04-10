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

  const [showGooglePlayTooltip, setShowGooglePlayTooltip] = useState(false);

  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowGooglePlayTooltip(true);
    setTimeout(() => setShowGooglePlayTooltip(false), 2000);
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <a 
        href="https://apps.apple.com/cn/app/灵光记/id6758296786" 
        className="transform transition-transform hover:scale-105" 
        title={appStore.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/download/apple_store.avif" alt={appStore.alt} className="h-14 w-auto" />
      </a>
      <div className="relative">
        <a 
          href="#" 
          className="transform transition-transform hover:scale-105" 
          title={googlePlay.title}
          onClick={handleGooglePlayClick}
        >
          <img src="/images/download/google_play.avif" alt={googlePlay.alt} className="h-14 w-auto" />
        </a>
        {showGooglePlayTooltip && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-10 animate-fadeIn whitespace-nowrap font-medium">
            {language === 'en' ? 'Coming Soon' : '上架中'}
          </div>
        )}
      </div>
      <a href="/app/lynse-1.0.4(95).apk" className="transform transition-transform hover:scale-105" title={apk.title} download>
        <img src="/images/download/android.avif" alt={apk.alt} className="h-14 w-auto" />
      </a>
    </div>
  );
};

export default DownloadButtons;