// GraphQL Type Definition for Food items
exports.Food = `
  type Food {
    _id: ID                     // Unique identifier
    name: String                // Display name of the food item
    price: Int                  // Price in base currency units
    category: Category          // Main category association
    subCategory: SubCategory    // Sub-category classification  
    inventory: Int              // Available stock quantity
    image: String               // URL/path to food image
  }
`;

// Input type for creating/updating Food items
exports.FoodInput = `
  input FoodInput {
    name: String                // Food name (optional for updates)
    price: Int                 // Price value (optional)
    inventory: Int             // Stock quantity (optional)
    image: String              // Image reference (optional)
    category: ID               // Category ID reference (optional)
    subCategory: ID            // SubCategory ID reference (optional)
  }
`;
