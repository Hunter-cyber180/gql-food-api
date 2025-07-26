const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategorySchema = new Schema({
    category: { type: mongoose.Types.ObjectId, ref: "Category", required: true },
    title: { type: String, required: true },
    icon: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("SubCategory", SubCategorySchema);
