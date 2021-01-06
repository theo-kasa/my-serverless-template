const { findKey } = require('lodash');

/**
 * @typedef {Object} CloudFormationReference
 * @property {string} Ref
 */

/**
 * Using this instead of a direct "Ref" allows for better introspection of a resource's usage
 * @param {import('serverless/aws').CloudFormationResources} resources
 * @param {import('serverless/aws').CloudFormationResource} referencedResource
 * @returns {CloudFormationReference} Ref object usable in Serverless config
 */
module.exports.ref = (resources, referencedResource) => {
  return {
    Ref: findKey(resources, resource => referencedResource === resource),
  };
};
