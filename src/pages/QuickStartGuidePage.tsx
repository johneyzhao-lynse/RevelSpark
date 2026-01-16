import React, { useState } from 'react';
import Header from '../components/Header';

const QuickStartGuidePage = () => {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  
  const handleLanguageChange = (newLanguage: 'en' | 'zh') => {
    setLanguage(newLanguage);
  };
  
  return (
    <div className="bg-lightblue text-gray-700 font-sans antialiased min-h-screen flex flex-col">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-6 text-sm">
          <ol className="flex flex-wrap items-center text-gray-500">
            <li><a href="/" className="hover:text-primary transition-colors">首页</a></li>
            <li className="mx-2"><i className="fa fa-angle-right text-xs"></i></li>
            <li><a href="/support" className="hover:text-primary transition-colors">支持中心</a></li>
            <li className="mx-2"><i className="fa fa-angle-right text-xs"></i></li>
            <li><a href="/support/quick-start" className="hover:text-primary transition-colors">快速入门指南</a></li>
            <li className="mx-2"><i className="fa fa-angle-right text-xs"></i></li>
            <li><a href="/support/beginner-guide" className="hover:text-primary transition-colors">新手指南</a></li>
            <li className="mx-2"><i className="fa fa-angle-right text-xs"></i></li>
            <li aria-current="page" className="text-primary">主要部件</li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边导航 */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-5 sticky top-24">
              <h2 className="text-lg font-bold text-primary mb-4 flex items-center">
                <i className="fa fa-bookmark-o mr-2"></i>快速入门指南
              </h2>
              <nav className="space-y-1">
                <a href="/support/package-contents" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-paleblue transition-colors duration-200">
                  包装内容
                </a>
                <a href="/support/main-components" className="block px-4 py-2.5 rounded-lg bg-paleblue text-primary border-l-4 border-primary font-medium">
                  主要部件
                </a>
                <a href="/support/charging" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-paleblue transition-colors duration-200">
                  为设备充电
                </a>
                {/* 其他导航项 */}
              </nav>
              
              <div className="mt-6 pt-5 border-t border-gray-100">
                <a href="/support/beginner-guide" className="text-sm text-accent hover:text-primary transition-colors flex items-center">
                  查看全部指南 <i className="fa fa-arrow-right ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          </aside>

          {/* 主要内容 */}
          <article className="flex-1 bg-white rounded-xl shadow-sm p-6 lg:p-8">
            <header className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">主要部件</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <span className="flex items-center">
                  <i className="fa fa-calendar-o mr-1.5"></i> 发布于 2025年04月02日
                </span>
                <span className="flex items-center">
                  <i className="fa fa-refresh mr-1.5"></i> 最后更新于 2025年04月02日
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700">
              {/* 文章内容 */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-5">Lynse 灵光记 (Spark Note)</h2>
                
                <div className="bg-lightblue rounded-xl p-4 lg:p-6 mb-6">
                  <img src="/hc/article_attachments/12343807217295" alt="灵光记设备图示" className="w-full h-auto rounded-lg shadow-sm mb-4"/>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">LED指示灯</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li><span className="font-medium">① 指示灯</span> - 显示设备工作状态</li>
                        <li><span className="font-medium">② 录制模式切换</span> - 用于切换不同的录音模式</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
      
    </div>
  );
};

export default QuickStartGuidePage;