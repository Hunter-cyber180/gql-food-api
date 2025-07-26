const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Basket = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    food: { type: mongoose.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true }    
}, { timestamps: true });
