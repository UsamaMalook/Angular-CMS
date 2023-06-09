const express = require("express");
const {
  getAllStudents,
  addStudent,
  updateStudent,
  enrollStudent,
} = require("../modules/StudentModule");
const router = express.Router();

// get functions from modules

router.get("/", async (req, res) => {
  try {
    const students = await getAllStudents({ ...req.query });
    res.send({ students: students });
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post("/addStudent", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const cellNumber = req.body.cellNumber;
  const age = req.body.age;
  const address = req.body.address;

  const result = addStudent(name, email, cellNumber, age, address);
  res.send(result);
});

router.post("/:stdId/:courseId", async (req, res) => {
  const { stdId, courseId } = req.params;

  console.log(stdId, courseId);

  try {
    const result = await enrollStudent(stdId, courseId);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/updateStudent", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const cellNumber = req.body.cellNumber;
  const age = req.body.age;
  const address = req.body.address;
  const student_id = req.body.student_id;

  const result = updateStudent(
    name,
    email,
    cellNumber,
    age,
    address,
    student_id
  );

  res.send({ result });
});

module.exports = router;
