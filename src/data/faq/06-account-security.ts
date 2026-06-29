import { FAQCategory } from './types';

export const accountSecurityCategory: FAQCategory = {
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
              zh: '当前版本暂未开放手机号换绑入口。后续开放后，可在"我的"页面点击头像进入账号中心，并按页面提示操作。换绑时通常需要验证旧账号和新账号。\n\n如果旧手机号无法使用，请按页面提示发起申诉，并尽量提供原账号、常用设备、近期订单或充值记录、相关截图等信息，方便客服核验。',
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
  };

