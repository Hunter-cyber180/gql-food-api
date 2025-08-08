const Schema = require("validate");
const mongoose = require("mongoose");

const subCategorySchema = new Schema({
    category: {
        type: String,
        required: true,
        validate: {
            validator: (v) => mongoose.Types.ObjectId.isValid(v),
            message: "categoryID must be a valid MongoDB ObjectId!"
        }
    },
    title: {
        type: String,
        required: true,
        message: "Title is required!",
    },
});
