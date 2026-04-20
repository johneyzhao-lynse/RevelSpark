# 第三方信息共享清单（App）

更新日期：2026年04月20日

上海天启灵光科技有限公司（以下简称"本公司"或"我们"）为保障我们的应用程序产品与/或服务（以下简称"本产品"或"本服务"）的稳定运行及相关功能的实现，可能会在应用中接入第三方的软件工具开发包（SDK）、应用程序接口（API）、应用程序插件。

本《第三方信息共享清单》（以下简称"本清单"）在清晰、透明地向您说明本服务主要业务场景可能与第三方共享个人信息的情况，但并不代表只要您开始使用本App，我们将与第三方共享本清单中的全部信息。仅当您使用特定功能时，我们才会根据"最小必要原则"，为实现向您提供服务的目的，与合作商共享您的相关个人信息。

第三方处理个人信息的行为受其自有隐私政策或个人信息处理规则约束。第三方对相关信息的具体处理情况建议您参考第三方相关法律文档。

第三方的代码可能因为其版本升级、策略调整原因导致个人信息处理情况发生一定变化，我们无法做到实时知晓，但我们承诺，会尽最大努力及时更新本清单，以确保本清单的准确与完整。

本清单是[《隐私政策》](privacy-cn.html)的组成部分。与个人信息处理相关的更详细规则、您的权利以及我们如何保护您的个人信息等，请查阅[《隐私政策》](privacy-cn.html)全文。

## 内嵌第三方SDK清单

| 序号 | SDK名称 | SDK运营方 | 个人信息类型 | 使用目的 | 共享方式 | 使用场景 | 是否必要功能 | 隐私政策 |
|------|---------|-----------|-------------|---------|---------|---------|-------------|----------|
| 1 | Sentry SDK | Sentry Software Inc. | 设备标识信息、应用包名、崩溃日志、性能数据、错误堆栈信息 | 诊断分析APP的错误和性能问题 | SDK本机采集/后台接口传输 | 用户使用过程中发生错误或性能问题时 | 是 | https://sentry.io/legal/privacy/ |
| 2 | 微信OpenSDK Android | 深圳市腾讯计算机系统有限公司 | 设备标识信息（Android ID/IDFA）、设备参数及系统信息（设备型号、操作系统）、网络相关信息（IP地址、网络运营商）、微信App安装信息、微信App包名信息 | 第三方内容分享；帮助用户在应用内完成支付；微信登录 | SDK本机采集 | 用户分享内容至微信客户端时；用户使用微信支付时；用户使用微信登录时 | 是 | https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/RYiYJkLOrQwu0nb8 |
| 3 | 阿里云对象存储（OSS）SDK | 杭州阿里云智能科技有限公司 | 设备标识信息、文件信息（文件名、文件大小、文件类型）、网络相关信息（IP地址） | 提供文件上传和存储服务 | 后台接口传输 | 用户上传录音文件、图片等文件时 | 是 | https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202112071754_83380.html |
| 4 | 苹果内购（StoreKit）SDK | Apple Inc. | 订单信息、交易金额、Apple ID信息、设备标识信息 | 实现苹果内购支付功能 | SDK本机采集/后台接口传输 | iOS用户使用苹果内购支付时 | 是 | https://www.apple.com/legal/privacy/ |
| 5 | APP支付客户端SDK | 支付宝(杭州)信息技术有限公司 | 订单信息、交易金额、应用包名、应用签名 | 实现支付宝支付功能 | SDK本机采集/后台接口传输 | 用户使用支付宝支付时 | 是 | https://opendocs.alipay.com/open/54/01g6qm#%E6%94%AF%E4%BB%98%E5%AE%9D%20App%20%E6%94%AF%E4%BB%98%E5%AE%A2%E6%88%B7%E7%AB%AF%20SDK%20%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96 |
| 6 | HTTPDNS-android | 杭州阿里云智能科技有限公司 | 设备标识信息（如IP地址）、域名请求数据 | 提供更安全、高效、准确的域名解析服务 | 后台接口传输 | 用户使用过程中域名解析 | 是 | https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202112071754_83380.html |
| 7 | OPPO PUSH 客户端SDK | 广东欢太科技有限公司 | 设备标识信息（设备ID、推送token） | 推送信息 | SDK本机采集 | 向OPPO手机用户推送消息时 | 是 | https://open.oppomobile.com/new/developmentDoc/info?id=11228 |
| 8 | vivo推送SDK | 维沃移动通信有限公司 | 设备标识信息（设备ID、推送token） | 推送信息 | SDK本机采集 | 向vivo手机用户推送消息时 | 是 | https://dev.vivo.com.cn/documentCenter/doc/878 |
| 9 | 友盟+移动统计SDK | 友盟同欣（北京）科技有限公司 | 设备信息（型号、系统版本）、应用使用行为数据 | 脱敏的基础信息统计 | 后台接口传输 | 用户使用APP时 | 是 | https://www.umeng.com/page/policy |
| 10 | 友盟+消息推送SDK | 友盟同欣（北京）科技有限公司 | 设备推送token、设备标识信息 | 通知用户任务状态 | 后台接口传输 | 用户使用上传文件转写总结时 | 是 | https://www.umeng.com/page/policy |
| 11 | 小米推送 | 北京小米移动软件有限公司 | 设备标识信息（OAID、Android ID）、App应用包名、版本号、运行状态、设备参数及系统信息（设备厂商、设备型号、操作系统版本、系统语言、磁盘空间、内存）、网络相关信息（网络运营商、网络类型） | 推送消息 | SDK本机采集 | 向小米手机用户推送消息时 | 是 | https://dev.mi.com/console/doc/detail?pId=1822 |
| 12 | 性能加速库 | 华为软件技术有限公司 | 设备信息（型号、系统版本）、运行状态、内存/存储占用信息 | 提升APP在华为设备上的运行性能、流畅度和能效 | SDK本机采集 | 用户使用过程中进行性能提升 | 是 | https://developer.huawei.com/consumer/cn/doc/development/graphics-Guides/sdk-data-security-0000001050700772 |
| 13 | 荣耀推送SDK | 深圳荣耀软件技术有限公司 | 设备标识信息（设备ID、推送token） | 推送消息 | SDK本机采集 | 向荣耀手机用户推送消息时 | 是 | https://developer.honor.com/cn/docs/11002/guides/sdk-data-security |
| 14 | 魅族推送SDK | 珠海星纪魅族信息技术有限公司 | 设备标识信息（设备ID、推送token） | 推送信息 | SDK本机采集 | 向魅族手机用户推送消息时 | 是 | https://open.flyme.cn/docs?id=202 |
