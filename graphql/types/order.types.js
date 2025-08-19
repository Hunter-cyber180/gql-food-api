// GraphQL type definition for Order with all order details
// Includes user, food item, quantity, pricing, delivery and status information
exports.Order = `
  type Order {
    _id: ID           
    user: User          
    food: Food          
    quantity: Int       
    price: Int          
    isDeliver: Boolean     
    status: String     
  }
`;

// Input type for creating/updating orders
// Uses required (!) ID references for user and food
// All essential order details are required fields
exports.OrderInput = `
  input OrderInput {
    user: ID!          
    food: ID!          
    quantity: Int!     
    price: Int!        
    isDeliver: Boolean!
  }
`;
