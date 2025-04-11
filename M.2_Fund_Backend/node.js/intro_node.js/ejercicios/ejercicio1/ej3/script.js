const index = require("./index.js");
const num = require("./numeros.js");
const Logger = require("logplease");
const logger = Logger.create("utils");

const numbers = num.numeros;

numbers.forEach((number) => {
    if (index.esPar(number) == true) {
        logger.info("El número es par");
    } else {
        logger.error("El número no es par");
    }
});
