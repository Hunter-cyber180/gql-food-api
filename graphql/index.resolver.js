// Import resolver modules for different entities
const userResolvers = require("./resolvers/user.resolvers");
const foodResolvers = require("./resolvers/food.resolvers");
const basketResolvers = require("./resolvers/basket.resolvers");
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const subCategoryResolvers = require("./resolvers/subcategory.resolvers");
const orderResolvers = require("./resolvers/order.resolvers");

// Import MongoDB models
const FoodModel = require("../models/Food");
const CategoryModel = require("../models/Category");
const SubCategoryModel = require("../models/SubCategory");
const UserModel = require("../models/User");

// Root resolver object containing all GraphQL resolvers
const RootResolvers = {
    // Query resolvers - for fetching data
    Query: {
        categories: categoryResolvers.categories, // Get all categories
        category: categoryResolvers.category,     // Get single category
        subCategories: subCategoryResolvers.subCategories, // Get all subcategories
        subCategory: subCategoryResolvers.subCategory,     // Get single subcategory
        foods: foodResolvers.foods,              // Get all foods
        food: foodResolvers.food,                // Get single food
        likes: likeResolvers.likes,               // Get all likes
        like: likeResolvers.like,                 // Get single like
        baskets: basketResolvers.baskets,         // Get all baskets
        basket: basketResolvers.basket,           // Get single basket
        orders: orderResolvers.orders,            // Get all orders
        order: orderResolvers.order,              // Get single order
    },

    // Mutation resolvers - for creating/updating/deleting data
    Mutation: {
        // * Category mutations
        addCategory: categoryResolvers.addCategory,
        editCategory: categoryResolvers.editCategory,
        deleteCategory: categoryResolvers.deleteCategory,

        // * Subcategory mutations
        addSubCategory: subCategoryResolvers.addSubCategory,
        editSubCategory: subCategoryResolvers.editSubCategory,
        deleteSubCategory: subCategoryResolvers.deleteSubCategory,

        // * Food mutations
        addFood: foodResolvers.addFood,
        editFood: foodResolvers.editFood,
        deleteFood: foodResolvers.deleteFood,

        // * Basket mutations
        addBasket: basketResolvers.addBasket,
        editBasket: basketResolvers.editBasket,
        deleteBasket: basketResolvers.deleteBasket,

        // * Like mutations
        addLike: likeResolvers.addLike,
        deleteLike: likeResolvers.deleteLike,

        // * Order mutations
        addOrder: orderResolvers.addOrder,
        deleteOrder: orderResolvers.deleteOrder,

        // * User mutations
        registerUser: userResolvers.registerUser,
        loginUser: userResolvers.loginUser,
    },

    // Type resolvers - for resolving relationships between types
    Category: {
        foods: async (parent) => FoodModel.find({ category: parent._id }), // Get foods in this category
    },
    SubCategory: {
        foods: async (parent) => FoodModel.find({ subCategory: parent._id }), // Get foods in this subcategory
        category: async (parent) => CategoryModel.find({ _id: parent.category }), // Get parent category
    },
    Like: {
        user: async (parent) => UserModel.find({ _id: parent.user }), // Get user who liked
        food: async (parent) => FoodModel.find({ _id: parent.food }), // Get liked food
    },
    Order: {
        user: async (parent) => UserModel.find({ _id: parent.user }), // Get ordering user
        food: async (parent) => FoodModel.find({ _id: parent.food }), // Get ordered food
    },
    Food: {
        category: async (parent) => CategoryModel.find({ _id: parent.category }), // Get food category
        subCategory: async (parent) => SubCategoryModel.find({ _id: parent.subCategory }), // Get food subcategory
    },
    Basket: {
        user: async (parent) => UserModel.find({ _id: parent.user }), // Get basket owner
        food: async (parent) => FoodModel.find({ _id: parent.food }), // Get basket items
    },
};

module.exports = RootResolvers;
