'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Praticiens', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        default: Sequelize.fn("uuid_generate_v4")
      },
      nom: {
        type: Sequelize.STRING
      },
      prénom: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      disponibilités: {
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
    await queryInterface.dropTable('Praticiens');
  }
};