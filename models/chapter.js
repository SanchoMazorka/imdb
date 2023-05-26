'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chapter.init({
    id: DataTypes.UUID,
    title: DataTypes.TEXT,
    directorId: DataTypes.UUID,
    chapterNumber: DataTypes.INTEGER,
    release: DataTypes.DATE,
    seasonId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Chapter',
  });
  return Chapter;
};