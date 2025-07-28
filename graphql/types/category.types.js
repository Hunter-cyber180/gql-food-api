exports.Category = `
  type Category {
    _id: ID
    title: String
    icon: String
    foods: [Food]
  }
`;

exports.CategoryInput = `
  input CategoryInput {
    title: String
    icon: String
    foods: [ID]
  }
`;
