const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// getting database instance
const db = require("./config/database");

const sequelize = db.sequelize;

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => console.log("Connection - Successfull"))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then((result) => console.log("Sync - Successfull!"))
  .catch((err) => console.log(err));

// routes
app.use("/api/courses", require("./controllers/CourseController.js"));
app.use("/api/students", require("./controllers/StudentController.js"));

// starting the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
