const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    // Crear un ingrediente en mi db
    res.send("Recipes");
});

router.patch("/", (req, res) => {
    // Actualizar un ingrediente
    res.send("Patch ingredient");
});

router.delete("/:id", (req, res) => {
    // Eliminar un ingrediente
    res.send("Delete ingredient");
});

router.get("/", (req, res) => {
    // Obtener todas las recetas de un usuario
    // {[]}
    res.send("Get all recipes");
});

module.exports = router;
