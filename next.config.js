
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});



module.exports = withBundleAnalyzer({
  target: "serverless",
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  // Enable figma's wrong mask-type attribute work
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                  // Enable svgr's svg to fill the size
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });
    
    // 절대경로
    conf.resolve.modules.push(__dirname);
    return conf;
  },
});

// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/:path*",
//         destination: `http://54.180.134.46/:path*`,
//       },
//     ];
//   },
// };

const withImages = require('next-images');

module.exports = withImages();
// module.exports = nextConfig;