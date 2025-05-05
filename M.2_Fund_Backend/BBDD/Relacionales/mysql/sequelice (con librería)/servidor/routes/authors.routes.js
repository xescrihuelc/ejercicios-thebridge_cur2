const express = require("express");
const authorsController = require("../controllers/authors.controllers");
const router = express.Router();

router.get("/", authorsController.getAuthor);
router.post("/", authorsController.createAuthor);
// router.put("/", authorsController.updateAuthor);
router.delete("/:id", authorsController.deleteAuthor);

module.exports = router;
