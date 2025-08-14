// * ---- Models ----
const SubCategoryModel = require("../../models/SubCategory");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

// Fetch all subcategories
const subCategories = async () => await SubCategoryModel.find({});

// Get a single subcategory by ID
const subCategory = async ({ id: _id }) => await SubCategoryModel.findOne({ _id });

// Create a new subcategory (Admin only)
const addSubCategory = async (_, args, context) => {
    const { title, icon, category } = args;
    await adminValidator(context.req); // Verify admin privileges
    
    return await SubCategoryModel.create({ 
        title, 
        icon, 
        category 
    });
}

// Update an existing subcategory (Admin only)
const editSubCategory = async ({ id: _id }, args, context) => {
    const { title, icon, category } = args;
    await adminValidator(context.req); // Verify admin privileges
    
    return await SubCategoryModel.findOneAndUpdate(
        { _id },
        { title, icon, category },
        { new: true } // Return the updated document
    );
}

// Delete a subcategory (Admin only)
const deleteSubCategory = async ({ id: _id }) =>
    await SubCategoryModel.findOneAndDelete({ _id });

// Export all subcategory resolver functions
module.exports = {
    subCategories,
    subCategory,
    addSubCategory,
    editSubCategory,
    deleteSubCategory,
};
