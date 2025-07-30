const foodTypes = require("./types/food.types");
const categoryTypes = require("./types/category.types");
const userTypes = require("./types/user.types");
const basketTypes = require("./types/basket.types");
const likeTypes = require("./types/like.types");
const subCategoryTypes = require("./types/subcategory.types");
const orderTypes = require("./types/order.types");

module.exports = `#graphql
    ${foodTypes.Food}
    ${foodTypes.FoodInput}
    ${categoryTypes.Category}
    ${categoryTypes.CategoryInput}
    ${userTypes.User}
    ${userTypes.RegisterInput}
    ${userTypes.LoginInput}
    ${userTypes.RoleEnum}
    ${userTypes.AuthResult}
    ${basketTypes.Basket}
    ${basketTypes.BasketInput}
    ${likeTypes.Like}
    ${likeTypes.LikeInput}
    ${subCategoryTypes.SubCategory}
    ${subCategoryTypes.SubCategoryInput}
    ${orderTypes.Order}
    ${orderTypes.OrderInput}

    type Query {
        categories: [Category!]!
        users: [User]
        foods: [Food]
        food(id: ID!): Food
    }
   
    type Mutation {

    }
`;
