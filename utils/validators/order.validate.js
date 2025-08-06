const Schema = require("validate");
const mongoose = require("mongoose");

const orderSchema = new Schema({
    user: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "userID must be a valid MongoDB ObjectId!"
        }
    },
    food: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "foodID must be a valid MongoDB ObjectId!"
        }
    },
    quantity: {
        type: String,
        required: true,
        message: "quantity is required!",
    },
});
