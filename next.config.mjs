/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        // 其他需要的 polyfills...
      };
    }

    return config;
  },
};

export default nextConfig;
