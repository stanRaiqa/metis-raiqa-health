/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
    // Default website version if not provided in the environment
    WEBSITE_VERSION: process.env.WEBSITE_VERSION || "FIRST-DRAFT",
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'static.legitscript.com' },
      { protocol: 'https', hostname: 'px.ads.linkedin.com' },
    ],
  },
  // Added optimizations to reduce main thread work
  compiler: {
    // Enable React Server Components optimizations
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      'framer-motion',
      'styled-components',
      'xstate',
      '@portabletext/react',
      'sonner'
    ],
    // Enable turbo for faster builds
    turbo: {},
  },
  // Reduce the JavaScript payloads by optimizing images
  swcMinify: true,
  // Configure module optimization for production builds
  webpack: (config, { dev, isServer }) => {
    // Apply production optimizations
    if (!dev && !isServer) {
      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|next|framer-motion)[\\/]/,
            priority: 40,
            enforce: true,
          }
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig; 