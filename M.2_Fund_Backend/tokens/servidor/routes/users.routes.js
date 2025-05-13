const express = require("express");
const membersController = require("../controllers/members.controllers");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth");

router.post("/login", membersController.login);
router.post("/register", membersController.register);

module.exports = router;
