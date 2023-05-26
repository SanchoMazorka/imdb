'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre_chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genre_chapter.init({
    chapterId: DataTypes.UUID,
    genreId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Genre_chapter',
		timestamps: false,
  });
  return Genre_chapter;
};