exports.SubCategory = `
  type SubCategory {
    _id: ID
    category: Category
    title: String
    icon: String
    foods: [Food]
  }
`;

exports.SubCategoryInput = `
  input SubCategoryInput {
    category: ID
    title: String
    icon: String
    foods: [ID]
  }
`;
