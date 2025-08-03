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
    return await SubCategoryModel.findOneAndUpdate({ _id }, { title, icon, category });
}

const deleteSubCategory = async ({ id: _id }) =>
    await SubCategoryModel.findOneAndDelete({ _id });

module.exports = {
    subCategories,
    addCategory,
    editCategory,
    deleteSubCategory,
};
