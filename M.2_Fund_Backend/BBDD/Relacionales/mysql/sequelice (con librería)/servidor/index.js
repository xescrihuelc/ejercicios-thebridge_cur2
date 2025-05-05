// DECLARE PORT AND IMPORT MODULES
const port = 8000;

const cors = require("cors");
const express = require("express");
const db = require("./db");
const booksRouter = require("./routes/books.routes");
const authorsRouter = require("./routes/authors.routes");

// CONFIGURE CONNECTION TO DB WITH SEQUALIZE

const main = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    db.sequelize.sync().then(() => {
        console.log("Re-sync db.");
    });

    app.use("/books", booksRouter);
    app.use("/authors", authorsRouter);

    app.listen(port, () => {
        console.log(`App listening on ${port}`);
    });
};

main();
