import React, { useState } from 'react';
import type { Language } from '../../data/constants';
import { t } from '../../data/constants';

interface DownloadButtonsProps {
  className?: string;
  language: Language;
}

const _appStoreText: Record<Language, string> = {
  en: 'Download on the App Store',
  zh: '在 App Store 上下载',
  'zh-TW': '在 App Store 上下載',
  ja: 'App Store からダウンロード',
};

const _googlePlayText: Record<Language, string> = {
  en: 'Get it on Google Play',
  zh: '在 Google Play 上获取',
  'zh-TW': '在 Google Play 上獲取',
  ja: 'Google Play で入手',
};

const _apkText: Record<Language, string> = {
  en: 'Download APK (Android)',
  zh: '下载安卓 APK',
  'zh-TW': '下載安卓 APK',
  ja: 'APK をダウンロード（Android）',
};

const _scanToDownload: Record<Language, string> = {
  en: 'Scan to Download',
  zh: '扫码下载',
  'zh-TW': '掃碼下載',
  ja: 'スキャンしてダウンロード',
};

const _comingSoon: Record<Language, string> = {
  en: 'Coming Soon...',
  zh: '正在上架中...',
  'zh-TW': '正在上架中...',
  ja: '公開準備中...',
};

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ className, language }) => {
  const appStore = {
    title: t(_appStoreText, language),
    alt: t(_appStoreText, language),
  };

  const googlePlay = {
    title: t(_googlePlayText, language),
    alt: t(_googlePlayText, language),
  };

  const apk = {
    title: t(_apkText, language),
    alt: t(_apkText, language),
  };

  const [showGooglePlayTooltip, setShowGooglePlayTooltip] = useState(false);

  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowGooglePlayTooltip(true);
    setTimeout(() => setShowGooglePlayTooltip(false), 2000);
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <div className="relative group">
        <a
          href="https://apps.apple.com/cn/app/灵光记/id6758296786"
          className="transform transition-transform hover:scale-105 block"
          title={appStore.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/download/apple_store.avif" alt={appStore.alt} className="h-14 w-auto" />
        </a>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 pt-2">
          <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 p-3 w-36">
            <div className="relative w-full aspect-square mx-auto">
              <img src="/images/download/ios-qr.png" alt="App Store QR Code" className="w-full h-full object-contain" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-[2px] rounded-md shadow-sm">
                  <img src="/logo/lynse-black-icon.png?v=1" alt="Lynse Icon" className="w-6 h-6 rounded object-contain" />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2 font-medium">
              {t(_scanToDownload, language)}
            </p>
          </div>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
        </div>
      </div>
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
            {t(_comingSoon, language)}
          </div>
        )}
      </div>
      <div className="relative group">
        <a href="https://www.pgyer.com/lynse-android" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-105" title={apk.title}>
          <img src="/images/download/android.avif" alt={apk.alt} className="h-14 w-auto" />
        </a>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 pt-2">
          <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 p-3 w-36">
            <div className="relative w-full aspect-square mx-auto">
              <img src="/images/download/android-qr.png" alt="Android QR Code" className="w-full h-full object-contain" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-[2px] rounded-md shadow-sm">
                  <img src="/logo/lynse-black-icon.png?v=1" alt="Lynse Icon" className="w-6 h-6 rounded object-contain" />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2 font-medium">
              {t(_scanToDownload, language)}
            </p>
          </div>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default DownloadButtons;