// Import Mongoose library for MongoDB object modeling
const mongoose = require("mongoose");
// Destructure Schema from mongoose for schema definition
const Schema = mongoose.Schema;

// Define the Category schema (structure for MongoDB documents)
const CategorySchema = new Schema({
    // Category title/name field
    title: {
        type: String,
        required: true
    },

    // Icon field (could be a URL or icon class name)
    icon: {
        type: String,
        required: true
    }
}, {
    // Schema options:
    timestamps: true
});

// Create and export the Category model:
module.exports = mongoose.model("Category", CategorySchema);
