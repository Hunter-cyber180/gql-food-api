// Import required Mongoose modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Basket schema (structure for MongoDB documents)
const BasketSchema = new Schema({
    // Reference to the User who owns this basket item
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    // Reference to the Food item in the basket
    food: {
        type: mongoose.Types.ObjectId,
        ref: "Food",
        required: true
    },
    // Quantity of the food item in the basket
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true });  // Adds automatic createdAt and updatedAt fields

// Create and export the Basket model based on the schema
module.exports = mongoose.model("Basket", BasketSchema);
