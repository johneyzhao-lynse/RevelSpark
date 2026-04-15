import React, { FC, useState } from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Building } from 'lucide-react';

// 小红书图标
const XiaohongshuIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

interface FooterProps {
  language: 'en' | 'zh';
  navigate?: (path: string) => void;
}

const Footer: FC<FooterProps> = ({ language, navigate }) => {
  const [email, setEmail] = useState('');

  const handleSubmitEmail = () => {
    if (email) {
      console.warn('Newsletter subscription:', email);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#08090A] text-white py-12 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="#" className="inline-block">
              <img src="/logo/lynse-logo.png" alt="Lynse Logo" className="h-5 filter brightness-0 invert opacity-90" />
            </Link>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-[#525252] hover:text-white transition-colors duration-300"><Facebook size={15} /></a>
              <a href="#" className="text-[#525252] hover:text-white transition-colors duration-300"><Twitter size={15} /></a>
              <a href="#" className="text-[#525252] hover:text-white transition-colors duration-300"><Instagram size={15} /></a>
              <a href="#" className="text-[#525252] hover:text-white transition-colors duration-300"><Linkedin size={15} /></a>
              <a href="https://xhslink.com/m/36NpwsojXHx" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-white transition-colors duration-300" aria-label="小红书">
                <XiaohongshuIcon />
              </a>
            </div>
          </div>

          {/* Quick Purchase */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {language === 'en' ? 'Purchase' : '购买'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://lynse.tmall.com/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'Tmall Store' : '天猫旗舰店'}
                </a>
              </li>
              <li>
                <a href="https://mall.jd.com/index-75995904.html?cid=0" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'JD Store' : '京东旗舰店'}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {language === 'en' ? 'Support' : '支持'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/SupportCenterPage" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300" navigate={navigate}>
                  {language === 'en' ? 'Support Center' : '支持中心'}
                </Link>
              </li>
              <li>
                <a href="#" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'Contact Service' : '使用说明'}
                </a>
              </li>
              <li>
                <a href="/download" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'Related News' : '软件下载'}
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {language === 'en' ? 'About' : '关于'}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300" navigate={navigate}>
                  {language === 'en' ? 'About Us' : '关于我们'}
                </Link>
              </li>
              <li>
                <Link href="/policy/privacy-cn.html" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                </Link>
              </li>
              <li>
                <Link href="/policy/user-agreement-cn.html" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {language === 'en' ? 'User Agreement' : '用户协议'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {language === 'en' ? 'Contact' : '联系'}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Mail className="text-[#525252] mt-0.5" size={13} />
                <p className="text-[13px] text-[#A3A3A3]">contact@lynse.ai</p>
              </div>
              <div className="flex items-start gap-2">
                <Building className="text-[#525252] mt-0.5" size={13} />
                <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                  {language === 'en'
                    ? 'Shanghai, China'
                    : '上海市徐汇区虹漕路25-1号2楼'}
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-5">
              <p className="text-[13px] text-[#525252] mb-2">
                {language === 'en' ? 'Stay updated' : '订阅动态'}
              </p>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder={language === 'en' ? 'Email address' : '输入邮箱'}
                  className="bg-white/[0.05] text-white placeholder-[#525252] rounded-lg px-3 py-2 w-full focus:ring-1 focus:ring-white/20 focus:outline-none text-[13px] border border-white/[0.06] transition-all pr-9"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSubmitEmail(); }}
                />
                <button
                  className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center hover:bg-white/[0.05] rounded-r-lg transition-colors"
                  disabled={!email}
                  onClick={handleSubmitEmail}
                >
                  <Mail size={14} className={email ? 'text-white/60' : 'text-[#525252]'} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gradient-divider-dark mt-10 md:mt-16" />
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[11px] text-[#525252]">
            &copy; {new Date().getFullYear()} 上海天启灵光科技有限公司 | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-white/60 transition-colors">沪ICP备2025155002号</a>
          </p>
          <div className="flex gap-6">
            <a href="/policy/privacy-cn.html" className="text-[11px] text-[#525252] hover:text-white/60 transition-colors">
              {language === 'en' ? 'Privacy' : '隐私政策'}
            </a>
            <a href="/policy/user-agreement-cn.html" className="text-[11px] text-[#525252] hover:text-white/60 transition-colors">
              {language === 'en' ? 'Terms' : '用户协议'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
