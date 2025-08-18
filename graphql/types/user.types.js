// GraphQL type definition for User
// Defines the structure of a User object in the GraphQL schema
exports.User = `
  type User {
    _id: ID                 
    name: String          
    email: String           
    phoneNumber: Int          
    password: String    
    role: String            
  }
`;

// GraphQL enum for User Roles
// Defines possible roles a user can have
exports.RoleEnum = `
  enum RoleEnum {
    ADMIN  
    USER  
  }
`;

// Input type for user registration
// Required fields for creating a new user account
exports.RegisterInput = `
  input RegisterInput {
    name: String!        
    email: String!    
    phoneNumber: Int!   
    password: String!    
    role: RoleEnum!     
  }
`;


// Input type for user login
exports.LoginInput = `
  input LoginInput @oneOf {
    email: String         
    phoneNumber: Int   
    password: String
  }
`;

exports.AuthResult = `
  type AuthResult {
    token: String  
    message: String
    user: User     
  }
`;
