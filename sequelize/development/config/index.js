'use strict';

const { resolve } = require('path');

module.exports = {
  development: {
    dialect: process.env.DB_SEQUELIZE_DIALECT,
    storage: process.env.DB_SEQUELIZE_STORAGE,
  },
};
