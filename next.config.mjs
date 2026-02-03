/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/tenesha-valentine',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
