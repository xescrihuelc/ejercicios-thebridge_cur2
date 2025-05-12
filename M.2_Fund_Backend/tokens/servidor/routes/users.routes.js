const express = require("express");
const membersController = require("../controllers/members.controllers");
const router = express.Router();

router.post("/login", membersController.login);
router.post("/register", membersController.register);

module.exports = router;
