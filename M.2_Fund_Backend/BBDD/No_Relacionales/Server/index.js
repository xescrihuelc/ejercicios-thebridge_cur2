const PORT = 8080;

const express = require("express");
const cors = require("cors");
const recipesRoutes = require("./routes/recipes.routes");
const ingredientsRoutes = require("./routes/ingredients.routes");
const usersRoutes = require("./routes/users.routes");

const main = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use("/recipes", recipesRoutes);
    app.use("/ingredients", ingredientsRoutes);
    app.use("/", usersRoutes);

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
};

main();
