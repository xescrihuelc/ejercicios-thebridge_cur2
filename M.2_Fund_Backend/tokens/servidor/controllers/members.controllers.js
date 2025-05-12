// Importando modelo
const Member = require("../models/Member");

const login = async (req, res) => {
    const username = req.body.username;
    const passwd = req.body.password;
    if (passwd != "messi") {
        //
        res.status(400).send("INCORRECT_PASSWORD");
    }
    const createdMember = await Member.findOne({
        where: {
            name: username,
        },
    });
    if (!createdMember) {
        res.status(404).send("INCORRECT_USERNAME");
    }
    res.status(201).send({ id: createdMember.id });
};

const createMember = async (req, res) => {
    const memberName = req.body.name;
    if (isNaN(memberName) == false || !memberName) {
        // console.log("ERROR");
        res.status(400).send("ERROR with petition");
        return;
    }
    const createdMember = await Member.create({
        name: memberName,
        registrationDate: new Date(),
    });
    // console.log(`Member added with ID: ${createdMember.id}`);

    res.status(201).send({ id: createdMember.id });
};

exports.createMember = createMember;
exports.login = login;
