'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Director.init({
    id: DataTypes.UUID,
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Director',
  });
  return Director;
};