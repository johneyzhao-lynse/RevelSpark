import React from 'react';

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

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <a href="#" className="transform transition-transform hover:scale-105" title={appStore.title}>
        <img src="/images/download/App_Store_Badge_US-UK_black.svg" alt={appStore.alt} className="h-7 w-auto" />
      </a>
      <a href="#" className="transform transition-transform hover:scale-105" title={googlePlay.title}>
        <img src="/images/download/google-play-badge.png" alt={googlePlay.alt} className="h-7 w-auto" />
      </a>
      <a href="/app/ditnonte.apk" className="transform transition-transform hover:scale-105" title={apk.title} download>
        <img src="/images/download/android-apk-badge.png" alt={apk.alt} className="h-7 w-auto" />
      </a>
    </div>
  );
};

export default DownloadButtons; 