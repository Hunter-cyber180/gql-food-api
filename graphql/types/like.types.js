// GraphQL type definition for tracking user likes on food items
// Contains references to both User and Food types
exports.Like = `
  type Like {
    _id: ID   
    user: User
    food: Food
  }
`;

// Input type for creating new likes
// Uses ID references for both user and food
exports.LikeInput = `
  input LikeInput {
    user: ID   
    food: ID  
  }
`;
