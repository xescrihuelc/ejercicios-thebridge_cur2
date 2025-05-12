const express = require("express");
const membersController = require("../controllers/members.controllers");
const router = express.Router();

// router.get("/", membersController.getmembers);
router.post("/", membersController.createMember);
// router.put("/", membersController.updatesmember);
// router.delete("/:id", membersController.deletemember);

module.exports = router;
