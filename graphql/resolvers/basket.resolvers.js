// * ---- Models ----
const BasketModel = require("../../models/Basket");

// Get all baskets
const baskets = async () => await BasketModel.find({});

// Get a single basket by ID
const basket = async ({ id: _id }) => await BasketModel.findOne({ _id });

// Add a new basket
const addBasket = async (_, args, context) => {
    const { quantity, user, food } = args;
    return await BasketModel.create({ quantity, user, food });
}

// Update an existing basket
const editBasket = async ({ id: _id }, args, context) => {
    const { quantity, user, food } = args;
    return await BasketModel.findOneAndUpdate({ _id }, { quantity, user, food });
}

// Delete a basket
const deleteBasket = async ({ id: _id }) => await BasketModel.findOneAndDelete({ _id })

// Export all basket-related resolver functions
module.exports = {
    baskets,
    basket,
    addBasket,
    editBasket,
    deleteBasket
};
