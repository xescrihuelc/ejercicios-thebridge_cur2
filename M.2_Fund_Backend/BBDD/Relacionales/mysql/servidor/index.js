const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const port = 808;

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

app.get("/cities", (req, res) => {
    const sql = "SELECT * FROM cities";
    db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        // res.status(200).send("Datos obtenidos");
        res.status(200).send(result);
    });
});

app.post("/cities", (req, res) => {
    if (!req.body.name || !req.body.country) {
        res.status(400).send("ERROR, datos incompletos");
    }
    const sql = `INSERT INTO cities (name, country) VALUES ('${req.body.name}', '${req.body.country}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.status(201).send("City added....");
    });
});

app.delete("/cities/:id", (req, res) => {
    if (!req.params.id || typeof req.params.id != Number) {
        res.status(404).send("ERROR, datos incompletos o invalidos");
    }
    const idToDelete = Number(req.params.id);
    const sql = `DELETE FROM cities WHERE id = ${idToDelete}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            console.log(result);
            res.status(200).send("City deleted....");
        } else {
            res.status(204).send("City not found");
            console.log(result);
        }
    });
});

// app.get("/", (req, res) => {
// db.connect
// });

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
