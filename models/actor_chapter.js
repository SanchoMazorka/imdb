'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor_chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Actor_chapter.hasMany(models.Actor);
      //Actor_chapter.hasMany(models.Chapter);
    }
  }
  Actor_chapter.init({
    chapterId: DataTypes.INTEGER,
    actorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor_chapter',
		timestamps: false
  });
  return Actor_chapter;
};