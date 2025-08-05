// * ---- Models ----
const OrderModel = require("../../models/Order");

const orders = async () => await OrderModel.find({});

const order = async ({ id: _id }) => await OrderModel.findOne({ _id });

const addOrder = async (_, args, context) => {
    const { quantity, user, food, price, isDeliver } = args;
    // TODO => validate admin token
    return await OrderModel.create({ quantity, user, food, price, isDeliver });
}

module.exports = {
    orders,
    order,
    addOrder
};
