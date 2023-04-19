const { Op } = require("sequelize");
const Student = require("../models/StudentModel");
const Enrollment = require("../models/Enrollments");
const Course = require("../models/CourseModel");

const getAllStudents = async (queryParams) => {
  return Student.findAll({
    include: [Course],
    where: {
      [Op.and]: [
        {
          ...(queryParams.name && {
            name: { [Op.like]: `%${queryParams.name}%` },
          }),
          ...(queryParams.email && {
            email: { [Op.like]: `%${queryParams.email}%` },
          }),
          ...(queryParams.address && {
            address: { [Op.like]: `%${queryParams.address}%` },
          }),
          ...(queryParams.name && {
            age: parseInt(queryParams.age),
          }),
        },
      ],
    },
  });
};

const addStudent = async (name, email, cellNumber, age, address) => {
  return Student.create({
    name: name,
    email: email,
    cellNumber: cellNumber,
    age: age,
    address: address,
  });
};

const enrollStudent = async (stdId, courseId) => {
  return Enrollment.create({
    courseCourseId: courseId,
    studentStudentId: stdId,
  });
};

const updateStudent = async (
  name,
  email,
  cellNumber,
  age,
  address,
  student_id
) => {
  return Student.update(
    {
      name: name,
      email: email,
      cellNumber: cellNumber,
      age: age,
      address: address,
    },
    {
      where: {
        student_id: student_id,
      },
    }
  );
};
module.exports = { getAllStudents, addStudent, updateStudent, enrollStudent };
