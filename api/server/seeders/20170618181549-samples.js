'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todos', [
      { id: 1, text: 'Do the dishes' },
      { id: 2, text: 'Learn React-Native' },
      { id: 3, text: 'Quit my job and become a mobile developper' },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todos', null, {});
  }
};
