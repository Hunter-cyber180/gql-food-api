// Basket type definition - represents a shopping basket/item
exports.Basket = `
  type Basket {
    _id: ID                // Unique identifier
    user: User             // User who owns the basket
    food: Food             // Food item in basket  
    quantity: Int          // Quantity of the food item
  }
`;

// Basket input type - for creating/updating basket items
exports.BasketInput = `
  input BasketInput {
    user: String!          // Required user ID reference
    food: String!          // Required food ID reference
    quantity: Int!         // Required quantity (must be positive)
  }
`;
