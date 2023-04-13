const Sequelize = require("sequelize");

const db = require("../config/database");

const sequelize = db.sequelize;

const Student = sequelize.define("students", {
  student_id: {
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
Student.assocaite = function (models) {
  Student.belongsToMany(models.Course, {
    through: "enrollments",
    as: "students",
    foriegnKey: "student_id",
  });
};

module.exports = Student;
