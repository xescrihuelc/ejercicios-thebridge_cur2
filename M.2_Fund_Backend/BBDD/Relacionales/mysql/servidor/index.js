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
    console.log(req.ip);
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

app.put("/cities", (req, res) => {
    if (!req.body.prevName || !req.body.newName) {
        res.status(400).send("ERROR, datos incompletos");
    }
    const sql = `UPDATE cities SET name = '${req.body.newName}' WHERE name = '${req.body.prevName}';`;
    db.query(sql, (err, res) => {
        if (err) throw err;
        res.status(202).send("City updated...");
    });
});

app.delete("/cities/:id", (req, res) => {
    if (!req.params.id) {
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

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
