/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 允許在有 TypeScript 錯誤的情況下完成構建
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
