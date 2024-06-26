/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/pdf/",
            publicPath: "/_next/static/pdf/",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
