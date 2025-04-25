const { Sequelize } = require("sequelize");

const connectDB = async () => {
    const sequelize = new Sequelize(
        "pruebasequelize", // DB Name
        "user", // User name
        "password", // Password
        {
            host: "localhost",
            dialect: "mysql",
        }
    );

    return sequelize;
};

const db = {};

db.sequelize = connectDB();
// db.sequelize.sync();

module.exports = db;
