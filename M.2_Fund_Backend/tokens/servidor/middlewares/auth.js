const Member = require("../models/Member");

const authMiddleware = async (req, res, next) => {
    // EXISTE LLAVE DEL USUARIO
    const USER_KEY = req.headers["llave"];
    if (!USER_KEY) {
        res.status(401).send("Missing auth header");
        return;
    }
    // USER_KEY is ID Member
    const user = await Member.findByPk(USER_KEY);
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
