module.exports = {
    MONGO_URI: "mongodb://localhost:27017/azafranShop",
    JWT_SECRET:
        "tortilladepatata" /*A JWT SECRET EXAMPLE, USE ENVIRONMENT VARIABLES BETTER*/,
    CHATGPT_KEY: process.env.OPENAI_KEY,
    /* dev: { 
        MONGO_URI: "mongodb://localhost:27017/",
    },
    prod: {
        MONGO_URI: "mongodb://localhost:27017/",
    },
    */
};
