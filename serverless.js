const custom = require('./config/custom');
const functions = require('./config/functions');
const resources = require('./config/resources');

/** @type {import('serverless/aws').Serverless} */
const serverlessConfig = {
  service: 'my-service',

  plugins: ['serverless-webpack', 'serverless-prune-plugin', 'serverless-offline'],

  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    region: 'us-west-2',
    environment: {
      SOME_ENV_VARIABLE: '123',
    },
  },

  custom,
  functions,
  resources: {
    Resources: resources,
  },
};

module.exports = serverlessConfig;
