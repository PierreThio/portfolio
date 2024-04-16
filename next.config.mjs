/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /gsap\/dist\/plugins\//,
        use: 'babel-loader',
      });
    }
    return config;
  },
};

export default nextConfig;