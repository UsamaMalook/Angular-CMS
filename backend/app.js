const express = require("express");
const bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const sequelize = require("./config/database");

// TODO: define a function to register models
const CourseModel = require("./models/CourseModel");
const StudentModel = require("./models/StudentModel");

const app = express();

sequelize
  .authenticate()
  .then(() => console.log("Connection - Successfull"))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then((result) => console.log("Sync - Successfull!"))
  .catch((err) => console.log(err));

// routes
app.use("/api/course", require("./controllers/CourseController.js"));

// starting the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
