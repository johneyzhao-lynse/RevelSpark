import React, { useState } from 'react';
import { Headphones, Laptop, PenTool, FileText, PhoneCall } from 'lucide-react';

interface ProductSectionProps {
  language: 'en' | 'zh';
}

const ProductSection: React.FC<ProductSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'meetings' | 'lectures' | 'interviews' | 'notes'>('meetings');

  const tabs = language === 'en' ? {
    meetings: {
      icon: <Headphones />,
      title: 'Meetings',
      description: 'Never miss a detail in your business meetings. Record, transcribe, and highlight key points automatically.',
      screenshot: "./images/product/meetings.jpg"
    },
    lectures: {
      icon: <Laptop />,
      title: 'Calls',
      description: 'Press close to phone, use built-in VPU microphone to capture and store call content in real-time.',
      screenshot: "./images/product/calls.jpg"
    },
    interviews: {
      icon: <PenTool />,
      title: 'Interviews',
      description: 'Conduct interviews without distractions. Review and analyze responses with perfect transcriptions later.',
      screenshot: "./images/product/sales.jpg"
    },
    notes: {
      icon: <FileText />,
      title: 'Personal Notes',
      description: 'Capture your thoughts on the go. Ideas, reminders, and inspirations are safely recorded and transcribed.',
      screenshot: "./images/product/todolist.jpg"
    }
  } : {
    meetings: {
      icon: <Headphones />,
      title: '会议',
      description: '在您的商务会议中不会错过任何细节。自动记录、转写并突出显示要点。',
      screenshot: "./images/product/meetings.jpg"
    },
    lectures: {
      icon: <PhoneCall />,
      title: '通话',
      description: '紧贴手机，通过内置的VPU麦克风，实时获取对方通话内容存储到卡片中。',
      screenshot: "./images/product/calls.jpg"
    },
    interviews: {
      icon: <PenTool />,
      title: '销售访谈',
      description: '销售不受干扰地进行访谈。稍后通过完美的转录来审查和分析人群画像和购买意愿。',
      screenshot: "./images/product/sales.jpg"
    },
    notes: {
      icon: <FileText />,
      title: '个人笔记',
      description: '随时捕捉您的想法。想法、提醒和灵感都被安全地记录和转写。',
      screenshot: "./images/product/todolist.jpg"
    }
  };

  return (
    <section id="product" className="py-24 overflow-hidden bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up opacity-0-initial">
            {language === 'en' ? 'One Device, Endless Possibilities' : '一台设备，无限可能'}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto animate-fade-in-up opacity-0-initial delay-200">
            {language === 'en'
              ? 'Designed for professionals, students, journalists, and anyone who values efficient and accurate speech capture.'
              : '专为专业人士、学生、记者和任何重视高效、准确语音捕捉的人设计。'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left - Tab Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="glass-card p-8 rounded-3xl animate-fade-in-up opacity-0-initial delay-300">
              <div className="tabs flex border-b border-gray-200/50 mb-8 overflow-x-auto hide-scrollbar">
                {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => (
                  <button
                    key={tab}
                    className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all rounded-t-xl ${
                      activeTab === tab
                        ? 'text-primary-600 bg-primary-50/50 border-b-2 border-primary-500'
                        : 'text-text-tertiary hover:text-primary-600 hover:bg-primary-50/30'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <div className="flex items-center gap-2">
                      {React.cloneElement(tabs[tab].icon as React.ReactElement, { size: 18, className: activeTab === tab ? 'text-primary-600' : 'text-text-tertiary' })}
                      <span>{tabs[tab].title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Content for active tab */}
              <div className="tab-content">
                <div className="flex items-start gap-4 mb-6">
                  <div className="rounded-2xl p-3 bg-gradient-to-br from-primary-50 to-secondary-50">
                    {React.cloneElement(tabs[activeTab].icon as React.ReactElement, { size: 24, className: 'text-primary-600' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2 leading-snug">{tabs[activeTab].title}</h3>
                    <p className="text-text-secondary leading-normal">{tabs[activeTab].description}</p>
                  </div>
                </div>

                {/* App Screenshot */}
                <div className="mt-8 rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={tabs[activeTab].screenshot}
                    alt={`${tabs[activeTab].title} screenshot`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Visual */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative animate-scale-in opacity-0-initial">
              {/* Abstract shape background */}
              <div className="absolute -right-20 top-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20 z-0 animate-float"></div>
              <div className="absolute -left-20 bottom-20 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-20 z-0 animate-float-delayed"></div>

              {/* Product image */}
              <div className="relative z-10 flex justify-center items-center">
                <div className="relative w-3/4 aspect-square">
                  <div className="absolute inset-0 bg-white/80 rounded-3xl shadow-glass transform rotate-6 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-3xl transform -rotate-3 overflow-hidden shadow-glow">
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_transparent_25%)] bg-[length:15px_15px]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center shadow-inner">
                        <div className="w-12 h-1 bg-primary-100 rounded-full mb-8"></div>
                        <div className="w-24 h-24 bg-primary-600 rounded-full mb-6 flex items-center justify-center shadow-lg">
                          <div className="w-8 h-8 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-10 h-10 bg-primary-500 rounded-full absolute bottom-10 right-10 flex items-center justify-center shadow-md">
                          <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                        <div className="w-3/4 h-1 bg-primary-50 rounded-full mt-2"></div>
                        <div className="w-1/2 h-1 bg-primary-50 rounded-full mt-3"></div>
                        <div className="font-bold text-primary-600 mt-6">DtingNote</div>
                        <div className="text-xs text-text-tertiary">灵光闪记</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default ProductSection