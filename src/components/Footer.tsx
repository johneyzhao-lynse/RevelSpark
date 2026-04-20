import React, { FC, useState } from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Building } from 'lucide-react';
import { Language, t } from '../data/constants';

// 小红书图标
const XiaohongshuIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

interface FooterProps {
  language: Language;
  navigate?: (path: string) => void;
}

const Footer: FC<FooterProps> = ({ language, navigate }) => {
  const [email, setEmail] = useState('');

  const policyLang = language === 'en' ? 'en' : 'cn';

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
              {t({ en: 'Purchase', zh: '购买', 'zh-TW': '購買', ja: '購入' }, language)}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://lynse.tmall.com/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {t({ en: 'Tmall Store', zh: '天猫旗舰店', 'zh-TW': '天貓旗艦店', ja: 'Tmallストア' }, language)}
                </a>
              </li>
              <li>
                <a href="https://mall.jd.com/index-75995904.html?cid=0" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {t({ en: 'JD Store', zh: '京东旗舰店', 'zh-TW': '京東旗艦店', ja: 'JDストア' }, language)}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {t({ en: 'Support', zh: '支持', 'zh-TW': '支援', ja: 'サポート' }, language)}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/SupportCenterPage" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300" navigate={navigate}>
                  {t({ en: 'Support Center', zh: '支持中心', 'zh-TW': '支援中心', ja: 'サポートセンター' }, language)}
                </Link>
              </li>
              <li>
                <a href="#" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {t({ en: 'Contact Service', zh: '使用说明', 'zh-TW': '使用說明', ja: 'お問い合わせ' }, language)}
                </a>
              </li>
              <li>
                <a href="/download" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {t({ en: 'Related News', zh: '软件下载', 'zh-TW': '軟體下載', ja: 'ソフトウェアダウンロード' }, language)}
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {t({ en: 'About', zh: '关于', 'zh-TW': '關於', ja: '会社情報' }, language)}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300" navigate={navigate}>
                  {t({ en: 'About Us', zh: '关于我们', 'zh-TW': '關於我們', ja: '会社概要' }, language)}
                </Link>
              </li>
              <li>
                <Link href={`/policy/privacy-${policyLang}.html`} className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {t({ en: 'Privacy Policy', zh: '隐私政策', 'zh-TW': '隱私政策', ja: 'プライバシーポリシー' }, language)}
                </Link>
              </li>
              <li>
                <Link href={`/policy/user-agreement-${policyLang}.html`} className="text-[13px] text-[#737373] hover:text-white transition-colors duration-300">
                  {t({ en: 'User Agreement', zh: '用户协议', 'zh-TW': '使用者協議', ja: '利用規約' }, language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#525252] mb-4">
              {t({ en: 'Contact', zh: '联系', 'zh-TW': '聯絡', ja: 'お問い合わせ' }, language)}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Mail className="text-[#525252] mt-0.5" size={13} />
                <p className="text-[13px] text-[#A3A3A3]">contact@lynse.ai</p>
              </div>
              <div className="flex items-start gap-2">
                <Building className="text-[#525252] mt-0.5" size={13} />
                <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                  {t({ en: 'Room 1901, 19th Floor, Block A, No. 391 Guiping Road, Xuhui District, Shanghai', zh: '上海市徐汇区桂平路391号A座19层1901室', 'zh-TW': '上海市徐匯區桂平路391號A座19層1901室', ja: 'Room 1901, 19th Floor, Block A, No. 391 Guiping Road, Xuhui District, Shanghai' }, language)}
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-5">
              <p className="text-[13px] text-[#525252] mb-2">
                {t({ en: 'Stay updated', zh: '订阅动态', 'zh-TW': '訂閱動態', ja: '最新情報を受け取る' }, language)}
              </p>
              <div className="relative flex">
                <input
                  type="email"
                  placeholder={t({ en: 'Email address', zh: '输入邮箱', 'zh-TW': '輸入郵箱', ja: 'メールアドレス' }, language)}
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
            {language === 'en' || language === 'ja' ? (
              <>
                &copy; {new Date().getFullYear()} Lynse AI. All rights reserved.
              </>
            ) : (
              <>
                &copy; {new Date().getFullYear()} 上海天启灵光科技有限公司 | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-white/60 transition-colors">沪ICP备2025155002号</a> | <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402336296" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-white/60 transition-colors">沪公网安备31010402336296号</a>
              </>
            )}
          </p>
          <div className="flex gap-6">
            <a href={`/policy/privacy-${policyLang}.html`} className="text-[11px] text-[#525252] hover:text-white/60 transition-colors">
              {t({ en: 'Privacy', zh: '隐私政策', 'zh-TW': '隱私政策', ja: 'プライバシー' }, language)}
            </a>
            <a href={`/policy/user-agreement-${policyLang}.html`} className="text-[11px] text-[#525252] hover:text-white/60 transition-colors">
              {t({ en: 'Terms', zh: '用户协议', 'zh-TW': '使用者協議', ja: '利用規約' }, language)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
