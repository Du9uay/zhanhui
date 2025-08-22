/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 展会主题色彩系统 - 优化紫色背景适配
        base: { 
          50: '#ffffff',    // 纯白文字
          100: '#f1f5f9',   // 亮白文字  
          200: '#e2e8f0',   // 次要文字
          300: '#cbd5e1',   // 静音文字
          400: '#94a3b8',   // 暗淡文字
          800: 'rgba(139, 92, 246, 0.1)',   // 卡片背景
          900: 'rgba(139, 92, 246, 0.05)',  // 次要背景
          950: '#0f0f1e'    // 主背景
        },
        accent: { 
          primary: '#a78bfa',    // 浅紫色
          secondary: '#f9a8d4',  // 浅粉色
          tertiary: '#67e8f9',   // 浅青色
          success: '#86efac',    // 浅绿色
          warning: '#fde047',    // 浅黄色
          purple: '#c4b5fd',     // 亮紫色
          pink: '#fbcfe8',       // 亮粉色
          blue: '#93c5fd'        // 亮蓝色
        },
        // 保留原有颜色供兼容
        primary: {
          50: '#f0f4ff',
          100: '#e1eaff',
          200: '#c7d7ff',
          300: '#a3b9ff',
          400: '#7c94ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backdropSaturate: {
        150: '150%',
        175: '175%',
        200: '200%',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(167, 139, 250, 0.1) inset',
        'glass-hover': '0 12px 48px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(167, 139, 250, 0.2) inset',
        'glass-sm': '0 4px 24px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(167, 139, 250, 0.08) inset',
        'glass-lg': '0 20px 60px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(167, 139, 250, 0.15) inset',
        'inner-light': '0 0 0 1px rgba(167, 139, 250, 0.2) inset',
        'purple-glow': '0 0 30px rgba(167, 139, 250, 0.5)',
        'pink-glow': '0 0 30px rgba(249, 168, 212, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 