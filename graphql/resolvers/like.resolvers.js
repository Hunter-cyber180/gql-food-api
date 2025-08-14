// * ---- Models ----
const LikeModel = require("../../models/Like");

// Get all likes
const likes = async () => await LikeModel.find({});

// Get a single like by ID
const like = async ({ id: _id }) => await LikeModel.findOne({ _id });

// Add a new like
const addLike = async (_, args, context) => {
    const { user, food } = args;
    return await LikeModel.create({ user, food });
}

// Delete a like
const deleteLike = async ({ id: _id }) => await LikeModel.findOneAndDelete({ _id });

// Export all like-related resolver functions
module.exports = {
    likes,
    like,
    addLike,
    deleteLike
};
