const Schema = require("validate"); // Import validation library
const mongoose = require("mongoose"); // Import MongoDB library

// Like validation schema for tracking user-food likes
const likeSchema = new Schema({
    user: {
        type: String,
        required: true,  // User reference is mandatory
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate MongoDB ObjectID format
            message: "userID must be a valid MongoDB ObjectId!"   // Validation error message
        }
    },
    food: {
        type: String,
        required: true,  // Food reference is mandatory
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate MongoDB ObjectID format
            message: "foodID must be a valid MongoDB ObjectId!"    // Validation error message
        }
    },
});

// Export the validation function
module.exports = {
    likeValidator: (object) => likeSchema.validate(object)  // Function to validate like objects
};
