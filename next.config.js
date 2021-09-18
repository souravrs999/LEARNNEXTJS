const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'serverless',
  webpack5: true,
  experimental: {
    modern: true,
    esmExternals: true
  },
  reactStrictMode: true,
  images: {
    domains: []
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depends on 'fs' module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    // copy the static blog files
    config.plugins.push(
      new CopyPlugin({
        patterns: [{ from: 'data', to: 'data' }]
      })
    );
    // Replace React with Preact in production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }
    return config;
  }
};

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com
  https://www.google-analytics.com
  https://ssl.google-analytics.com
  https://gmail.us5.list-manage.com
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data: https://www.google-analytics.com
  https://ssl.gstatic.com
  media-src 'none';
  connect-src *;
  font-src 'self' https://fonts.gstatic.com data:;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];
