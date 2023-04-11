const Course = require("../models/CourseModel");

const getAllcourses = async () => {
  const courses = await Course.findAll();
  return json(courses);
};

const addCourse = async (name, field, creditHours, lab) => {
  let msg = "";

  await Course.create({
    name: name,
    field: field,
    creditHours: creditHours,
    lab: lab,
  })
    .then((res) => (msg = "Course created successfully."))
    .catch((err) => (msg = err));

  return msg;
};

const updateCourse = async (name, field, creditHours, lab) => {
  let msg = "";

  await Course.update(
    {
      name: name,
      field: field,
      creditHours: creditHours,
      lab: lab,
    },
    {
      where: {
        name: name,
      },
    }
  )
    .then((res) => (msg = "Course updated successfully."))
    .catch((err) => (msg = err));

  return msg;
};
module.exports = { getAllcourses, addCourse, updateCourse };
