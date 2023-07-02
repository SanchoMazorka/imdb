'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
		await queryInterface.bulkInsert('Actors', [
			//{ firstName: '', lastName: '', gender: '', dob: '' },
			{ firstName: 'Linda', lastName: 'Hamilton', gender: 'Female', dob: '1956-09-02' },
			{ firstName: 'Edward', lastName: 'Furlong', gender: 'Male', dob: '1977-08-02' },
			{ firstName: 'Arnold', lastName: 'Schwarzenegger', gender: 'Male', dob: '1947-06-30' },
		], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
