const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Order schema
const OrderSchema = new Schema({
    // Reference to the User who placed the order
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    // Reference to the Food item ordered
    food: {
        type: mongoose.Types.ObjectId,
        ref: "Food",
        required: true
    },
    // Quantity of the food item ordered
    quantity: {
        type: Number,
        required: true
    },
    // Price at the time of ordering
    price: {
        type: Number,
        required: true
    },
    // Delivery flag (true for delivery, false for pickup)
    isDeliver: {
        type: Boolean,
        required: true
    }
}, {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true
});

// Create and export the Order model
module.exports = mongoose.model("Order", OrderSchema);
