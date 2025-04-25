const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.sequelize.define(
    "User", //Table name
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
    },
    {}
);

module.exports = User;
