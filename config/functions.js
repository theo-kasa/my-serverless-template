const { ref } = require('./serverless-utils');
const resources = require('./resources');

const { MyTable } = resources;

/** @type {import('serverless/aws').Functions} */
module.exports = {
  helloWorld: {
    handler: 'functions/hello-world.handler',
    events: [{ httpApi: { method: 'GET', path: '/hello-world' } }],
    environment: {
      TABLE_NAME: ref(resources, MyTable),
    },
  },
};
