const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Like Schema Definition:
const LikeSchema = new Schema({
    // Reference to the User who liked the food item
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",                        // References the User model
        required: [true, 'User reference is required'],
        index: true                        // Optimizes queries filtering by user
    },
    // Reference to the Food item that was liked
    food: {
        type: mongoose.Types.ObjectId,
        ref: "Food",                       // References the Food model
        required: [true, 'Food reference is required'],
        index: true                       // Optimizes queries filtering by food
    }
}, {
    // Schema Options:
    timestamps: true,
});

module.exports = mongoose.model("Like", LikeSchema);
