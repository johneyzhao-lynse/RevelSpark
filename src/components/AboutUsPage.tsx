import React, { useState, lazy, Suspense } from 'react';
import { Link } from './ui/Link';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import { Language, t } from '../data/constants';

// 懒加载地图组件
const CompanyMap = lazy(() => import('./ui/CompanyMap'));

interface AboutUsPageProps {
  language: Language;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      setEmailError(t({ en: 'Please enter a valid email address', zh: '请输入正确的邮箱地址', 'zh-TW': '請輸入正確的郵箱地址', ja: '正しいメールアドレスを入力してください' }, language));
      setSubscribeSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(t({ en: 'Please enter a valid email address', zh: '请输入正确的邮箱地址', 'zh-TW': '請輸入正確的郵箱地址', ja: '正しいメールアドレスを入力してください' }, language));
      setSubscribeSuccess(false);
      return;
    }

    // In a real application, you would send this to your backend
    // For now, we'll just log it and show an alert
    console.log('Subscribing email:', email);
    // alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
    setEmailError('');
    setSubscribeSuccess(true);
  };

  const title = t({
    en: "About Us",
    zh: "关于我们",
    'zh-TW': "關於我們",
    ja: "会社概要",
  }, language);

  const subtitle = t({
    en: "Hello, we are Lynse AI",
    zh: "你好，我们是 Lynse AI",
    'zh-TW': "你好，我們是 Lynse AI",
    ja: "こんにちは、Lynse AI です",
  }, language);

  const description = t({
    en: "Lynse AI is a cutting-edge technology company focused on creating truly practical human-computer interaction solutions. We are committed to developing high-quality products that are 'emotionally intelligent, personalized, and multi-modal interactive' that truly solve user problems.",
    zh: "Lynse AI 是一家专注于打造真正实用的人机交互体验的科技新消费品公司。我们始终致力于创造\"具有情感和个性化、多模态混合交互、真正能解决用户问题\"的高品质产品，把我们心中对未来的期许通过科技手段带到现实，让每个人都能感受未来智能的美好。",
    'zh-TW': "Lynse AI 是一家專注於打造真正實用的人機互動體驗的科技新消費品公司。我們始終致力於創造「具有情感和個人化、多模態混合互動、真正能解決使用者問題」的高品質產品，把我們心中對未來的期許通過科技手段帶到現實，讓每個人都能感受未來智能的美好。",
    ja: "Lynse AI は、実用的なヒューマンコンピュータインタラクション体験の構築に特化した最先端のテクノロジーカンパニーです。「感情的知性、パーソナライゼーション、マルチモーダルインタラクション」を備え、ユーザーの問題を本当に解決する高品質な製品の開発に取り組んでいます。",
  }, language);

  const mission = t({
    en: "Our Mission",
    zh: "我们的使命",
    'zh-TW': "我們的使命",
    ja: "ミッション",
  }, language);

  const missionText = t({
    en: "To bring the future of intelligent interaction to everyone through advanced technology, making technology more accessible and human-centered.",
    zh: "通过先进的AI技术，让每个人都能享受到智能交互带来的便利，让科技更加人性化和普及化。",
    'zh-TW': "通過先進的AI技術，讓每個人都能享受到智能互動帶來的便利，讓科技更加人性化和普及化。",
    ja: "先進的なAI技術を通じて、誰もがインテリジェントなインタラクションの恩恵を受けられるようにし、テクノロジーをより人間中心でアクセスしやすいものにします。",
  }, language);

  const vision = t({
    en: "Our Vision",
    zh: "我们的愿景",
    'zh-TW': "我們的願景",
    ja: "ビジョン",
  }, language);

  const visionText = t({
    en: "To become the world's leading provider of AI-powered personal productivity tools, transforming how people capture, process, and utilize information in their daily lives.",
    zh: "成为全球领先的AI个人生产力工具提供商，改变人们日常生活中捕获、处理和利用信息的方式。",
    'zh-TW': "成為全球領先的AI個人生產力工具提供商，改變人們日常生活中擷取、處理和利用資訊的方式。",
    ja: "世界をリードするAI搭載の個人向け生産性ツールプロバイダーとなり、人々の日常生活における情報の取得、処理、活用の方法を変革します。",
  }, language);

  const values = t({
    en: "Our Values",
    zh: "我们的价值观",
    'zh-TW': "我們的價值觀",
    ja: "バリュー",
  }, language);

  const valuesList: Record<Language, string[]> = {
    en: [
      "User-Centric Design: Every feature is built with the user experience in mind",
      "Innovation First: We continuously push the boundaries of what's possible with AI",
      "Privacy & Security: We protect user data with enterprise-grade security",
      "Accessibility: Technology should be available to everyone, everywhere"
    ],
    zh: [
      "以用户为中心的设计：每个功能都以用户体验为核心",
      "创新优先：我们不断突破AI的可能性边界",
      "隐私与安全：我们用企业级安全保护用户数据",
      "普惠科技：让每个人都能随时随地使用先进技术"
    ],
    'zh-TW': [
      "以使用者為中心的設計：每個功能都以使用者體驗為核心",
      "創新優先：我們不斷突破AI的可能性邊界",
      "隱私與安全：我們用企業級安全保護使用者資料",
      "普惠科技：讓每個人都能隨時隨地使用先進技術"
    ],
    ja: [
      "ユーザー中心の設計：すべての機能がユーザー体験を念頭に構築されています",
      "イノベーションファースト：AIの可能性の限界に挑戦し続けます",
      "プライバシーとセキュリティ：エンタープライズグレードのセキュリティでユーザーデータを保護します",
      "アクセシビリティ：テクノロジーは誰もがどこでも利用できるべきです"
    ],
  };

  const team = t({
    en: "Our Team",
    zh: "我们的团队",
    'zh-TW': "我們的團隊",
    ja: "チーム",
  }, language);

  const teamText = t({
    en: "Founded by a group of passionate engineers and designers, our team brings together expertise from leading tech companies and research institutions. We believe that the best products come from diverse perspectives and collaborative innovation.",
    zh: "由一群充满激情的工程师和设计师创立，我们的团队汇集了来自领先科技公司和研究机构的专家。我们相信，最好的产品来自多元化的视角和协作创新。",
    'zh-TW': "由一群充滿激情的工程師和設計師創立，我們的團隊匯集了來自領先科技公司和研究機構的專家。我們相信，最好的產品來自多元化的視角和協作創新。",
    ja: "情熱的なエンジニアとデザイナーのグループによって設立され、私たちのチームは大手テクノロジー企業や研究機関からの専門知識を集めています。最良の製品は多様な視点と協調的なイノベーションから生まれると信じています。",
  }, language);

  const contact = t({
    en: "Get in Touch",
    zh: "联系我们",
    'zh-TW': "聯絡我們",
    ja: "お問い合わせ",
  }, language);

  const contactText = t({
    en: "We'd love to hear from you! Reach out to us at",
    zh: "我们很乐意听取您的意见！请通过以下方式联系我们：",
    'zh-TW': "我們很樂意聽取您的意見！請通過以下方式聯絡我們：",
    ja: "お気軽にお問い合わせください！",
  }, language);

  const addressDetail = t({
    en: "Shanghai RevelSpark Technologies Co., Ltd.",
    zh: "上海市徐汇区虹漕路25-1号2楼，邮编：200233",
    'zh-TW': "上海市徐匯區虹漕路25-1號2樓，郵編：200233",
    ja: "上海RevelSpark Technologies Co., Ltd.",
  }, language);

  const currentValues = valuesList[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-50">
      <Header language={language} onLanguageChange={() => { }} />
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 via-white to-gray-100 transition-all duration-1000 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 animate-fade-in-up">
            {/* Left Text Area */}
            <div className="flex-1 text-left transform transition-all duration-700 hover:scale-105">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-sans transition-all duration-500">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl text-orange-500 font-semibold mb-6 font-sans transition-all duration-500 delay-100">
                {subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl transition-all duration-500 delay-200">
                {description}
              </p>
            </div>

            {/* Right Visual Area */}
            <div className="flex-1 flex justify-center transform transition-all duration-700 hover:scale-105">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Abstract curve background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-50 blur-xl transition-all duration-1000 ease-in-out"></div>

                {/* Enhanced 3D Logo Representation */}
                <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center transform transition-all duration-700 hover:rotate-6">
                  {/* Outer rings */}
                  <div className="absolute w-full h-full rounded-full border-4 border-gray-400 opacity-70 animate-pulse transition-all duration-1000 ease-in-out" style={{ transform: 'scale(0.8) rotate(45deg)' }}></div>
                  <div className="absolute w-full h-full rounded-full border-4 border-cyan-300 opacity-70 animate-pulse transition-all duration-1000 ease-in-out" style={{ transform: 'scale(0.9) rotate(-45deg)' }}></div>

                  {/* Middle rings */}
                  <div className="absolute w-3/4 h-3/4 rounded-full border-3 border-blue-400 opacity-80 transition-all duration-700 ease-in-out" style={{ transform: 'scale(0.9) rotate(15deg)' }}></div>
                  <div className="absolute w-3/4 h-3/4 rounded-full border-3 border-cyan-400 opacity-80 transition-all duration-700 ease-in-out" style={{ transform: 'scale(0.9) rotate(-15deg)' }}></div>

                  {/* Inner core */}
                  <div className="absolute w-1/2 h-1/2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110">
                    <span className="text-white font-bold text-lg sm:text-xl">LA</span>
                  </div>

                  {/* Connection lines */}
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(0deg)' }}></div>
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(60deg)' }}></div>
                  <div className="absolute w-12 h-1 sm:w-16 sm:h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-700 ease-in-out" style={{ transform: 'rotate(120deg)' }}></div>

                  {/* Transparent base */}
                  <div className="absolute bottom-0 w-24 h-3 sm:w-32 sm:h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-60 transition-all duration-1000 ease-in-out" style={{ transform: 'translateY(50%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {mission}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {missionText}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-primary mb-4">
                {vision}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {visionText}
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {contact}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {contactText}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info with Newsletter */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {t({ en: 'Contact Us', zh: '联系我们', 'zh-TW': '聯絡我們', ja: 'お問い合わせ' }, language)}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{t({ en: 'Phone: 17621502813 Mr. Zhao', zh: '电话：17621502813 赵先生', 'zh-TW': '電話：17621502813 趙先生', ja: '電話：17621502813 趙さん' }, language)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>contact@lynse.ai</span>
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {t({ en: 'Subscribe to our newsletter', zh: '订阅我们的邮件', 'zh-TW': '訂閱我們的郵件', ja: 'ニュースレターを購読する' }, language)}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {t({ en: 'Get the latest updates and news about Lynse AI.', zh: '获取关于Lynse AI的最新更新和资讯。', 'zh-TW': '獲取關於Lynse AI的最新更新和資訊。', ja: 'Lynse AIの最新アップデートやニュースをお届けします。' }, language)}
                  </p>
                  <div className="relative flex flex-col">
                    <div className="flex">
                      <input
                        type="email"
                        placeholder={t({ en: 'Your email address', zh: '您的邮箱地址', 'zh-TW': '您的郵箱地址', ja: 'メールアドレス' }, language)}
                        className="border border-gray-300 rounded-l-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          // Show error message in real-time during input
                          if (e.target.value && !validateEmail(e.target.value)) {
                            setEmailError(t({ en: 'Please enter a valid email address', zh: '请输入正确的邮箱地址', 'zh-TW': '請輸入正確的郵箱地址', ja: '正しいメールアドレスを入力してください' }, language));
                          } else {
                            setEmailError('');
                          }
                          if (subscribeSuccess) setSubscribeSuccess(false);
                        }}
                        onBlur={() => {
                          // Hide success message when user leaves the input field
                          if (subscribeSuccess) setSubscribeSuccess(false);
                        }}
                      />
                      <button
                        className="bg-black hover:bg-black-dark text-white px-4 rounded-r-lg font-medium transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleSubscribe}
                        disabled={!email}
                      >
                        {t({ en: 'Subscribe', zh: '订阅', 'zh-TW': '訂閱', ja: '購読する' }, language)}
                      </button>
                    </div>
                    {emailError && (
                      <p className="text-red-500 text-sm mt-2">{emailError}</p>
                    )}
                    {subscribeSuccess && (
                      <p className="text-green-500 text-sm mt-2">{t({ en: 'Successfully subscribed!', zh: '订阅成功', 'zh-TW': '訂閱成功', ja: '購読完了！' }, language)}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  <a
                    href="mailto:support@lynse.ai"
                    className="bg-gradient-to-r from-logo-blue to-logo-cyan hover:from-accent hover:to-cyanaccent text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 text-center block"
                  >
                    {t({ en: 'Support Email: support@lynse.ai', zh: '支持邮箱：support@lynse.ai', 'zh-TW': '支援郵箱：support@lynse.ai', ja: 'サポートメール：support@lynse.ai' }, language)}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t({ en: 'Our Location', zh: '我们的位置', 'zh-TW': '我們的位置', ja: 'アクセス' }, language)}
              </h3>
              <div className="h-96 overflow-hidden rounded-lg">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-sm text-gray-500">
                          {t({ en: 'Loading map...', zh: '加载地图中...', 'zh-TW': '載入地圖中...', ja: '地圖を読み込み中...' }, language)}
                        </p>
                      </div>
                    </div>
                  }
                >
                  <CompanyMap
                    language={language}
                    address={addressDetail}
                    className="h-full"
                  />
                </Suspense>
              </div>
              <div className="mt-4 flex items-start gap-3 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>{addressDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;