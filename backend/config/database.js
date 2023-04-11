const Sequelize = require("sequelize");

const sequelize = new Sequelize("angular-cms", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
