const Logger = require("logplease");
const logger = Logger.create("utils");
logger.debug(`This is a debug message`);
logger.log(`This is a log message`); // alias for debug()
logger.info(`This is a info message`);
logger.warn(`This is a warning`);
logger.error(`This is an error`);
