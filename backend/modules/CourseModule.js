const { Op } = require("sequelize");
const Course = require("../models/CourseModel");

const getAllcourses = async (queryParams) => {
  return Course.findAll({
    where: {
      [Op.and]: [
        {
          ...(queryParams.name && {
            name: { [Op.like]: `%${queryParams.name}%` },
          }),
          ...(queryParams.field && {
            field: { [Op.like]: `%${queryParams.field}%` },
          }),
          ...(queryParams.credit && {
            creditHours: parseInt(queryParams.credit),
          }),
          ...(queryParams.lab && {
            lab: parseInt(queryParams.lab),
          }),
        },
      ],
    },
  });
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
