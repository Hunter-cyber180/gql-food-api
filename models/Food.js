const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Food Schema Definition:
 * Defines the structure of food items in the database
 */
const FoodSchema = new Schema({
    // Name of the food item
    name: {
        type: String,
        required: [true, 'Food name is required'],
        trim: true,
        maxlength: [100, 'Food name cannot exceed 100 characters']
    },
    // Price of the food item (in base currency units)
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative'],
        set: v => parseFloat(v.toFixed(2))
    },
    // Current inventory/stock quantity
    inventory: {
        type: Number,
        required: true,
        min: [0, 'Inventory cannot be negative'],
        default: 0
    },
    // URL/path to the food image
    image: {
        type: String,
        required: true,
        validate: {
            validator: v => v.startsWith('http'),
            message: 'Image must be a valid URL'
        }
    },
    // Reference to the parent Category
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
        index: true
    },
    // Optional reference to a SubCategory
    subCategory: {
        type: mongoose.Types.ObjectId,
        ref: "SubCategory",
        default: null
    }
}, {
    // Schema Options:
    timestamps: true,
});

// Export the compiled Food model
module.exports = mongoose.model("Food", FoodSchema);
