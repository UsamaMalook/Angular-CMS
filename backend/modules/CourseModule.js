const { Op, Sequelize } = require("sequelize");
const Course = require("../models/CourseModel");
const Student = require("../models/StudentModel");
const Enrollment = require("../models/Enrollments");

const getAllcourses = async (queryParams) => {
  console.log("Starting getAllCourses...");
  try {
    const res = await Course.findAll({
      attributes: [
        "course_id",
        "name",
        "field",
        "creditHours",
        "lab",
        [
          Sequelize.fn("COUNT", Sequelize.col("enrollments.enroll_id")),
          "enrollmentCount",
        ],
      ],
      include: { model: Enrollment, attributes: [] },
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
      group: ["course_id"],
    });
    console.log(`Found ${res.length} courses.`);
    return res;
  } catch (err) {
    console.error("Error in getAllCourses:", err);
    throw err;
  }
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
