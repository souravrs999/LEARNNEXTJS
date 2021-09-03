module.exports = {
  experimental: {
    modern: true,
    esmExternals: true,
  },
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact in production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
};
