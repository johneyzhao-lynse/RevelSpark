import { FAQCategory } from './types';

export const quickStartCategory: FAQCategory = {
    id: 'quick-start',
    title: {
      en: 'Quick Start',
      zh: '快速开始',
      'zh-TW': '快速開始',
      ja: 'クイックスタート',
    },
    description: {
      en: 'Get up and running with Lynse in minutes',
      zh: '几分钟内开始使用灵光记',
      'zh-TW': '幾分鐘內開始使用靈光記',
      ja: '数分でLynseを使い始めましょう',
    },
    icon: 'Zap',
    sections: [
      {
        id: 'getting-started',
        title: {
          en: 'Getting Started',
          zh: '入门指南',
          'zh-TW': '入門指南',
          ja: 'はじめに',
        },
        icon: 'Play',
        description: {
          en: 'Learn the basics of Lynse',
          zh: '了解灵光记基础功能',
          'zh-TW': '瞭解靈光記基礎功能',
          ja: 'Lynseの基本を学ぶ',
        },
        items: [
          {
            id: 'what-is-lynse',
            question: {
              en: 'What is Lynse?',
              zh: '灵光记是什么？',
              'zh-TW': '靈光記是什麼？',
              ja: 'Lynseとは何ですか？',
            },
            answer: {
              en: 'Lynse is an AI-powered recording and note-taking app. You can record with your phone, use the Lynse SparkCard to record, or import existing audio. After recording, Lynse can generate transcriptions, AI summaries, to-do lists, mind maps, and supports continued questioning through the LynClaw AI assistant.',
              zh: '灵光记是一款 AI 智能语音记录与笔记应用。你可以用手机录音、用灵光闪记卡（Lynse SparkCard）录音，或导入已有音频。录音完成后，灵光记可以生成转写文本、AI 总结、待办事项、思维导图，并支持通过 LynClaw AI 助手继续追问。',
              'zh-TW': '靈光記是一款 AI 智能語音記錄與筆記應用。你可以用手機錄音、用靈光閃記卡（Lynse SparkCard）錄音，或導入已有音頻。錄音完成後，靈光記可以生成轉寫文本、AI 總結、待辦事項、思維導圖，並支援通過 LynClaw AI 助手繼續追問。',
              ja: 'LynseはAI搭載の録音・ノートテイクアプリです。スマホでの録音、Lynse SparkCardでの録音、既存のオーディオのインポートが可能です。録音後、文字起こし、AI要約、TODOリスト、マインドマップを生成し、LynClaw AIアシスタントで継続的な質問も可能です。',
            },
            promoted: true,
          },
          {
            id: 'first-steps',
            question: {
              en: 'What should I do for the first time?',
              zh: '第一次使用应该怎么做？',
              'zh-TW': '第一次使用應該怎麼做？',
              ja: '初めて使うときはどうすればいいですか？',
            },
            answer: {
              en: '1. Download and open the Lynse app.\n2. Log in with your phone number or supported third-party method displayed on the app page.\n3. If you have a SparkCard, go to the device page to add and bind it.\n4. Start recording with your phone, device, or import existing audio.\n5. After recording, choose a summary template, audio language, and AI model.\n6. View transcription, summary, to-dos, mind maps, and notes on the file details page.\n7. Use the LynClaw AI assistant to ask follow-up questions based on the current file, tags, or all files.',
              zh: '1. 下载并打开灵光记 App。\n2. 使用手机号或 App 页面显示的第三方方式登录。\n3. 已有灵光闪记卡时，进入设备页面添加并绑定设备。\n4. 在首页开始手机录音、设备录音，或导入已有音频。\n5. 录音结束后，选择总结模板、音频语言和 AI 模型。\n6. 生成转写与总结后，在文件详情页查看转写、摘要、待办、思维导图和笔记。\n7. 需要继续提问时，打开 LynClaw AI 助手，基于当前文件、标签或全部文件提问。',
              'zh-TW': '1. 下載並打開靈光記 App。\n2. 使用手機號或 App 頁面顯示的第三方方式登錄。\n3. 已有靈光閃記卡時，進入設備頁面添加並綁定設備。\n4. 在首頁開始手機錄音、設備錄音，或導入已有音頻。\n5. 錄音結束後，選擇總結模板、音頻語言和 AI 模型。\n6. 生成轉寫與總結後，在文件詳情頁查看轉寫、摘要、待辦、思維導圖和筆記。\n7. 需要繼續提問時，打開 LynClaw AI 助手，基於當前文件、標籤或全部文件提問。',
              ja: '1. Lynseアプリをダウンロードして開きます。\n2. 電話番号またはアプリページに表示されているサードパーティの方法でログインします。\n3. SparkCardをお持ちの場合は、デバイスページから追加・バインドします。\n4. スマホ録音、デバイス録音、または既存のオーディオをインポートして開始します。\n5. 録音終了後、要約テンプレート、オーディオ言語、AIモデルを選択します。\n6. 文字起こし、要約、TODO、マインドマップ、ノートをファイル詳細ページで確認します。\n7. LynClaw AIアシスタントで、現在のファイル、タグ、または全ファイルに基づいて質問を続けます。',
            },
          },
          {
            id: 'is-app-free',
            question: {
              en: 'Is the app free?',
              zh: 'App 是免费的吗？',
              'zh-TW': 'App 是免費的嗎？',
              ja: 'アプリは無料ですか？',
            },
            answer: {
              en: 'The Lynse app is free to download. AI transcription, summary, import and other capabilities consume credits or are subject to membership rules. Specific free quotas, membership benefits, and paid options are displayed in the app\'s membership center.',
              zh: '灵光记 App 可免费下载。AI 转写、总结、导入等能力会按会员规则消耗积分或受会员权益限制。具体免费额度、会员权益和付费入口以 App 内会员中心展示为准。',
              'zh-TW': '靈光記 App 可免費下載。AI 轉寫、總結、導入等能力會按會員規則消耗積分或受會員權益限制。具體免費額度、會員權益和付費入口以 App 內會員中心展示為準。',
              ja: 'Lynseアプリは無料でダウンロードできます。AI文字起こし、要約、インポートなどの機能は、クレジットを消費するか、メンバーシップルールに従います。無料枠、メンバーシップ特典、有料オプションは、アプリ内のメンバーシップセンターで確認できます。',
            },
          },
          {
            id: 'supported-platforms',
            question: {
              en: 'What phone systems does the app support?',
              zh: 'App 支持哪些手机系统？',
              'zh-TW': 'App 支援哪些手機系統？',
              ja: 'アプリはどのスマホシステムに対応していますか？',
            },
            answer: {
              en: '• iOS: iOS 15.4 and above. iPhone view only; iPad can install in iPhone view mode.\n• Android: Android 9.0 and above. Available in major app stores by searching "灵光记", or download from the Lynse website.\n• HarmonyOS: Available in Huawei AppGallery. Search "灵光记" and install.',
              zh: '• iOS：支持 iOS 15.4 及以上，仅适配 iPhone 视图；iPad 可使用 iPhone 视图模式安装。\n• Android：支持 Android 9.0 及以上，可在各大厂商应用商城搜索"灵光记"，也可在 Lynse 官网下载。\n• 鸿蒙：可在华为应用市场搜索"灵光记"，点击"获取"，进入"搜应用"后安装，并进入 Android 版本 APK 下载页面下载安装。',
              'zh-TW': '• iOS：支援 iOS 15.4 及以上，僅適配 iPhone 視圖；iPad 可使用 iPhone 視圖模式安裝。\n• Android：支援 Android 9.0 及以上，可在各大廠商應用商城搜索"靈光記"，也可在 Lynse 官網下載。\n• 鴻蒙：可在華為應用市場搜索"靈光記"並安裝。',
              ja: '• iOS：iOS 15.4以上に対応。iPhoneビューのみ。iPadはiPhoneビューモードでインストール可能。\n• Android：Android 9.0以上に対応。各アプリストアで「Lynse」を検索、または公式サイトからダウンロード。\n• HarmonyOS：Huawei AppGalleryで「Lynse」を検索してインストール。',
            },
          },
          {
            id: 'platform-price-diff',
            question: {
              en: 'Why do I see different prices on different platforms?',
              zh: '为什么不同平台看到的价格不同？',
              'zh-TW': '為什麼不同平台看到的價格不同？',
              ja: 'プラットフォームによって価格が異なるのはなぜですか？',
            },
            answer: {
              en: 'Different platforms, regions, and payment channels have price differences. In-app subscription prices are based on the actual payment platform display; e-commerce product pages may include hardware bundle prices, promotional gifts, or add-on membership prices with hardware, which are different from in-app recurring subscription prices.',
              zh: '不同平台、地区和支付渠道存在价格差异。App 内订阅价格以实际支付平台展示为准；电商商品页包含硬件套装价、活动赠品或随硬件加购会员价时，和 App 内连续订阅价格不是同一类商品。',
              'zh-TW': '不同平台、地區和支付渠道存在價格差異。App 內訂閱價格以實際支付平台展示為準；電商商品頁包含硬體套裝價、活動贈品或隨硬體加購會員價時，和 App 內連續訂閱價格不是同一類商品。',
              ja: 'プラットフォーム、地域、支払いチャネルによって価格が異なります。アプリ内サブスクリプション価格は実際の支払いプラットフォームの表示に基づきます。EC商品ページにはハードウェアバンドル価格、キャンペーン特典、ハードウェア同時購入会員価格などが含まれる場合があり、アプリ内の継続サブスクリプション価格とは異なる商品です。',
            },
          },
          {
            id: 'change-phone-use',
            question: {
              en: 'Can I use the app on a different phone after purchase?',
              zh: '购买后可以换手机使用吗？',
              'zh-TW': '購買後可以換手機使用嗎？',
              ja: '購入後にスマホを変更しても使用できますか？',
            },
            answer: {
              en: 'Yes. Membership benefits, credits, credit packs, redemption code benefits, and device binding status are tied to your Lynse account. After changing phones, log in to the same account to continue using your available benefits.',
              zh: '可以。会员权益、积分、充电包、兑换码权益和设备绑定状态与灵光记账号关联。更换手机后，登录同一个账号即可继续使用账号内可用权益。',
              'zh-TW': '可以。會員權益、積分、充電包、兌換碼權益和設備綁定狀態與靈光記賬號關聯。更換手機後，登錄同一個賬號即可繼續使用賬號內可用權益。',
              ja: 'はい。メンバーシップ特典、クレジット、クレジットパック、交換コード特典、デバイスのバインド状態はLynseアカウントに紐付けられています。スマホを変更した後、同じアカウントにログインすると利用可能な特典を继续使用できます。',
            },
          },
        ],
      },
    ],
  };

