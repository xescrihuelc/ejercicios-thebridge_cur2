const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "user",
    password: "password",
    database: "pruebaNodeJS",
});

db.connect();

app.post("/cities", (req, res) => {
    const sql = `INSERT INTO cities (name, country) VALUES ('${req.body.name}', '${req.body.country}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("City added....");
    });
});

// app.get("/", (req, res) => {
// db.connect
// });

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
