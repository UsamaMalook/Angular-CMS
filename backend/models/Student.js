const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const Student = sequelize.define("student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cellNumber: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  address: {
    type: Sequelize.STRING,
  },
});

module.exports = Student;
