'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lesson.init({
    userId: DataTypes.STRING,
    lvName: DataTypes.STRING,
    lsName: DataTypes.STRING,
    lsTitle: DataTypes.STRING,
    writeContents: DataTypes.TEXT,
    editContents: DataTypes.TEXT,
    correctDate: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Lesson',
    timestamps: false,
  });
  return Lesson;
};