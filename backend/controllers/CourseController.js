const express = require("express");
const { getAllcourses, addCourse } = require("../modules/CourseModule");
const router = express.Router();
const bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// get functions from modules

router.get("/", (req, res) => {
  res.send(getAllcourses());
});

router.post("/addCourse", jsonParser, (req, res, next) => {
  const name = req.body.name;
  const field = req.body.field;
  const creditHours = req.body.creditHours;
  const lab = req.body.lab;
  res.send(addCourse(name, field, creditHours, lab));
});

module.exports = router;
