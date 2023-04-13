const Student = require("../models/StudentModel");

const getAllStudents = async () => {
  return Student.findAll();
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
module.exports = { getAllStudents, addStudent, updateStudent };
