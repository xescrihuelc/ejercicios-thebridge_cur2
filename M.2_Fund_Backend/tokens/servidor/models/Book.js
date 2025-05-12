const { DataTypes } = require("sequelize");
const db = require("../db");

const Book = db.sequelize.define(
    "Books",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        publicationYear: {
            type: DataTypes.INTEGER,
        },
        ISBN: {
            type: DataTypes.INTEGER,
        },
    },
    {}
);

module.exports = Book;
