const Sequelize = require("sequelize");

const db = require("../config/database");

const sequelize = db.sequelize;

const Course = sequelize.define("courses", {
  course_id: {
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
