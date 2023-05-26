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
      // define association here
    }
  }
  Actor_chapter.init({
    chapterId: DataTypes.UUID,
    actorId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Actor_chapter',
		timestamps: false,
  });
  return Actor_chapter;
};