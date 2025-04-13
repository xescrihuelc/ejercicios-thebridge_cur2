// Modules to import
const Logger = require("logplease");
const math = require("./module.js");

// Script with modules
const logger = Logger.create("utils");
logger.log(math.sum(8, 8));
logger.log(math.multiply(2, 3));
