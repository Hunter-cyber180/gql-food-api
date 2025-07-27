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

exports.AuthResult = `
  type AuthResult {
    token: String
    message: String
    user: User
  }
`;
