// * ---- Models ----
const CategoryModel = require("../../models/Category");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

// Get all categories
const categories = async () => await CategoryModel.find({});

// Get a single category by ID
const category = async ({ id: _id }) => await CategoryModel.findOne({ _id });

// Add a new category
const addCategory = async (_, args, context) => {
    const { title, icon } = args;
    await adminValidator(context.req); // Admin permission check
    return await CategoryModel.create({ title, icon });
}

// Update an existing category
const editCategory = async ({ id: _id }, args, context) => {
    const { title, icon } = args;
    await adminValidator(context.req); // Admin permission check
    return await CategoryModel.findOneAndUpdate({ _id }, { title, icon });
}

// Delete a category
const deleteCategory = async ({ id: _id }) => {
    return await CategoryModel.findOneAndDelete({ _id });
}

// Export all category-related resolver functions
module.exports = {
    categories,
    category,
    deleteCategory,
    addCategory,
    editCategory
}
