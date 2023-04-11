const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const Course = sequelize.define("course", {
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
  field: {
    type: Sequelize.ENUM("Science", "History", "Arts"),
    allowNull: false,
  },
  creditHours: {
    type: Sequelize.INTEGER,
  },
  lab: {
    type: Sequelize.BOOLEAN,
  },
});
module.exports = Course;
