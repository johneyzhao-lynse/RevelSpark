import React from 'react';

const DownloadButtons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <a href="#" className="transform transition-transform hover:scale-105" title="Download on the App Store">
        <img src="/images/app-store-badge.png" alt="Download on the App Store" className="h-10 w-auto" />
      </a>
      <a href="#" className="transform transition-transform hover:scale-105" title="Get it on Google Play">
        <img src="/images/google-play-badge.png" alt="Get it on Google Play" className="h-10 w-auto" />
      </a>
    </div>
  );
};

export default DownloadButtons; 