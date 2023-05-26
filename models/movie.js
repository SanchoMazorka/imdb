'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    id: DataTypes.UUID,
    title: DataTypes.TEXT,
    directorId: DataTypes.UUID,
    release: DataTypes.INTEGER,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};