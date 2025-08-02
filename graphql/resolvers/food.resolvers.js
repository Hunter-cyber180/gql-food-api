// * ---- Models ----
const FoodModel = require("../../models/Food");

const foods = async () => {
    return await FoodModel.find({});
}

module.exports = {
    foods
}
