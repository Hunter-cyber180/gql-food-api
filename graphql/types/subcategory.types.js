// GraphQL type definition for SubCategory with parent category relationship
// Includes fields for identification and associated food items
exports.SubCategory = `
  type SubCategory {
    _id: ID             
    category: Category   
    title: String        
    icon: String        
    foods: [Food]      
  }
`;

// Input type for SubCategory create/update operations
// Uses ID reference for parent category and food items
exports.SubCategoryInput = `
  input SubCategoryInput {
    category: ID    
    title: String  
    icon: String  
    foods: [ID]     
  }
`;
