import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Language } from '../data/constants';
import { FAQ_CATEGORIES, FAQItem, FAQSection, FAQCategory } from '../data/faqData';

// ── Texts ────────────────────────────────────────────────────

const TEXTS = {
  title: { en: 'How can we help?', zh: '需要什么帮助？', 'zh-TW': '需要什麼幫助？', ja: 'どのようにお手伝いできますか？' },
  subtitle: { en: 'Search for answers or browse categories below', zh: '搜索答案或浏览下方分类', 'zh-TW': '搜索答案或瀏覽下方分類', ja: '回答を検索するか、以下のカテゴリを参照してください' },
  searchPlaceholder: { en: 'Search help articles...', zh: '搜索帮助文章...', 'zh-TW': '搜尋幫助文章...', ja: 'ヘルプ記事を検索...' },
  articles: { en: 'articles', zh: '篇文章', 'zh-TW': '篇文章', ja: '件の記事' },
  noResults: { en: 'No results found. Try different keywords.', zh: '未找到结果，请尝试其他关键词。', 'zh-TW': '未找到結果，請嘗試其他關鍵詞。', ja: '結果が見つかりません。別のキーワードをお試しください。' },
  contactTitle: { en: 'Still need help?', zh: '还需要帮助？', 'zh-TW': '還需要幫助？', ja: 'まだお困りですか？' },
  contactSubtitle: { en: 'Our support team is ready to assist you', zh: '我们的支持团队随时为您服务', 'zh-TW': '我們的支援團隊隨時為您服務', ja: 'サポートチームがいつでもお手伝いします' },
  emailUs: { en: 'Email Us', zh: '发送邮件', 'zh-TW': '發送郵件', ja: 'メールを送る' },
  contactSupport: { en: 'Contact Support', zh: '联系客服', 'zh-TW': '聯繫客服', ja: 'カスタマーサービス' },
  joinGroup: { en: 'Join User Group', zh: '加入用户群', 'zh-TW': '加入用戶群', ja: 'ユーザーグループに参加' },
  tapToShow: { en: 'Tap to show QR code', zh: '点击查看二维码', 'zh-TW': '點擊查看二維碼', ja: 'タップしてQRコードを表示' },
  scanContact: { en: 'Scan to contact', zh: '扫码联系客服', 'zh-TW': '掃碼聯繫客服', ja: 'スキャンしてサポートに連絡' },
  scanQR: { en: 'Scan to join', zh: '扫码加入', 'zh-TW': '掃碼加入', ja: 'スキャンして参加' },
  phoneSupport: { en: 'Phone Support', zh: '电话支持', 'zh-TW': '電話支援', ja: '電話サポート' },
  searchResultsFor: { en: 'Search results for', zh: '搜索结果：', 'zh-TW': '搜尋結果：', ja: '検索結果：' },
  clearSearch: { en: 'Clear search', zh: '清除搜索', 'zh-TW': '清除搜尋', ja: '検索をクリア' },
};

const t = (text: Record<Language, string>, lang: Language) => text[lang];

// ── Component ────────────────────────────────────────────────

interface Props {
  language: Language;
  embedded?: boolean;
}

