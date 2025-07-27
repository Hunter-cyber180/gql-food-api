exports.SubCategory = `
  type Category {
    _id: ID
    category: Category
    title: String
    icon: String
    foods: [Food]
  }
`;
