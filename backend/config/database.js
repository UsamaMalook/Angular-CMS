const Sequelize = require("sequelize");

const sequelize = new Sequelize("angular-cms", "root", "password", {
  dialect: "mysql",
  host: "localhost",
  logging: console.log,
});

module.exports = db = {};

db.sequelize = sequelize;

const CourseModel = require("../models/CourseModel");
const StudentModel = require("../models/StudentModel");
const EnrollmentModel = require("../models/Enrollments");
const Enrollment = require("../models/Enrollments");

CourseModel.belongsToMany(StudentModel, {
  through: "enrollments",
});

StudentModel.belongsToMany(CourseModel, {
  through: "enrollments",
});

CourseModel.hasMany(EnrollmentModel);

db.Course = CourseModel;

db.Student = StudentModel;
