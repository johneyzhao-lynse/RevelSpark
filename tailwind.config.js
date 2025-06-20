/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      colors: {
        primary: '#1A6DFF', // logo主蓝
        secondary: '#19E0E6', // logo主青
        lightblue: '#F4F9FF', // 极浅蓝灰
        paleblue: '#E6F7FB', // 淡青蓝
        accent: '#005AE0', // 深蓝
        cyanaccent: '#13C2C2', // 亮青
        mint: '#00C4A7',   // 薄荷绿（AI交互部分）
        dark: {
          DEFAULT: '#212529', // 深灰色（标题）
          secondary: '#495057', // 中灰色（正文）
          tertiary: '#868e96', // 浅灰色（次要信息）
          bg: '#2D3436',    // 深灰色背景
        },
        light: {
          DEFAULT: '#FFFFFF', // 白色
          secondary: '#F8F9FA', // 浅灰色背景
        }
      },
      borderRadius: {
        '4xl': '16px', // 卡片圆角
      },
      padding: {
        '18': '64px', // 内边距
      },
      boxShadow: {
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#495057',
            lineHeight: '1.7',
            h1: {
              color: '#212529',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: '#212529',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h3: {
              color: '#212529',
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            a: {
              color: '#2A5CFF',
              textDecoration: 'none',
              '&:hover': {
                color: '#1a46cc',
              },
            },
          },
        },
      },
      gradientColorStops: theme => ({
        'logo-blue': '#1A6DFF',
        'logo-cyan': '#19E0E6',
      }),
    },
  },
  plugins: [],
};
