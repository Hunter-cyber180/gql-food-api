// GraphQL type definition for Food with all fields and related types
exports.Food = `
  type Food {
    _id: ID                 
    name: String            
    price: Int              
    category: Category      
    subCategory: SubCategory 
    inventory: Int          
    image: String           
  }
`;

// Input type for Food create/update operations
// Uses IDs for category/subCategory references instead of full objects
exports.FoodInput = `
  input FoodInput {
    name: String                
    price: Int                 
    inventory: Int             
    image: String              
    category: ID               
    subCategory: ID            
  }
`;
