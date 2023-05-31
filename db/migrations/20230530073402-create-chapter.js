'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chapters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
				allowNull: false,
        type: Sequelize.TEXT
      },
      directorId: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      chapterNumber: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      seasonId: {
				allowNull: false,
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chapters');
  }
};