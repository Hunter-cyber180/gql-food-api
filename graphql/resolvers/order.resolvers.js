// * ---- Models ----
const OrderModel = require("../../models/Order");

const orders = async () => await OrderModel.find({});

const order = async ({ id: _id }) => await OrderModel.findOne({ _id });

module.exports = {
    orders,
    order
};
