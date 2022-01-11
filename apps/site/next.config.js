// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // See: https://github.com/gregberge/svgr
  nx: { svgr: false },
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
  images: {
    domains: ['picsum.photos', 'books.google.com'],
  },
};

module.exports = withNx(nextConfig);
