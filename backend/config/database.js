const Sequelize = require("sequelize");

const sequelize = new Sequelize("angular-cms", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db = {};

db.sequelize = sequelize;

const CourseModel = require("../models/CourseModel");
const StudentModel = require("../models/StudentModel");

CourseModel.belongsToMany(StudentModel, {
  through: "enrollments",
  as: "courses",
  foriegnKey: "course_id",
});

StudentModel.belongsToMany(CourseModel, {
  through: "enrollments",
  as: "courses",
  foriegnKey: "student_id",
});

db.Course = CourseModel;
db.Student = StudentModel;
