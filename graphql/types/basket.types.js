exports.Basket = `
  type Basket {
    _id: ID
    user: User
    food: Food
    quantity: Int
  }
`;

exports.BasketInput = `
  input BasketInput {
    user: String!
    food: String!
    quantity: Int!
  }
`;
