const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Category", CategorySchema);
