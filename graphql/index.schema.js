const foodTypes = require("./types/food.types");
const categoryTypes = require("./types/category.types");
const userTypes = require("./types/user.types");
const basketTypes = require("./types/basket.types");
const likeTypes = require("./types/like.types");
const subCategoryTypes = require("./types/subcategory.types");
const orderTypes = require("./types/order.types");

module.exports = `#graphql
    ${foodTypes.Food}
    

    type Query {

    }
   
    type Mutation {

    }
`;
