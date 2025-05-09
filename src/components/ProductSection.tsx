import React, { useState } from 'react';
import { Headphones, Laptop, PenTool, FileText } from 'lucide-react';

interface ProductSectionProps {
  language: 'en' | 'zh';
}

const ProductSection: React.FC<ProductSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'meetings' | 'lectures' | 'interviews' | 'notes'>('meetings');

  const tabs = language === 'en' ? {
    meetings: {
      icon: <Headphones />,
      title: 'Meetings',
      description: 'Never miss a detail in your business meetings. Record, transcribe, and highlight key points automatically.'
    },
    lectures: {
      icon: <Laptop />,
      title: 'Lectures',
      description: 'Transform how you take notes in class. Focus on understanding rather than frantically writing everything down.'
    },
    interviews: {
      icon: <PenTool />,
      title: 'Interviews',
      description: 'Conduct interviews without distractions. Review and analyze responses with perfect transcriptions later.'
    },
    notes: {
      icon: <FileText />,
      title: 'Personal Notes',
      description: 'Capture your thoughts on the go. Ideas, reminders, and inspirations are safely recorded and transcribed.'
    }
  } : {
    meetings: {
      icon: <Headphones />,
      title: '会议',
      description: '在您的商务会议中不会错过任何细节。自动记录、转写并突出显示要点。'
    },
    lectures: {
      icon: <Laptop />,
      title: '讲座',
      description: '改变您在课堂上记笔记的方式。专注于理解，而不是疯狂地记录所有内容。'
    },
    interviews: {
      icon: <PenTool />,
      title: '访谈',
      description: '不受干扰地进行访谈。稍后通过完美的转录来审查和分析回复。'
    },
    notes: {
      icon: <FileText />,
      title: '个人笔记',
      description: '随时捕捉您的想法。想法、提醒和灵感都被安全地记录和转写。'
    }
  };

  return (
    <section id="product" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'One Device, Endless Possibilities' : '一台设备，无限可能'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tabs[activeTab].title}</h3>
                    <p className="text-gray-600">{tabs[activeTab].description}</p>
                  </div>
                </div>

                {/* Use case visualization */}
                <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        L
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Lynse Recorder</p>
                        <p className="text-xs text-gray-500">
                          {language === 'en' ? 'Just now' : '刚刚'}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {language === 'en' ? 'AI Generated' : 'AI 生成'}
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-200 pl-4 ml-5 mt-2">
                    <p className="text-gray-700 mb-2">
                      {language === 'en'
                        ? "Today's meeting covered the Q3 marketing strategy. Key points:"
                        : "今天的会议涵盖了第三季度营销策略。关键点："}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                      <li>
                        {language === 'en'
                          ? "Increase social media budget by 15%"
                          : "社交媒体预算增加15%"}
                      </li>
                      <li>
                        {language === 'en'
                          ? "Launch new campaign on September 15th"
                          : "9月15日推出新活动"}
                      </li>
                      <li>
                        {language === 'en'
                          ? "Focus on Gen Z demographic for Q4"
                          : "第四季度专注于Z世代人群"}
                      </li>
                    </ul>
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <div className="flex items-center text-blue-600">
                        <span>
                          {language === 'en' ? "Full transcript >" : "完整转写 >"}
                        </span>
                      </div>
                      <div className="text-gray-500">12:42 PM</div>
                    </div>
                  </div>
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
                        <div className="font-bold text-blue-600 mt-6">lynse</div>
                        <div className="text-xs text-gray-500">记易</div>
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

export default ProductSection;