// * ---- Models ----
const LikeModel = require("../../models/Like");

const likes = async () => await LikeModel.find({});

const addLike = async (_, args, context) => {
    const { user, food } = args;
    return await LikeModel.create({ user, food });
}

const deleteLike = async ({ id: _id }) => await LikeModel.findOneAndDelete({ _id });

module.exports = {
    likes,
    addLike,
    deleteLike
};
