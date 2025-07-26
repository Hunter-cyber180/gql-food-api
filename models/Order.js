const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    food: { type: mongoose.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
