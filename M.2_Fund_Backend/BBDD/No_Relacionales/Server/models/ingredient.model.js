const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { Type: String, required: true }, //TODO: userId required from auth
    quantity: { type: Number, default: 1 },
    unit: String,
    createdAt: { type: Date, default: Date.now },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = { Ingredient };
