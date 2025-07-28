exports.Food = `
  type Food {
    _id: ID
    name: String
    price: Int
    category: Category
    subCategory: SubCategory
    inventory: Int
    image: String
  }
`;

exports.FoodInput = `
  input FoodInput {
    name: String
    price: Int
    inventory: Int
    image: String
    category: ID
    subCategory: ID
  }
`;
