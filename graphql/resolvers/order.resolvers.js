// * ---- Models ----
const OrderModel = require("../../models/Order");

// Get all orders
const orders = async () => await OrderModel.find({});

// Get a single order by ID
const order = async ({ id: _id }) => await OrderModel.findOne({ _id });

// Create a new order
const addOrder = async (_, args, context) => {
    const { quantity, user, food, price, isDeliver } = args;
    return await OrderModel.create({ 
        quantity, 
        user, 
        food, 
        price, 
        isDeliver 
    });
}

// Delete an order
const deleteOrder = async ({ id: _id }) => {
    return await OrderModel.findOneAndDelete({ _id });
}

// Export all order-related resolver functions
module.exports = {
    orders,
    order,
    addOrder,
    deleteOrder
};
