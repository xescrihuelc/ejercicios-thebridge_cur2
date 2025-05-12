// Importing modules and dependencies
const Loan = require("../models/Loan");
const Book = require("../models/Book");
const Member = require("../models/Member");
const LOAN_DAYS = 30;
const { Op } = require("sequelize");

// Functions
const getLoans = async (req, res) => {
    const memberId = req.query.memberId;
    const activeLoans = Boolean(JSON.parse(req.query.active_loans));

    const whereFilter = {};

    if (memberId) {
        whereFilter.MemberId = memberId;
    }

    if (activeLoans === true) {
        whereFilter.return_date = null;
    }
    if (activeLoans === false) {
        whereFilter.return_date = {
            [Op.not]: null,
        };
    }

    const memberLoans = await Loan.findAll({
        attribute: ["return_date", "loan_date", "deadline"],
        where: whereFilter,
        include: [
            { model: Book, attributes: ["title"] },
            { model: Member, attributes: ["name"] },
        ],
    });

    const parseLoans = memberLoans.map((loan) => {
        return {
            returnDate: loan.return_date,
            loanDate: loan.loan_date,
            deadline: loan.deadline,
            bookTitle: loan.Book.title,
            memberName: loan.Member.name,
        };
    });

    // console.log(parseLoans);
    res.status(200).send(parseLoans);
};

const loanBookToMember = async (req, res) => {
    const memberID = req.body.memberId;
    const bookID = req.body.bookId;

    if (!memberID || !bookID || isNaN(memberID) || isNaN(bookID)) {
        // console.log("ERROR");
        res.status(400).send("ERROR with petition");
        return;
    }

    const foundBook = await Book.findByPk(bookID);
    if (!foundBook) {
        res.status(404).send("Book not found");
        return;
    }

    const foundMember = await Member.findByPk(memberID);
    if (!foundMember) {
        res.status(404).send("User not found");
        return;
    }

    const currentDate = new Date();
    // const calcuatedDeadline = new Date(
    //     currentDate.getTime() + LOAN_DAYS * 24 * 60 * 60 * 1000
    // );
    const calcuatedDeadline = currentDate.setDate(
        currentDate.getDate() + LOAN_DAYS
    );

    const createdLoan = await Loan.create({
        MemberId: memberID,
        BookId: bookID,
        loan_date: currentDate,
        deadline: calcuatedDeadline,
    });

    // console.log(
    //     `Loan added with ID: ${createdLoan.id} and deadline ${createdLoan.deadline}`
    // );
    res.status(201).send({ deadline: createdLoan.deadline });
};

const returnBook = async (req, res) => {
    const bookID = req.body.bookId;

    if (!bookID || isNaN(bookID)) {
        console.log("ERROR");
        res.status(400).send("ERROR with petition");
        return;
    }

    const foundBook = await Book.findByPk(bookID);
    if (!foundBook) {
        res.status(404).send("Book not found");
        return;
    }

    const updatedLoans = await Loan.update(
        { return_date: new Date() },
        {
            where: {
                BookId: bookID,
                return_date: null,
            },
            returning: true,
        }
    );

    // IMPLEMENT STATUS
    //
    res.send({ canceledLoans: updatedLoans[0] });
    // res.status(201).send({ status: "ontime" });
    // res.status(201).send({ status: "delayed" });
};

exports.getLoans = getLoans;
exports.loanBookToMember = loanBookToMember;
exports.returnBook = returnBook;
