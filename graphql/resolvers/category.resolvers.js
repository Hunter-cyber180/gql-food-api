// * ---- Models ----
const CategoryModel = require("../../models/Category");

const categories = async () => await CategoryModel.find({});

const addCategory = async (_, args, context) => {
    const { title, icon } = args;
    // TODO => validate admin token
    return await CategoryModel.create({ title, icon });
}

const editCategory = async ({id: _id}, args, context) => {
    const { title, icon } = args;
    // TODO => validate admin token
    return await CategoryModel.findOneAndUpdate({_id}, { title, icon });
}

const deleteCategory = async ({ id: _id }) => {
    return await CategoryModel.findOneAndDelete({ _id });
}

module.exports = {
    categories,
    deleteCategory,
    addCategory,
    editCategory
}
