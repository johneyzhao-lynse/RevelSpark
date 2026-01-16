/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Inter',
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
      display: [
        'Cal Sans',
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ],
      mono: [
        'JetBrains Mono',
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
        // 保留原有的primary/secondary配色（用于渐变文字、按钮等）
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C1FF',
          300: '#66A2FF',
          400: '#3383FF',
          500: '#1A6DFF', // 主蓝
          600: '#005AE0', // 深蓝
          700: '#0048B3',
          800: '#003786',
          900: '#002659',
        },
        secondary: {
          50: '#E6FCFF',
          100: '#CCF9FF',
          200: '#99F2FF',
          300: '#66EBFF',
          400: '#33E4FF',
          500: '#19E0E6', // 主青
          600: '#13C2C2', // 亮青
          700: '#0EA5A5',
          800: '#0A8878',
          900: '#066B56',
        },
        accent: {
          light: '#00C4A7', // 薄荷绿
          DEFAULT: '#1A6DFF',
          dark: '#005AE0',
        },
        // 极简黑白灰配色系统（用于背景、文字等）
        black: {
          DEFAULT: '#000000',
          rich: '#0A0A0A',
          soft: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          warm: '#FAFAF9',
          ivory: '#FDFBF7',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // AI微妙渐变色
        ai: {
          light: 'rgba(255, 255, 255, 0.95)',
          DEFAULT: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(10, 10, 10, 0.95)',
          subtle: 'rgba(200, 200, 220, 0.3)',
        },
        // 微妙渐变
        gradient: {
          from: 'rgba(255, 255, 255, 0.8)',
          to: 'rgba(245, 245, 245, 0.6)',
          ai: 'rgba(200, 200, 220, 0.3)',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#FAFAF9',
          dark: '#F5F5F5',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.95)',
          DEFAULT: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(255, 255, 255, 0.85)',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#262626',
          tertiary: '#525252',
          muted: '#A3A3A3',
          light: '#D4D4D4',
        },
        // 保留原有颜色名称以兼容
        lightblue: '#F4F9FF',
        paleblue: '#E6F7FB',
        mint: '#00C4A7',
        dark: {
          DEFAULT: '#212529',
          secondary: '#495057',
          tertiary: '#868e96',
          bg: '#1A1D23',
        },
        light: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FA',
        }
      },
      borderRadius: {
        '4xl': '16px',
        '5xl': '24px',
        '6xl': '32px',
      },
      padding: {
        '18': '64px',
      },
      boxShadow: {
        'hover': '0 8px 20px rgba(0, 0, 0, 0.08)',
        'glass': '0 4px 24px rgba(0, 0, 0, 0.04)',
        'glass-hover': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 30px rgba(200, 200, 220, 0.15)',
        'glow-lg': '0 0 40px rgba(200, 200, 220, 0.2)',
        'glow-xl': '0 0 60px rgba(200, 200, 220, 0.25)',
        'card': '0 2px 16px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'premium': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'premium-hover': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'inner-soft': 'inset 0 2px 8px rgba(0, 0, 0, 0.02)',
        'ai': '0 0 40px rgba(200, 200, 255, 0.12)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4A5568',
            lineHeight: '1.7',
            h1: {
              color: '#1A1D23',
              fontWeight: '800',
              letterSpacing: '-0.03em',
              lineHeight: '1.2',
            },
            h2: {
              color: '#1A1D23',
              fontWeight: '700',
              letterSpacing: '-0.025em',
              lineHeight: '1.3',
            },
            h3: {
              color: '#1A1D23',
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            a: {
              color: '#1A6DFF',
              textDecoration: 'none',
              '&:hover': {
                color: '#005AE0',
              },
            },
          },
        },
      },
      gradientColorStops: theme => ({
        'logo-blue': '#1A6DFF',
        'logo-cyan': '#19E0E6',
      }),
      width: {
        '300': '300px',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'subtle-fade': 'subtleFade 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        subtleFade: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};
