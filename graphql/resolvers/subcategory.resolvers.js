// * ---- Models ----
const SubCategoryModel = require("../../models/SubCategory");

subCategories = async () => await SubCategoryModel.find({});

module.exports = {
    subCategories,
};
