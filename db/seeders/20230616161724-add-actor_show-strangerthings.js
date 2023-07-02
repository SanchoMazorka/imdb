'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actor_shows', [
      { showId: 2, actorId: 72},
      { showId: 2, actorId: 73},
      { showId: 2, actorId: 74},
      { showId: 2, actorId: 75},
      { showId: 2, actorId: 76},
      { showId: 2, actorId: 77},
    ]);
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Actor_shows', null, {});
  }
};
