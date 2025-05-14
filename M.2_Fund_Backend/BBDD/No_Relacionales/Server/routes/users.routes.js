const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("Login");
});

router.patch("/register", (req, res) => {
    res.send("Register");
});

module.exports = router;
