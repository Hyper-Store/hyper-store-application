/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
  pageExtensions: ["page.tsx", "page.ts"],
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.discordapp.com"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    });

    return config;
  },
};

