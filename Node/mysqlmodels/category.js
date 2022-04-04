const { Sequelize, DataTypes } = require("sequelize");

const db = require("../dbsql");

const Category = db.define(
  "category",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Category;

//equivalent sql query is CREATE TABLE category(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), description VARCHAR(200))
