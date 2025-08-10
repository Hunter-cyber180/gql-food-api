// * ---- Models ----
const FoodModel = require("../../models/Food");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

const addFood = async (args, req) => {
    const { name, price, inventory, image, category, subCategory } = args;
    await adminValidator(context.req);

    return await FoodModel.create({ name, price, category, image, inventory });
}

const editFood = async ({ id: _id }, args, context) => {
    const { name, price, inventory, image, category, subCategory } = args;
    // TODO => validate admin token
    return await FoodModel.findOneAndUpdate({ _id }, { name, price, category, image, inventory });
}

const foods = async () => {
    return await FoodModel.find({});
}

const food = async ({ id: _id }) => {
    return await FoodModel.findOne({ _id });
}

const deleteFood = async ({ id: _id }) => {
    return await FoodModel.findOneAndDelete({ _id });
}

module.exports = {
    foods,
    food,
    addFood,
    deleteFood,
    editFood
}
