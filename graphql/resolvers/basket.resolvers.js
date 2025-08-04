// * ---- Models ----
const BasketModel = require("../../models/Basket");

const baskets = async () => await BasketModel.find({});

const basket = async ({ id: _id }) => await BasketModel.findOne({ _id });

const addBasket = async (_, args, context) => {
    const { quantity, user, food } = args;
    // TODO => validate admin token
    return await BasketModel.create({ quantity, user, food });
}

const editBasket = async ({ id: _id }, args, context) => {
    const { quantity, user, food } = args;
    // TODO => validate admin token
    return await BasketModel.findOneAndUpdate({ _id }, { quantity, user, food });
}

module.exports = {
    baskets,
    basket,
    addBasket,
    editBasket
};
