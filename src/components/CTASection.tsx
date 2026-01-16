import React, { useState, useRef } from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import BrandName from './ui/BrandName';

interface CTASectionProps {
  language: 'en' | 'zh';
}

const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  return (
    <section id="buy" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Decorative elements - 极简 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-12 left-12 w-64 h-64 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block py-2 px-4 rounded-full bg-white text-black text-sm font-semibold mb-6">
              {language === 'en' ? 'Limited Time Offer' : '限时优惠'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {language === 'en'
                ? 'Transform Your Recording Experience Today'
        : <span className="text-[#D9ba84]">今天就改变您的录音体验</span>}
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              {language === 'en'
                ? 'Be among the first to experience the future of audio recording and transcription with early bird pricing and exclusive benefits.'
                : '成为最先体验音频录制和转写未来的人之一，享受早鸟价格和独家优惠。'}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-white mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Free premium Spark Note app subscription (1 year)' : '免费灵光记高级版订阅（1年）'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Extended 3-year warranty' : '延长3年保修'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Priority access to future firmware updates' : '优先获取未来固件更新'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={20} />
                <span>
                  {language === 'en' ? 'Exclusive protective case included' : '含专属保护套'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <OrderDropdownButtonCTA language={language} />
              <div className="flex items-center justify-center sm:justify-start">
                <ShieldCheck className="mr-2 text-white" size={20} />
                <span className="text-sm">
                  {language === 'en' ? '30-day money-back guarantee' : '30天退款保证'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 lg:-mt-[20px]">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">
                  {language === 'en' ? <><BrandName size="lg">Lynse</BrandName> Pro</> : <span className="text-[#D9BA84]">"灵光记"</span>}
                </h3>
                <span className="text-sm font-semibold px-4 py-2 bg-white text-black rounded-full">
                  {language === 'en' ? 'Best Value' : '最佳价值'}
                </span>
              </div>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-lg line-through ml-2 opacity-70">$199</span>
                <span className="ml-2 text-gray-400 font-medium">
                  {language === 'en' ? 'Save $50' : '节省$50'}
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                {language === 'en'
                  ? 'Complete recording solution with premium features and extended storage.'
                  : '完整的录音解决方案，具有高级功能和扩展存储。'}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Check className="text-white mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? <><BrandName>Lynse</BrandName> Spark Note (32GB)</> : '灵光闪记卡（32GB）'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Premium Leather Protective Case' : '高级皮革保护套'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? '1-Year Premium Cloud Storage (100GB)' : '1年高级云存储（100GB）'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Unlimited Transcription Minutes' : '无限转录分钟数'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Advanced Analytics & Summaries' : '高级分析和摘要'}
                </span>
              </div>
              <div className="flex items-center">
                <Check className="text-white mr-2" size={18} />
                <span className="text-sm">
                  {language === 'en' ? 'Priority Customer Support' : '优先客户支持'}
                </span>
              </div>
            </div>

            <a
              href="#"
              className="block w-full h-[52px] bg-white text-black rounded-full font-bold text-base text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center"
            >
              {language === 'en' ? 'Pre-order Pro Package' : '预购专业套餐'}
            </a>

            <p className="text-center text-sm mt-4 text-gray-400">
              {language === 'en'
                ? 'Ships worldwide • Estimated delivery: October 2025'
                : '全球发货 • 预计送达时间：2025年10月'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 立即购买按钮及商城弹窗（CTA专用，样式与首页一致但适配CTA背景）
const OrderDropdownButtonCTA: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
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
  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="h-[52px] px-8 bg-white hover:bg-gray-100 text-black rounded-full font-bold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all min-w-[140px] flex items-center justify-center"
      >
        <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 6.5V5.5C6.5 3.84315 7.84315 2.5 9.5 2.5C11.1569 2.5 12.5 3.84315 12.5 5.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3.5" y="6.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 10.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11.5 10.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        {language === 'en' ? 'Buy Now' : '立即购买'}
      </button>
      <div
        className={`absolute top-full left-0 mt-2 w-44 bg-white/95 rounded-xl shadow-2xl border border-gray-200 backdrop-blur-lg transition-all duration-300 z-50 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-2">
          <div className="text-xs text-gray-600 mb-2 px-2">
            {language === 'en' ? 'Choose your store:' : '选择购买渠道:'}
          </div>
          {storeLinks.map((store, index) => (
            <a
              key={index}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-lg hover:bg-gray-100/70 transition-all duration-200 group"
            >
              <span className="mr-2">
                {typeof store.icon === 'string' ? (
                  <span className="text-base">{store.icon}</span>
                ) : (
                  store.icon
                )}
              </span>
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

export default CTASection;