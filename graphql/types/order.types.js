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

exports.OrderInput = `
  input OrderInput {
    user: ID!          
    food: ID!          
    quantity: Int!     
    price: Int!        
    isDeliver: Boolean!
  }
`;
