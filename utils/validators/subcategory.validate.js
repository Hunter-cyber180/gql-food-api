const Schema = require("validate"); // Import validation library
const mongoose = require("mongoose"); // Import MongoDB library

// SubCategory validation schema
const subCategorySchema = new Schema({
    category: {
        type: String,
        required: true,  // Parent category reference is required
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),  // Validate as MongoDB ObjectID
            message: "categoryID must be a valid MongoDB ObjectId!" // Error message
        }
    },
    title: {
        type: String,
        required: true,  // Subcategory name is required
        message: "Title is required!",  // Error message if missing
    },
    icon: {
        type: String,
        required: true,  // Icon reference is required
        message: "Icon is required!",  // Error message if missing
    },
});

// Export validation function
module.exports = {
    subCategoryValidator: (object) => subCategorySchema.validate(object)  // Validates subcategory objects
};
