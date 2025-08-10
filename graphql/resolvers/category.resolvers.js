// * ---- Models ----
const CategoryModel = require("../../models/Category");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

const categories = async () => await CategoryModel.find({});

const category = async ({ id: _id }) => await CategoryModel.findOne({ _id });

const addCategory = async (_, args, context) => {
    const { title, icon } = args;
    await adminValidator(context.req);
    
    return await CategoryModel.create({ title, icon });
}

const editCategory = async ({ id: _id }, args, context) => {
    const { title, icon } = args;
    // TODO => validate admin token
    return await CategoryModel.findOneAndUpdate({ _id }, { title, icon });
}

const deleteCategory = async ({ id: _id }) => {
    return await CategoryModel.findOneAndDelete({ _id });
}

module.exports = {
    categories,
    category,
    deleteCategory,
    addCategory,
    editCategory
}
