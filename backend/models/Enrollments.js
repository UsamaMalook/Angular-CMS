const { Sequelize, DataTypes } = require("sequelize");

const db = require("../config/database");

const Course = db.Course;
const Student = db.Student;
const sequelize = db.sequelize;
