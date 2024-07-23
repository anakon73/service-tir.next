/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    fontSize: {
      'big': '2.5rem',
      'xs': '0.75rem', // 12px
      'sm': '0.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    extend: {
      dropShadow: {
        list: [
          'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06))',
          'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.04))',
        ],
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        garamond: ['Garamond'],
        jakarta: ['Plus+Jakarta+Sans'],
        inter: ['Inter'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      lineHeight: {
        'extra-height': '2.75rem',
        'normal': '2.0625rem',
        'small': '1.375rem',
      },
      borderRadius: {
        large: '1.875rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          xl: '150px',
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
