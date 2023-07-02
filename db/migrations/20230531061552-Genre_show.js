'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
		//await queryInterface.renameTable('Genre_chapters', 'Genre_shows');
		//await queryInterface.renameColumn('Genre_shows', 'chapterId', 'showId');
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('Genre_shows');
  }
};
