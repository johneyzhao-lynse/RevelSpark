import { Language } from '../data/constants';

// ── Types ─────────────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string | React.ReactNode>;
  promoted?: boolean;
}

export interface FAQSection {
  id: string;
  title: Record<Language, string>;
  icon: string; // lucide icon name
  description: Record<Language, string>;
  items: FAQItem[];
}

export interface FAQCategory {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  sections: FAQSection[];
}

// ── Categories Data ────────────────────────────────────────────

export const FAQ_CATEGORIES: FAQCategory[] = [
  // ── 1. Quick Start ────────────────────────────────────────────
  {
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
  },
  // ── 2. Device Support ──────────────────────────────────────────
  {
    id: 'device-support',
    title: {
      en: 'Device Support',
      zh: '设备支持',
      'zh-TW': '設備支援',
      ja: 'デバイスサポート',
    },
    description: {
      en: 'Learn about Lynse SparkCard setup and usage',
      zh: '了解灵光闪记卡的设置和使用',
      'zh-TW': '瞭解靈光閃記卡的設置和使用',
      ja: 'Lynse SparkCardのセットアップと使用方法',
    },
    icon: 'CreditCard',
    sections: [
      {
        id: 'device-basics',
        title: {
          en: 'Device Basics',
          zh: '设备基础',
          'zh-TW': '設備基礎',
          ja: 'デバイス基本',
        },
        icon: 'Info',
        description: {
          en: 'Essential device information',
          zh: '设备基本信息',
          'zh-TW': '設備基本資訊',
          ja: 'デバイスの基本情報',
        },
        items: [
          {
            id: 'what-is-sparkcard',
            question: {
              en: 'What is the Lynse SparkCard?',
              zh: '灵光闪记卡是什么？',
              'zh-TW': '靈光閃記卡是什麼？',
              ja: 'Lynse SparkCardとは何ですか？',
            },
            answer: {
              en: 'The Lynse SparkCard is a companion AI recording card device for the Lynse app. It can record locally, and after connecting to the app, it syncs recordings and generates transcriptions, summaries, and notes.',
              zh: '灵光闪记卡（Lynse SparkCard）是灵光记配套的 AI 录音卡片设备。它可以本地录音，连接 App 后同步录音并生成转写、总结和笔记。',
              'zh-TW': '靈光閃記卡（Lynse SparkCard）是靈光記配套的 AI 錄音卡片設備。它可以本地錄音，連接 App 後同步錄音並生成轉寫、總結和筆記。',
              ja: 'Lynse SparkCardは、Lynseアプリと連携するAI録音カードデバイスです。ローカルで録音でき、アプリに接続後は録音を同期し、文字起こし、要約、ノートを生成します。',
            },
            promoted: true,
          },
          {
            id: 'package-contents',
            question: {
              en: 'What\'s in the box?',
              zh: '包装里通常有什么？',
              'zh-TW': '包裝裡通常有什麼？',
              ja: 'パッケージには何が入っていますか？',
            },
            answer: {
              en: 'The package may vary by version and promotion. Common contents include the Lynse SparkCard, magnetic leather case, magnetic ring, charging cable, and user manual/warranty card. Please refer to the product details page and actual packaging.',
              zh: '电商套装可能因版本和活动不同而变化。常见包装包含灵光闪记卡、磁吸皮套、磁吸环、充电线、说明书或保修卡。请以商品详情页和实际包装为准。',
              'zh-TW': '電商套裝可能因版本和活動不同而變化。常見包裝包含靈光閃記卡、磁吸皮套、磁吸環、充電線、說明書或保修卡。請以商品詳情頁和實際包裝為準。',
              ja: 'パッケージはバージョンやプロモーションにより異なる場合があります。一般的な内容物は、Lynse SparkCard、マグネットレザーケース、マグネットリング、充電ケーブル、取扱説明書/保証書です。',
            },
          },
          {
            id: 'how-to-connect',
            question: {
              en: 'How do I connect the SparkCard?',
              zh: '如何连接灵光闪记卡？',
              'zh-TW': '如何連接靈光閃記卡？',
              ja: 'SparkCardをどう接続しますか？',
            },
            answer: {
              en: '1. Open the Lynse app and go to the device page.\n2. Tap "Add Device".\n3. Turn on Bluetooth as prompted and bring the device close to your phone.\n4. Select the device to connect.\n5. Complete the binding as prompted.\n6. After connecting, view the device status on the device page.\n\nBinding the SparkCard automatically grants Standard Membership with corresponding monthly credits and benefits.',
              zh: '1. 打开灵光记 App，进入设备页面。\n2. 点击添加设备。\n3. 按页面提示开启蓝牙，并将设备靠近手机。\n4. 选择要连接的设备。\n5. 按提示完成绑定。\n6. 连接成功后，在设备页面查看设备状态。\n\n绑定灵光闪记卡后，账号会成为标准会员，获得对应月度积分和权益。',
              'zh-TW': '1. 打開靈光記 App，進入設備頁面。\n2. 點擊添加設備。\n3. 按頁面提示開啟藍牙，並將設備靠近手機。\n4. 選擇要連接的設備。\n5. 按提示完成綁定。\n6. 連接成功後，在設備頁面查看設備狀態。\n\n綁定靈光閃記卡後，賬號會成為標準會員，獲得對應月度積分和權益。',
              ja: '1. Lynseアプリを開き、デバイスページに移動します。\n2. 「デバイスを追加」をタップします。\n3. 指示に従ってBluetoothをオンにし、デバイスをスマホに近づけます。\n4. 接続するデバイスを選択します。\n5. 指示に従ってバインドを完了します。\n6. 接続後、デバイスページでデバイスステータスを確認します。\n\nSparkCardをバインドすると、自動的にスタンダードメンバーシップが付与されます。',
            },
          },
          {
            id: 'device-storage-battery',
            question: {
              en: 'How do I check device storage, battery, and SN?',
              zh: '如何查看设备存储、电量和 SN 码？',
              'zh-TW': '如何查看設備儲存、電量和 SN 碼？',
              ja: 'デバイスのストレージ、バッテリー、SNを確認するには？',
            },
            answer: {
              en: 'Go to the device details page to view the SN code, firmware version, battery level, storage space, remaining recording time, and auto-sleep settings.',
              zh: '进入设备详情页，可查看 SN 码、固件版本、电量、存储空间、剩余可录制时长和自动休眠设置等信息。',
              'zh-TW': '進入設備詳情頁，可查看 SN 碼、固件版本、電量、儲存空間、剩餘可錄製時長和自動休眠設置等資訊。',
              ja: 'デバイスの詳細ページで、SNコード、ファームウェアバージョン、バッテリーレベル、ストレージ容量、残り録音時間、自動スリープ設定などを確認できます。',
            },
          },
          {
            id: 'firmware-update',
            question: {
              en: 'How do I update the device firmware?',
              zh: '如何升级设备固件？',
              'zh-TW': '如何升級設備固件？',
              ja: 'デバイスのファームウェアを更新するには？',
            },
            answer: {
              en: 'When a firmware update is available, the app may push an upgrade notification. You can also manually check for updates on the device details page.\n\nBefore updating, ensure:\n• Device battery is above 30%\n• Device is not currently recording\n• Phone network is stable\n• Device is close to the phone\n\nDevices below 30% battery or currently recording cannot be upgraded. Do not close the app or operate the device during the update.',
              zh: '当设备有可用固件时，App 会展示升级提醒；也可在设备详情页手动检查更新。\n\n升级前请确认：\n• 设备电量充足（不低于 30%）\n• 设备没有正在录音\n• 手机网络稳定\n• 设备靠近手机\n\n低于 30% 电量或正在录音时，不可升级。升级过程中请不要关闭 App 或操作设备。',
              'zh-TW': '當設備有可用固件時，App 會展示升級提醒；也可在設備詳情頁手動檢查更新。\n\n升級前請確認：\n• 設備電量充足（不低於 30%）\n• 設備沒有正在錄音\n• 手機網絡穩定\n• 設備靠近手機\n\n低於 30% 電量或正在錄音時，不可升級。升級過程中請不要關閉 App 或操作設備。',
              ja: 'ファームウェア更新が利用可能な場合、アプリからアップグレード通知が表示されます。デバイスの詳細ページで手動で更新を確認することもできます。\n\n更新前に確認：\n• デバイスのバッテリーが30%以上であること\n• デバイスが録音中でないこと\n• スマホのネットワークが安定していること\n• デバイスがスマホの近くにあること\n\nバッテリー30%未満または録音中はアップグレードできません。更新中はアプリを閉じたり、デバイスを操作しないでください。',
            },
          },
          {
            id: 'file-sync-after-transfer',
            question: {
              en: 'Are recordings still on the device after syncing to the app?',
              zh: '文件传输到 App 后，设备端录音还在吗？',
              'zh-TW': '文件傳輸到 App 後，設備端錄音還在嗎？',
              ja: 'アプリに同期後、デバイス側の録音はまだ残っていますか？',
            },
            answer: {
              en: 'Recordings are first saved locally on the SparkCard, then synced to the app after connecting. When syncing, deleting, or cleaning device storage, please follow the page prompts: the file list, device file management page, and cloud sync status may affect deletion scope across the app local, device, and cloud.',
              zh: '设备录音会先保存在灵光闪记卡本地，连接手机后同步到 App。同步、删除和清理设备存储时，请以页面提示为准：文件列表、设备文件管理页、云同步状态不同，可能影响 App 本地、设备端和云端的删除范围。',
              'zh-TW': '設備錄音會先保存在靈光閃記卡本地，連接手機後同步到 App。同步、刪除和清理設備儲存時，請以頁面提示為準：文件列表、設備文件管理頁、雲同步狀態不同，可能影響 App 本地、設備端和雲端的刪除範圍。',
              ja: '録音はまずSparkCardのローカルに保存され、接続後にアプリに同期されます。同期、削除、デバイスストレージのクリーニング時は、ページのプロンプトに従ってください。ファイルリスト、デバイスファイル管理ページ、クラウド同期の状態により、アプリローカル、デバイス側、クラウドの削除範囲が変わる場合があります。',
            },
          },
          {
            id: 'device-power-charge',
            question: {
              en: 'How do I power on, power off, and charge the device?',
              zh: '如何开启、关闭和充电？',
              'zh-TW': '如何開啟、關閉和充電？',
              ja: 'デバイスの電源オン、オフ、充電方法は？',
            },
            answer: {
              en: 'Follow the device manual or app page prompts to operate the device buttons. Use the charging cable provided with the package or a compatible charger. You can check the battery status on the device details page in the app.\n\nIf the device fails to power on after a long time, charge it for a while first, then try reconnecting to the app.',
              zh: '请按设备说明书或 App 页面提示操作设备按键。充电时使用随包装提供的充电线或符合规格的充电设备，充电过程中可在 App 设备详情页查看电量状态。\n\n如果设备长时间无法开机，请先充电一段时间，再尝试重新连接 App。',
              'zh-TW': '請按設備說明書或 App 頁面提示操作設備按鍵。充電時使用隨包裝提供的充電線或符合規格的充電設備，充電過程中可在 App 設備詳情頁查看電量狀態。\n\n如果設備長時間無法開機，請先充電一段時間，再嘗試重新連接 App。',
              ja: 'デバイスの取扱説明書またはアプリのページに従ってデバイスのボタンを操作してください。充電時はパッケージに付属の充電ケーブルまたは互換性のある充電器を使用してください。アプリのデバイス詳細ページでバッテリー状態を確認できます。\n\n長時間電源が入らない場合は、まずしばらく充電してから、アプリへの再接続を試みてください。',
            },
          },
          {
            id: 'device-not-visible',
            question: {
              en: 'Why can\'t I see nearby devices in "My Devices"?',
              zh: '"我的设备"里为什么看不到附近设备？',
              'zh-TW': '"我的設備"裡為什麼看不到附近設備？',
              ja: '「マイデバイス」に近くのデバイスが表示されないのはなぜですか？',
            },
            answer: {
              en: 'The "My Devices" page only shows devices that have been connected to the current phone, not nearby unknown devices. To bind a new device, use the "Add Device" entry.',
              zh: '"我的设备"页只展示已经连接过当前手机的设备，不展示周围陌生设备。若要绑定新设备，请使用添加设备入口。',
              'zh-TW': '"我的設備"頁只展示已經連接過當前手機的設備，不展示周圍陌生設備。若要綁定新設備，請使用添加設備入口。',
              ja: '「マイデバイス」ページは、現在のスマホに接続されたことのあるデバイスのみを表示し、周囲の未接続デバイスは表示しません。新しいデバイスをバインドするには、「デバイスを追加」入口を使用してください。',
            },
          },
          {
            id: 'connected-vs-unconnected',
            question: {
              en: 'What\'s the difference between connected and unconnected devices?',
              zh: '已连接和未连接有什么区别？',
              'zh-TW': '已連接和未連接有什麼區別？',
              ja: '接続済みと未接続の違いは何ですか？',
            },
            answer: {
              en: '• Connected: Tap to enter the device details page.\n• Unconnected: Can be removed from the list. Removing a device clears the binding between the current account and that device — other accounts can then rebind it.\n\nThe system will show a confirmation prompt before removing an unconnected device.',
              zh: '• 已连接：点击后可进入当前设备的设备详情页。\n• 未连接：可从列表删除；删除后会清除当前账号与该设备的绑定状态，其他账号可重新绑定该设备。\n\n删除未连接设备时，系统会进行二次确认。',
              'zh-TW': '• 已連接：點擊後可進入當前設備的設備詳情頁。\n• 未連接：可從列表刪除；刪除後會清除當前賬號與該設備的綁定狀態，其他賬號可重新綁定該設備。\n\n刪除未連接設備時，系統會進行二次確認。',
              ja: '• 接続済み：タップすると現在のデバイスの詳細ページに入ります。\n• 未接続：リストから削除可能。削除すると現在のアカウントとデバイスのバインドが解除され、他のアカウントで再バインドできます。\n\n未接続デバイスの削除時、システムは確認ダイアログを表示します。',
            },
          },
        ],
      },
    ],
  },
  // ── 3. App & Services ──────────────────────────────────────────
  {
    id: 'app-services',
    title: {
      en: 'App & Services',
      zh: 'App 与服务',
      'zh-TW': 'App 與服務',
      ja: 'アプリとサービス',
    },
    description: {
      en: 'Recording, transcription, AI features and file management',
      zh: '录音、转写、AI 功能和文件管理',
      'zh-TW': '錄音、轉寫、AI 功能和文件管理',
      ja: '録音、文字起こし、AI機能、ファイル管理',
    },
    icon: 'Smartphone',
    sections: [
      {
        id: 'recording-import',
        title: {
          en: 'Recording & Import',
          zh: '录音与导入',
          'zh-TW': '錄音與導入',
          ja: '録音とインポート',
        },
        icon: 'Mic',
        description: {
          en: 'How to record and import audio',
          zh: '如何录音和导入音频',
          'zh-TW': '如何錄音和導入音頻',
          ja: '録音とオーディオのインポート方法',
        },
        items: [
          {
            id: 'recording-methods',
            question: {
              en: 'What recording methods does Lynse support?',
              zh: '灵光记支持哪些录音方式？',
              'zh-TW': '靈光記支援哪些錄音方式？',
              ja: 'Lynseはどのような録音方法に対応していますか？',
            },
            answer: {
              en: 'Lynse supports three recording methods:\n\n• Phone Recording: Use your phone\'s microphone. Suitable for temporary notes, meetings, classes, and ideas.\n• Device Recording: Use the SparkCard, sync to app after connection. Suitable for long meetings, interviews, and offline communication.\n• Import Audio: Import existing audio files. Suitable for organizing historical recordings and external audio.\n\nDevice recording and phone recording can be used simultaneously without interfering with each other.',
              zh: '灵光记支持三种录音方式：\n\n• 手机录音：使用手机麦克风录音。适合临时记录、会议、课堂、灵感。\n• 设备录音：使用灵光闪记卡录音，连接手机后同步到 App。适合长会议、采访、线下沟通。\n• 导入音频：从手机文件入口导入已有音频。适合整理历史录音、外部音频。\n\n设备录音和手机录音可以同时进行，互不影响。',
              'zh-TW': '靈光記支援三種錄音方式：\n\n• 手機錄音：使用手機麥克風錄音。適合臨時記錄、會議、課堂、靈感。\n• 設備錄音：使用靈光閃記卡錄音，連接手機後同步到 App。適合長會議、採訪、線下溝通。\n• 導入音頻：從手機文件入口導入已有音頻。適合整理歷史錄音、外部音頻。\n\n設備錄音和手機錄音可以同時進行，互不影響。',
              ja: 'Lynseは3つの録音方法に対応：\n\n• スマホ録音：スマホのマイクを使用。一時的なメモ、会議、授業、アイデアに。\n• デバイス録音：SparkCardで録音、接続後にアプリに同期。長時間の会議、インタビュー、オフラインコミュニケーションに。\n• オーディオインポート：既存のオーディオファイルをインポート。過去の録音や外部オーディオの整理に。\n\nデバイス録音とスマホ録音は同時に使用可能で、互いに干渉しません。',
            },
            promoted: true,
          },
          {
            id: 'recording-limit',
            question: {
              en: 'Is there a limit on single recording or transcription?',
              zh: '单次录音或转写有上限吗？',
              'zh-TW': '單次錄音或轉寫有上限嗎？',
              ja: '1回の録音や文字起こしに上限はありますか？',
            },
            answer: {
              en: 'Yes. The limit for a single recording, import, or transcription is 300 minutes (5 hours). Audio exceeding this limit should be processed in segments.',
              zh: '有。单次录音、导入或转写上限为 300 分钟（5 小时）。超过上限的音频建议分段处理。',
              'zh-TW': '有。單次錄音、導入或轉寫上限為 300 分鐘（5 小時）。超過上限的音頻建議分段處理。',
              ja: 'はい。1回の録音、インポート、または文字起こしの上限は300分（5時間）です。上限を超えるオーディオは分割して処理することをお勧めします。',
            },
          },
          {
            id: 'how-to-import',
            question: {
              en: 'How do I import existing audio?',
              zh: '如何导入已有音频？',
              'zh-TW': '如何導入已有音頻？',
              ja: '既存のオーディオをどうインポートしますか？',
            },
            answer: {
              en: 'Use the import function in the app, or import audio from system files, photo library, voice memos, or third-party app sharing. Common supported formats include MP3, WAV, M4A, etc. After importing, audio can be transcribed and summarized like regular recordings.',
              zh: '在 App 中使用导入入口，或从系统文件、相册、录音备忘录、第三方 App 的分享入口导入音频。支持格式以页面展示为准，常见格式包括 MP3、WAV、M4A 等。导入后，音频可像普通录音一样发起转写、总结和模板生成。',
              'zh-TW': '在 App 中使用導入入口，或從系統文件、相冊、錄音備忘錄、第三方 App 的分享入口導入音頻。支援格式以頁面展示為準，常見格式包括 MP3、WAV、M4A 等。導入後，音頻可像普通錄音一樣發起轉寫、總結和模板生成。',
              ja: 'アプリ内のインポート機能を使用するか、システムファイル、フォトアルバム、ボイスメモ、サードパーティアプリの共有からオーディオをインポートします。対応形式はMP3、WAV、M4Aなどです。インポート後、通常の録音と同様に文字起こしや要約を行えます。',
            },
          },
          {
            id: 'phone-recording',
            question: {
              en: 'How do I use phone recording?',
              zh: '手机录音怎么用？',
              'zh-TW': '手機錄音怎麼用？',
              ja: 'スマホ録音の使い方は？',
            },
            answer: {
              en: 'When using phone recording for the first time, you need to grant the system microphone permission. After starting recording, you can pause, resume, stop, cancel, or complete the file as supported by the page.\n\nIt\'s recommended to keep the app running normally during recording and avoid system permission or background restrictions affecting the recording.',
              zh: '首次使用手机录音时，需要授予系统麦克风权限。开始录音后，可按页面支持的操作暂停、继续、停止、取消或完成生成文件。\n\n录音过程中建议保持 App 正常运行，并避免系统权限或后台限制影响录制。',
              'zh-TW': '首次使用手機錄音時，需要授予系統麥克風權限。開始錄音後，可按頁面支援的操作暫停、繼續、停止、取消或完成生成文件。\n\n錄音過程中建議保持 App 正常運行，並避免系統權限或後台限制影響錄製。',
              ja: 'スマホ録音を初めて使用する際は、システムのマイク権限を付与する必要があります。録音開始後、ページでサポートされている操作で一時停止、再開、停止、キャンセル、またはファイルの完了ができます。\n\n録音中はアプリを正常に動作させ、システムの権限やバックグラウンド制限の影響を避けてください。',
            },
          },
          {
            id: 'dual-recording',
            question: {
              en: 'Can device recording and phone recording be used simultaneously?',
              zh: '设备录音和手机录音可以同时进行吗？',
              'zh-TW': '設備錄音和手機錄音可以同時進行嗎？',
              ja: 'デバイス録音とスマホ録音は同時に使用できますか？',
            },
            answer: {
              en: 'Yes. Device recording and phone recording can be used simultaneously without interfering with each other. Each saves independently after completion.',
              zh: '可以。设备录音和手机录音可以同时进行，互不影响，完成后分别保存。',
              'zh-TW': '可以。設備錄音和手機錄音可以同時進行，互不影響，完成後分別保存。',
              ja: 'はい。デバイス録音とスマホ録音は同時に使用可能で、互いに干渉せず、完了後にそれぞれ保存されます。',
            },
          },
        ],
      },
      {
        id: 'ai-transcription-summary',
        title: {
          en: 'AI Transcription & Summary',
          zh: 'AI 转写与总结',
          'zh-TW': 'AI 轉寫與總結',
          ja: 'AI文字起こしと要約',
        },
        icon: 'Sparkles',
        description: {
          en: 'Transcription, summary, and AI features',
          zh: '转写、总结和 AI 功能',
          'zh-TW': '轉寫、總結和 AI 功能',
          ja: '文字起こし、要約、AI機能',
        },
        items: [
          {
            id: 'ai-features-after-recording',
            question: {
              en: 'What can the AI do after recording?',
              zh: '录音后 AI 可以做什么？',
              'zh-TW': '錄音後 AI 可以做什麼？',
              ja: '録音後にAIは何ができますか？',
            },
            answer: {
              en: 'After recording or importing audio, Lynse can generate:\n\n• Transcription: Convert audio to text.\n• AI Summary: Organize into structured notes using templates.\n• To-Do Items: Extract tasks, responsible persons, and deadlines.\n• Mind Map: Organize long content into hierarchical structure.\n• LynClaw Follow-up: Continue asking questions about the current file, tags, or all files.',
              zh: '录音或导入音频后，灵光记可生成：\n\n• 转写文本：将音频转换为文字。\n• AI 总结：按模板整理成结构化笔记。\n• 待办事项：从内容中提取任务、负责人和截止时间。\n• 思维导图：将长内容整理为层级结构。\n• LynClaw 追问：继续围绕当前文件、标签或全部文件提问。',
              'zh-TW': '錄音或導入音頻後，靈光記可生成：\n\n• 轉寫文本：將音頻轉換為文字。\n• AI 總結：按模板整理成結構化筆記。\n• 待辦事項：從內容中提取任務、負責人和截止時間。\n• 思維導圖：將長內容整理成層級結構。\n• LynClaw 追問：繼續圍繞當前文件、標籤或全部文件提問。',
              ja: '録音またはオーディオインポート後、Lynseは以下を生成できます：\n\n• 文字起こし：オーディオをテキストに変換。\n• AI要約：テンプレートを使用して構造化ノートに整理。\n• TODO項目：タスク、担当者、期限を抽出。\n• マインドマップ：長いコンテンツを階層構造に整理。\n• LynClawフォローアップ：現在のファイル、タグ、または全ファイルについて質問を続ける。',
            },
            promoted: true,
          },
          {
            id: 'auto-vs-manual-generation',
            question: {
              en: 'What\'s the difference between auto and manual generation?',
              zh: '自动生成和手动生成有什么区别？',
              'zh-TW': '自動生成和手動生成有什麼區別？',
              ja: '自動生成と手動生成の違いは何ですか？',
            },
            answer: {
              en: 'Auto generation is suitable for quick default results — the system generates transcription, summary, or related content with current settings. Manual generation is for when you want to choose your own summary template, audio language, AI model, or other options.\n\nIf the result doesn\'t meet expectations, try changing the template, language, or model and regenerate. Regeneration may overwrite current results.',
              zh: '自动生成适合快速获得默认结果，系统会按当前配置生成转写、总结或相关内容。手动生成适合你希望自己选择总结模板、音频语言、AI 模型或其他选项的场景。\n\n如果生成结果不符合预期，可尝试更换模板、语言或模型后重新生成。重新生成可能覆盖或替换当前结果。',
              'zh-TW': '自動生成適合快速獲得預設結果，系統會按當前配置生成轉寫、總結或相關內容。手動生成適合你希望自己選擇總結模板、音頻語言、AI 模型或其他選項的場景。\n\n如果生成結果不符合預期，可嘗試更換模板、語言或模型後重新生成。重新生成可能覆蓋或替換當前結果。',
              ja: '自動生成は現在の設定でデフォルト結果を素早く得たい場合に適しています。手動生成は、要約テンプレート、オーディオ言語、AIモデルなどを自分で選択したい場合に適しています。\n\n結果が期待に沿わない場合は、テンプレート、言語、モデルを変更して再生成してください。再生成は現在の結果を上書きする場合があります。',
            },
          },
          {
            id: 'transcription-accuracy',
            question: {
              en: 'What affects transcription accuracy?',
              zh: '转写准确度受什么影响？',
              'zh-TW': '轉寫準確度受什麼影響？',
              ja: '文字起こしの精度に影響する要因は何ですか？',
            },
            answer: {
              en: 'Transcription accuracy is affected by recording environment, speaker distance, accent, speech speed, overlapping speakers, background noise, microphone position, and industry terminology.\n\nFor better results, place the device close to the main speaker, minimize background noise, and use the dictionary feature for professional terminology.',
              zh: '转写准确度会受到录音环境、说话人距离、口音、语速、重叠说话、背景噪声、设备麦克风位置和行业术语影响。\n\n建议录音时让设备靠近主要说话人，尽量减少背景噪声，并在需要时使用词库提升专业术语识别效果。',
              'zh-TW': '轉寫準確度會受到錄音環境、說話人距離、口音、語速、重疊說話、背景噪聲、設備麥克風位置和行業術語影響。\n\n建議錄音時讓設備靠近主要說話人，盡量減少背景噪聲，並在需要使用時詞庫提升專業術語識別效果。',
              ja: '文字起こしの精度は、録音環境、話者との距離、アクセント、話す速度、話者の重なり、背景ノイズ、マイクの位置、業界用語に影響されます。\n\nより良い結果を得るために、デバイスをメインの話し手に近づけ、背景ノイズを最小限にし、専門用語には辞書機能を使用してください。',
            },
          },
          {
            id: 'credits-for-transcription',
            question: {
              en: 'How are credits deducted for AI transcription?',
              zh: 'AI 转写怎么扣积分？',
              'zh-TW': 'AI 轉寫怎麼扣積分？',
              ja: 'AI文字起こしのクレジットはどう引かれますか？',
            },
            answer: {
              en: 'Transcription is charged by credits: 1 credit = 1 minute of transcription. Less than 1 minute is charged as 1 credit. The single recording/transcription limit is 300 minutes (5 hours). Elite members enjoy unlimited transcription.',
              zh: '转写按积分扣费，通常 1 积分 = 1 分钟转写时长，不足 1 分钟按 1 积分扣除。单次录音或转写上限为 300 分钟（5 小时）。精英会员为无限转写。',
              'zh-TW': '轉寫按積分扣費，通常 1 積分 = 1 分鐘轉寫時長，不足 1 分鐘按 1 積分扣除。單次錄音或轉寫上限為 300 分鐘（5 小時）。精英會員為無限轉寫。',
              ja: '文字起こしはクレジットで課金されます：1クレジット＝1分の文字起こし。1分未満は1クレジットとして課金。1回の録音/文字起こしの上限は300分（5時間）です。エリートメンバーは無制限の文字起こしを利用できます。',
            },
          },
          {
            id: 'mind-map',
            question: {
              en: 'Where can I view the mind map? Can I edit it?',
              zh: '思维导图在哪里看？可以编辑吗？',
              'zh-TW': '思維導圖在哪裡看？可以編輯嗎？',
              ja: 'マインドマップはどこで見られますか？編集できますか？',
            },
            answer: {
              en: 'The mind map is generated based on transcription and summary, and is usually displayed on the file details page or summary area. If the content is inaccurate, adjust the transcription, summary, or template first, then regenerate. Whether direct editing is supported depends on the current app version.',
              zh: '思维导图通常基于转写和总结生成，用来快速查看主题层级和重点关系。它一般会出现在文件详情页或总结相关区域。如果思维导图内容不准确，通常需要先调整转写、总结或模板后重新生成。是否支持直接编辑，以当前 App 页面为准。',
              'zh-TW': '思維導圖通常基於轉寫和總結生成，用來快速查看主題層級和重點關係。它一般會出現在文件詳情頁或總結相關區域。如果思維導圖內容不準確，通常需要先調整轉寫、總結或模板後重新生成。是否支援直接編輯，以當前 App 頁面為準。',
              ja: 'マインドマップは文字起こしと要約に基づいて生成され、通常ファイル詳細ページまたは要約エリアに表示されます。内容が不正確な場合は、まず文字起こし、要約、またはテンプレートを調整してから再生成してください。直接編集の対応は、現在のアプリバージョンにより異なります。',
            },
          },
          {
            id: 'summary-failed',
            question: {
              en: 'What if summary generation fails?',
              zh: '生成总结失败怎么办？',
              'zh-TW': '生成總結失敗怎麼辦？',
              ja: '要約の生成に失敗した場合はどうすればいいですか？',
            },
            answer: {
              en: 'Please check:\n1. Is the network stable?\n2. Has the audio been fully uploaded or synced?\n3. Does the current account have available credits or membership benefits?\n4. Is the file length within the single limit?\n5. Does the file title, import title, or content trigger sensitive content rules?\n\nIf the recording or transcription text triggers sensitive content, transcription may complete normally, but summary or note generation may show a violation prompt.',
              zh: '请先检查：\n1. 网络是否稳定。\n2. 音频是否已经完成上传或同步。\n3. 当前账号是否有可用积分或会员权益。\n4. 文件长度是否超过单次上限。\n5. 文件标题、导入标题或内容是否触发敏感内容规则。\n\n如果录音或转写文本命中敏感内容，转写可能正常完成，但生成总结或笔记时可能提示"您的转写内容中有违规内容"。',
              'zh-TW': '請先檢查：\n1. 網絡是否穩定。\n2. 音頻是否已經完成上傳或同步。\n3. 當前賬號是否有可用積分或會員權益。\n4. 文件長度是否超過單次上限。\n5. 文件標題、導入標題或內容是否觸發敏感內容規則。\n\n如果錄音或轉寫文本命中敏感內容，轉寫可能正常完成，但生成總結或筆記時可能提示"您的轉寫內容中有違規內容"。',
              ja: '以下を確認してください：\n1. ネットワークは安定していますか？\n2. オーディオは完全にアップロードまたは同期されていますか？\n3. 現在のアカウントに利用可能なクレジットまたはメンバーシップ特典がありますか？\n4. ファイルの長さが1回の上限内ですか？\n5. ファイルタイトル、インポートタイトル、またはコンテンツが機密コンテンツルールに抵触していませんか？',
            },
          },
          {
            id: 'sensitive-word',
            question: {
              en: 'What should I do when I see a sensitive content prompt?',
              zh: '遇到敏感词提示怎么办？',
              'zh-TW': '遇到敏感詞提示怎麼辦？',
              ja: '機密コンテンツの警告が出たらどうすればいいですか？',
            },
            answer: {
              en: 'Different scenarios have different prompts:\n\n• When uploading or importing audio with a sensitive title, the upload or import may fail.\n• When recording or transcription text triggers sensitive words, transcription may complete normally, but summary or note generation may show "Your transcription contains prohibited content".\n• When editing notes and auto-syncing, sensitive parts may be replaced with *** and prompt "Sensitive words detected in transcription".',
              zh: '不同场景的提示不同：\n\n• 上传录音文件或导入音频标题命中敏感词时，上传或导入可能失败。\n• 录音或转写文本命中敏感词时，转写可能正常完成，但生成总结或笔记时可能提示"您的转写内容中有违规内容"。\n• 编辑笔记并自动同步时，如果命中敏感词，敏感部分可能被替换为 ***，并提示"检测到转写中有敏感词"。',
              'zh-TW': '不同場景的提示不同：\n\n• 上傳錄音文件或導入音頻標題命中敏感詞時，上傳或導入可能失敗。\n• 錄音或轉寫文本命中敏感詞時，轉寫可能正常完成，但生成總結或筆記時可能提示"您的轉寫內容中有違規內容"。\n• 編輯筆記並自動同步時，如果命中敏感詞，敏感部分可能被替換為 ***，並提示"檢測到轉寫中有敏感詞"。',
              ja: 'シナリオによって警告が異なります：\n\n• 機密タイトルを含むオーディオのアップロードまたはインポート時、アップロードまたはインポートが失敗する場合があります。\n• 録音や文字起こしテキストが機密ワードにヒットした場合、文字起こしは正常に完了する場合がありますが、要約やノートの生成時に「文字起こし内容に違反内容があります」と表示される場合があります。\n• ノートを編集して自動同期する際、機密ワードにヒットした場合、機密部分が *** に置き換えられ、「文字起こしに機密ワードが検出されました」と表示される場合があります。',
            },
          },
        ],
      },
      {
        id: 'lynclaw-ai',
        title: {
          en: 'LynClaw AI Assistant',
          zh: 'LynClaw AI 助手',
          'zh-TW': 'LynClaw AI 助手',
          ja: 'LynClaw AIアシスタント',
        },
        icon: 'Bot',
        description: {
          en: 'AI-powered Q&A assistant',
          zh: 'AI 对话助手',
          'zh-TW': 'AI 對話助手',
          ja: 'AI搭載Q&Aアシスタント',
        },
        items: [
          {
            id: 'what-is-lynclaw',
            question: {
              en: 'What is LynClaw?',
              zh: 'LynClaw 是什么？',
              'zh-TW': 'LynClaw 是什麼？',
              ja: 'LynClawとは何ですか？',
            },
            answer: {
              en: 'LynClaw is the built-in AI conversation assistant in Lynse that helps you ask follow-up questions based on recordings, notes, and tags.\n\n• Without opening a specific file: defaults to asking about all files.\n• When opened in a specific file: defaults to asking about the current file.\n• When opened under a tag: defaults to asking about the current tag.\n• Use @ to select a file (1 file at a time).\n• Use # to select tags (up to 3 tags).',
              zh: 'LynClaw 是灵光记内置的 AI 对话助手，可以帮助你基于录音、笔记和标签继续提问。\n\n• 未打开具体文件时，默认基于全部文件提问。\n• 在具体文件中呼出时，默认基于当前文件提问。\n• 在标签下呼出时，默认基于当前标签提问。\n• 使用 @ 可选择文件，单次选择 1 个文件。\n• 使用 # 可选择标签，最多选择 3 个标签。',
              'zh-TW': 'LynClaw 是靈光記內置的 AI 對話助手，可以幫助你基於錄音、筆記和標籤繼續提問。\n\n• 未打開具體文件時，預設基於全部文件提問。\n• 在具體文件中呼出時，預設基於當前文件提問。\n• 在標籤下呼出時，預設基於當前標籤提問。\n• 使用 @ 可選擇文件，單次選擇 1 個文件。\n• 使用 # 可選擇標籤，最多選擇 3 個標籤。',
              ja: 'LynClawは、Lynseに内蔵されたAI会話アシスタントで、録音、ノート、タグに基づいてフォローアップの質問をすることができます。\n\n• 特定のファイルを開いていない場合：すべてのファイルについて質問します。\n• 特定のファイル内で開いた場合：現在のファイルについて質問します。\n• タグの下で開いた場合：現在のタグについて質問します。\n• @ を使用してファイルを選択（1回に1つ）。\n• # を使用してタグを選択（最大3つ）。',
            },
            promoted: true,
          },
          {
            id: 'single-vs-all-files',
            question: {
              en: 'What\'s the difference between asking about a single file vs. all files?',
              zh: '基于单个文件提问和基于全部文件提问有什么区别？',
              'zh-TW': '基於單個文件提問和基於全部文件提問有什麼區別？',
              ja: '単一ファイルと全ファイルの質問の違いは何ですか？',
            },
            answer: {
              en: 'When asking about a single file, LynClaw focuses on the current recording, transcription, and summary — suitable for deep-diving into a meeting, interview, or class. When asking about all files, LynClaw searches across available files — suitable for recalling past events, cross-project research, or summarizing content across multiple files.\n\nIf you know which recording contains the answer, ask within that file. If you\'re unsure, ask from all files or by tag.',
              zh: '基于单个文件提问时，LynClaw 会更聚焦当前录音、转写和总结，适合深挖一次会议、访谈或课堂内容。基于全部文件提问时，LynClaw 会在可用文件范围内查找信息，适合回忆过去某个事项、跨项目查找线索或汇总多个文件中的内容。\n\n如果你已经知道问题来自哪一份录音，优先在该文件内提问；如果不确定答案在哪个文件里，可以从全部文件或标签范围提问。',
              'zh-TW': '基於單個文件提問時，LynClaw 會更聚焦當前錄音、轉寫和總結，適合深挖一次會議、訪談或課堂內容。基於全部文件提問時，LynClaw 會在可用文件範圍內查找資訊，適合回憶過去某個事項、跨項目查找線索或匯總多個文件中的內容。\n\n如果你已經知道問題來自哪一份錄音，優先在該文件內提問；如果不確定答案在哪個文件裡，可以從全部文件或標籤範圍提問。',
              ja: '単一ファイルについて質問する場合、LynClawは現在の録音、文字起こし、要約に焦点を当てます — 会議、インタビュー、授業の内容を深掘りするのに適しています。全ファイルについて質問する場合、利用可能なファイル全体を検索します — 過去の出来事を思い出したり、プロジェクト横断的な調査、複数ファイルの内容をまとめるのに適しています。',
            },
          },
          {
            id: 'input-limits',
            question: {
              en: 'What are the input limits for LynClaw?',
              zh: 'LynClaw 输入有什么限制？',
              'zh-TW': 'LynClaw 輸入有什麼限制？',
              ja: 'LynClawの入力制限は何ですか？',
            },
            answer: {
              en: '• Text input: up to 1000 characters, input box shows up to 8 lines.\n• Voice input: up to 1 minute per input.\n• You can stop generation at any time and then enter a new question.\n• Long press user questions to copy or edit them. Editing regenerates subsequent answers.',
              zh: '• 文本输入最多 1000 字，输入框最多显示 8 行。\n• 单次语音输入上限为 1 分钟。\n• AI 输出未完成时，可以停止生成，再重新输入问题。\n• 长按用户问题进行复制或修改。修改历史问题后，后续回答会被舍弃并重新生成。',
              'zh-TW': '• 文本輸入最多 1000 字，輸入框最多顯示 8 行。\n• 單次語音輸入上限為 1 分鐘。\n• AI 輸出未完成時，可以停止生成，再重新輸入問題。\n• 長按用戶問題進行複製或修改。修改歷史問題後，後續回答會被捨棄並重新生成。',
              ja: '• テキスト入力：最大1000文字、入力ボックスは最大8行表示。\n• 音声入力：1回あたり最大1分。\n• AI出力が完了していない場合、生成を停止して新しい質問を入力できます。\n• ユーザーの質問を長押ししてコピーまたは編集できます。編集すると、後続の回答は破棄され再生成されます。',
            },
          },
        ],
      },
      {
        id: 'file-management-export',
        title: {
          en: 'File Management & Export',
          zh: '文件管理与导出',
          'zh-TW': '文件管理與匯出',
          ja: 'ファイル管理とエクスポート',
        },
        icon: 'Folder',
        description: {
          en: 'Manage, export, and share your files',
          zh: '管理、导出和分享文件',
          'zh-TW': '管理、匯出和分享文件',
          ja: 'ファイルの管理、エクスポート、共有',
        },
        items: [
          {
            id: 'export-formats',
            question: {
              en: 'What export formats are supported?',
              zh: '支持哪些导出格式？',
              'zh-TW': '支援哪些匯出格式？',
              ja: 'どのようなエクスポート形式に対応していますか？',
            },
            answer: {
              en: 'Common export formats include:\n\n• Audio: MP3, WAV, M4A, etc.\n• Transcription: TXT, SRT, PDF\n• Summary: TXT, Markdown, PDF\n• Mind Map: As supported by the current page\n\nExport options may include timestamps and speaker identification. Supported formats may vary by platform and version.',
              zh: '常见导出格式包括：\n\n• 音频：MP3、WAV、M4A 等\n• 转写文字：TXT、SRT、PDF\n• 总结：TXT、Markdown、PDF\n• 思维导图：以页面支持格式为准\n\n导出时可能支持包含时间戳、区分说话人等选项。不同平台和版本支持的格式可能不同。',
              'zh-TW': '常見匯出格式包括：\n\n• 音頻：MP3、WAV、M4A 等\n• 轉寫文字：TXT、SRT、PDF\n• 總結：TXT、Markdown、PDF\n• 思維導圖：以頁面支援格式為準\n\n匯出時可能支援包含時間戳、區分說話人等選項。不同平台和版本支援的格式可能不同。',
              ja: '一般的なエクスポート形式：\n\n• オーディオ：MP3、WAV、M4Aなど\n• 文字起こし：TXT、SRT、PDF\n• 要約：TXT、Markdown、PDF\n• マインドマップ：現在のページでサポートされている形式\n\nエクスポートオプションにはタイムスタンプや話者識別が含まれる場合があります。対応形式はプラットフォームやバージョンにより異なる場合があります。',
            },
          },
          {
            id: 'tags-usage',
            question: {
              en: 'How do I use tags?',
              zh: '标签怎么用？',
              'zh-TW': '標籤怎麼用？',
              ja: 'タグの使い方は？',
            },
            answer: {
              en: 'Tags are used to categorize files, displayed as #tagname. You can use tags to organize meetings, courses, clients, projects, or topics. You can also let LynClaw ask questions within a specific tag scope.',
              zh: '标签用于给文件归类，常见展示格式为 #标签名称。你可以用标签管理会议、课程、客户、项目或主题，也可以让 LynClaw 基于指定标签范围提问。',
              'zh-TW': '標籤用於給文件歸類，常見展示格式為 #標籤名稱。你可以用標籤管理會議、課程、客戶、項目或主題，也可以讓 LynClaw 基於指定標籤範圍提問。',
              ja: 'タグはファイルを分類するために使用され、#タグ名 の形式で表示されます。会議、コース、クライアント、プロジェクト、トピックをタグで管理できます。LynClawに特定のタグ範囲内で質問させることもできます。',
            },
          },
          {
            id: 'cloud-sync',
            question: {
              en: 'What happens to files if I turn off cloud sync?',
              zh: '关闭云同步后文件会怎样？',
              'zh-TW': '關閉雲同步後文件會怎樣？',
              ja: 'クラウド同期をオフにするとファイルはどうなりますか？',
            },
            answer: {
              en: 'Turning off cloud sync does not automatically delete recordings. Different types of data may exist separately in the app local, device, and cloud. Before deleting files, cleaning device storage, or turning off sync, please read the page prompts carefully.\n\nRegardless of whether cloud sync is enabled, notes and transcriptions may need to be uploaded to the cloud for AI processing and multi-device visibility.',
              zh: '关闭云同步不等于自动删除录音。不同类型的数据可能分别存在于 App 本地、设备端和云端。删除文件、清理设备存储或关闭同步前，请认真阅读页面提示。\n\n无论是否开启云同步，笔记和转写内容可能需要上传云端以完成 AI 处理和多设备可见。',
              'zh-TW': '關閉雲同步不等於自動刪除錄音。不同類型的數據可能分別存在於 App 本地、設備端和雲端。刪除文件、清理設備儲存或關閉同步前，請認真閱讀頁面提示。\n\n無論是否開啟雲同步，筆記和轉寫內容可能需要上傳雲端以完成 AI 處理和多設備可見。',
              ja: 'クラウド同期をオフにしても、録音は自動的に削除されません。異なるタイプのデータは、アプリローカル、デバイス側、クラウドにそれぞれ存在する場合があります。ファイルの削除、デバイスストレージのクリーニング、または同期のオフを行う前に、ページのプロンプトをよくお読みください。',
            },
          },
          {
            id: 'note-editing',
            question: {
              en: 'Can I directly edit notes?',
              zh: '笔记可以直接编辑吗？',
              'zh-TW': '筆記可以直接編輯嗎？',
              ja: 'ノートを直接編集できますか？',
            },
            answer: {
              en: 'Yes. The notes page is editable by default. You can directly tap content to modify it, and the system will auto-sync according to current rules.\n\nThe notes toolbar usually includes font size, font style, numbering, quotes, images, undo, etc. Regenerating the summary may replace existing note content. If you have manually edited notes, check the page prompt before regenerating.',
              zh: '可以。笔记页默认可编辑，不设置独立查看/编辑模式。你可以直接点按内容进行修改，系统会按当前规则自动同步。\n\n笔记工具栏通常包含字号、字体、序号、引用、图片、撤回等入口。重新生成总结可能替换已有笔记内容。如果你已经手动编辑过笔记，重新生成前建议先确认页面提示。',
              'zh-TW': '可以。筆記頁預設可編輯，不設置獨立查看/編輯模式。你可以直接點按內容進行修改，系統會按當前規則自動同步。\n\n筆記工具欄通常包含字號、字體、序號、引用、圖片、撤回等入口。重新生成總結可能替換已有筆記內容。如果你已經手動編輯過筆記，重新生成前建議先確認頁面提示。',
              ja: 'はい。ノートページはデフォルトで編集可能です。コンテンツを直接タップして修正でき、システムは現在のルールに従って自動同期します。\n\nノートツールバーには通常、フォントサイズ、フォントスタイル、番号付け、引用、画像、元に戻すなどが含まれます。要約の再生成は既存のノート内容を置換する場合があります。',
            },
          },
          {
            id: 'share-vs-export',
            question: {
              en: 'What\'s the difference between sharing and exporting?',
              zh: '分享链接和导出有什么区别？',
              'zh-TW': '分享鏈接和匯出有什麼區別？',
              ja: '共有とエクスポートの違いは何ですか？',
            },
            answer: {
              en: 'Exporting usually generates a file to send to others. Sharing a link allows others to view the content via a link — whether an account is required, and whether downloading or editing is allowed, depends on the current sharing settings.\n\nSharing involves privacy risks. For sensitive content such as client, meeting, medical, legal, or financial information, choose sharing scope carefully.',
              zh: '导出通常是生成文件后发送给他人。分享链接通常是让他人通过链接查看内容，是否需要账号、是否可下载或编辑，以 App 当前分享页设置为准。\n\n分享包含隐私风险。涉及客户、会议、医疗、法律、财务等敏感内容时，请谨慎选择公开链接或邀请范围。',
              'zh-TW': '匯出通常是生成文件後發送給他人。分享鏈接通常是讓他人通過鏈接查看內容，是否需要賬號、是否可下載或編輯，以 App 當前分享頁設置為準。\n\n分享包含隱私風險。涉及客戶、會議、醫療、法律、財務等敏感內容時，請謹慎選擇公開鏈接或邀請範圍。',
              ja: 'エクスポートは通常、ファイルを生成して他人に送信します。リンク共有は通常、リンクを通じてコンテンツを閲覧させます — アカウントが必要かどうか、ダウンロードや編集が可能かどうかは、現在の共有設定によります。\n\n共有にはプライバシーリスクが伴います。クライアント、会議、医療、法律、財務などの機密コンテンツの場合は、共有範囲を慎重に選択してください。',
            },
          },
          {
            id: 'todo-usage',
            question: {
              en: 'How do I use to-do items?',
              zh: '待办事项怎么用？',
              'zh-TW': '待辦事項怎麼用？',
              ja: 'TODO項目の使い方は？',
            },
            answer: {
              en: 'Lynse can automatically extract to-dos from recording summaries and sync them to the to-do list. To-dos are de-duplicated and may be grouped by this week, this month, over one month, overdue, or no date.\n\nTo-dos typically support viewing, completing, restoring, or deleting. Due date reminders and other features depend on the current app version.',
              zh: '灵光记可从录音总结中自动提取待办，并同步到待办列表。待办会尽量去重，并可按本周、本月、超过一个月、已过期、无日期等分组。\n\n待办通常支持查看、完成、恢复或删除。到期提醒等能力以 App 当前版本为准。',
              'zh-TW': '靈光記可從錄音總結中自動提取待辦，並同步到待辦列表。待辦會盡量去重，並可按本週、本月、超過一個月、已過期、無日期等分組。\n\n待辦通常支援查看、完成、恢復或刪除。到期提醒等能力以 App 當前版本為準。',
              ja: 'Lynseは録音要約からTODOを自動抽出し、TODOリストに同期できます。TODOは重複排除され、今週、今月、1ヶ月超過、期限切れ、日付なしなどでグループ分けされます。\n\nTODOは通常、表示、完了、復元、削除をサポートします。期限リマインダーなどの機能は現在のアプリバージョンによります。',
            },
          },
        ],
      },
    ],
  },
  // ── 4. Membership & Payment ──────────────────────────────────
  {
    id: 'membership-payment',
    title: {
      en: 'Membership & Payment',
      zh: '会员、积分与支付',
      'zh-TW': '會員、積分與支付',
      ja: 'メンバーシップと支払い',
    },
    description: {
      en: 'Plans, credits, subscriptions and billing',
      zh: '会员计划、积分、订阅和账单',
      'zh-TW': '會員計劃、積分、訂閱和賬單',
      ja: 'プラン、クレジット、サブスクリプション、請求',
    },
    icon: 'Crown',
    sections: [
      {
        id: 'membership-plans',
        title: {
          en: 'Membership Plans',
          zh: '会员计划',
          'zh-TW': '會員計劃',
          ja: 'メンバーシッププラン',
        },
        icon: 'Award',
        description: {
          en: 'Membership tiers and benefits',
          zh: '会员等级和权益',
          'zh-TW': '會員等級和權益',
          ja: 'メンバーシップティアと特典',
        },
        items: [
          {
            id: 'membership-tiers',
            question: {
              en: 'What are the membership tiers?',
              zh: '会员等级有哪些？',
              'zh-TW': '會員等級有哪些？',
              ja: 'メンバーシップティアは何ですか？',
            },
            answer: {
              en: '• Free User: No SparkCard bound. Basic free benefits with monthly basic credits as shown in the membership center.\n• Standard Member: Automatically obtained after binding a SparkCard. 500 credits/month.\n• Premium Member: Via paid subscription or promotional benefits. 1500 credits/month, more benefits as shown in the membership center.\n• Elite Member: Via paid subscription or promotional benefits. Unlimited transcription, specific benefits as shown in the membership center.\n\nFree users must first bind a SparkCard to become Standard Members before accessing paid membership or credit pack purchases. Free users cannot directly purchase Premium/Elite membership or credit packs.',
              zh: '• 普通用户：未绑定灵光闪记卡。免费基础权益，每月基础积分以会员中心为准。\n• 标准会员：绑定灵光闪记卡后自动获得。每月 500 积分，正常使用当前开放功能。\n• 高级会员：付费订阅或活动权益。每月 1500 积分，更多权益以会员中心为准。\n• 精英会员：付费订阅或活动权益。无限转写，具体权益以会员中心为准。\n\n普通用户需先绑定灵光闪记卡，成为标准会员后，再进入付费会员或充电包购买路径。普通用户不能直接购买高级/精英会员，也不能购买充电包。',
              'zh-TW': '• 普通用戶：未綁定靈光閃記卡。免費基礎權益，每月基礎積分以會員中心為準。\n• 標準會員：綁定靈光閃記卡後自動獲得。每月 500 積分，正常使用當前開放功能。\n• 高級會員：付費訂閱或活動權益。每月 1500 積分，更多權益以會員中心為準。\n• 精英會員：付費訂閱或活動權益。無限轉寫，具體權益以會員中心為準。\n\n普通用戶需先綁定靈光閃記卡，成為標準會員後，再進入付費會員或充電包購買路徑。普通用戶不能直接購買高級/精英會員，也不能購買充電包。',
              ja: '• 無料ユーザー：SparkCard未バインド。基本無料特典と月次基本クレジット（メンバーシップセンターに表示）。\n• スタンダードメンバー：SparkCardバインド後自動付与。500クレジット/月。\n• プレミアムメンバー：有料サブスクリプションまたはプロモーション特典。1500クレジット/月。\n• エリートメンバー：有料サブスクリプションまたはプロモーション特典。無制限の文字起こし。\n\n無料ユーザーはまずSparkCardをバインドしてスタンダードメンバーになる必要があります。無料ユーザーはプレミアム/エリートメンバーシップやクレジットパックを直接購入できません。',
            },
            promoted: true,
          },
          {
            id: 'credits-calculation',
            question: {
              en: 'How are credits calculated?',
              zh: '积分怎么计算？',
              'zh-TW': '積分怎麼計算？',
              ja: 'クレジットはどう計算されますか？',
            },
            answer: {
              en: '• 1 credit = 1 minute of transcription.\n• Less than 1 minute is charged as 1 credit.\n• Single recording/transcription limit: 300 minutes (5 hours).\n• Periodic credits do not carry over.\n\nCredit consumption order:\n1. Time-limited bonus credits.\n2. Periodic base credits.\n3. Credit pack credits (prioritizes the one expiring first).',
              zh: '• 1 积分 = 1 分钟转写时长。\n• 不足 1 分钟按 1 积分扣除。\n• 单次录音或转写上限为 300 分钟（5 小时）。\n• 周期性积分不结转。\n\n积分消耗顺序通常为：\n1. 有时限赠送积分。\n2. 周期性基础积分。\n3. 充电包积分（优先消耗最先过期的充电包）。',
              'zh-TW': '• 1 積分 = 1 分鐘轉寫時長。\n• 不足 1 分鐘按 1 積分扣除。\n• 單次錄音或轉寫上限為 300 分鐘（5 小時）。\n• 週期性積分不結轉。\n\n積分消耗順序通常為：\n1. 有時限贈送積分。\n2. 週期性基礎積分。\n3. 充電包積分（優先消耗最先過期的充電包）。',
              ja: '• 1クレジット＝1分の文字起こし。\n• 1分未満は1クレジットとして課金。\n• 1回の録音/文字起こしの上限：300分（5時間）。\n• 定期的なクレジットは繰り越されません。\n\nクレジット消費順序：\n1. 期限付きボーナスクレジット。\n2. 定期的な基本クレジット。\n3. クレジットパックのクレジット（最も早く期限が切れるものを優先）。',
            },
          },
          {
            id: 'credit-packs',
            question: {
              en: 'What are credit packs?',
              zh: '什么是充电包？',
              'zh-TW': '什麼是充電包？',
              ja: 'クレジットパックとは何ですか？',
            },
            answer: {
              en: 'Credit packs are used to supplement transcription credits, available to Standard and Premium members. Free users must first bind a SparkCard to become Standard Members before purchasing. Elite members have unlimited transcription and cannot purchase credit packs.\n\nCredit packs are valid for 365 days. You can hold multiple active packs simultaneously. New packs calculate their validity independently. When starting a transcription, the system automatically consumes credits — no need to manually select a specific pack.',
              zh: '充电包是用于额外补充转写积分的增值资源。充电包面向标准会员与高级会员开放；普通用户需先绑定灵光闪记卡成为标准会员后再购买；精英会员享有完全无限转写权益，无法且无需购买充电包。\n\n充电包有效期为 365 天，可同时持有多个有效充电包。新增充电包会独立计算有效期。发起转写时，系统会按规则自动消耗积分，无需手动选择某个充电包。',
              'zh-TW': '充電包是用於額外補充轉寫積分的增值資源。充電包面向標準會員與高級會員開放；普通用戶需先綁定靈光閃記卡成為標準會員後再購買；精英會員享有完全無限轉寫權益，無法且無需購買充電包。\n\n充電包有效期為 365 天，可同時持有多個有效充電包。新增充電包會獨立計算有效期。發起轉寫時，系統會按規則自動消耗積分，無需手動選擇某個充電包。',
              ja: 'クレジットパックは文字起こしクレジットを補充するための追加リソースです。スタンダードおよびプレミアムメンバーが利用可能です。無料ユーザーはまずSparkCardをバインドしてスタンダードメンバーになる必要があります。エリートメンバーは無制限の文字起こしがあり、クレジットパックは購入できません。\n\nクレジットパックの有効期限は365日です。複数の有効なパックを同時に保持できます。文字起こし開始時、システムは自動的にクレジットを消費します。',
            },
          },
          {
            id: 'redeem-code',
            question: {
              en: 'How do I use a redemption code?',
              zh: '兑换码怎么用？',
              'zh-TW': '兌換碼怎麼用？',
              ja: '交換コードの使い方は？',
            },
            answer: {
              en: 'Redemption codes usually come from hardware bundles or official promotions and can be used to redeem corresponding membership benefits.\n\nBefore redeeming, confirm you are logged into the correct Lynse account. After successful redemption, benefits will be added to the current account and synced across all supported devices.\n\nRedemption rules:\n• Higher tier code: Takes effect immediately, replacing current lower tier.\n• Same tier code: Extends current membership validity.\n• Lower tier code: Not redeemable (e.g., Elite members cannot redeem Premium codes).\n\nRedemption codes have their own validity period — use them before expiry.\n\nRedemption codes only affect membership benefits within the Lynse account and do not automatically cancel, pause, or modify auto-renewal subscriptions on App Store, WeChat, Alipay, or other platforms.',
              zh: '兑换码是通过购买电商硬件捆绑套餐或参与官方运营活动获得的专属凭证，可用于兑换高级会员或精英会员权益。\n\n兑换前请确认当前登录的是要绑定权益的灵光记账号。兑换成功后，权益会进入当前账号，并可在所有支持灵光记的设备上同步使用。\n\n兑换码生效规则为：\n• 高于当前会员等级的兑换码：立即生效并替代当前较低等级权益。\n• 等于当前会员等级的兑换码：叠加到当前同级会员有效期后。\n• 低于当前会员等级的兑换码：不支持兑换。例如精英会员不能兑换高级会员码。\n\n兑换码有独立有效期，请在有效期内使用。\n\n兑换码只影响灵光记账号内的会员权益，不会自动取消、暂停或修改 App Store、微信、支付宝等平台的自动续费订阅。',
              'zh-TW': '兌換碼是通過購買電商硬體捆綁套餐或參與官方運營活動獲得的專屬憑證，可用於兌換高級會員或精英會員權益。\n\n兌換前請確認當前登錄的是要綁定權益的靈光記賬號。兌換成功後，權益會進入當前賬號，並可在所有支援靈光記的設備上同步使用。\n\n兌換碼生效規則為：\n• 高於當前會員等級的兌換碼：立即生效並替代當前較低等級權益。\n• 等於當前會員等級的兌換碼：疊加到當前同級會員有效期後。\n• 低於當前會員等級的兌換碼：不支援兌換。例如精英會員不能兌換高級會員碼。\n\n兌換碼有獨立有效期，請在有效期內使用。\n\n兌換碼只影響靈光記賬號內的會員權益，不會自動取消、暫停或修改 App Store、微信、支付寶等平台的自動續費訂閱。',
              ja: '交換コードは、ECハードウェアバンドルパッケージの購入または公式キャンペーンへの参加で取得できる専用コードで、プレミアムまたはエリートメンバーシップ特典と交換できます。\n\n交換前に、正しいLynseアカウントにログインしていることを確認してください。交換成功後、特典は現在のアカウントに追加され、対応するすべてのデバイスで同期して利用できます。\n\n交換ルール：\n• 現在より上位ティアのコード：即座に有効になり、現在の下位ティアを置き換えます。\n• 同ティアのコード：現在のメンバーシップ有効期間の後に重ねられます。\n• 現在より下位ティアのコード：交換できません。例えばエリートメンバーはプレミアムコードを交換できません。\n\n交換コードには独立した有効期限があります。\n\n交換コードはLynseアカウント内のメンバーシップ特典にのみ影響し、App Store、WeChat、Alipayなどの自動更新サブスクリプションを自動的にキャンセル、一時停止、または変更することはありません。',
            },
          },
          {
            id: 'membership-expiry',
            question: {
              en: 'Will my recordings and notes be deleted after membership expires?',
              zh: '会员到期后，录音和笔记会被删除吗？',
              'zh-TW': '會員到期後，錄音和筆記會被刪除嗎？',
              ja: 'メンバーシップ期限後、録音とノートは削除されますか？',
            },
            answer: {
              en: 'No. Membership expiry does not automatically delete your recordings and notes. After paid membership expires, your account reverts to the available basic membership tier. Whether existing files can continue to be transcribed or use premium features depends on your current membership benefits.',
              zh: '不会。会员到期不会自动删除你的录音和笔记。付费会员到期后，账号会按当前状态回到可用的基础会员等级；已有文件是否可继续转写、生成总结或使用高级能力，以当前会员权益和 App 页面提示为准。',
              'zh-TW': '不會。會員到期不會自動刪除你的錄音和筆記。付費會員到期後，賬號會按當前狀態回到可用的基礎會員等級；已有文件是否可繼續轉寫、生成總結或使用高級能力，以當前會員權益和 App 頁面提示為準。',
              ja: 'いいえ。メンバーシップの期限切れは、録音やノートを自動的に削除しません。有料メンバーシップの期限後、アカウントは利用可能な基本メンバーシップティアに戻ります。既存ファイルの文字起こしやプレミアム機能の使用可否は、現在のメンバーシップ特典によります。',
            },
          },
          {
            id: 'cancel-subscription',
            question: {
              en: 'How do I cancel auto-renewal?',
              zh: '如何取消自动续费？',
              'zh-TW': '如何取消自動續費？',
              ja: '自動更新をキャンセルするには？',
            },
            answer: {
              en: 'Auto-renewal is charged within 24 hours before the current membership cycle expires. To cancel, go to the original payment platform:\n\n• iOS: System Settings → Apple ID → Subscriptions → Select Lynse and cancel.\n• Android: Manage in WeChat or Alipay payment/agreement settings.\n\nPlease cancel at least 24 hours before the next billing date. After cancellation, the current membership benefits remain valid until the end of the cycle. Refund results for charged orders depend on the corresponding payment platform rules.',
              zh: '开通"自动续费"套餐后，系统将在当前会员周期到期前 24 小时内，从你的签约账户扣除下个周期费用。\n\n取消自动续费时，请到原支付平台操作：\n\n• iOS：系统"设置" → Apple ID → 订阅 → 选择灵光记并取消。\n• Android：微信或支付宝的支付/扣费协议管理中取消。\n\n请确保在扣费前至少 24 小时完成取消操作。取消后，已生效的当期会员权益仍可使用至周期结束。已扣费订单的退款申请和处理结果以对应支付平台规则为准。',
              'zh-TW': '開通"自動續費"套餐後，系統將在當前會員週期到期前 24 小時內，從你的簽約賬戶扣除下個週期費用。\n\n取消自動續費時，請到原支付平台操作：\n\n• iOS：系統"設置" → Apple ID → 訂閱 → 選擇靈光記並取消。\n• Android：微信或支付寶的支付/扣費協議管理中取消。\n\n請確保在扣費前至少 24 小時完成取消操作。取消後，已生效的當期會員權益仍可使用至週期結束。已扣費訂單的退款申請和處理結果以對應支付平台規則為準。',
              ja: '「自動更新」プランを有効にすると、現在のメンバーシップ周期の満了24時間前に、契約アカウントから次回の料金が決済されます。\n\n自動更新をキャンセルするには、元の支払いプラットフォームで操作してください：\n\n• iOS：システム設定 → Apple ID → サブスクリプション → Lynseを選択してキャンセル。\n• Android：WeChatまたはAlipayの支払い/契約管理でキャンセル。\n\n決済の少なくとも24時間前にキャンセルを完了してください。キャンセル後、現在のメンバーシップ特典は周期終了まで利用可能です。',
            },
          },
          {
            id: 'change-phone',
            question: {
              en: 'Will my membership still work after changing phones?',
              zh: '更换手机后会员还在吗？',
              'zh-TW': '更換手機後會員還在嗎？',
              ja: 'スマホを変えてもメンバーシップは続きますか？',
            },
            answer: {
              en: 'Yes. Membership, credits, credit packs, and redemption code benefits are tied to your Lynse account. After changing phones, log in to the same account to restore your available benefits.',
              zh: '在。会员、积分、充电包和兑换码权益与灵光记账号绑定。更换手机后，登录原账号即可恢复账号内可用权益。',
              'zh-TW': '在。會員、積分、充電包和兌換碼權益與靈光記賬號綁定。更換手機後，登錄原賬號即可恢復賬號內可用權益。',
              ja: 'はい。メンバーシップ、クレジット、クレジットパック、交換コードの特典はLynseアカウントに紐付けられています。スマホを変更した後、同じアカウントにログインすると利用可能な特典が復元されます。',
            },
          },
          {
            id: 'membership-stacking',
            question: {
              en: 'Can membership validity periods be stacked?',
              zh: '会员有效期可以叠加吗？',
              'zh-TW': '會員有效期可以疊加嗎？',
              ja: 'メンバーシップの有効期間は重ねられますか？',
            },
            answer: {
              en: 'Different tier subscriptions do not stack directly. If you purchase or redeem a higher tier while holding a lower tier, it is processed as an upgrade or replacement rather than extending the original validity.\n\nSame-tier redemption codes usually extend the current same-tier membership validity. Higher-tier codes take effect immediately, replacing the current lower tier. Lower-tier codes are usually not redeemable.',
              zh: '不同等级订阅不会直接叠加。已有高级会员时购买或兑换精英会员，会按升级或替代逻辑处理，而不是延长原高级会员有效期。\n\n同级兑换码通常可以叠加到当前同级会员有效期后。更高等级兑换码会立即生效并替代当前较低等级权益；更低等级兑换码通常不支持兑换。',
              'zh-TW': '不同等級訂閱不會直接疊加。已有高級會員時購買或兌換精英會員，會按升級或替代邏輯處理，而不是延長原高級會員有效期。\n\n同級兌換碼通常可以疊加到當前同級會員有效期後。更高等級兌換碼會立即生效並替代當前較低等級權益；更低等級兌換碼通常不支援兌換。',
              ja: '異なるティアのサブスクリプションは直接重ねられません。下位ティアを保持している間に上位ティアを購入または交換すると、元の有効期間の延長ではなく、アップグレードまたは置換として処理されます。\n\n同ティアの交換コードは通常、現在の同ティアメンバーシップ有効期間の後に重ねられます。上位ティアのコードは即座に有効になります。下位ティアのコードは通常交換できません。',
            },
          },
          {
            id: 'upgrade-membership',
            question: {
              en: 'Can I upgrade my membership?',
              zh: '可以升级会员吗？',
              'zh-TW': '可以升級會員嗎？',
              ja: 'メンバーシップをアップグレードできますか？',
            },
            answer: {
              en: 'During the membership validity period, you can upgrade or change the plan cycle as prompted in the app. Common rules:\n\n• Monthly Premium: Can upgrade to monthly Elite or annual Elite.\n• Annual Premium: Can only upgrade to annual Elite.\n• Monthly Elite: Can change to annual Elite.\n\nAfter upgrading, new benefits take effect as prompted. After upgrading from Premium to Elite, the original Premium benefits are replaced and no longer retained separately.',
              zh: '在会员有效期内，你可以按 App 页面提示升级会员或变更套餐周期。常见规则：\n\n• 月付高级会员：可申请升级为月付精英会员或年付精英会员。\n• 年付高级会员：仅支持申请升级为年付精英会员。\n• 月付精英会员：可申请变更为年付精英会员。\n\n升级成功后，新会员权益会按页面提示生效。高级会员升级为精英会员后，原高级会员权益会被精英会员替代，不再单独保留或恢复。',
              'zh-TW': '在會員有效期內，你可以按 App 頁面提示升級會員或變更套餐週期。常見規則：\n\n• 月付高級會員：可申請升級為月付精英會員或年付精英會員。\n• 年付高級會員：僅支援申請升級為年付精英會員。\n• 月付精英會員：可申請變更為年付精英會員。\n\n升級成功後，新會員權益會按頁面提示生效。高級會員升級為精英會員後，原高級會員權益會被精英會員替代，不再單獨保留或恢復。',
              ja: 'メンバーシップ有効期間中、アプリの指示に従ってアップグレードまたはプラン周期を変更できます。一般的なルール：\n\n• 月額プレミアム：月額エリートまたは年額エリートにアップグレード可能。\n• 年額プレミアム：年額エリートへのアップグレードのみ可能。\n• 月額エリート：年額エリートへの変更可能。\n\nアップグレード後、新しい特典は指示に従って有効になります。プレミアムからエリートへのアップグレード後、元のプレミアム特典はエリートに置換され、個別には保持されません。',
            },
          },
          {
            id: 'payment-methods',
            question: {
              en: 'What payment methods are supported?',
              zh: '支持哪些支付方式？',
              'zh-TW': '支援哪些支付方式？',
              ja: 'どのような支払い方法に対応していますか？',
            },
            answer: {
              en: 'Supported payment methods vary by region, platform, and product type. Common options include WeChat Pay, Alipay, Apple Pay, and major credit cards. Please refer to the app payment page, product order page, or payment platform for actual options.\n\nAfter a successful purchase, membership benefits and credit packs are added to your Lynse account and synced across all supported devices.',
              zh: '灵光记支持的支付方式会根据地区、平台和商品类型有所不同，常见方式包括微信支付、支付宝、Apple Pay 和主流信用卡等。请以 App 内支付页、商品订单页或对应支付平台实际展示为准。\n\n购买成功后，会员权益和充电包积分会进入你的灵光记账号，并可在所有支持灵光记的设备上同步使用。',
              'zh-TW': '靈光記支援的支付方式會根據地區、平台和商品類型有所不同，常見方式包括微信支付、支付寶、Apple Pay 和主流信用卡等。請以 App 內支付頁、商品訂單頁或對應支付平台實際展示為準。\n\n購買成功後，會員權益和充電包積分會進入你的靈光記賬號，並可在所有支援靈光記的設備上同步使用。',
              ja: '対応する支払い方法は地域、プラットフォーム、商品タイプにより異なります。一般的なオプションには、WeChat Pay、Alipay、Apple Pay、主要クレジットカードなどがあります。アプリの支払いページ、商品注文ページ、または支払いプラットフォームで実際のオプションを確認してください。\n\n購入成功後、メンバーシップ特典とクレジットパックはLynseアカウントに追加され、対応するすべてのデバイスで同期して使用できます。',
            },
          },
          {
            id: 'upgrade-billing',
            question: {
              en: 'How does membership upgrade billing work?',
              zh: '升级会员等级或变更套餐周期如何扣费与生效？',
              'zh-TW': '升級會員等級或變更套餐週期如何扣費與生效？',
              ja: 'メンバーシップのアップグレードやプラン変更の請求と有効化はどうなりますか？',
            },
            answer: {
              en: 'Cross-tier upgrades take effect immediately. After upgrading from Premium to Elite, the Elite membership validity is recalculated from the upgrade time, and the original Premium benefits are replaced by Elite and no longer retained separately.\n\nOn Android and other channels, the actual payment amount is calculated based on the page display and payment channel rules. On iOS, the App Store handles subscription upgrades, billing, and remaining value according to platform rules.\n\nSame-tier cycle changes also take effect immediately. For example, changing from monthly Premium to annual Premium or monthly Elite to annual Elite — the new cycle is recalculated from the change time. Specific billing, deductions, or refund results depend on the app page and payment platform rules.',
              zh: '跨级升级会立即生效。高级会员升级为精英会员后，精英会员有效期从升级成功时间重新计算，原高级会员权益被精英会员替代，不再单独保留或恢复。\n\n安卓及其他渠道的实际支付金额，根据页面展示和支付渠道规则计算。iOS 客户端由 App Store 按平台规则处理订阅升级、扣费和原订阅剩余价值。\n\n同级变更周期会立即生效。例如月付高级变更为年付高级、月付精英变更为年付精英，新的会员周期从变更成功时间重新计算。具体扣费、抵扣或退款结果以 App 页面和支付平台规则为准。',
              'zh-TW': '跨級升級會立即生效。高級會員升級為精英會員後，精英會員有效期從升級成功時間重新計算，原高級會員權益被精英會員替代，不再單獨保留或恢復。\n\n安卓及其他渠道的實際支付金額，根據頁面展示和支付渠道規則計算。iOS 客戶端由 App Store 按平台規則處理訂閱升級、扣費和原訂閱剩餘價值。\n\n同級變更週期會立即生效。例如月付高級變更為年付高級、月付精英變更為年付精英，新的會員週期從變更成功時間重新計算。具體扣費、抵扣或退款結果以 App 頁面和支付平台規則為準。',
              ja: 'ティア間のアップグレードは即座に有効になります。プレミアムからエリートへのアップグレード後、エリートメンバーシップの有効期間はアップグレード成功時から再計算され、元のプレミアム特典はエリートに置換されます。\n\nAndroidおよびその他のチャネルの実際の支払い金額は、ページ表示と支払いチャネルルールに基づいて計算されます。iOSはApp Storeがプラットフォームルールに従ってサブスクリプションのアップグレード、請求、残存価値を処理します。\n\n同ティアの周期変更も即座に有効になります。具体的な請求、控除、返金結果はアプリページと支払いプラットフォームのルールによります。',
            },
          },
          {
            id: 'cross-platform-upgrade',
            question: {
              en: 'Can I upgrade my membership on iOS if I subscribed on Android?',
              zh: '在安卓开通的会员，可以在苹果手机上升级吗？',
              'zh-TW': '在安卓開通的會員，可以在蘋果手機上升級嗎？',
              ja: 'Androidで加入したメンバーシップをiPhoneでアップグレードできますか？',
            },
            answer: {
              en: 'No. Due to App Store restrictions, if your current Premium membership was activated through Android or other non-iOS channels, the system does not support cross-platform upgrades on iOS. Please go to the original payment platform or device to complete the upgrade.',
              zh: '不可以。受 App Store 规则限制，如果当前高级会员是通过 Android 或其他非 iOS 渠道开通的，系统不支持在 iOS 端跨渠道升级。如需升级，请前往原支付平台或原设备上完成操作。',
              'zh-TW': '不可以。受 App Store 規則限制，如果當前高級會員是通過 Android 或其他非 iOS 渠道開通的，系統不支援在 iOS 端跨渠道升級。如需升級，請前往原支付平台或原設備上完成操作。',
              ja: 'いいえ。App Storeの制限により、現在のプレミアムメンバーシップがAndroidまたはその他の非iOSチャネルで有効化された場合、iOSでのクロスプラットフォームアップグレードはサポートされていません。アップグレードするには、元の支払いプラットフォームまたはデバイスで操作してください。',
            },
          },
          {
            id: 'invoice',
            question: {
              en: 'How do I apply for an invoice?',
              zh: '如何申请发票？',
              'zh-TW': '如何申請發票？',
              ja: '請求書の申請方法は？',
            },
            answer: {
              en: 'Invoice issuance and delivery rely on third-party processing systems:\n\n• iOS users: Payment is handled by Apple App Store. Please contact Apple Support to request an invoice or view purchase receipts. Lynse cannot process this directly.\n• Android users: After paying via WeChat or Alipay, apply for an invoice on the payment success page or billing details page. Electronic invoices will be issued to WeChat Card Pack or Alipay Invoice Manager.\n\nPlease confirm that the invoice title, tax ID, and contact information are accurate. Electronic invoice issuance and delivery depend on the corresponding payment platform or third-party invoicing system.',
              zh: '发票的开具与交付依托于第三方处理系统：\n\n• iOS 用户：支付由 Apple App Store 统一处理，请联系 Apple Support 申请发票或查看购买凭据，灵光记无法直接处理。\n• Android 用户：使用微信或支付宝支付后，请在支付成功页面或账单详情页申请开票。电子发票将开具并发送至微信卡包或支付宝发票管家。\n\n提交发票信息时，请确认发票抬头、企业税号、联系方式等信息准确无误。电子发票的开具和交付方式以对应支付平台或第三方开票系统为准。',
              'zh-TW': '發票的開具與交付依託於第三方處理系統：\n\n• iOS 用戶：支付由 Apple App Store 統一處理，請聯繫 Apple Support 申請發票或查看購買憑據，靈光記無法直接處理。\n• Android 用戶：使用微信或支付寶支付後，請在支付成功頁面或賬單詳情頁申請開票。電子發票將開具並發送至微信卡包或支付寶發票管家。\n\n提交發票資訊時，請確認發票抬頭、企業稅號、聯繫方式等資訊準確無誤。電子發票的開具和交付方式以對應支付平台或第三方開票系統為準。',
              ja: '請求書の発行と配信はサードパーティの処理システムに依存します：\n\n• iOSユーザー：支払いはApple App Storeが一括処理します。Apple Supportにお問い合わせください。Lynseは直接処理できません。\n• Androidユーザー：WeChatまたはAlipayでの支払い後、支払い成功ページまたは請求詳細ページで請求書を申請してください。電子請求書はWeChatカードパックまたはAlipay請求書マネージャーに発行されます。\n\n請求書のタイトル、納税者番号、連絡先情報が正確であることを確認してください。',
            },
          },
          {
            id: 'return-refund',
            question: {
              en: 'What happens to promotional benefits after returning hardware?',
              zh: '退货后赠送权益会怎样？',
              'zh-TW': '退貨後贈送權益會怎樣？',
              ja: 'ハードウェア返品後、特典はどうなりますか？',
            },
            answer: {
              en: 'When returning a hardware order, promotional or redeemed benefits bundled with the order will be traced and recovered based on the order, device SN code, and redemption code records. The specific outcome depends on the purchase platform\'s after-sales rules, order status, and customer service processing.',
              zh: '硬件订单退货时，随订单赠送或兑换的权益会按订单、设备 SN 码和兑换码记录进行追溯和回收。具体处理结果以购买平台售后规则、订单状态和客服处理结果为准。',
              'zh-TW': '硬體訂單退貨時，隨訂單贈送或兌換的權益會按訂單、設備 SN 碼和兌換碼記錄進行追溯和回收。具體處理結果以購買平台售後規則、訂單狀態和客服處理結果為準。',
              ja: 'ハードウェア注文の返品時、注文に付属した特典または交換コード特典は、注文、デバイスSNコード、交換コード記録に基づいて追跡・回収されます。具体的な結果は購入プラットフォームのアフターサービスルール、注文状態、カスタマーサービスの処理結果によります。',
            },
          },
        ],
      },
    ],
  },
  // ── 5. Troubleshooting ─────────────────────────────────────────
  {
    id: 'troubleshooting',
    title: {
      en: 'Troubleshooting',
      zh: '故障排查',
      'zh-TW': '故障排查',
      ja: 'トラブルシューティング',
    },
    description: {
      en: 'Common issues and solutions',
      zh: '常见问题和解决方案',
      'zh-TW': '常見問題和解決方案',
      ja: '一般的な問題と解決策',
    },
    icon: 'Wrench',
    sections: [
      {
        id: 'device-issues',
        title: {
          en: 'Device Issues',
          zh: '设备问题',
          'zh-TW': '設備問題',
          ja: 'デバイスの問題',
        },
        icon: 'AlertCircle',
        description: {
          en: 'Hardware troubleshooting',
          zh: '硬件故障排查',
          'zh-TW': '硬體故障排查',
          ja: 'ハードウェアのトラブルシューティング',
        },
        items: [
          {
            id: 'device-wont-power-on',
            question: {
              en: 'My device won\'t power on. What should I do?',
              zh: '设备无法开机怎么办？',
              'zh-TW': '設備無法開機怎麼辦？',
              ja: 'デバイスの電源が入りません。どうすればいいですか？',
            },
            answer: {
              en: '1. Charge the device for a while first.\n2. Check if the charging cable and power source are working properly.\n3. Follow the device manual to try powering on or resetting.\n4. If still unable to power on, prepare the device SN code, purchase order, and a video of the issue, then contact official support.',
              zh: '1. 先为设备充电一段时间。\n2. 检查充电线和电源是否正常。\n3. 按设备说明书尝试开机或重置。\n4. 仍无法开机时，请准备设备 SN 码、购买订单和问题视频，联系官方客服。',
              'zh-TW': '1. 先為設備充電一段時間。\n2. 檢查充電線和電源是否正常。\n3. 按設備說明書嘗試開機或重置。\n4. 仍無法開機時，請準備設備 SN 碼、購買訂單和問題視頻，聯繫官方客服。',
              ja: '1. まずデバイスをしばらく充電してください。\n2. 充電ケーブルと電源が正常に動作しているか確認してください。\n3. デバイスの取扱説明書に従って、電源を入れるかリセットを試みてください。\n4. それでも電源が入らない場合は、デバイスのSNコード、購入注文、問題の動画を用意して、公式サポートにお問い合わせください。',
            },
            promoted: true,
          },
          {
            id: 'device-battery-drains',
            question: {
              en: 'My device battery drains quickly. What should I do?',
              zh: '设备耗电快怎么办？',
              'zh-TW': '設備耗電快怎麼辦？',
              ja: 'デバイスのバッテリーが早く減ります。どうすればいいですか？',
            },
            answer: {
              en: 'Check if the device has been in connection, recording, transfer, or standby mode for an extended period. Also check auto-sleep settings and firmware version in device settings. If abnormal battery drain persists, record the usage duration and scenario after a full charge, then contact official support.',
              zh: '请检查设备是否长时间处于连接、录音、传输或待机状态。也可进入设备设置查看自动休眠和固件版本。若耗电异常持续出现，请记录充满电后的使用时长和场景，再联系官方客服。',
              'zh-TW': '請檢查設備是否長時間處於連接、錄音、傳輸或待機狀態。也可進入設備設置查看自動休眠和固件版本。若耗電異常持續出現，請記錄充滿電後的使用時長和場景，再聯繫官方客服。',
              ja: 'デバイスが長時間接続、録音、転送、またはスタンバイ状態になっていないか確認してください。デバイス設定で自動スリープとファームウェアバージョンも確認してください。異常なバッテリー消費が続く場合は、フル充電後の使用時間とシナリオを記録して、公式サポートにお問い合わせください。',
            },
          },
          {
            id: 'device-wont-connect',
            question: {
              en: 'My device won\'t connect. What should I do?',
              zh: '设备连接不上怎么办？',
              'zh-TW': '設備連接不上怎麼辦？',
              ja: 'デバイスが接続できません。どうすればいいですか？',
            },
            answer: {
              en: '1. Confirm phone Bluetooth is turned on.\n2. Confirm the SparkCard has sufficient battery.\n3. Bring the device close to the phone.\n4. Close and reopen the app.\n5. Try searching for the device again.\n6. If still unable to connect, reset the device as prompted or contact support.',
              zh: '1. 确认手机蓝牙已开启。\n2. 确认灵光闪记卡电量充足。\n3. 将设备靠近手机。\n4. 关闭并重新打开 App。\n5. 尝试重新搜索设备。\n6. 仍无法连接时，按页面提示重置设备或联系客服。',
              'zh-TW': '1. 確認手機藍牙已開啟。\n2. 確認靈光閃記卡電量充足。\n3. 將設備靠近手機。\n4. 關閉並重新打開 App。\n5. 嘗試重新搜索設備。\n6. 仍無法連接時，按頁面提示重置設備或聯繫客服。',
              ja: '1. スマホのBluetoothがオンであることを確認します。\n2. SparkCardのバッテリーが十分であることを確認します。\n3. デバイスをスマホに近づけます。\n4. アプリを閉じて再度開きます。\n5. デバイスを再度検索してみます。\n6. それでも接続できない場合は、指示に従ってデバイスをリセットするか、サポートにお問い合わせください。',
            },
          },
          {
            id: 'huawei-screen-off',
            question: {
              en: 'My Huawei phone screen turns off when the device is attached. Why?',
              zh: '华为手机吸附设备后息屏怎么办？',
              'zh-TW': '華為手機吸附設備後息屏怎麼辦？',
              ja: 'Huaweiスマホにデバイスを付けると画面が消えます。なぜですか？',
            },
            answer: {
              en: 'Some Huawei phones may mistakenly trigger the system\'s "smart cover / flip cover mode" when the SparkCard or magnetic accessory is attached to the back, causing the phone to auto-lock or enter a cover-closed state.\n\nTry adjusting the device or magnetic accessory position, check cover mode settings in phone system settings, or avoid placing the device near trigger-prone areas.',
              zh: '部分华为手机在背面吸附灵光闪记卡或磁吸配件后，可能误触发系统的"皮套操作 / 皮套模式"，表现为手机自动息屏、锁屏。\n\n可尝试调整设备或磁吸配件的位置，在手机系统设置中检查皮套模式、智能保护套等相关设置，或暂时避免将设备长时间贴近容易触发的位置。',
              'zh-TW': '部分華為手機在背面吸附靈光閃記卡或磁吸配件後，可能誤觸發系統的"皮套操作 / 皮套模式"，表現為手機自動息屏、鎖屏。\n\n可嘗試調整設備或磁吸配件的位置，在手機系統設置中檢查皮套模式、智能保護套等相關設置，或暫時避免將設備長時間貼近容易觸發的位置。',
              ja: '一部のHuaweiスマホでは、SparkCardやマグネットアクセサリーを背面に付けると、システムの「スマートカバー/フリップカバーモード」が誤ってトリガーされ、スマホが自動ロックやカバー閉じた状態になることがあります。\n\nデバイスやマグネットアクセサリーの位置を調整し、スマホのシステム設定でカバーモードの設定を確認するか、トリガーされやすい場所にデバイスを長時間置かないようにしてください。',
            },
          },
          {
            id: 'device-low-volume',
            question: {
              en: 'My device volume is low or recording quality is poor. What should I do?',
              zh: '设备音量低或录音音质差怎么办？',
              'zh-TW': '設備音量低或錄音音質差怎麼辦？',
              ja: 'デバイスの音量が低い、または録音品質が悪い場合はどうすればいいですか？',
            },
            answer: {
              en: 'Make sure the device is not covered during recording, place it close to the main speaker, and minimize background noise. Transcription accuracy and recording clarity are affected by the environment in multi-person meetings or long-distance recordings.',
              zh: '请确认录音时设备没有被遮挡，设备靠近主要说话人，并尽量减少背景噪声。多人会议或远距离录音时，转写准确度和录音清晰度会受到环境影响。',
              'zh-TW': '請確認錄音時設備沒有被遮擋，設備靠近主要說話人，並盡量減少背景噪聲。多人會議或遠距離錄音時，轉寫準確度和錄音清晰度會受到環境影響。',
              ja: '録音時にデバイスが覆われていないことを確認し、メインの話し手に近づけ、背景ノイズを最小限にしてください。複数人の会議や遠距離録音では、文字起こしの精度と録音の明瞭さが環境の影響を受けます。',
            },
          },
        ],
      },
      {
        id: 'app-issues',
        title: {
          en: 'App Issues',
          zh: 'App 问题',
          'zh-TW': 'App 問題',
          ja: 'アプリの問題',
        },
        icon: 'Smartphone',
        description: {
          en: 'App troubleshooting',
          zh: 'App 故障排查',
          'zh-TW': 'App 故障排查',
          ja: 'アプリのトラブルシューティング',
        },
        items: [
          {
            id: 'upload-import-failed',
            question: {
              en: 'Upload or import failed. What should I do?',
              zh: '上传或导入失败怎么办？',
              'zh-TW': '上傳或導入失敗怎麼辦？',
              ja: 'アップロードまたはインポートに失敗しました。どうすればいいですか？',
            },
            answer: {
              en: 'Please check:\n• Is the phone network stable?\n• Is the audio file corrupted?\n• Is the file format supported?\n• Does the single audio exceed 300 minutes?\n• Does the file title or content trigger sensitive content rules?',
              zh: '请检查：\n• 手机网络是否稳定。\n• 音频文件是否损坏。\n• 文件格式是否受支持。\n• 单次音频是否超过 300 分钟。\n• 文件标题或内容是否触发敏感内容规则。',
              'zh-TW': '請檢查：\n• 手機網絡是否穩定。\n• 音頻文件是否損壞。\n• 文件格式是否受支援。\n• 單次音頻是否超過 300 分鐘。\n• 文件標題或內容是否觸發敏感內容規則。',
              ja: '以下を確認してください：\n• スマホのネットワークは安定していますか？\n• オーディオファイルは破損していませんか？\n• ファイル形式は対応していますか？\n• 1つのオーディオが300分を超えていませんか？\n• ファイルタイトルやコンテンツが機密コンテンツルールに抵触していませんか？',
            },
          },
          {
            id: 'sync-failed',
            question: {
              en: 'Sync or note saving failed. What should I do?',
              zh: '同步失败或笔记保存失败怎么办？',
              'zh-TW': '同步失敗或筆記保存失敗怎麼辦？',
              ja: '同期またはノートの保存に失敗しました。どうすればいいですか？',
            },
            answer: {
              en: 'First check the network status, then re-enter the file details page to see if it recovers. Under poor network or sync failure, the app should retain local changes and allow retry or keep a local copy. If the problem persists, save a screenshot and contact support.',
              zh: '请先检查网络状态，再重新进入文件详情页查看是否恢复。弱网或同步失败时，App 应尽量保留本机修改，并允许重试或保留本机副本。若问题持续，请保存截图并联系客服。',
              'zh-TW': '請先檢查網絡狀態，再重新進入文件詳情頁查看是否恢復。弱網或同步失敗時，App 應盡量保留本機修改，並允許重試或保留本機副本。若問題持續，請保存截圖並聯繫客服。',
              ja: 'まずネットワークの状態を確認し、ファイル詳細ページに再度入って回復するかどうか確認してください。ネットワークが不安定または同期失敗時、アプリはローカルの変更を保持し、再試行またはローカルコピーの保持を許可するはずです。問題が続く場合は、スクリーンショットを保存してサポートにお問い合わせください。',
            },
          },
          {
            id: 'transcription-runs-out',
            question: {
              en: 'I\'ve used up my transcription credits. What can I do?',
              zh: '转写额度用完怎么办？',
              'zh-TW': '轉寫額度用完怎麼辦？',
              ja: '文字起こしのクレジットを使い切りました。どうすればいいですか？',
            },
            answer: {
              en: '• Free User: Bind a SparkCard to become a Standard Member and get monthly credits.\n• Standard or Premium Member: Purchase credit packs or upgrade to a higher membership tier.\n• Elite Member: Unlimited transcription, so this usually doesn\'t apply.',
              zh: '• 普通用户：可按页面提示绑定灵光闪记卡，成为标准会员后获得对应月度积分。\n• 标准会员或高级会员：可购买充电包，或升级更高会员等级。\n• 精英会员：无限转写，通常不存在额度用尽问题。',
              'zh-TW': '• 普通用戶：可按頁面提示綁定靈光閃記卡，成為標準會員後獲得對應月度積分。\n• 標準會員或高級會員：可購買充電包，或升級更高會員等級。\n• 精英會員：無限轉寫，通常不存在額度用盡問題。',
              ja: '• 無料ユーザー：SparkCardをバインドしてスタンダードメンバーになり、月次クレジットを取得します。\n• スタンダードまたはプレミアムメンバー：クレジットパックを購入するか、上位ティアにアップグレードします。\n• エリートメンバー：無制限の文字起こしなので、通常この問題は発生しません。',
            },
          },
          {
            id: 'contact-prepare',
            question: {
              en: 'What should I prepare before contacting support?',
              zh: '联系客服前需要准备什么？',
              'zh-TW': '聯繫客服前需要準備什麼？',
              ja: 'サポートに連絡する前に何を準備すべきですか？',
            },
            answer: {
              en: 'If the problem is not resolved, you can check FAQs, submit feedback, or contact support in the app. Please provide:\n\n• Current login account\n• Phone system and app version\n• Time when the problem occurred\n• Order number or device SN code\n• Screenshots, screen recordings, or error messages\n• Steps you have already tried\n\nFor account appeals, binding issues, order anomalies, or redemption code problems, contact official support via the in-app channel or official email. Do not share verification codes, payment credentials, or account privacy information with unofficial channels.',
              zh: '问题仍未解决时，可在 App 内查看常见问题、提交反馈或联系客服。请提供：\n\n• 当前登录账号\n• 手机系统和 App 版本\n• 问题发生时间\n• 订单号或设备 SN 码\n• 问题截图、录屏或错误提示\n• 已经执行过的处理方式\n\n账号申诉、无法换绑、订单权益异常、兑换码异常等问题，可按页面提示联系官方客服邮箱或在线客服。请不要向非官方渠道提供验证码、支付凭据或账号隐私信息。',
              'zh-TW': '問題仍未解決時，可在 App 內查看常見問題、提交反饋或聯繫客服。請提供：\n\n• 當前登錄賬號\n• 手機系統和 App 版本\n• 問題發生時間\n• 訂單號或設備 SN 碼\n• 問題截圖、錄屏或錯誤提示\n• 已經執行過的處理方式\n\n賬號申訴、無法換綁、訂單權益異常、兌換碼異常等問題，可按頁面提示聯繫官方客服郵箱或在線客服。請不要向非官方渠道提供驗證碼、支付憑據或賬號隱私資訊。',
              ja: '問題が解決しない場合は、アプリ内のFAQを確認するか、フィードバックを送信するか、サポートにお問い合わせください。以下の情報を提供してください：\n\n• 現在のログインアカウント\n• スマホシステムとアプリバージョン\n• 問題が発生した時間\n• 注文番号またはデバイスSNコード\n• 問題のスクリーンショット、画面録画、エラーメッセージ\n• すでに実行した対応手順\n\nアカウント異議申し立て、バインド変更不可、注文異常、交換コード異常などは、アプリ内チャネルまたは公式メールで公式サポートにお問い合わせください。非公式チャネルに認証コード、支払い証明、アカウント情報を提供しないでください。',
            },
          },
        ],
      },
    ],
  },
  // ── 6. Account & Security ──────────────────────────────────────
  {
    id: 'account-security',
    title: {
      en: 'Account & Security',
      zh: '账号与安全',
      'zh-TW': '賬號與安全',
      ja: 'アカウントとセキュリティ',
    },
    description: {
      en: 'Login, account management, and security',
      zh: '登录、账号管理和安全',
      'zh-TW': '登錄、賬號管理和安全',
      ja: 'ログイン、アカウント管理、セキュリティ',
    },
    icon: 'Shield',
    sections: [
      {
        id: 'login-account',
        title: {
          en: 'Login & Account',
          zh: '登录与账号',
          'zh-TW': '登錄與賬號',
          ja: 'ログインとアカウント',
        },
        icon: 'User',
        description: {
          en: 'Login methods and account management',
          zh: '登录方式和账号管理',
          'zh-TW': '登錄方式和賬號管理',
          ja: 'ログイン方法とアカウント管理',
        },
        items: [
          {
            id: 'login-methods',
            question: {
              en: 'What login methods are supported?',
              zh: '支持哪些登录方式？',
              'zh-TW': '支援哪些登錄方式？',
              ja: 'どのようなログイン方法に対応していますか？',
            },
            answer: {
              en: '• Domestic users: Phone number verification code login. Third-party login options depend on current page display — typically WeChat and Apple (China region) for domestic users, Google and Apple (outside China) for international users.',
              zh: '国内用户可使用手机号验证码登录。第三方登录方式以当前页面展示为准，国内通常包含微信、国区 Apple，海外通常包含 Google、外区 Apple。',
              'zh-TW': '國內用戶可使用手機號驗證碼登錄。第三方登錄方式以當前頁面展示為準，國內通常包含微信、國區 Apple，海外通常包含 Google、外區 Apple。',
              ja: '• 国内ユーザー：電話番号の認証コードでログイン。サードパーティログインは現在のページ表示によります — 国内はWeChatとApple（中国地域）、海外はGoogleとApple（中国地域外）。',
            },
          },
          {
            id: 'verification-code',
            question: {
              en: 'How long is the verification code valid?',
              zh: '验证码有效多久？',
              'zh-TW': '驗證碼有效多久？',
              ja: '認証コードの有効期間は？',
            },
            answer: {
              en: 'The verification code can usually be requested again after 60 seconds and is valid for 5 minutes. If the code has expired, please request a new one.',
              zh: '验证码通常 60 秒可重新获取一次，有效期为 5 分钟。若验证码过期，请重新获取验证码。',
              'zh-TW': '驗證碼通常 60 秒可重新獲取一次，有效期為 5 分鐘。若驗證碼過期，請重新獲取驗證碼。',
              ja: '認証コードは通常60秒後に再要求でき、有効期間は5分間です。コードが期限切れの場合は、新しいコードを要求してください。',
            },
          },
          {
            id: 'login-duration',
            question: {
              en: 'How long does the login session last?',
              zh: '登录状态能保持多久？',
              'zh-TW': '登錄狀態能保持多久？',
              ja: 'ログイン状態はどのくらい保持されますか？',
            },
            answer: {
              en: 'After logging in, the session token remains valid for a period of time, typically requiring a refresh about every 90 days. Changing phones, clearing data, or security verification may require you to log in again.',
              zh: '登录成功后，登录凭证会在一段时间内保持有效，约 90 天需要刷新一次。更换手机、清除数据或账号出现安全校验时，可能需要重新登录。',
              'zh-TW': '登錄成功後，登錄憑證會在一段時間內保持有效，約 90 天需要刷新一次。更換手機、清除數據或賬號出現安全校驗時，可能需要重新登錄。',
              ja: 'ログイン後、セッショントークンは一定期間有効で、通常約90日ごとに更新が必要です。スマホの変更、データの消去、セキュリティ確認が発生した場合、再度ログインが必要になる場合があります。',
            },
          },
          {
            id: 'change-phone-email',
            question: {
              en: 'How do I change my bound phone number?',
              zh: '如何更换绑定的手机号？',
              'zh-TW': '如何更換綁定的手機號？',
              ja: 'バインドされた電話番号を変更するには？',
            },
            answer: {
              en: 'If the app version supports it, go to "Me" or account settings and follow the prompts. You\'ll usually need to verify both the old and new accounts.\n\nIf the old phone number is no longer accessible, follow the appeal process on the page and provide as much information as possible (original account, frequently used devices, recent orders or recharge records, screenshots) for customer service verification.',
              zh: '如果 App 当前版本已开放换绑入口，可在"我的"或账号设置页面按提示操作。换绑时通常需要验证旧账号和新账号。\n\n如果旧手机号无法使用，请按页面提示发起申诉，并尽量提供原账号、常用设备、近期订单或充值记录、相关截图等信息，方便客服核验。',
              'zh-TW': '如果 App 當前版本已開放換綁入口，可在"我的"或賬號設置頁面按提示操作。換綁時通常需要驗證舊賬號和新賬號。\n\n如果舊手機號無法使用，請按頁面提示發起申訴，並盡量提供原賬號、常用設備、近期訂單或充值記錄、相關截圖等資訊，方便客服核驗。',
              ja: 'アプリの現在のバージョンで対応している場合、「マイ」またはアカウント設定ページで指示に従って操作します。通常、古いアカウントと新しいアカウントの両方を確認する必要があります。\n\n古い電話番号にアクセスできない場合は、ページの手順に従って異議申し立てを行い、元のアカウント、よく使うデバイス、最近の注文、スクリーンショットなど、できるだけ多くの情報を提供してください。',
            },
          },
          {
            id: 'delete-account',
            question: {
              en: 'What should I know before deleting my account?',
              zh: '注销账号前需要注意什么？',
              'zh-TW': '註銷賬號前需要注意什麼？',
              ja: 'アカウントを削除する前に知っておくべきことは？',
            },
            answer: {
              en: 'Account deletion is irreversible. After deletion, account data, membership benefits, credits, credit packs, redemption code benefits, and device binding relationships cannot be recovered. Please read the page prompts carefully before proceeding.\n\nAfter changing your bound account, the system will restrict further changes, deletion, or password changes; the restriction duration is shown on the page.',
              zh: '注销账号不可逆。账号注销后，账号数据、会员权益、积分、充电包、兑换码权益和设备绑定关系无法恢复。提交前请认真阅读页面提示。\n\n账号换绑后，系统会限制再次换绑、注销或修改密码；限制时长以页面提示为准。',
              'zh-TW': '註銷賬號不可逆。賬號註銷後，賬號數據、會員權益、積分、充電包、兌換碼權益和設備綁定關係無法恢復。提交前請認真閱讀頁面提示。\n\n賬號換綁後，系統會限制再次換綁、註銷或修改密碼；限制時長以頁面提示為準。',
              ja: 'アカウントの削除は不可逆的です。削除後、アカウントデータ、メンバーシップ特典、クレジット、クレジットパック、交換コード特典、デバイスのバインド関係は回復できません。続行する前に、ページのプロンプトをよくお読みください。\n\nアカウントのバインド変更後、システムは再度の変更、削除、パスワード変更を制限します。制限期間はページに表示されます。',
            },
          },
        ],
      },
    ],
  },
  // ── 7. Personalization ─────────────────────────────────────
  {
    id: 'personalization',
    title: {
      en: 'Personalization',
      zh: '个性化设置',
      'zh-TW': '個性化設置',
      ja: 'カスタマイズ',
    },
    description: {
      en: 'Memory, dictionary, templates and settings',
      zh: '记忆、词库、模板和设置',
      'zh-TW': '記憶、詞庫、模板和設置',
      ja: 'メモリ、辞書、テンプレート、設定',
    },
    icon: 'Settings',
    sections: [
      {
        id: 'personalization-settings',
        title: {
          en: 'Personalization Settings',
          zh: '个性化设置',
          'zh-TW': '個性化設置',
          ja: 'カスタマイズ設定',
        },
        icon: 'Sliders',
        description: {
          en: 'Memory, dictionary and custom templates',
          zh: '记忆、词库和自定义模板',
          'zh-TW': '記憶、詞庫和自定義模板',
          ja: 'メモリ、辞書、カスタムテンプレート',
        },
        items: [
          {
            id: 'first-chat',
            question: {
              en: 'What is the first-chat questionnaire for?',
              zh: '首聊问答有什么用？',
              'zh-TW': '首聊問答有什麼用？',
              ja: '初回チャットの質問は何のためですか？',
            },
            answer: {
              en: 'When you first enter LynClaw, the system may ask about your preferences through a first-chat questionnaire with 4 stages:\n\n1. Professional field\n2. Industry or specialization\n3. High-frequency use scenarios\n4. Information organization preferences\n\nThis information is used to recommend default recording templates, optimize summary structure, improve industry term recognition, and enhance LynClaw responses.',
              zh: '首次进入 LynClaw 时，系统可能通过首聊问答了解你的使用偏好。首聊通常包含 4 个阶段：\n\n1. 职业领域\n2. 行业或细分领域\n3. 高频使用场景\n4. 信息整理偏好\n\n这些信息会用于推荐默认录音模板、优化摘要结构、增强行业词汇识别，并改善 LynClaw 回答。',
              'zh-TW': '首次進入 LynClaw 時，系統可能通過首聊問答瞭解你的使用偏好。首聊通常包含 4 個階段：\n\n1. 職業領域\n2. 行業或細分領域\n3. 高頻使用場景\n4. 資訊整理偏好\n\n這些資訊會用於推薦預設錄音模板、優化摘要結構、增強行業詞彙識別，並改善 LynClaw 回答。',
              ja: 'LynClawに初めて入る際、システムは4段階の初回チャット質問であなたの使用好みを尋ねる場合があります：\n\n1. 職業分野\n2. 業界または専門分野\n3. 高頻度の使用シナリオ\n4. 情報整理の好み\n\nこれらの情報は、デフォルト録音テンプレートの推奨、要約構造の最適化、業界用語認識の向上、LynClawの回答改善に使用されます。',
            },
            promoted: true,
          },
          {
            id: 'memory-dictionary-template',
            question: {
              en: 'What\'s the difference between memory, dictionary, and templates?',
              zh: '记忆、词库和模板有什么区别？',
              'zh-TW': '記憶、詞庫和模板有什麼區別？',
              ja: 'メモリ、辞書、テンプレートの違いは何ですか？',
            },
            answer: {
              en: '• Memory: Lets LynClaw save preferences, background, or context long-term for personalized Q&A.\n• Dictionary: Improves transcription recognition, especially for names, company names, and professional terms.\n• Templates: Determines the structure and output style of AI summaries.\n\nTurning off memory does not delete it — existing memories are not automatically deleted. Deleting memory does not delete recordings, notes, transcription text, dictionaries, or templates.',
              zh: '• 记忆：让 LynClaw 长期保存偏好、背景或上下文，用于个性化问答。\n• 词库：提升转写识别，尤其是姓名、公司名、专业术语等。\n• 模板：决定 AI 总结的结构和输出样式。\n\n关闭记忆不等于删除记忆，已有记忆不会自动删除。删除记忆不会删除录音、笔记、转写文本、词库或模板。',
              'zh-TW': '• 記憶：讓 LynClaw 長期儲存偏好、背景或上下文，用於個性化問答。\n• 詞庫：提升轉寫識別，尤其是姓名、公司名、專業術語等。\n• 模板：決定 AI 總結的結構和輸出樣式。\n\n關閉記憶不等於刪除記憶，已有記憶不會自動刪除。刪除記憶不會刪除錄音、筆記、轉寫文本、詞庫或模板。',
              ja: '• メモリ：LynClawが好み、背景、コンテキストを長期間保存し、パーソナライズされたQ&Aに使用します。\n• 辞書：文字起こしの認識を向上させます。特に名前、会社名、専門用語など。\n• テンプレート：AI要約の構造と出力スタイルを決定します。\n\nメモリをオフにしても削除されません。既存のメモリは自動的には削除されません。メモリを削除しても録音、ノート、文字起こしテキスト、辞書、テンプレートは削除されません。',
            },
          },
          {
            id: 'official-templates',
            question: {
              en: 'What official templates are available?',
              zh: '官方模板有哪些？',
              'zh-TW': '官方模板有哪些？',
              ja: '公式テンプレートにはどのようなものがありますか？',
            },
            answer: {
              en: 'Official templates cover meetings, calls, classes, speeches, interviews, medical, sales, legal, financial, and more.\n\nCommon templates include: reasoning summary, complete transcription, call summary, phone conversation, agenda meeting, class summary, keynote speech abstract, interview analysis, research interview, casual chat summary, SOAP notes, BANT client analysis, legal meeting notes, client review, and more.',
              zh: '官方模板覆盖会议、通话、课堂、演讲、访谈、面试、医疗、销售、法律、金融等场景。\n\n常见模板包括推理总结、完整转录、通话摘要、电话交谈、议事会议、课堂总结、主题演讲摘要、面试分析、研究访谈、闲聊总结、SOAP 记录、BANT 客户分析、法律会议记录、客户回顾等。',
              'zh-TW': '官方模板覆蓋會議、通話、課堂、演講、訪談、面試、醫療、銷售、法律、金融等場景。\n\n常見模板包括推理總結、完整轉錄、通話摘要、電話交談、議事會議、課堂總結、主題演講摘要、面試分析、研究訪談、閒聊總結、SOAP 記錄、BANT 客戶分析、法律會議記錄、客戶回顧等。',
              ja: '公式テンプレートは会議、通話、授業、スピーチ、インタビュー、面接、医療、営業、法律、金融などのシナリオをカバーします。\n\n一般的なテンプレートには、推論要約、完全文字起こし、通話要約、電話会話、議事会議、授業要約、基調講演要約、面接分析、研究インタビュー、カジュアルチャット要約、SOAP記録、BANTクライアント分析、法務会議記録、クライアントレビューなどがあります。',
            },
          },
          {
            id: 'custom-template',
            question: {
              en: 'How do I create a custom template?',
              zh: '如何创建自定义模板？',
              'zh-TW': '如何創建自定義模板？',
              ja: 'カスタムテンプレートはどう作成しますか？',
            },
            answer: {
              en: 'You can describe your fixed scenario in natural language and let AI help generate a custom template. Examples include client interviews, sales reviews, class reviews, project weekly meetings, legal meetings, etc.\n\n"AI Polish" can refine your description into a more AI-friendly template description. Generation language and AI model only affect the current note generation, not the template itself. Deleting a template does not affect historical notes, recordings, or transcriptions; editing a template usually only affects future generation.',
              zh: '你可以用自然语言描述自己的固定场景，让 AI 帮你生成自定义模板。例如客户访谈、销售复盘、课堂复习、项目周会、法律会议等。\n\n"AI 润色"可将你的描述整理成更适合 AI 理解的模板描述。生成语言和 AI 模型只影响本次笔记生成，不改变模板本身。删除模板不影响历史笔记、录音或转写文本；编辑模板通常只影响未来生成。',
              'zh-TW': '你可以用自然語言描述自己的固定場景，讓 AI 幫你生成自定義模板。例如客戶訪談、銷售復盤、課堂復盤、項目週會、法律會議等。\n\n"AI 潤色"可將你的描述整理成更適合 AI 理解的模板描述。生成語言和 AI 模型只影響本次筆記生成，不改變模板本身。刪除模板不影響歷史筆記、錄音或轉寫文本；編輯模板通常只影響未來生成。',
              ja: '自然言語で固定シナリオを説明し、AIにカスタムテンプレートを生成させることができます。例：クライアントインタビュー、営業レビュー、授業レビュー、プロジェクト週次会議、法務会議など。\n\n「AI推敲」は説明をAIに適したテンプレート説明に整理できます。生成言語とAIモデルは今回のノート生成にのみ影響し、テンプレート自体は変更しません。テンプレートの削除は履歴のノート、録音、文字起こしに影響しません。テンプレートの編集は通常、将来の生成にのみ影響します。',
            },
          },
        ],
      },
    ],
  },
];
