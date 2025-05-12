// Importando modelo
const Member = require("../models/Member");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const username = req.body.username;
    const passwd = req.body.password;

    // const hashedPassword = bcrypt.hashSync(passwd);
    // res.send(hashedPassword);
    // return;

    const user = await Member.findOne({
        where: {
            user: username,
        },
    });

    if (!user) {
        res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
        return;
    }

    const isPasswordMatch = bcrypt.compareSync(passwd, user.password);
    if (!isPasswordMatch) {
        res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
        return;
    }
    res.status(201).send({ llave: user.id });
};

const register = async (req, res) => {
    const memberName = req.body.memberName;
    const username = req.body.username;
    const passwd = bcrypt.hashSync(req.body.password);

    if (!memberName || !username || !req.body.password) {
        // console.log("ERROR");
        res.status(400).send("ERROR with register petition");
        return;
    }

    // const hashedPassword = bcrypt.hashSync(passwd);
    // res.send(passwd
    // return;

    const createdMemeber = await Member.create({
        name: memberName,
        user: username,
        password: passwd,
        registrationDate: new Date(),
    });

    res.status(201).send({ llave: createdMemeber.id });
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
exports.register = register;
