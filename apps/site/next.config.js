const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  webpack5: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
  images: { domains: ['picsum.photos'] },
});
