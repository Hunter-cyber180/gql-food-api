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

    },
};

module.exports = RootResolvers;
