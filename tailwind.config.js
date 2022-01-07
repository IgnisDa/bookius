const defaultTheme = require('tailwindcss/defaultTheme');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  content: [
    './apps/site/**/pages/*.{js,ts,jsx,tsx}',
    './apps/site/**/components/**/*.{js,ts,jsx,tsx}',
    './libs/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Biotif', ...defaultTheme.fontFamily.sans],
        heading: ['Neucha'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    IS_DEVELOPMENT && require('tailwindcss-debug-screens'),
  ].filter(Boolean),
};
