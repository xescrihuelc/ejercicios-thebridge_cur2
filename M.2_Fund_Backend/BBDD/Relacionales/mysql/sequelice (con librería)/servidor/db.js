const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pruebasequelize", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;

module.exports = db;
