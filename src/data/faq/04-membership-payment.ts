import { FAQCategory } from './types';

export const membershipPaymentCategory: FAQCategory = {
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
  };

