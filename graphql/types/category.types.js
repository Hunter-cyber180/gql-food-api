// GraphQL type definition for Category with its fields and relationships
exports.Category = `
  type Category {
    _id: ID      
    title: String
    icon: String 
    foods: [Food]
  }
`;

// Input type for Category mutations (create/update operations)
exports.CategoryInput = `
  input CategoryInput {
    title: String
    icon: String 
  }
`;
