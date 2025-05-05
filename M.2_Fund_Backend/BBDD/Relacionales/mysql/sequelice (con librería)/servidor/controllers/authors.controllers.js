// Importando modelo
const Author = require("../models/Author");

const getAuthor = async (req, res) => {
    const getAuthor = await Author.findAll();
    console.log(getAuthor);
    res.send(getAuthor);
};

const createAuthor = async (req, res) => {
    if (!req.body.name || !req.body.nacionality || !req.body.gender) {
        res.status(400).send("ERROR, datos incompletos o no validos");
        return;
    }
    const createdAuthor = await Author.create({
        name: String(req.body.name),
        nacionality: String(req.body.nacionality),
        gender: String(req.body.gender),
    });
    console.log(req.body);
    res.send(createdAuthor.id);
};

const updateAuthor = async (req, res) => {
    if (
        !req.params.id ||
        isNaN(req.params.id) ||
        !req.body.title ||
        !req.body.description
    ) {
        res.status(404).send(
            "ERROR, datos incompletos o no se ha introducido un ID de libro"
        );
        return;
    }
    const updateAuthor = await Author.update(
        // New values
        {
            title: req.body.title,
            description: req.body.description,
        },
        // Conditions
        {
            where: req.params.id,
        }
    );

    if (updateAuthor > 0) {
        res.send(`Updated book with ID: ${req.params.id}`);
    } else {
        res.status(404).send("ERROR, Libro no encontrado");
    }
};

const deleteAuthor = async (req, res) => {
    if (!req.params.id || isNaN(req.params.id)) {
        res.status(404).send(
            "ERROR, datos incompletos o no se ha introducido un numero"
        );
        return;
    }
    const deleteAuthor = await Author.destroy({
        where: {
            id: Number(req.params.id),
        },
    });

    if (deleteAuthor > 0) {
        res.send(`Deleted author with ID: ${req.params.id}`);
    } else {
        res.status(404).send("ERROR, Autor no encontrado");
    }
};

exports.getAuthor = getAuthor;
exports.createAuthor = createAuthor;
exports.updateAuthor = updateAuthor;
exports.deleteAuthor = deleteAuthor;
