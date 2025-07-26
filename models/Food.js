const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inventory: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: mongoose.Types.ObjectId, ref: "Category", required: true }
}, { timestamps: true });
