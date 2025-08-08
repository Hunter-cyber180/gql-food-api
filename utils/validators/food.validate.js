const Schema = require("validate");
const mongoose = require("mongoose");

const foodSchema = new Schema({
    category: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "categoryID must be a valid MongoDB ObjectId!"
        }
    },
    subCategory: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "SubCategoryID must be a valid MongoDB ObjectId!"
        }
    },
    name: {
        type: String,
        required: true,
        message: "Name is required!",
    },
    image: {
        type: String,
        required: true,
        message: "Image is required!",
    },
    inventory: {
        type: String,
        required: true,
        message: "Inventory is required!",
    },
    price: {
        type: String,
        required: true,
        message: "Price is required!",
    },
});

module.exports = {
    foodValidator: (object) => foodSchema.validate(object)
};
