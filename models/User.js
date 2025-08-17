const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema definition
const UserSchema = new Schema({
    // User's full name (required)
    name: { type: String, required: true },
    // User's email (required)
    email: { type: String, required: true },
    // User's phone number (required)
    phoneNumber: { type: Number, required: true },
    // User's password (required)
    password: { type: String, required: true },
    // Role can be either USER or ADMIN
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        required: true
    }
}, {
    // Adds createdAt and updatedAt fields
    timestamps: true
});

// Export User model
module.exports = mongoose.model("User", UserSchema);
