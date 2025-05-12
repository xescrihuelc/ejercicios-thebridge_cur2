const express = require("express");
const loansController = require("../controllers/loans.controllers");
const router = express.Router();

router.get("/", loansController.getLoans);
router.post("/", loansController.loanBookToMember);
router.patch("/", loansController.returnBook);
// router.put("/", loansController.updateLoan);
// router.delete("/:id", loansController.deleteLoan);

module.exports = router;
