'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.TEXT,
    validate: {
      notEmpty: true,
    }
  }
  }, {});
  MeasurementUnit.associate = function(models) {
    // associations can be defined here
    MeasurementUnit.hasMany(models.Ingredients, { foreignKey: 'measurementUnitId', onDelete: 'CASCADE', hooks: true });
  };
  return MeasurementUnit;
};