// * ---- Models ----
const FoodModel = require("../../models/Food");

const addFood = async (args, req) => {
    const { name, price, inventory, image, category, subCategory } = args;
    // TODO => validate admin token
    return await FoodModel.create({ name, price, category, image, inventory });
}

const foods = async () => {
    return await FoodModel.find({});
}

const food = async ({ id: _id }) => {
    return await FoodModel.findOne({ _id });
}

module.exports = {
    foods,
    food,
    addFood
}
