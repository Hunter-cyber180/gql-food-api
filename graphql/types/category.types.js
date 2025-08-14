// Defines the Category type for GraphQL schema
exports.Category = `
  type Category {
    _id: ID               // Unique identifier
    title: String         // Display name of the category
    icon: String          // Icon representation (URL/classname)
    foods: [Food]         // Array of related food items
  }
`;

// Defines input type for Category mutations
exports.CategoryInput = `
  input CategoryInput {
    title: String         // Optional updated title
    icon: String          // Optional updated icon
  }
`;
