const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inventory: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: mongoose.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: mongoose.Types.ObjectId, ref: "SubCategory", default: null }
}, { timestamps: true });

module.exports = mongoose.model("Food", FoodSchema);
