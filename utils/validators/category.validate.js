const Schema = require("validate"); // Import the validation library

// Define validation schema for category
const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        message: "Title is required!", // Error message if title is missing
    },
    icon: {
        type: String,
        required: true,
        message: "Icon is required!", // Error message if icon is missing
    },
});

// Export the validator function
module.exports = {
    categoryValidator: (object) => categorySchema.validate(object) // Function to validate category objects
};
