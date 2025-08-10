// * ---- Models ----
const SubCategoryModel = require("../../models/SubCategory");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

const subCategories = async () => await SubCategoryModel.find({});

const subCategory = async ({ id: _id }) => await SubCategoryModel.findOne({ _id });

const addSubCategory = async (_, args, context) => {
    const { title, icon, category } = args;
    await adminValidator(context.req);

    return await SubCategoryModel.create({ title, icon, category });
}

const editSubCategory = async ({ id: _id }, args, context) => {
    const { title, icon, category } = args;
    // TODO => validate admin token
    return await SubCategoryModel.findOneAndUpdate({ _id }, { title, icon, category });
}

const deleteSubCategory = async ({ id: _id }) =>
    await SubCategoryModel.findOneAndDelete({ _id });

module.exports = {
    subCategories,
    subCategory,
    addSubCategory,
    editSubCategory,
    deleteSubCategory,
};
