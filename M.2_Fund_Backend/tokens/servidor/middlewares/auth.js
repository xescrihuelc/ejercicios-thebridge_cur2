const Member = require("../models/Member");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).send("There is no token");
        return;
    }

    const payload = jwt.verify(token, jwt_secret);

    // USER_KEY is ID Member
    const userID = payload.userId;

    const user = await Member.findByPk(userID);
    if (!user) {
        res.status(401).send("Invalid auth header");
        return;
    }

    // Añadir usuario a la  request que se esta haciendo
    req.user = user.dataValues;
    console.log("++++ SE EJECUTA EL MIDDLEWARE", user.dataValues);
    next();
};

exports.authMiddleware = authMiddleware;
