const userResolvers = require("./resolvers/user.resolvers");
const foodResolvers = require("./resolvers/food.resolvers");
const basketResolvers = require("./resolvers/basket.resolvers");
const likeResolvers = require("./resolvers/like.resolvers");
const categoryResolvers = require("./resolvers/category.resolvers");
const subCategoryResolvers = require("./resolvers/subcategory.resolvers");
const orderResolvers = require("./resolvers/order.resolvers");

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
    },
};

module.exports = RootResolvers;
