// * ---- Models ----
const FoodModel = require("../../models/Food");

const foods = async () => {
    return await FoodModel.find({});
}

const food = async ({ id: _id }) => {
    return await FoodModel.findOne({ _id });
}

module.exports = {
    foods,
    food
}
