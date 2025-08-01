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
        category(id: ID!): Category
        users: [User]
        user(id: ID!): User
        foods: [Food!]!
        food(id: ID!): Food
        orders: [Order!]!
        order(id: ID!): Order
        subCategories: [SubCategory!]!
        subCategory(id: ID!): SubCategory
        likes: [Like!]!
        like(id: ID!): Like
        basket(id: ID!): Basket
    }
   
    type Mutation {
        addFood(input: FoodInput!): Food
        editFood(input: FoodInput!): Food
        deleteFood(id: ID!): Food
        addCategory(input: CategoryInput!): Category
        editCategory(input: CategoryInput!): Category
        deleteCategory(id: ID!): Category
        addSubCategory(input: SubCategoryInput!): SubCategory
        editSubCategory(input: SubCategoryInput!): SubCategory
        deleteSubCategory(id: ID!): SubCategory
        register(input: RegisterInput!): AuthResult
        login(input: LoginInput!): AuthResult
        addOrder(input: OrderInput!): Order
        deleteOrder(id: ID!): Order
        deliverOrder(id: ID!): Order
        addLike(input: LikeInput!): Like
        deleteLike(id: ID!): Like
        addBasket(input: BasketInput!): Basket
        editBasket(input: BasketInput!): Basket
        deleteBasket(id: ID!): Basket
    }
`;
