// Defines the Like type representing user-food favorites
exports.Like = `
  type Like {
    _id: ID         // Unique identifier for the like record
    user: User      // Reference to the user who liked
    food: Food      // Reference to the liked food item
  }
`;

// Input type for creating likes (user-food relationships)
exports.LikeInput = `
  input LikeInput {
    user: ID        // ID of the user (required when creating)
    food: ID        // ID of the food item (required when creating)
  }
`;
