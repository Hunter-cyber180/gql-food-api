exports.User = `
  type Category {
    _id: ID
    name: String
    email: String
    phoneNumber: Int
    password: String
    role: String
  }
`;

exports.RoleEnum = `
  enum RoleEnum {
    ADMIN
    USER
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
