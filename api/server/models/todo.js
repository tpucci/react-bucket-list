'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todo;
};