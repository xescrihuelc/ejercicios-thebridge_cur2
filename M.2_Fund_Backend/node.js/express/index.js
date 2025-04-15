function capitalize(p) {
    return String(p).charAt(0).toUpperCase() + String(p).slice(1).toLowerCase();
}

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors()); // Habilita cors para ser usado en todas las request

app.get("/myName", (req, res) => {
    console.log(req.query);
    res.send(
        "My name is: " +
            req.query.name +
            " and my last name is: " +
            req.query.lastName
    );
});

app.get("/:name", (req, res) => {
    res.send(
        `Hello ${capitalize(req.params.name)}, your name has ${
            req.params.name.length
        } characters`
    );
});

app.get("/", (req, res) => {
    const data = {
        url: req.url,
        method: req.method,
        httpVersion: req.httpVersion,
        message: "Nicolás ya comíste ya te vas?",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
    // res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${port}`);
});
