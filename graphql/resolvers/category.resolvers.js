// * ---- Models ----
const CategoryModel = require("../../models/Category");

categories = async () => await CategoryModel.find({});

const deleteCategory = async ({ id: _id }) => {
    return await CategoryModel.findOneAndDelete({ _id });
}

module.exports = {
    categories,
    deleteCategory
}
