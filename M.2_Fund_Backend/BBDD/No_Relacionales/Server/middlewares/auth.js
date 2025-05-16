const auth = (req, res, next) => {
    // Recoger token del Header Autorization
    // No Token => 401
    // Verificar Token con jwt secret
    // Obtener userId del payload
    // Prevenir edge case: Find del userId
    // Guardo userId en la request para recogerlo en los controllers
    //  e identificar el usuario que hizo request
    next();
};

module.exports = { auth };
