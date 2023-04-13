const express = require("express");
const {
  getAllcourses,
  addCourse,
  updateCourse,
} = require("../modules/CourseModule");
const router = express.Router();

// get functions from modules

router.get("/", async (req, res) => {
  try {
    const courses = await getAllcourses({ ...req.query });
    res.send({ courses: courses });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/addCourse", async (req, res, next) => {
  const name = req.body.name;
  const field = req.body.field;
  const creditHours = req.body.creditHours;
  const lab = req.body.lab;

  const result = await addCourse(name, field, creditHours, lab);
  res.send({ result });
});

router.put("/updateCourse", async (req, res, next) => {
  const name = req.body.name;
  const field = req.body.field;
  const creditHours = req.body.creditHours;
  const lab = req.body.lab;
  const course_id = req.body.course_id;

  const result = await updateCourse(name, field, creditHours, lab, course_id);

  res.send({ result });
});

module.exports = router;
