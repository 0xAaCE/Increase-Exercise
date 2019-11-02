'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      client_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      currency: {
        allowNull: false,
        type: Sequelize.ENUM('ARS', 'USD')
      },
      total_amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_discount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amount_discounted: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      payment_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
