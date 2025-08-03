// * ---- Models ----
const LikeModel = require("../../models/Like");

const likes = async () => await LikeModel.find({});

const addLike = async (_, args, context) => {
    const { user, food } = args;
    // TODO => validate admin token
    return await LikeModel.create({ user, food });
}

module.exports = {
    likes,
    addLike
};
