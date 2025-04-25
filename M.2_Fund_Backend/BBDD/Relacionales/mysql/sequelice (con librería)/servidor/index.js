// DECLARE PORT AND IMPORT MODULES
const PORT = 8000;

const cors = require("cors");
const express = require("express");
const User = require("./models/Users");
const usersRouter = require("./routes/users.routes");

// CONFIGURATE CONNECTION TO DB WITH SEQUELIZE

const main = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    User.sync();

    app.use("/users", usersRouter);

    app.listen(PORT, () => {
        console.log(`App listening on port: ${PORT}`);
    });
};

main();
