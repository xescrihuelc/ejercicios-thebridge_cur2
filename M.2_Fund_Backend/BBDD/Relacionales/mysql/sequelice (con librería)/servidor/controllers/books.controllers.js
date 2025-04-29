// Importando modelo
const Book = require("../models/Book");

const getBooks = async (req, res) => {
    const getBooks = await Book.findAll();
    console.log(getBooks);
    res.send(getBooks);
};

const createBook = async (req, res) => {
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.numLength ||
        isNaN(req.body.numLength)
    ) {
        res.status(400).send("ERROR, datos incompletos o no validos");
        return;
    }
    const createdBook = await Book.create({
        // title: "Cinco semanas en globo",
        title: String(req.body.title),
        // description: "Hola",
        description: String(req.body.description),
        // length: 350,
        length: Number(req.body.numLength),
    });
    console.log(req.body);
    res.send(createdBook.id);
};

const updateBook = async (req, res) => {
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
    const updateBook = await Book.update(
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

    if (updateBook > 0) {
        res.send(`Updated book with ID: ${req.params.id}`);
    } else {
        res.status(404).send("ERROR, Libro no encontrado");
    }
};

const deleteBook = async (req, res) => {
    if (!req.params.id || isNaN(req.params.id)) {
        res.status(404).send(
            "ERROR, datos incompletos o no se ha introducido un numero"
        );
        return;
    }
    const deleteBook = await Book.destroy({
        where: {
            id: Number(req.params.id),
        },
    });

    if (deleteBook > 0) {
        res.send(`Deleted book with ID: ${req.params.id}`);
    } else {
        res.status(404).send("ERROR, Libro no encontrado");
    }
};

exports.getBooks = getBooks;
exports.createBook = createBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
