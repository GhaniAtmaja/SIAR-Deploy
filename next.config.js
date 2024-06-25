// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});
module.exports = withMDX({
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.jsx', 'api.ts', 'api.tsx'],
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
});
