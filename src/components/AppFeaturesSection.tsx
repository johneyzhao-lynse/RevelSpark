import React from 'react';
import { FileText, ListChecks, Sparkles, Download } from 'lucide-react';

interface AppFeaturesSectionProps {
  language: 'en' | 'zh';
}

const AppFeaturesSection: React.FC<AppFeaturesSectionProps> = ({ language }) => {
  const features = language === 'en' ? [
    {
      icon: <FileText />,
      title: "Speech to Text",
      description: "Advanced AI-powered transcription with support for 70+ languages and real-time processing.",
      screenshot: "./images/features/stt-demo.png"
    },
    {
      icon: <Sparkles />,
      title: "Smart Synopsis",
      description: "Get intelligent overviews of long recordings, with important topics and discussions highlighted.",
      screenshot: "./images/features/summary-demo.png"
    },
    {
      icon: <ListChecks />,
      title: "Action Items Extraction",
      description: "Automatically identify and list action items, deadlines, and assignments from your recordings.",
      screenshot: "./images/features/stt-demo.png"
    }
  ] : [
    {
      icon: <FileText />,
      title: "语音转文字",
      description: "支持70多种语言的高级AI驱动转录，实时处理。",
      screenshot: "./images/features/stt.png"
    },
    {
      icon: <Sparkles />,
      title: "智能概要",
      description: "获取长录音的智能概览，突出显示重要主题和讨论。",
      screenshot: "./images/features/summary.png"
    },
    {
      icon: <ListChecks />,
      title: "行动项目提取",
      description: "自动识别并列出录音中的行动项目、截止日期和任务分配。",
      screenshot: "./images/features/mind.png"
    }
  ];

  return (
    <section id="app-features" className="py-24 bg-gradient-to-b from-white via-lightblue to-paleblue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Powerful AI Features' : '"谛听记"强大的AI功能'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Transform your recordings into actionable insights with our advanced AI features in "DitNote".'
              : '使用"谛听记"的高级AI功能将录音转化为可操作的见解。'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-2xl rounded-xl p-5 shadow-lg border border-white/30 hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-white/50 rounded-full">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-primary' })}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm min-h-[60px]">{feature.description}</p>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={feature.screenshot} 
                  alt={feature.title}
                  className="w-full h-auto object-cover rounded shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;