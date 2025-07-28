exports.Order = `
  type Order {
    user: User
    food: Food
    quantity: Int
    price: Int
    isDeliver: Boolean
  }
`;


exports.OrderInput = `
  input OrderInput {
    user: ID
    food: ID
    quantity: Int
    price: Int
    isDeliver: Boolean
  }
`;
