const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;