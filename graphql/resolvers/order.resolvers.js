// * ---- Models ----
const OrderModel = require("../../models/Order");

const orders = async () => await OrderModel.find({});

module.exports = {
    orders,
};
