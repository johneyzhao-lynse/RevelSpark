import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// 验证邮箱地址格式
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// 邮箱订阅 API 端点
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email, language = 'zh' } = req.body;

    // 验证邮箱
    if (!email || !validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: language === 'en' ? 'Please enter a valid email address' : '请输入有效的邮箱地址'
      });
    }

    // 配置邮件传输器
    // 根据你的邮箱服务商选择配置方式
    let transporter;

    // 方式1: 使用 Gmail (推荐，如果你有 Gmail 账号)
    if (process.env.EMAIL_SERVICE === 'gmail') {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Gmail 需要使用应用专用密码
        },
      });
    }
    // 方式2: 使用 QQ 邮箱 (国内推荐)
    else if (process.env.EMAIL_SERVICE === 'qq') {
      transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // QQ 邮箱需要使用授权码
        },
      });
    }
    // 方式3: 使用 163 邮箱
    else if (process.env.EMAIL_SERVICE === '163') {
      transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // 163 邮箱需要使用授权码
        },
      });
    }
    // 方式4: 使用自定义 SMTP
    else {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    // 验证传输器配置
    await transporter.verify();

    // 构建邮件内容
    const emailContent = {
      from: process.env.EMAIL_FROM || `"Lynse AI Website" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // 发送到你的邮箱
      subject: language === 'en'
        ? `New Newsletter Subscription: ${email}`
        : `新邮件订阅：${email}`,
      text: language === 'en'
        ? `You have a new newsletter subscription!\n\nEmail: ${email}\nTime: ${new Date().toLocaleString('en-US')}\n\nPlease add this email to your mailing list.`
        : `您有新的邮件订阅！\n\n邮箱：${email}\n时间：${new Date().toLocaleString('zh-CN')}\n\n请将此邮箱添加到您的邮件列表中。`,
      html: language === 'en'
        ? `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1A6DFF;">New Newsletter Subscription</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString('en-US')}</p>
            </div>
            <p>Please add this email to your mailing list.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">This email was sent from the Lynse AI website subscription form.</p>
          </div>
        `
        : `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1A6DFF;">新邮件订阅</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>邮箱：</strong>${email}</p>
              <p><strong>时间：</strong>${new Date().toLocaleString('zh-CN')}</p>
            </div>
            <p>请将此邮箱添加到您的邮件列表中。</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">此邮件来自 Lynse AI 网站订阅表单。</p>
          </div>
        `,
    };

    // 发送邮件
    await transporter.sendMail(emailContent);

    // 记录订阅（可选：可以保存到数据库或文件）
    console.log(`[Subscription] New email subscribed: ${email} at ${new Date().toISOString()}`);

    res.status(200).json({
      success: true,
      message: language === 'en'
        ? 'Thank you for subscribing!'
        : '订阅成功！'
    });

  } catch (error) {
    console.error('[Subscription Error]', error);

    res.status(500).json({
      success: false,
      message: language === 'en'
        ? 'Failed to subscribe. Please try again later.'
        : '订阅失败，请稍后重试。',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// 健康检查端点
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// SPA 路由支持 - 所有其他路由返回 index.html
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Email Service: ${process.env.EMAIL_SERVICE || 'custom'}`);
});
