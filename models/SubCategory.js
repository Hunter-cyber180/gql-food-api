const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the SubCategory schema
const SubCategorySchema = new Schema({
    // Reference to the parent Category
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    // Title/name of the subcategory
    title: {
        type: String,
        required: true
    },
    // Icon representing the subcategory
    icon: {
        type: String,
        required: true
    }
}, {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true
});

// Create and export the SubCategory model
module.exports = mongoose.model("SubCategory", SubCategorySchema);
