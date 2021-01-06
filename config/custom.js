module.exports = {
  stage: '${opt:stage, self:provider.stage}',

  webpack: {
    webpackConfig: './webpack.config.js',
    includeModules: {
      forceExclude: ['aws-sdk'],
    },
  },

  pruneCount: {
    dev: 2,
    production: 3,
  },
  prune: {
    automatic: true,
    number: '${self:custom.pruneCount.${self:custom.stage}}',
  },
};
