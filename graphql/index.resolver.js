const userResolvers = require("./resolvers/user.resolvers");
const foodResolvers = require("./resolvers/food.resolvers");
const basketResolvers = require("./resolvers/basket.resolvers");
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const subCategoryResolvers = require("./resolvers/subcategory.resolvers");
const orderResolvers = require("./resolvers/order.resolvers");

// * ---- Models ----
const FoodModel = require("../models/Food");
const CategoryModel = require("../models/Category");
const UserModel = require("../models/User");

const RootResolvers = {
    Query: {
        categories: categoryResolvers.categories,
        category: categoryResolvers.category,
        subCategories: subCategoryResolvers.subCategories,
        subCategory: subCategoryResolvers.subCategory,
        foods: foodResolvers.foods,
        food: foodResolvers.food,
        likes: likeResolvers.likes,
        like: likeResolvers.like,
        baskets: basketResolvers.baskets,
        basket: basketResolvers.basket,
        orders: orderResolvers.orders,
        order: orderResolvers.order,
    },

    Mutation: {
        addCategory: categoryResolvers.addCategory,
        editCategory: categoryResolvers.editCategory,
        deleteCategory: categoryResolvers.deleteCategory,
        addSubCategory: subCategoryResolvers.addSubCategory,
        editSubCategory: subCategoryResolvers.editSubCategory,
        deleteSubCategory: subCategoryResolvers.deleteSubCategory,
        addFood: foodResolvers.addFood,
        editFood: foodResolvers.editFood,
        deleteFood: foodResolvers.deleteFood,
        addBasket: basketResolvers.addBasket,
        editBasket: basketResolvers.editBasket,
        deleteBasket: basketResolvers.deleteBasket,
        addLike: likeResolvers.addLike,
        deleteLike: likeResolvers.deleteLike,
        addOrder: orderResolvers.addOrder,
        deleteOrder: orderResolvers.deleteOrder,
        registerUser: userResolvers.registerUser,
        loginUser: userResolvers.loginUser,
    },

    Category: {
        foods: async (parent) => {
            return FoodModel.find({ category: parent._id });
        },
    },
    SubCategory: {
        foods: async (parent) => {
            return FoodModel.find({ subCategory: parent._id });
        },
        category: async (parent) => {
            return CategoryModel.find({ _id: parent.category });
        }
    },
    Like: {
        user: async (parent) => {
            return UserModel.find({ _id: parent.user });
        }
    }
};

module.exports = RootResolvers;
