module.exports = {
  // ...other Next.js configurations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // This is required for the `@fullhuman/postcss-purgecss` package
      };
    }

    return config;
  },
};
