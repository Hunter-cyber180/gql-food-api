const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    food: { type: mongoose.Types.ObjectId, ref: "Food", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Like", LikeSchema);
