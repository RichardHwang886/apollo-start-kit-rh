const RootQueryType = `
# the schema allows the following two queries:
type RootQuery {
  author(firstName: String, lastName: String): Author
  fortuneCookie: String
}
`;
export default RootQueryType;