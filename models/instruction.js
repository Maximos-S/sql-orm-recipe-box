'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: {
      type: DataTypes.TEXT,
    validate: {
      notEmpty: true,
    }
  },
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId'});
  };
  return Instruction;
};