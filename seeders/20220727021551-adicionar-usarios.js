'use strict';

const crypto = require('../crypto')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { name: 'John Doe', user:'picolo@gmail.com', password: crypto.encrypt('123')},
      { name: 'picolo', user:'luiz@gmail.com', password: crypto.encrypt('123')},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
