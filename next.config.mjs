import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': process.cwd(),
    };
    if (!isServer) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        swiper: path.resolve(__dirname, 'node_modules/swiper'),
      };
    }
    return config;
  },
};

export default nextConfig;
