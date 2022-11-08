/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },

  /* redirects from maraton page to coming soon */
  async redirects() {
    return [
      {
        source: '/marathon',
        destination: '/coming-soon',
        permanent: false,
      },
    ];
  },
};
