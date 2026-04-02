import React, { FC, useState } from 'react';
import { Link } from './ui/Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Building } from 'lucide-react';
import BrandName from './ui/BrandName';

interface FooterProps {
  language: 'en' | 'zh';
}

const Footer: FC<FooterProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand and Social */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex justify-center sm:justify-start">
              <Link href="#" className="inline-block">
                <img src="/logo/lynse-logo.png" alt="Lynse Logo" className="h-6 filter brightness-0 invert" />
              </Link>
            </div>
            <div className="flex space-x-3 mt-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={16} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={16} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={16} /></a>
            </div>

          </div>

          {/* Quick Purchase */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              {language === 'en' ? 'Quick Purchase' : '产品购买'}
            </h3>
            <ul className="space-y-2 list-none pl-0 text-sm">
              <li>
                <Link href="/sparkcard" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Spark Card' : '灵光卡'}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Taobao Store' : '淘宝旗舰店'}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'JD Store' : '京东旗舰店'}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              {language === 'en' ? 'Support' : '服务与支持'}
            </h3>
            <ul className="space-y-2 list-none pl-0 text-sm">
              <li>
                <Link href="/SupportCenterPage" className="text-gray-400 hover:text-white transition-colors">
                {language === 'en' ? 'Support Center' : '支持中心'}
              </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Contact Service' : '使用说明'}
                </a>
              </li>
              <li>
                <a href="/download" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Related News' : '软件下载'}
                </a>
              </li>
            </ul>
          </div>

          {/* About Lynse */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              {language === 'en' ? 'About Lynse' : '关于 Lynse'}
            </h3>
            <ul className="space-y-2 list-none pl-0 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'About Us' : '关于我们'}
                </Link>
              </li>
              <li>
                <a href="/policy/privacy-cn.html" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Privacy Policy' : '隐私政策'}
                </a>
              </li>
              <li>
                <a href="/policy/user-agreement-cn.html" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'User Agreement' : '用户协议'}
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold mb-3 text-white">
              {language === 'en' ? 'Contact Us' : '联系我们'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <Mail className="text-gray-400 mr-2 mt-1.5" size={14} />
                <p className="text-gray-300">contact@lynse.ai</p>
              </div>
              <div className="flex items-start">
                <Building className="text-gray-400 mr-2 mt-0.6" size={20} />
                <p className="text-gray-300">
                  {language === 'en'
                    ? '2nd Floor, No. 25-1 Hongcao Road, Xuhui District, Shanghai, China'
                    : '上海市徐汇区虹漕路25-1号2楼，邮编：200233'
                  }
                </p>
              </div>
            </div>
            {language === 'en' && (
              <div className="mt-3">
                <p className="text-gray-400 mb-1 text-sm">Subscribe to our newsletter</p>
                <p className="text-gray-500 mb-2 text-xs">Get the latest updates first</p>
                <div className="relative flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-700 text-white placeholder-gray-500 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-logo-blue/50 focus:outline-none text-sm pr-10"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <button
                    className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center bg-transparent hover:bg-gray-600 rounded-r-md transition-colors"
                    disabled={!email}
                  >
                    <Mail
                      size={16}
                      className={email ? 'text-logo-blue' : 'text-gray-500'}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-0">
              &copy; {new Date().getFullYear()} 上海天启灵光科技有限公司 版权所有 | 备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">沪ICP备2025155002号</a>
            </p>
            <div className="flex md:flex-row space-x-4 mt-3 md:mt-0">
              <a href="/policy/privacy-cn.html" className="text-xs text-gray-500 hover:text-white">
                {language === 'en' ? 'Privacy Policy' : '隐私政策'}
              </a>
              <a href="/policy/user-agreement-cn.html" className="text-xs text-gray-500 hover:text-white">
                {language === 'en' ? 'Terms of Service' : '用户协议'}
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
