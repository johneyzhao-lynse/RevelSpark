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
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F8F9FA',
          dark: '#F4F9FF',
          darker: '#E6F7FB',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.7)',
          DEFAULT: 'rgba(255, 255, 255, 0.6)',
          dark: 'rgba(255, 255, 255, 0.5)',
        },
        text: {
          primary: '#1A1D23',
          secondary: '#4A5568',
          tertiary: '#718096',
          light: '#A0AEC0',
          lighter: '#CBD5E0',
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
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.12)',
        'glow': '0 0 20px rgba(26, 109, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(26, 109, 255, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.1)',
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
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};
