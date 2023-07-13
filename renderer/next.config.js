/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
  pageExtensions: ["page.tsx"],
  compiler: {
    styledComponents: true,
  }
};

