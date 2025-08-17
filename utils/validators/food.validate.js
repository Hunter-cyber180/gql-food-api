const Schema = require("validate");  // Import validation library
const mongoose = require("mongoose"); // Import MongoDB library

// Food item validation schema
const foodSchema = new Schema({
    category: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate as MongoDB ObjectID
            message: "categoryID must be a valid MongoDB ObjectId!" // Error message
        }
    },
    subCategory: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate as MongoDB ObjectID
            message: "SubCategoryID must be a valid MongoDB ObjectId!" // Error message
        }
    },
    name: {
        type: String,
        required: true,
        message: "Name is required!",  // Error message if missing
    },
    image: {
        type: String,
        required: true,
        message: "Image is required!",  // Error message if missing
    },
    inventory: {
        type: String,
        required: true,
        message: "Inventory is required!",  // Error message if missing
    },
    price: {
        type: String,
        required: true,
        message: "Price is required!",  // Error message if missing
    },
});

// Export validation function
module.exports = {
    foodValidator: (object) => foodSchema.validate(object)  // Validates food objects
};
