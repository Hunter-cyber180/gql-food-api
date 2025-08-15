// GraphQL type definition for User
// Defines the structure of a User object in the GraphQL schema
exports.User = `
  type User {
    _id: ID                   // Unique identifier for the user
    name: String              // Full name of the user
    email: String             // Email address of the user
    phoneNumber: Int          // Phone number of the user (stored as integer)
    password: String          // Hashed password (should not be exposed in queries)
    role: String              // User's role (admin/user, could use RoleEnum)
  }
`;

// GraphQL enum for User Roles
// Defines possible roles a user can have
exports.RoleEnum = `
  enum RoleEnum {
    ADMIN     // Administrator role with full access
    USER      // Regular user role with standard permissions
  }
`;

exports.RegisterInput = `
  input RegisterInput {
    name: String!
    email: String!
    phoneNumber: Int!
    password: String!
    role: UserRole!
  }
`;

exports.LoginInput = `
  input LoginInput @oneOf {
    email: String
    phoneNumber: Int
    password: String!
  }
`;

exports.AuthResult = `
  type AuthResult {
    token: String
    message: String
    user: User
  }
`;
