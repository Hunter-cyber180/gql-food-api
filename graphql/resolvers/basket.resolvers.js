// * ---- Models ----
const BasketModel = require("../../models/Basket");

const baskets = async () => await BasketModel.find({});

module.exports = {
    baskets
};
