'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
			Show.hasMany(models.Season, {foreignKey: 'showId'});
			//Show.belongsToMany(models.Genre, {through: models.Genre_show});
    }
  }
  Show.init({
    title: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Show',
		timestamps: false
  });
  return Show;
};