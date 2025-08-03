// * ---- Models ----
const SubCategoryModel = require("../../models/SubCategory");

subCategories = async () => await SubCategoryModel.find({});

const addCategory = async (_, args, context) => {
    const { title, icon, category } = args;
    // TODO => validate admin token
    return await SubCategoryModel.create({ title, icon, category });
}

module.exports = {
    subCategories,
    addCategory,
};
