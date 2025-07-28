exports.SubCategory = `
  type SubCategory {
    _id: ID
    category: Category
    title: String
    icon: String
    foods: [Food]
  }
`;
