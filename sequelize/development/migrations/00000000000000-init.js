'use strict';

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   * @returns {Promise<void>} Ok
   */
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      count: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  /**
   * @description
   * @param {import('sequelize').QueryInterface} queryInterface
   * @returns {Promise<void>} Ok
   */
  down: queryInterface => {
    return queryInterface.dropTable('Orders');
  },
};
