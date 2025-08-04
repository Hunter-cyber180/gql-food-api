// * ---- Models ----
const BasketModel = require("../../models/Basket");

const baskets = async () => await BasketModel.find({});

const basket = async ({ id: _id }) => await BasketModel.findOne({ _id });

module.exports = {
    baskets,
    basket
};
