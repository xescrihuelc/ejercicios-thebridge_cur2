const { DataTypes } = require("sequelize");

const defineBookModel = (sequelize) => {
    const Book = sequelize.define(
        "Book",
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
            },
            length: {
                type: DataTypes.INTEGER,
            },
        },
        {}
    );
    return Book;
};

module.exports = defineBookModel;
