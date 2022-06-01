module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    return config;
  },
};

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
};
