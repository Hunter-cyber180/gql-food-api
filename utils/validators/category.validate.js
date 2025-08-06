const Schema = require("validate");
const mongoose = require("mongoose");

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        message: "Title is required!",
    },
});