const SupportCenterPage: React.FC<Props> = ({ language, embedded = false }) => {
  // Read category from URL params for auto-expand
  const urlCategory = useMemo(() => {
    return new URLSearchParams(window.location.search).get('category') || '';
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(() => {
    if (urlCategory && FAQ_CATEGORIES.some(c => c.id === urlCategory)) {
      return new Set([urlCategory]);
    }
    return new Set();
  });
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    if (urlCategory) {
      const cat = FAQ_CATEGORIES.find(c => c.id === urlCategory);
      if (cat) return new Set(cat.sections.map(s => s.id));
    }
    return new Set();
  });
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [showQR, setShowQR] = useState(false);
  const [showCSRQ, setShowCSRQ] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to expanded category on mount
  useEffect(() => {
    if (urlCategory) {
      setTimeout(() => {
        const el = document.querySelector(`[data-category-id="${urlCategory}"]`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [urlCategory]);

  // Search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: { item: FAQItem; category: FAQCategory; section: FAQSection }[] = [];
    FAQ_CATEGORIES.forEach(cat => {
      cat.sections.forEach(sec => {
        sec.items.forEach(item => {
          const qMatch = item.question[language].toLowerCase().includes(q);
          const aMatch = typeof item.answer[language] === 'string' && (item.answer[language] as string).toLowerCase().includes(q);
          if (qMatch || aMatch) results.push({ item, category: cat, section: sec });
        });
      });
    });
    return results;
  }, [searchQuery, language]);

  const toggle = (set: Set<string>, id: string, setter: React.Dispatch<React.SetStateAction<Set<string>>>) => {
    setter(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const toggleCategory = (id: string) => toggle(expandedCategories, id, setExpandedCategories);
  const toggleSection = (id: string) => toggle(expandedSections, id, setExpandedSections);
  const toggleItem = (id: string) => toggle(openItems, id, setOpenItems);

  const clearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  const formatAnswer = (text: string | React.ReactNode) => {
    if (typeof text !== 'string') return text;
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>{line}{i < text.split('\n').length - 1 && <br />}</React.Fragment>
    ));
  };

  return (
    <div className="bg-gray-50 font-sans antialiased min-h-screen">
      {/* ── Hero ── */}
      <div className={`${embedded ? 'pt-8 pb-6' : 'pt-20 pb-8 sm:pt-28 sm:pb-12'} bg-white`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight ${embedded ? 'mb-3' : 'mb-4'}`}>
            {t(TEXTS.title, language)}
          </h1>
          <p className="text-sm sm:text-lg text-gray-500 mb-6 sm:mb-8">
            {t(TEXTS.subtitle, language)}
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(TEXTS.searchPlaceholder, language)}
              className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">

        {/* ── Search Results ── */}
        {searchResults !== null && (
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <p className="text-sm text-gray-500 truncate mr-3">
                {t(TEXTS.searchResultsFor, language)}<span className="text-black font-medium">"{searchQuery}"</span>
              </p>
              <button onClick={clearSearch} className="text-sm text-gray-400 hover:text-black transition-colors flex-shrink-0">
                {t(TEXTS.clearSearch, language)}
              </button>
            </div>
            {searchResults.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <p className="text-gray-500 text-sm">{t(TEXTS.noResults, language)}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {searchResults.map(({ item, category, section }) => (
                  <div key={item.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <button onClick={() => toggleItem(item.id)} className="w-full flex items-start justify-between gap-2 sm:gap-3 p-4 sm:p-5 text-left">
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-gray-400 block mb-0.5">{t(category.title, language)} · {t(section.title, language)}</span>
                        <span className="font-semibold text-black text-sm leading-snug">{item.question[language]}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${openItems.has(item.id) ? 'rotate-180' : ''}`} />
                    </button>
                    {openItems.has(item.id) && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                          <p className="text-gray-600 text-sm leading-relaxed break-words">{formatAnswer(item.answer[language])}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Full Accordion (all categories) ── */}
        {searchResults === null && (
          <div className="space-y-2 sm:space-y-3">
            {FAQ_CATEGORIES.map(category => {
              const catExpanded = expandedCategories.has(category.id);
              const totalItems = category.sections.reduce((a, s) => a + s.items.length, 0);

              return (
                <div key={category.id} data-category-id={category.id} className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 hover:bg-gray-50/50 transition-colors active:bg-gray-50"
                  >
                    <div className="text-left">
                      <h2 className="text-sm sm:text-base font-bold text-black">{t(category.title, language)}</h2>
                      <p className="text-xs text-gray-400 mt-0.5">{totalItems} {t(TEXTS.articles, language)}</p>
                    </div>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-200 ${catExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Category Body */}
                  <div className={`transition-all duration-300 ease-in-out ${catExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="border-t border-gray-100">
                      {(() => {
                        const isSingleSection = category.sections.length === 1;

                        const renderFAQItem = (item: FAQItem) => (
                          <div key={item.id} className="border-t border-gray-50">
                            <button
                              onClick={() => toggleItem(item.id)}
                              className="w-full flex items-start justify-between gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-left hover:bg-gray-50/30 transition-colors active:bg-gray-50"
                            >
                              <span className="text-sm text-black font-medium pl-2.5 sm:pl-3 border-l-2 border-gray-200 leading-snug">{item.question[language]}</span>
                              <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${openItems.has(item.id) ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 ease-in-out ${openItems.has(item.id) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                              <div className="px-3 sm:px-5 pb-2.5 sm:pb-3 pl-6 sm:pl-8">
                                <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                                  <p className="text-gray-600 text-sm leading-relaxed break-words">{formatAnswer(item.answer[language])}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );

                        return category.sections.map(section => {
                          // Single section: render items directly without section wrapper
                          if (isSingleSection) {
                            return (
                              <div key={section.id}>
                                {section.items.map(item => renderFAQItem(item))}
                              </div>
                            );
                          }

                          const secExpanded = expandedSections.has(section.id);
                          return (
                            <div key={section.id} className="border-t border-gray-50 first:border-t-0">
                              {/* Section Header */}
                              <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-gray-50/30 transition-colors active:bg-gray-50"
                              >
                                <div className="text-left">
                                  <h3 className="text-sm font-semibold text-black">{t(section.title, language)}</h3>
                                  <p className="text-xs text-gray-400 mt-0.5">{section.items.length} {t(TEXTS.articles, language)}</p>
                                </div>
                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${secExpanded ? 'rotate-180' : ''}`} />
                              </button>

                              {/* Section Items */}
                              <div className={`transition-all duration-300 ease-in-out ${secExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                {section.items.map(item => renderFAQItem(item))}
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Contact ── */}
        <div className="mt-10 sm:mt-16 border-t border-gray-200 pt-8 sm:pt-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg font-bold text-black mb-1.5 sm:mb-2">{t(TEXTS.contactTitle, language)}</h2>
            <p className="text-xs sm:text-sm text-gray-500">{t(TEXTS.contactSubtitle, language)}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <a href="mailto:support@lynse.ai" className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 text-center hover:border-gray-300 transition-all active:bg-gray-50">
              <p className="text-sm font-semibold text-black mb-1">{t(TEXTS.emailUs, language)}</p>
              <p className="text-xs text-gray-400">support@lynse.ai</p>
            </a>
            <div className="relative">
              <button
                onClick={() => setShowCSRQ(!showCSRQ)}
                className="w-full bg-white rounded-xl border border-gray-100 p-4 sm:p-5 text-center hover:border-gray-300 transition-all cursor-pointer active:bg-gray-50"
              >
                <p className="text-sm font-semibold text-black mb-1">{t(TEXTS.contactSupport, language)}</p>
                <p className="text-xs text-gray-400">{t(TEXTS.tapToShow, language)}</p>
              </button>
              {showCSRQ && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowCSRQ(false)} />
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 text-center ${embedded ? 'w-52' : 'w-48 sm:w-52'}`}>
                    <img src="/images/customer_service_qr.png" alt={t(TEXTS.scanContact, language)} className="w-36 sm:w-40 h-36 sm:h-40 mx-auto mb-2" />
                    <p className="text-xs text-gray-500">{t(TEXTS.scanContact, language)}</p>
                  </div>
                </>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowQR(!showQR)}
                className="w-full bg-white rounded-xl border border-gray-100 p-4 sm:p-5 text-center hover:border-gray-300 transition-all cursor-pointer active:bg-gray-50"
              >
                <p className="text-sm font-semibold text-black mb-1">{t(TEXTS.joinGroup, language)}</p>
                <p className="text-xs text-gray-400">{t(TEXTS.tapToShow, language)}</p>
              </button>
              {showQR && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowQR(false)} />
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 text-center ${embedded ? 'w-52' : 'w-48 sm:w-52'}`}>
                    <img src="/images/contact_me_qr.png" alt={t(TEXTS.scanQR, language)} className="w-36 sm:w-40 h-36 sm:h-40 mx-auto mb-2" />
                    <p className="text-xs text-gray-500">{t(TEXTS.scanQR, language)}</p>
                  </div>
                </>
              )}
            </div>
            <a href="tel:+8615618981688" className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 text-center hover:border-gray-300 transition-all active:bg-gray-50">
              <p className="text-sm font-semibold text-black mb-1">{t(TEXTS.phoneSupport, language)}</p>
              <p className="text-xs text-gray-400">+86 15618981688</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenterPage;
