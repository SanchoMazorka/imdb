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
			Movie.belongsTo(models.Director, {foreignKey: 'directorId'});
			Movie.belongsToMany(models.Genre, {through: models.Genre_movie, foreignKey: 'movieId'});
			Movie.belongsToMany(models.Actor, {through: models.Actor_movie, foreignKey: 'movieId'});
    }
  }
  Movie.init({
    title: DataTypes.TEXT,
    directorId: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movie',
		timestamps: false,
  });
  return Movie;
};