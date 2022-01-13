const defaultTheme = require('tailwindcss/defaultTheme');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  darkMode: 'class',
  content: [
    './apps/site/**/pages/**/*.{js,ts,jsx,tsx}',
    './apps/site/**/components/**/*.{js,ts,jsx,tsx}',
    './libs/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-purple': '#b994ff',
        'accent-light-blue': '#a0d9fa',
        'accent-lime-green': '#a8edd8',
        'cream-white': '#f9f9f9',
      },
      fontFamily: {
        sans: ['Biotif', ...defaultTheme.fontFamily.sans],
        heading: ['Neucha', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    IS_DEVELOPMENT && require('tailwindcss-debug-screens'),
  ].filter(Boolean),
};
