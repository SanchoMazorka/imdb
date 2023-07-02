'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			Season.hasMany(models.Chapter, {foreignKey: 'seasonId'});
      //Season.belongsTo(models.Show);
    }
  }
  Season.init({
    title: DataTypes.TEXT,
    seasonNumber: DataTypes.INTEGER,
    showId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Season',
		timestamps: false
  });
  return Season;
};