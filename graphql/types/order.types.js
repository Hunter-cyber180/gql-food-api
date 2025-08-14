// Defines an Order type for food purchases/deliveries
exports.Order = `
  type Order {
    _id: ID                // Unique order identifier (missing in current definition - recommended to add)
    user: User             // Customer who placed the order
    food: Food             // Ordered food item
    quantity: Int          // Number of items ordered
    price: Int             // Price at time of ordering (for historical accuracy)
    isDeliver: Boolean     // Delivery flag (true for delivery, false for pickup)
    createdAt: Date       // Consider adding for order timestamp
    status: String        // Consider adding for order lifecycle tracking
  }
`;

// Input type for order creation/updates
exports.OrderInput = `
  input OrderInput {
    user: ID!             // Required user reference
    food: ID!             // Required food reference
    quantity: Int!        // Required positive quantity
    price: Int!           // Required price (should match food price)
    isDeliver: Boolean!   // Required delivery flag
  }
`;
