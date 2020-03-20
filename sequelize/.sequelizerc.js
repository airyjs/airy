'use strict';

const dotenv = require('dotenv');
const { resolve } = require('path');
const { getEnvironment } = require('./utils');

const { file, env } = getEnvironment(process.env.NODE_ENV);

dotenv.config({ path: resolve(file) });

const sequelizeRoot = resolve('sequelize', env);

module.exports = {
  'migrations-path': resolve(sequelizeRoot, 'migrations'),
  'seeders-path': resolve(sequelizeRoot, 'seeders'),
  config: resolve(sequelizeRoot, 'config', 'index.js'),
};
