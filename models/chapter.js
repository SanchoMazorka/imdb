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
			//Chapter.belongsTo(models.Season);
			//Chapter.belongsTo(models.Director, {foreignKey: 'directorId'});
			//Chapter.belongsToMany(models.Actor, {through: models.Actor_chapter});
    }
  }
  Chapter.init({
    title: DataTypes.TEXT,
    directorId: DataTypes.INTEGER,
    chapterNumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    seasonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chapter',
		timestamps: false
  });
  return Chapter;
};