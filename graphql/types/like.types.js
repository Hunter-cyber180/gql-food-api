exports.Like = `
  type Like {
    _id: ID
    user: User
    food: Food
  }
`;

exports.LikeInput = `
  input LikeInput {
    user: ID
    food: ID
  }
`;
