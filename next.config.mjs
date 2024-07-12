/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // output: 'export',
    output: "standalone",
    pageExtensions: ['js', 'jsx', 'md'],
  }

export default nextConfig;
