const express = require("express");
const booksController = require("../controllers/books.controllers");
const router = express.Router();

router.get("/", booksController.getBooks);
router.post("/", booksController.createBook);
router.put("/", booksController.updatesBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
