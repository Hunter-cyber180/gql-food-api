// * ---- Models ----
const CategoryModel = require("../../models/Category");

categories = async () => await CategoryModel.find({});



module.exports = {
    categories
}
