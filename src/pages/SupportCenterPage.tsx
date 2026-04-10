import React, { useState } from 'react';
import Header from '../components/Header';

const SupportCenterPage = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
    setLanguage(newLanguage);
  };

  return (
    <div className="bg-gray-50 text-gray-700 font-sans antialiased min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={handleLanguageChange} />

      <main className="pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">"灵光记"</span> 支持中心
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们在这里为您提供全方位的技术支持和服务，让您更好地使用 灵光记和"灵光记"APP
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
              <div className="text-black mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">常见问题</h3>
              <p className="text-gray-600 mb-4">快速找到您需要的答案</p>
              <a href="#faq" className="text-black hover:text-black font-medium">查看FAQ →</a>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
              <div className="text-black mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">联系我们</h3>
              <p className="text-gray-600 mb-4">获取专业的技术支持</p>
              <a href="#contact" className="text-black hover:text-black font-medium">联系客服 →</a>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all">
              <div className="text-black mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">使用指南</h3>
              <p className="text-gray-600 mb-4">详细的产品使用教程</p>
              <a href="#guides" className="text-black hover:text-black font-medium">查看指南 →</a>
            </div>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">常见问题</h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">如何连接 灵光记？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    1. 确保您的手机蓝牙已开启<br />
                    2. 打开"灵光记"APP<br />
                    3. 点击"添加设备"<br />
                    4. 按照屏幕提示完成配对
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">录音文件保存在哪里？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    录音文件默认保存在"灵光记"APP的本地存储中。您也可以选择开启云同步功能，将文件备份到云端。
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">支持哪些语言转写？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    "灵光记"支持120多种语言的语音转写，包括中文（简体和繁体）、英语、日语、韩语、法语、德语、西班牙语等。
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">如何导出转写文本？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    在"灵光记"APP中，选择要导出的录音文件，点击"导出"按钮，可以选择导出为TXT、DOCX或PDF格式。
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">电池续航时间有多长？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    灵光记在连续录音模式下可续航12小时，待机模式下可续航7天。充电时间约1.5小时。
                  </p>
                </div>

                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">如何更新固件？</h3>
                  <p className="text-gray-600 leading-relaxed">
                    在"灵光记"APP中，进入"设置" → "设备管理" → "固件更新"，按照提示完成更新。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">联系我们</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">客服联系方式</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-600">邮箱：<a href="mailto:support@lynse.ai" className="text-black hover:underline">support@lynse.ai</a></span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-gray-600">电话：<a href="tel:+8615618981688" className="text-black hover:underline">+86 15618981688</a></span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-600">服务时间：周一至周五 9:00-18:00</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">在线客服</h3>
                  <p className="text-gray-600 mb-4">您也可以通过以下方式获取即时帮助：</p>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all">
                      在线客服聊天
                    </button>
                    <button className="w-full border-2 border-black text-black py-3 px-6 rounded-xl font-medium hover:bg-black hover:text-white transition-all">
                      提交工单
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guides Section */}
          <section id="guides" className="mb-16">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">使用指南</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/50 to-gray-50/60 rounded-xl p-6 border border-white/40">
                  <div className="text-black mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">快速入门</h3>
                  <p className="text-gray-600 mb-4">5分钟了解如何开始使用灵光记</p>
                  <a href="/support/quick-start" className="text-black hover:text-black font-medium">查看指南 →</a>
                </div>

                <div className="bg-gradient-to-br from-white/50 to-gray-50/60 rounded-xl p-6 border border-white/40">
                  <div className="text-black mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">高级功能</h3>
                  <p className="text-gray-600 mb-4">探索灵光记的全部高级功能</p>
                  <a href="/support/advanced-features" className="text-black hover:text-black font-medium">查看指南 →</a>
                </div>

                {/* 可以根据需要添加更多指南卡片 */}
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default SupportCenterPage;