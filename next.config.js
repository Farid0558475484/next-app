module.exports = {
  images: {
    domains: ["http://localhost:3005"],
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: "@svgr/webpack",
        issuer:/\.(js|ts)x?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          // plugins: [{ removeViewBox: false }],
          plugins: [{
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              }
            }
           }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

// module.exports = {
//   images: {
//     domains: ["courses-top.ru"],
//   },
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };
