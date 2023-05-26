'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor_movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Actor_movie.init({
    movieId: DataTypes.UUID,
    actorId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Actor_movie',
		timestamps: false,
  });
  return Actor_movie;
};