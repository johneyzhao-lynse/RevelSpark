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
      screenshot: "/images/product/meetings.png"
    },
    lectures: {
      icon: <Laptop />,
      title: 'Calls',
      description: 'Press close to phone, use built-in VPU microphone to capture and store call content in real-time.',
      screenshot: "/images/product/calls.png"
    },
    interviews: {
      icon: <PenTool />,
      title: 'Interviews',
      description: 'Conduct interviews without distractions. Review and analyze responses with perfect transcriptions later.',
      screenshot: "/images/product/sales.png"
    },
    notes: {
      icon: <FileText />,
      title: 'Personal Notes',
      description: 'Capture your thoughts on the go. Ideas, reminders, and inspirations are safely recorded and transcribed.',
      screenshot: 'https://images.pexels.com/photos/13935618/pexels-photo-13935618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  } : {
    meetings: {
      icon: <Headphones />,
      title: '会议',
      description: '在您的商务会议中不会错过任何细节。自动记录、转写并突出显示要点。',
      screenshot: "/images/product/meetings.png"
    },
    lectures: {
      icon: <PhoneCall />,
      title: '通话',
      description: '紧贴手机，通过内置的VPU麦克风，实时获取对方通话内容存储到卡片中。',
      screenshot: "/images/product/calls.png"
    },
    interviews: {
      icon: <PenTool />,
      title: '销售访谈',
      description: '销售不受干扰地进行访谈。稍后通过完美的转录来审查和分析人群画像和购买意愿。',
      screenshot: "/images/product/sales.png"
    },
    notes: {
      icon: <FileText />,
      title: '个人笔记',
      description: '随时捕捉您的想法。想法、提醒和灵感都被安全地记录和转写。',
      screenshot: 'https://images.pexels.com/photos/13935618/pexels-photo-13935618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  };

  return (
    <section id="product" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
            {language === 'en' ? 'One Device, Endless Possibilities' : '一台设备，无限可能'}
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Designed for professionals, students, journalists, and anyone who values efficient and accurate speech capture.'
              : '专为专业人士、学生、记者和任何重视高效、准确语音捕捉的人设计。'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-gradient-to-tr from-blue-50 to-cyan-50 p-8 rounded-3xl">
              <div className="tabs flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
                {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <div className="flex items-center gap-2">
                      {tabs[tab].icon}
                      <span>{tabs[tab].title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Content for active tab */}
              <div className="tab-content">
                <div className="flex items-start gap-4 mb-6">
                  <div className="rounded-full p-3 bg-blue-100">
                    {tabs[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2 leading-snug">{tabs[activeTab].title}</h3>
                    <p className="text-gray-700 leading-normal">{tabs[activeTab].description}</p>
                  </div>
                </div>

                {/* App Screenshot */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={tabs[activeTab].screenshot}
                    alt={`${tabs[activeTab].title} screenshot`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Abstract shape background */}
              <div className="absolute -right-40 top-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
              <div className="absolute -left-20 bottom-20 w-64 h-64 bg-cyan-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
              
              {/* Product image */}
              <div className="relative z-10 flex justify-center items-center">
                <div className="relative w-3/4 aspect-square">
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-3xl transform -rotate-3 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_transparent_25%)] bg-[length:15px_15px]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center">
                        <div className="w-12 h-1 bg-blue-200 rounded-full mb-8"></div>
                        <div className="w-24 h-24 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full absolute bottom-10 right-10 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                        <div className="w-3/4 h-1 bg-blue-100 rounded-full mt-2"></div>
                        <div className="w-1/2 h-1 bg-blue-100 rounded-full mt-3"></div>
                        <div className="font-bold text-blue-600 mt-6">DtingNote</div>
                        <div className="text-xs text-gray-500">谛听记</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductSection