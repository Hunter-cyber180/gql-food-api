const Schema = require("validate"); // Import validate library
const mongoose = require("mongoose"); // Import mongoose for MongoDB operations

// Define basket schema for validation
const basketSchema = new Schema({
    user: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v), // Validate as MongoDB ObjectId
            message: "userID must be a valid MongoDB ObjectId!"
        }
    },
    food: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v), // Validate as MongoDB ObjectId
            message: "foodID must be a valid MongoDB ObjectId!"
        }
    },
    quantity: {
        type: String, // Note: Consider using Number if quantity should be numeric
        required: true,
        message: "Quantity is required!",
    },
});

// Export validation function
module.exports = {
    basketValidator: (object) => basketSchema.validate(object)
};
