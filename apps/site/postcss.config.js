const { resolve } = require('path');

const tailwindConfigPath = resolve(__dirname, '..', '..', 'tailwind.config.js');

module.exports = {
  plugins: {
    tailwindcss: { config: tailwindConfigPath },
    autoprefixer: {},
  },
};
