import { FC, useState, useRef, useMemo } from 'react';
import type { Language } from '../../data/constants';
import { getStoreLinks } from '../../data/constants';

interface OrderButtonProps {
  language: Language;
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'default' | 'sm';
}

const OrderButton: FC<OrderButtonProps> = ({ language, variant = 'dark', className = '', size = 'default' }) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const storeLinks = useMemo(() => getStoreLinks(language), [language]);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const handleLeave = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  const sizeClasses = size === 'sm' 
    ? 'h-[40px] px-5 text-sm min-w-[100px]'
    : 'h-[52px] px-8 text-base min-w-[140px]';

  const baseBtn =
    `${sizeClasses} rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 active:scale-95`;

  const variantBtn =
    variant === 'dark'
      ? `${baseBtn} bg-black hover:bg-gray-900 text-white`
      : `${baseBtn} bg-white hover:bg-gray-50 text-black border border-gray-300`;

  return (
    <div className={`relative ${className}`} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className={variantBtn}>
        <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6.5V5.5C6.5 3.84315 7.84315 2.5 9.5 2.5C11.1569 2.5 12.5 3.84315 12.5 5.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3.5" y="6.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8.5 10.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11.5 10.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>{language === 'en' ? 'Buy Now' : '立即购买'}</span>
      </button>

      <div
        className={`absolute top-full left-0 mt-3 w-48 bg-white/98 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 z-50 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-3">
          <div className="text-xs text-gray-500 mb-2 px-2 font-semibold tracking-wide uppercase">
            {language === 'en' ? 'Choose store' : '选择渠道'}
          </div>
          {storeLinks.map((store, index) => (
            <a
              key={index}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <span className="mr-3 flex-shrink-0">{store.iconSvg}</span>
              <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors">
                {store.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderButton;
