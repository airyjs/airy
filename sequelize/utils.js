'use strict';

/**
 * @description
 * @param {string} env
 * @returns {{ file: string; env: string; }} env options
 */
function getEnvironment(env) {
  const environment = {};

  switch (env) {
    case 'test':
      environment.file = '.env';
      environment.env = 'test';
      break;
    case 'production':
      environment.file = '.env';
      environment.env = 'production';
      break;
    case 'development':
    default:
      environment.file = '.env';
      environment.env = 'development';
      break;
  }

  return environment;
}

module.exports = { getEnvironment };
