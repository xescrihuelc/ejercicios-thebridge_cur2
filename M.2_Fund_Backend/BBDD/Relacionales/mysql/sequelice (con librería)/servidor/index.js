// DECLARE PORT AND IMPORT MODULES
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = 8000;
const { Sequelize, DataTypes } = require("sequelize");

// INITIAZILE EXPRESS
const app = express();
app.use(cors());
app.use(express.json());

// CONFIGURATE CONNECTION TO DB WITH SEQUELIZE
const sequelize = new Sequelize(
    "pruebasequelize", // DB Name
    "user", // User name
    "password", // Password
    {
        host: "localhost",
        dialect: "mysql",
    }
);

try {
    sequelize.authenticate().then();
    console.log("Conectado");
} catch (error) {
    console.error("ERROR al conectarse", error);
}

const User = sequelize.define(
    "User",
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

User.sync();

sequelize.close();
//
app.get("/", (req, res) => {
    res.send("It works");
});

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
