import React from 'react';

interface SolutionsPageProps {
  language: 'en' | 'zh';
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ language }) => {
  // Content for different languages
  const content = {
    en: {
      title: "Solutions",
      subtitle: "Tailored Solutions for Your Needs",
      description: "Discover how Lynse AI can transform your workflow with our specialized solutions for various use cases.",
      solutions: [
        {
          title: "Meeting Assistant",
          description: "Automatically record, transcribe, and summarize your meetings, extracting key action items and decisions.",
          icon: "M12 4v16m8-8H4"
        },
        {
          title: "Learning Companion",
          description: "Transform lectures and educational content into structured notes with key points and summaries.",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        },
        {
          title: "Interview Helper",
          description: "Capture and organize interview content with automatic question/answer separation and key insights extraction.",
          icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        },
        {
          title: "Research Assistant",
          description: "Organize research materials, extract key findings, and generate structured summaries from various sources.",
          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        }
      ]
    },
    zh: {
      title: "解决方案",
      subtitle: "为您量身定制的解决方案",
      description: "了解 Lynse AI 如何通过我们针对各种使用场景的专业解决方案来改变您的工作流程。",
      solutions: [
        {
          title: "会议助手",
          description: "自动录制、转录和总结您的会议，提取关键行动项和决策。",
          icon: "M12 4v16m8-8H4"
        },
        {
          title: "学习伙伴",
          description: "将讲座和教育内容转换为结构化笔记，包含要点和摘要。",
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        },
        {
          title: "访谈助手",
          description: "捕捉和整理访谈内容，自动分离问答并提取关键见解。",
          icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        },
        {
          title: "研究助手",
          description: "整理研究资料，提取关键发现，并从各种来源生成结构化摘要。",
          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-orange-500 font-semibold mb-6">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;