const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    // Crear receta para un usuario
    // Nombre receta - Ingredientes
    res.send("Recipes");
});

router.patch("/:id", (req, res) => {
    // Actualizar receta
    // Nombre - Ingredientes - Description
    res.send("Patch recipes");
});

router.get("/", (req, res) => {
    // Encontrar una receta a partir de
    // los ingredientes guardados
    // Nombre - Ingredientes - Procedimiento
    // {[]}
    res.send("Get all recipes");
});

module.exports = router;
