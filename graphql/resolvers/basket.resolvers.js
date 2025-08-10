// * ---- Models ----
const BasketModel = require("../../models/Basket");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

const baskets = async () => await BasketModel.find({});

const basket = async ({ id: _id }) => await BasketModel.findOne({ _id });

const addBasket = async (_, args, context) => {
    const { quantity, user, food } = args;

    return await BasketModel.create({ quantity, user, food });
}

const editBasket = async ({ id: _id }, args, context) => {
    const { quantity, user, food } = args;
    await adminValidator(context.req);

    return await BasketModel.findOneAndUpdate({ _id }, { quantity, user, food });
}

const deleteBasket = async ({ id: _id }) => await BasketModel.findOneAndDelete({ _id })

module.exports = {
    baskets,
    basket,
    addBasket,
    editBasket,
    deleteBasket
};
