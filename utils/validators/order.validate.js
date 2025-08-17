const Schema = require("validate"); // Import validation library  
const mongoose = require("mongoose"); // Import MongoDB library

// Order validation schema
const orderSchema = new Schema({
    user: {
        type: String,
        required: true,  // User reference is required
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate as MongoDB ObjectID
            message: "userID must be a valid MongoDB ObjectId!"   // Error message
        }
    },
    food: {
        type: String,
        required: true,  // Food reference is required
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate as MongoDB ObjectID
            message: "foodID must be a valid MongoDB ObjectId!"     // Error message
        }
    },
    quantity: {
        type: String,
        required: true,
        message: "Quantity is required!",  // Error message if missing
    },
    price: {
        type: String,
        required: true,
        message: "Price is required!",    // Error message if missing
    },
    isDeliver: {
        type: Boolean,   // Delivery flag (true/false)
        required: true,
        message: "IsDeliver is required!",  // Error message if missing
    },
});

// Export validation function
module.exports = {
    orderValidator: (object) => orderSchema.validate(object)  // Validates order objects
};
