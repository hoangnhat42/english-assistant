'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      lvName: {
        type: Sequelize.STRING
      },
      lsName: {
        type: Sequelize.STRING
      },
      lsTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      writeContents: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      editContents: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      correctDate: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lessons');
  }
};