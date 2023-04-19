const Sequelize = require("sequelize");

const db = require("../config/database");

const sequelize = db.sequelize;

const Enrollment = sequelize.define(
  "enrollments",
  {
    enroll_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = Enrollment;
