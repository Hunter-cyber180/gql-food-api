// * ---- Models ----
const FoodModel = require("../../models/Food");

// * ---- Utils ----
const { adminValidator } = require("../../utils/auth");

// Create a new food item
const addFood = async (args, req) => {
    const { name, price, inventory, image, category, subCategory } = args;
    await adminValidator(req); // Admin permission check
    
    return await FoodModel.create({ 
        name, 
        price, 
        category, 
        image, 
        inventory 
    });
}

// Update an existing food item
const editFood = async ({ id: _id }, args, context) => {
    const { name, price, inventory, image, category, subCategory } = args;
    await adminValidator(context.req); // Admin permission check
    
    return await FoodModel.findOneAndUpdate(
        { _id }, 
        { name, price, category, image, inventory }
    );
}

// Get all food items
const foods = async () => {
    return await FoodModel.find({});
}

// Get a single food item by ID
const food = async ({ id: _id }) => {
    return await FoodModel.findOne({ _id });
}

// Delete a food item
const deleteFood = async ({ id: _id }) => {
    return await FoodModel.findOneAndDelete({ _id });
}

// Export all food-related resolver functions
module.exports = {
    foods,
    food,
    addFood,
    deleteFood,
    editFood
}
