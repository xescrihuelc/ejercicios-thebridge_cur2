function capitalize(p) {
    return String(p).charAt(0).toUpperCase() + String(p).slice(1).toLowerCase();
}

const express = require("express");
const app = express();
const port = 3000;

app.get("/myName", (req, res) => {
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
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${port}`);
});
