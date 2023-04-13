const Course = require("../models/CourseModel");

const getAllcourses = async () => {
  return Course.findAll();
};

const addCourse = (name, field, creditHours, lab) => {
  return Course.create({
    name: name,
    field: field,
    creditHours: creditHours,
    lab: lab,
  });
};

const updateCourse = async (name, field, creditHours, lab, id) => {
  return Course.update(
    {
      name: name,
      field: field,
      creditHours: creditHours,
      lab: lab,
    },
    {
      where: {
        course_id: id,
      },
    }
  );
};
module.exports = { getAllcourses, addCourse, updateCourse };
