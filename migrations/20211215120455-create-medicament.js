'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Medicaments', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn("uuid_generate_v4")
      },
      nom: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      allergenes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Medicaments');
  }
};