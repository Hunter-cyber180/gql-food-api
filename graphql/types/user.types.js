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

// Input type for user registration
// Required fields for creating a new user account
exports.RegisterInput = `
  input RegisterInput {
    name: String!             // User's full name (required)
    email: String!            // User's email (required)
    phoneNumber: Int!         // User's phone number (required)
    password: String!         // User's password (required)
    role: UserRole!           // User's role (required, should probably be RoleEnum)
  }
`;


// Input type for user login
// Allows login via email OR phone number (using @oneOf directive)
exports.LoginInput = `
  input LoginInput @oneOf {
    email: String             // Email for login (optional when phoneNumber is provided)
    phoneNumber: Int         // Phone number for login (optional when email is provided)
    password: String!        // Password is always required
  }
`;

// Authentication result type
// Returned after login/registration attempts
exports.AuthResult = `
  type AuthResult {
    token: String            // JWT token for authenticated sessions
    message: String         // Status or error message
    user: User              // Authenticated user's details
  }
`;
