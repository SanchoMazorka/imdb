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
      Show.belongsTo(models.Season);
    }
  }
  Show.init({
    title: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};