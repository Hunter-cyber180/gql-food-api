// GraphQL type definition for Basket entity
exports.Basket = `
  type Basket {
    _id: ID                
    user: User             
    food: Food             
    quantity: Int          
  }
`;

// GraphQL input type for Basket mutations
exports.BasketInput = `
  input BasketInput {
    user: String!          
    food: String!          
    quantity: Int!         
  }
`;
