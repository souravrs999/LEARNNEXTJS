module.exports = {
  experimental: {
    modern: true,
    esmExternals: true,
  },
  reactStrictMode: true,
  images: {
    domains: [],
  },

  // webpack: (config, { dev, isServer }) => {
  //   // if (!dev && !isServer) {
  //   //   Object.assign(config.resolve.alias, {
  //   //     react: "preact/compat",
  //   //     "react-dom/test-utils": "preact/test-utils",
  //   //     "react-dom": "preact/compat",
  //   //   });
  //     // if (!isServer) {
  //     //   config.node = {
  //     //     fs: "empty",
  //     //   };
  //     // }
  //   }
  //   return config;
  // },
};
