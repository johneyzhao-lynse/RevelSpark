import React, { useState, useEffect, useRef, FC, useCallback } from 'react';
import { Menu, X, Globe, ShoppingBag } from 'lucide-react';
import { Link } from './ui/Link';



interface HeaderProps {
  language: 'en' | 'zh';
  onLanguageChange: (language: 'en' | 'zh') => void;
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 延迟关闭定时器
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const dropdownCloseTimer = useRef<NodeJS.Timeout | null>(null);

  // 使用useCallback和防抖优化滚动处理
  const handleScroll = useCallback(() => {
    // 简单的防抖实现
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);
  }, []);

  // 监听滚动事件以更改标题样式
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => onLanguageChange(language === 'en' ? 'zh' : 'en');


  const openDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setIsDropdownOpen(true);
  };
  const closeDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    dropdownCloseTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // 100ms延迟
  };


  const isAboutPage = window.location.pathname === '/about';

  // 旗舰店链接配置
  const storeLinks = [
    {
      name: language === 'en' ? 'Tmall Flagship' : '天猫旗舰店',
      url: 'https://tmall.com',
      icon: (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="M143.104 1001.216h143.018667c0-78.933333-32-143.018667-71.424-143.018667-39.338667 0-71.68 64-71.68 143.018667z m571.989333 0h143.104c0-78.933333-32.085333-143.018667-71.424-143.018667-39.424 0-71.68 64-71.68 143.018667z" fill="#303030"></path>
          <path d="M943.616 647.936c-38.912-7.168-83.2 27.562667-122.112 96.085333-38.997333 68.522667-87.04 113.493333-195.157333 113.493334H374.442667c-108.117333 0-155.733333-44.544-195.072-113.493334C139.946667 675.072 95.914667 640.853333 57.173333 647.936a82.773333 82.773333 0 0 0-57.173333 69.632v140.8c0.170667 51.712 28.245333 99.157333 73.386667 124.16a142.592 142.592 0 0 1 284.16 18.773333h71.424a71.509333 71.509333 0 1 1 143.104 0h71.424a142.592 142.592 0 0 1 284.16-18.944c45.226667-25.002667 73.386667-72.533333 73.557333-124.16V718.677333c-7.68-37.546667-30.037333-65.450667-57.6-70.826666z" fill="#303030"></path>
          <path d="M858.197333 0h-715.093333C64 0 0 64 0 143.104v448.938667a123.733333 123.733333 0 0 1 44.458667-19.114667c32.938667-6.485333 117.76-5.973333 196.096 131.498667 25.6 44.544 50.005333 76.8 133.461333 76.8h252.586667c83.370667 0 108.117333-31.829333 133.461333-76.8 78.336-137.301333 163.072-137.984 196.010667-131.413334 15.957333 3.413333 31.061333 9.984 44.544 19.285334V143.104c0-78.762667-63.658667-142.762667-142.506667-143.104zM680.106667 214.528H572.074667v286.122667a71.509333 71.509333 0 1 1-143.104 0V214.528H321.706667a35.84 35.84 0 0 1 0-71.424h357.802666a35.84 35.84 0 0 1 0 71.424h0.682667z" fill="#FF002E"></path>
        </svg>
      )
    },
    {
      name: language === 'en' ? 'JD Flagship' : '京东旗舰店',
      url: 'https://jd.com',
      icon: (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="M128 0h768q128 0 128 128v768q0 128-128 128H128Q0 1024 0 896V128Q0 0 128 0z" fill="#F53415"></path>
          <path d="M471.253 201.173l-37.333 93.654 112.213 112.426h168.534l64-54.4s9.6-17.92 18.133-37.973l-13.013-56.96-11.734-7.467-117.546-11.733-57.174-71.467z" fill="#414141"></path>
          <path d="M269.44 314.027c0 13.653 2.56 27.52 2.987 41.386a67.627 67.627 0 0 1-30.08 61.014 147.627 147.627 0 0 1-52.907 24.32 28.587 28.587 0 0 1-35.2-35.414 136.533 136.533 0 0 1 14.293-36.906 350.507 350.507 0 0 0 34.774-88.96 93.867 93.867 0 0 1 6.186-16.854 21.333 21.333 0 0 1 25.174-11.52A106.667 106.667 0 0 1 256 259.84c10.453 5.333 21.333 11.733 30.933 17.493 6.4-6.613 12.374-13.866 18.987-20.266A274.773 274.773 0 0 1 384 206.293a661.333 661.333 0 0 1 141.013-48.853 573.013 573.013 0 0 1 69.12-9.6c27.52-1.92 55.467-2.987 82.987-2.347a238.08 238.08 0 0 1 104.107 21.334A57.173 57.173 0 0 1 816.853 208a174.72 174.72 0 0 1 0 42.667 232.96 232.96 0 0 1-22.4 68.906 34.773 34.773 0 0 1-15.146 14.08 152.107 152.107 0 0 1-48 16.214 258.773 258.773 0 0 1-138.454-8.534 185.813 185.813 0 0 1-68.266-47.36 33.92 33.92 0 0 0-6.187-6.186c-2.773-1.28-7.04-2.347-8.96 0a10.027 10.027 0 0 0-2.56 8.32 21.333 21.333 0 0 0 5.547 8.96 202.24 202.24 0 0 0 104.533 61.226 265.173 265.173 0 0 0 145.92-5.333 53.333 53.333 0 0 0 8.107-3.2 37.76 37.76 0 0 1 8.746-3.2c-5.333 7.893-10.453 15.787-15.786 23.253a273.707 273.707 0 0 1-145.28 101.12 220.587 220.587 0 0 1-115.414 0A418.773 418.773 0 0 1 329.6 393.6a174.933 174.933 0 0 1-40.96-45.867 87.68 87.68 0 0 1-9.387-21.333c-1.706-6.187-4.053-10.24-9.386-11.733z m466.347-152.96c-7.467 0-15.147 0-22.4 2.133a64 64 0 0 0-31.36 12.8 11.947 11.947 0 0 0 1.92 21.333 53.76 53.76 0 0 0 11.52 4.48 142.507 142.507 0 0 0 54.613 1.494 110.293 110.293 0 0 0 27.307-7.467 15.147 15.147 0 0 0 10.453-14.933c0-7.04-6.187-9.6-11.307-12.16a98.773 98.773 0 0 0-40.746-7.467z m-213.334 82.986a17.92 17.92 0 0 0 19.2-17.066 18.133 18.133 0 0 0-19.2-17.28 17.28 17.28 0 1 0 0 34.346z m83.627 413.44h-14.507c-1.28 0-2.986-2.346-3.413-3.84-3.413-13.653-6.4-27.52-10.24-41.173a58.24 58.24 0 0 0-7.253-15.147 10.453 10.453 0 0 0-17.92-1.28 89.387 89.387 0 0 0-13.014 21.334 307.2 307.2 0 0 0-11.093 34.346c-1.493 4.694-2.987 7.254-8.32 6.4a78.293 78.293 0 0 0-10.027 0c0-20.053 1.494-39.253 2.347-60.16a75.947 75.947 0 0 0-11.093 5.547 215.893 215.893 0 0 0-18.134 16c-10.453 10.667-21.333 21.333-30.506 32.427-6.187 6.826-8.32 7.466-19.2 5.12l38.613-65.494a37.547 37.547 0 0 1-28.373-21.333 34.133 34.133 0 0 1 0-24.32c0 2.773 1.28 5.76 2.133 8.533a24.32 24.32 0 0 0 31.36 17.707 19.627 19.627 0 0 0 10.027-7.467c12.586-21.333 24.746-40.96 36.693-61.653a6.827 6.827 0 0 1 8.533-3.84 142.507 142.507 0 0 0 59.307 0c4.267-1.067 8.533-2.987 13.227-4.693V657.28z m-237.653 78.72c-1.92 5.334-11.52 6.614-49.494 6.614s-46.506 1.28-46.506 6.613 14.933 6.827 111.146 6.827 111.147 0 111.147-6.827-8.533-6.613-49.067-6.613-48.853-1.28-48.853-6.614-4.48-6.613-12.8-6.613a16.853 16.853 0 0 0-15.573 6.613z m208.853 0c-1.707 4.907-8.747 6.614-24.747 6.614s-21.333 1.92-21.333 6.613 4.907 6.827 17.92 6.827c9.813 0 17.707 0 17.707 2.133a242.133 242.133 0 0 1-13.227 29.013 181.76 181.76 0 0 0-13.44 30.934c0 2.773 16.427 4.48 42.667 4.48h42.666v35.626c0 30.72-1.28 36.48-8.96 40.96a18.133 18.133 0 0 0-8.746 11.947c0 9.813 27.52 2.347 39.04-11.093 8.533-9.387 9.813-16.427 9.813-44.374v-33.066h44.373c36.054 0 44.587-1.28 44.587-6.614s-8.96-6.613-42.667-7.466l-43.733-1.494-3.627-17.92c-1.28-18.346-1.706-18.773-16.853-18.773s-15.147 0-15.147 20.053v20.054H602.24a71.467 71.467 0 0 1-24.533-2.774 68.053 68.053 0 0 1 9.386-26.666l11.52-23.894h77.014c65.28 0 77.013 0 77.013-6.826s-11.307-6.614-73.387-6.614-72.96 0-70.826-6.613 0-6.613-12.8-6.613-16.427 2.56-18.347 6.613z m-296.96 58.24a138.453 138.453 0 0 0 0 26.667 350.507 350.507 0 0 0 45.867 1.707h42.666v24.106c0 34.134-4.48 50.56-13.653 53.76a11.733 11.733 0 0 0-8.533 9.814c0 9.813 25.386 4.48 38.613-8.534 8.96-8.32 10.24-13.653 10.24-44.373v-34.773h88.96v-53.334H282.027z m177.92 0l-1.28 12.374H310.187l-1.28-12.374-1.494-11.946H459.52z m-161.067 64a200.32 200.32 0 0 1-16.853 42.667l-8.96 14.72h9.387c10.24 0 32-26.667 45.44-55.68 11.52-24.747 10.666-28.8-6.187-28.8s-15.147 0-22.827 27.52z m135.254-21.333a190.08 190.08 0 0 0 33.28 64 39.253 39.253 0 0 0 20.053 13.867c7.467 0 7.467-1.28-2.133-19.2a149.333 149.333 0 0 1-16-42.667c-5.334-21.333-5.974-23.04-21.334-23.04-10.24 0-14.72 2.133-14.72 6.613z m128-3.413a150.613 150.613 0 0 0-5.334 21.333A151.467 151.467 0 0 1 540.8 896c-8.32 16.427-9.173 21.333-4.267 21.333 12.374 0 43.947-43.946 53.334-74.666 2.986-8.96 1.706-9.814-12.587-9.814-8.32 0-16.427 1.28-17.28 3.2z m125.866-1.494a256 256 0 0 0 10.667 26.24c11.52 26.24 36.053 56.534 45.44 56.534s7.893-2.134-1.493-16a186.24 186.24 0 0 1-15.574-37.334c-7.466-27.093-7.893-27.733-23.466-29.013H685.44z" fill="#FFFFFF"></path>
        </svg>
      )
    },
    {
      name: language === 'en' ? 'Douyin Flagship' : '抖音旗舰店',
      url: 'https://douyin.com',
      icon: (
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#111111"></path>
          <path d="M204.27776 670.59712a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V134.35904h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#FF4040"></path>
          <path d="M164.92544 631.23456a246.25152 246.25152 0 0 1 245.97504-245.97504v147.57888a98.49856 98.49856 0 0 0-98.38592 98.38592c0 48.34304 26.14272 100.352 83.54816 100.352 3.81952 0 93.55264-0.88064 93.55264-77.19936V94.99648h157.26592a133.31456 133.31456 0 0 0 133.12 132.99712l-0.13312 147.31264a273.152 273.152 0 0 1-142.62272-38.912l-0.06144 317.98272c0 146.00192-124.24192 224.77824-241.14176 224.77824-131.74784 0.03072-231.1168-106.56768-231.1168-247.92064z" fill="#00F5FF"></path>
          <path d="M410.91072 427.58144c-158.8224 20.15232-284.44672 222.72-154.112 405.00224 120.40192 98.47808 373.68832 41.20576 380.70272-171.85792l-0.17408-324.1472a280.7296 280.7296 0 0 0 142.88896 38.62528V261.2224a144.98816 144.98816 0 0 1-72.8064-54.82496 135.23968 135.23968 0 0 1-54.70208-72.45824h-123.66848l-0.08192 561.41824c-0.11264 78.46912-130.9696 106.41408-164.18816 30.2592-83.18976-39.77216-64.37888-190.9248 46.31552-192.57344z" fill="#FFFFFF"></path>
        </svg>
      )
    }
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 border rounded-full px-4 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl border-gray-200/50 py-3 shadow-premium'
        : 'bg-white/75 backdrop-blur-md border-gray-200/40 py-3.5 shadow-glass'
        } w-fit max-w-[95vw] md:max-w-[90vw] whitespace-nowrap flex justify-center`}
    >
      <div className="w-full flex items-center justify-between gap-4 md:gap-8 px-2">
        <div className="flex items-center select-none">
          <Link href="/" className="group">
            <img src="/images/logo.png" alt="lynse logo" className="h-[32px] w-auto object-contain mr-2 transition-transform duration-300 group-hover:scale-105" />
          </Link>
        </div>
        <React.Fragment>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {/* Lynse Note Product Directory Dropdown */}
              <div className="relative group">
                <button
                  className="text-text-primary text-base font-semibold hover:text-primary-600 transition-all px-3 py-2 rounded-xl hover:bg-primary-50/50 flex items-center"
                >
                  {language === 'en' ? 'Lynse Note' : 'Lynse Note'}
                  <svg
                    className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-48 glass-card py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                  <Link
                    href="/#product"
                    className="block px-4 py-2.5 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-200 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'Product' : '产品'}
                  </Link>
                  <Link
                    href="/#features"
                    className="block px-4 py-2.5 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-200 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'Features' : '特性'}
                  </Link>
                  <Link
                    href="/#specs"
                    className="block px-4 py-2.5 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-200 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'Specs' : '规格'}
                  </Link>
                  <Link
                    href="/#testimonials"
                    className="block px-4 py-2.5 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-200 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'Reviews' : '评价'}
                  </Link>
                  <Link
                    href="/#faq"
                    className="block px-4 py-2.5 text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-200 rounded-lg mx-1"
                  >
                    {language === 'en' ? 'FAQ' : '常见问题'}
                  </Link>
                </div>
              </div>

              <Link href="/solutions" className="text-text-primary text-base font-semibold hover:text-primary-600 transition-all duration-200 px-4 py-2.5 rounded-xl hover:bg-primary-50/50">
                {language === 'en' ? 'Solutions' : '解决方案'}
              </Link>
              <Link href="/SupportCenterPage" className="text-text-primary text-base font-semibold hover:text-primary-600 transition-all duration-200 px-4 py-2.5 rounded-xl hover:bg-primary-50/50">
                {language === 'en' ? 'Support' : '支持'}
              </Link>
              <Link href="/about" className="text-text-primary text-base font-semibold hover:text-primary-600 transition-all duration-200 px-4 py-2.5 rounded-xl hover:bg-primary-50/50">
                {language === 'en' ? 'About' : '关于'}
              </Link>
              <button
                className="flex items-center text-base font-semibold text-text-secondary hover:text-primary-600 px-4 py-2.5 rounded-xl hover:bg-primary-50/50 transition-all duration-200"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
              >
                <Globe size={16} className="mr-1.5" />
                <span>{language === 'en' ? 'EN' : '中文'}</span>
              </button>
            </div>

            {/* 立即购买按钮 - Enhanced */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-premium hover:shadow-glow-lg transition-all duration-300 flex items-center hover:scale-105 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ShoppingBag size={16} className="mr-2 relative z-10" />
                <span className="relative z-10">{language === 'en' ? 'Buy Now' : '立即购买'}</span>
              </button>
              {/* 下拉菜单 - Enhanced */}
              <div
                className={`absolute top-full left-0 mt-3 w-48 glass-card py-2 transition-all duration-300 z-50 shadow-premium ${isDropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
              >
                <div className="p-2.5">
                  <div className="text-xs text-text-tertiary mb-2 px-2 font-semibold tracking-wide uppercase">
                    {language === 'en' ? 'Choose store' : '选择渠道'}
                  </div>
                  {storeLinks.map((store, index) => (
                    <a
                      key={index}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2.5 rounded-xl hover:bg-primary-50/70 transition-all duration-200 group hover:shadow-premium"
                    >
                      <span className="mr-3 flex-shrink-0">
                        {typeof store.icon === 'string' ? (
                          <span className="text-base">{store.icon}</span>
                        ) : (
                          store.icon
                        )}
                      </span>
                      <span className="text-sm text-text-secondary font-medium group-hover:text-primary-600 transition-colors">
                        {store.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-xl hover:bg-primary-50/50 transition-all"
              aria-label={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Globe size={20} className="text-text-primary" />
            </button>
            <button onClick={toggleMenu} aria-label="Toggle menu" className="p-2 rounded-xl hover:bg-primary-50/50 transition-all">
              {isMenuOpen ? (
                <X size={24} className="text-text-primary" />
              ) : (
                <Menu size={24} className="text-text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden glass-card rounded-b-3xl mt-4">
              <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-3">
                {isAboutPage ? (
                  <Link href="/" className="text-text-primary text-lg font-semibold px-4 py-3 rounded-xl hover:bg-primary-50/50" onClick={toggleMenu}>
                    {language === 'en' ? 'Back to Home' : '返回主页'}
                  </Link>
                ) : (
                  <>
                    <div className="px-4 py-3 rounded-xl text-base font-medium text-text-primary hover:bg-primary-50/50 cursor-pointer flex justify-between items-center transition-all"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <span>{language === 'en' ? 'Lynse Note' : 'Lynse Note'}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        <Link
                          href="#product"
                          className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'Product' : '产品'}
                        </Link>
                        <Link
                          href="#features"
                          className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'Features' : '特性'}
                        </Link>
                        <Link
                          href="#specs"
                          className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'Specs' : '规格'}
                        </Link>
                        <Link
                          href="#testimonials"
                          className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'Reviews' : '评价'}
                        </Link>
                        <Link
                          href="#faq"
                          className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                          onClick={toggleMenu}
                        >
                          {language === 'en' ? 'FAQ' : '常见问题'}
                        </Link>
                      </div>
                    )}
                    <Link
                      href="/solutions"
                      className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                      onClick={toggleMenu}
                    >
                      {language === 'en' ? 'Solutions' : '解决方案'}
                    </Link>
                    <Link
                      href="/SupportCenterPage"
                      className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all"
                      onClick={toggleMenu}
                    >
                      {language === 'en' ? 'Support' : '支持'}
                    </Link>
                    <Link href="/about" className="block px-4 py-3 rounded-xl text-base font-medium text-text-secondary hover:text-primary-600 hover:bg-primary-50/50 transition-all" onClick={toggleMenu}>
                      {language === 'en' ? 'About' : '关于'}
                    </Link>
                  </>
                )}

                {/* Mobile 立即购买按钮 */}
                {!isAboutPage && (
                  <div className="pt-4 space-y-2 border-t border-gray-200/50">
                    <div className="text-xs text-text-tertiary px-4 font-medium">
                      {language === 'en' ? 'Choose your store:' : '选择购买渠道:'}
                    </div>
                    {storeLinks.map((store, index) => (
                      <a
                        key={index}
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-primary-50/30 rounded-xl hover:bg-primary-50/70 transition-all"
                        onClick={toggleMenu}
                      >
                        <span className="mr-3">
                          {typeof store.icon === 'string' ? (
                            <span className="text-base">{store.icon}</span>
                          ) : (
                            store.icon
                          )}
                        </span>
                        <span className="text-sm text-text-secondary font-medium">{store.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </React.Fragment>
      </div>
    </header>
  );
};

export default Header;