const PostType = `
type Post {
  id: Int!
  tags: [String]
  title: String
  text: String
  views: Int
  author: Author
}
`;

export default PostType;