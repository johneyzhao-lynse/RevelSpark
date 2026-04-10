import { FC, useState, useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import type { Language } from '../../data/constants';
import OrderButton from '../ui/OrderButton';

interface FloatingBuyButtonProps {
  language: Language;
}

const FloatingBuyButton: FC<FloatingBuyButtonProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 滚动超过 500px 显示悬浮按钮
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl">
        <ShoppingCart className="w-5 h-5" />
        <div className="flex flex-col">
          <span className="text-xs text-white/70">
            {language === 'en' ? 'SparkCard' : '灵光记'}
          </span>
          <span className="text-sm font-semibold">
            {language === 'en' ? '¥599' : '¥599'}
          </span>
        </div>
        <div className="w-px h-8 bg-white/20 mx-2" />
        <OrderButton language={language} variant="light" size="sm" />
        <button
          onClick={() => setIsDismissed(true)}
          className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FloatingBuyButton;
