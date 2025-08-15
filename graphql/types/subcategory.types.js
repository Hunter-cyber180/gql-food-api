// GraphQL type definition for SubCategory
// Defines the structure of a SubCategory object in the GraphQL schema
exports.SubCategory = `
  type SubCategory {
    _id: ID                     // Unique identifier for the subcategory
    category: Category           // Reference to the parent Category
    title: String               // Name/title of the subcategory
    icon: String                // Icon representing the subcategory
    foods: [Food]               // Array of Food items belonging to this subcategory
  }
`;

// GraphQL input type for SubCategory
// Used for creating or updating SubCategory entries
exports.SubCategoryInput = `
  input SubCategoryInput {
    category: ID                // ID reference to the parent Category
    title: String              // Name/title of the subcategory
    icon: String               // Icon representing the subcategory
    foods: [ID]                // Array of Food IDs belonging to this subcategory
  }
`;
