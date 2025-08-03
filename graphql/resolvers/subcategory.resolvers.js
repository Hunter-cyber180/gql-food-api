// * ---- Models ----
const SubCategoryModel = require("../../models/SubCategory");

subCategories = async () => await SubCategoryModel.find({});

const addCategory = async (_, args, context) => {
    const { title, icon, category } = args;
    // TODO => validate admin token
    return await SubCategoryModel.create({ title, icon, category });
}

const editCategory = async ({ id: _id }, args, context) => {
    const { title, icon, category } = args;
    // TODO => validate admin token
    return await SubCategoryModel.findByIdAndUpdate({ _id }, { title, icon, category });
}

module.exports = {
    subCategories,
    addCategory,
    editCategory
};
