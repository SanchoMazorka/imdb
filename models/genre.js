'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Genre.belongsToMany(models.Movie, {through: models.Genre_movie, foreignKey: 'genreId' });
      //Genre.belongsToMany(models.Show, {through: models.Genre_show});
    }
  }
  Genre.init({
    name: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Genre',
		timestamps: false
  });
  return Genre;
};